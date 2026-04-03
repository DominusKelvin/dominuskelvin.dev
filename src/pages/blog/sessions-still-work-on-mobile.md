---
layout: '../../layouts/BlogPost.astro'
title: 'Sessions Still Work on Mobile. We Just Forgot.'
description: 'JWT became the default answer for mobile auth, but mobile never invalidated session-based architecture. It just changed the transport and pushed too much responsibility into the client.'
pubDate: 'April 3, 2026'
heroImage: /covers/sessions-still-work-on-mobile.png
---

If you ask a newer developer about authentication in mobile apps, there is a good chance they know JWT before they know sessions. Usually that is not because they carefully evaluated the tradeoffs or because JWT is always the best fit. It is simply what the ecosystem taught them first.

They watched a few tutorials, saw enough diagrams with access tokens and refresh tokens, and absorbed a quiet assumption:

if it is a mobile app, it must use JWT.

That assumption deserves to be challenged. Sessions and cookies are older than JWT, yes, but the more important point is that they are still battle-tested and deeply relevant.

JWT is not fake. It is not useless. [RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519) defines a real standard for representing claims between parties. But a standard being real is not the same thing as it being the right default for every login flow.

The real problem is that the industry framed mobile auth as a transport problem before it framed it as a state-ownership problem. People usually ask, "cookie or token?" I think the more useful question is this:

**who should own the state of the user journey?**

Because once you ask that question, a lot of mobile complexity starts looking self-inflicted.

## JWT became the default before most people learned the simpler model

Somewhere along the line, "mobile app" became shorthand for "API client."
Then "API client" became shorthand for "bearer token."
Then "bearer token" became shorthand for "JWT."

That is how a lot of developers inherited the default without ever really meeting the alternative.

Sessions started sounding old, cookies started sounding browser-only, and JWT started sounding modern. But "modern" is doing too much work in that sentence.

There are real reasons JWT is useful. If you need portable claims, third-party API access, delegated authorization, federation, or intentionally stateless boundaries between systems, JWT can absolutely earn its place.

It is also worth noticing that the native-app standards story is not especially simple either. [RFC 8252](https://datatracker.ietf.org/doc/rfc8252/) explicitly treats native apps as public clients and says statically included shared secrets should not be treated as confidential secrets. That does not make native OAuth wrong. It just means the usual "mobile means tokens, therefore the model is simpler" story leaves out a lot of the actual constraints.

What I object to is the automatic leap from "this is a mobile app" to "therefore the client must own auth state."

The trouble starts when too much responsibility moves into the client, because then you buy a long list of chores:

- refresh token choreography
- local persistence logic
- state recovery after app restarts
- stale claims after role or permission changes
- logout and revocation complexity
- anonymous-to-authenticated merge logic
- more security-sensitive logic living on the device than necessary

Many of these problems are not really caused by mobile itself. They are caused by where we decided to put the state.

![Session vs JWT comparison](/post-images/how-to-roll-your-own-auth-session-vs-jwt.png)

## Sessions are not a browser relic

People often talk about sessions as though they are just cookies. They are not. A session is the server remembering something meaningful about a user agent across requests, while a cookie is only one way to carry the session identifier. That distinction matters.

On the web, the usual pattern is straightforward:

1. the user logs in
2. the server creates or updates a session
3. the browser stores a cookie
4. the browser sends that cookie back on later requests
5. the server resolves the cookie to server-side state

The transport is cookie-based, but the architecture is server-owned state.

That architecture does not stop being valid because the client is now a native app instead of a browser tab.

What changes on mobile is mostly the transport and the ergonomics around it.

If your mobile HTTP client can preserve a cookie jar, you can often keep the same basic session model.
If it cannot, the same idea still works with an opaque session identifier stored securely on the device and sent explicitly with each request.
In Sails, the default session cookie is `sails.sid`.

Either way, the important idea survives:

**the client carries a reference; the server owns the meaning.**

That is why I like how [Sails explains sessions](https://sailsjs.com/documentation/concepts/sessions). The docs define a user agent broadly enough to include a browser or a native application, and then explain sessions as the mechanism for retaining identity-related state between requests.

They also say that even for non-browser clients, the built-in session mechanism is generally less brittle and lower-risk than rolling your own auth scheme. That strikes me as a much more grounded way to think about the problem.

## What this looks like on mobile in practice

To make this concrete, there are two sane shapes here:

1. let the mobile client participate in normal cookie-backed sessions
2. use an explicit opaque session handle while keeping the state on the server

The important point is that neither option forces JWT to be the default.

### Example 1: Native app using a normal session cookie

This is the closest thing to ordinary web sessions.

The mobile app calls your login endpoint.
Your server replies with `Set-Cookie: sails.sid=...`.
The client keeps the cookie and sends it back on later requests.
The server resolves that cookie to session state and current user data.

Apple already exposes the primitives for this through [HTTPCookieStorage](https://developer.apple.com/documentation/foundation/httpcookiestorage) and [`URLSessionConfiguration.httpShouldSetCookies`](https://developer.apple.com/documentation/foundation/urlsessionconfiguration/httpshouldsetcookies). On Android and Java, the platform has a built-in [`CookieManager`](https://developer.android.com/reference/java/net/CookieManager) with a default cookie store as well.

In other words, native apps are not magically incapable of participating in cookie-based sessions. The browser automates more of it, yes. But the underlying mechanism still exists.

Here is the iOS shape in plain Swift:

```swift
let config = URLSessionConfiguration.default
config.httpShouldSetCookies = true
config.httpCookieStorage = HTTPCookieStorage.shared

let session = URLSession(configuration: config)

var loginRequest = URLRequest(url: URL(string: "https://api.example.com/login")!)
loginRequest.httpMethod = "POST"
loginRequest.setValue("application/json", forHTTPHeaderField: "Content-Type")
loginRequest.httpBody = """
{"email":"ada@example.com","password":"correct horse battery staple"}
""".data(using: .utf8)

let (_, loginResponse) = try await session.data(for: loginRequest)

// Later, the same URLSession sends the stored cookie automatically.
let (meData, _) = try await session.data(from: URL(string: "https://api.example.com/me")!)
```

The backend stays boring:

```js
// api/controllers/auth/login.js
module.exports = {
  inputs: {
    email: { type: 'string', required: true, isEmail: true },
    password: { type: 'string', required: true },
  },

  fn: async function ({ email, password }) {
    const user = await User.findOne({ email: email.toLowerCase() })

    await sails.helpers.passwords.checkPassword(password, user.password)

    this.req.session.userId = user.id
    this.req.session.currentTeamId = user.defaultTeamId

    return { ok: true }
  },
}
```

Then `/me`, `/wallet`, `/kyc`, or `/transfers` can all resolve the current user from `req.session.userId`.

That is a real mobile auth story. It is not trendy, but it is coherent.

### Example 2: Opaque mobile session handle instead of cookie transport

Maybe your mobile stack does not want to deal with cookies. That still does not force you into JWT.

You can issue an opaque session handle, store it securely on-device, and keep the actual session state on the server.

That looks more like this:

```js
// api/controllers/mobile/create-session.js
module.exports = {
  inputs: {
    email: { type: 'string', required: true, isEmail: true },
    password: { type: 'string', required: true },
  },

  fn: async function ({ email, password }) {
    const user = await User.findOne({ email: email.toLowerCase() })

    await sails.helpers.passwords.checkPassword(password, user.password)

    const mobileSession = await MobileSession.create({
      id: await sails.helpers.strings.random('url-friendly', 48),
      user: user.id,
      currentStep: 'kyc:start',
      returnTo: '/wallet/fund',
      otpAttempts: 0,
      expiresAt: Date.now() + 24 * 60 * 60 * 1000,
    }).fetch()

    return {
      sessionHandle: mobileSession.id,
      expiresAt: mobileSession.expiresAt,
    }
  },
}
```

Then the mobile client keeps only the opaque handle:

```ts
const { sessionHandle } = await api.post('/mobile/create-session', {
  email,
  password,
})

await secureStore.set('sessionHandle', sessionHandle)

const currentSession = await secureStore.get('sessionHandle')

await api.get('/mobile/me', {
  headers: {
    'X-Session-Id': currentSession,
  },
})
```

And the server still owns the meaning:

```js
// api/policies/has-mobile-session.js
module.exports = async function (req, res, proceed) {
  const sessionHandle = req.get('X-Session-Id')
  if (!sessionHandle) return res.unauthorized()

  const mobileSession = await MobileSession.findOne({ id: sessionHandle })
  if (!mobileSession || mobileSession.expiresAt < Date.now()) {
    return res.unauthorized()
  }

  req.mobileSession = mobileSession
  req.me = await User.findOne({ id: mobileSession.user })

  return proceed()
}
```

That is still a session, just not one transported by cookies. Because it is still server-owned, you can revoke it, expire it, mutate its flow state, and inspect it centrally without pretending a signed blob on the device is your source of truth.

### Example 3: Resume a deep-link or onboarding flow after interruption

Imagine a fintech app flow:

1. user taps a deep link to fund a wallet
2. they are not logged in
3. they log in
4. they still need KYC before funding
5. the app gets backgrounded halfway through OTP verification

If the server owns the flow session, the client does not have to reconstruct this journey from scattered local state. The server can simply keep:

- `returnTo: '/wallet/fund'`
- `currentStep: 'kyc:verify-bvn'`
- `otpAttempts: 1`
- `walletId: 'wal_123'`

Then when the app comes back, the client asks a boring question like `GET /mobile/session-state`, and the server answers with the current step. That is the real win here: less orchestration on the client, fewer moving parts, and a much thinner path back to continuity.

## What mobile apps actually need is continuity

This is the part that gets lost when the conversation becomes "JWT versus cookies."

Most mobile apps do not just need identity.
They need continuity.

They need to remember what the user was doing when:

- the app is backgrounded
- the app is killed
- a deep link interrupts a flow
- login happens halfway through a journey
- onboarding is incomplete
- OTP verification is in progress
- a retry or cooldown window is active

And that continuity is often short-lived, sensitive, and workflow-specific.

It is not quite permanent enough to belong in your main database as a full product record.
It is often too fragile to live only in memory on the device.
And it is usually too important to scatter across five client-side abstractions and hope the app can stitch everything back together after a restart.

This is where sessions shine. A session lets the server own the messy middle of a journey, not just the question of who the user is, but also things like:

- where should they return after login?
- which onboarding step are they on?
- how many OTP attempts are left?
- which KYC flow is active?
- which tenant, workspace, or team context is current?

That is the underrated value of session-based design on mobile. It reduces the amount of orchestration the app has to do and gives the server a coherent place to hold the journey together.

## Sails is a good example of the calmer model

One of the reasons I keep talking about [Sails](https://sailsjs.com/) and [The Boring JavaScript Stack](https://docs.sailscasts.com/boring-stack/) is that the model stays legible.

The core idea is not exotic:

- authenticate the user
- store their identity in the session
- load the current user from the session on later requests
- let the server make authorization and flow decisions from current truth

In Boring Stack style auth, that usually comes down to `req.session.userId`.

```js
// api/controllers/auth/login.js
module.exports = {
  inputs: {
    email: { type: 'string', required: true, isEmail: true },
    password: { type: 'string', required: true },
  },

  fn: async function ({ email, password }) {
    const user = await User.findOne({ email: email.toLowerCase() })

    await sails.helpers.passwords.checkPassword(password, user.password)

    this.req.session.userId = user.id
    this.req.session.returnTo = '/onboarding/kyc'
    this.req.session.otpAttempts = 0

    return { ok: true }
  },
}
```

That one move gives the server a trusted place to hold current flow state.

On the next request, the server can load the session, resolve the user, and decide what the mobile client should render next.

No stale permission claims baked into a long-lived token.

No heroic state reconstruction after every interruption.
No pretending the phone should be the system of record for a sensitive, multi-step identity journey.

Sails also makes the scaling objection less dramatic than people often assume.
Its session docs explicitly support [Redis-backed session storage](https://sailsjs.com/documentation/concepts/sessions), including multi-instance setups behind a load balancer.

So no, session-based auth is not inherently a single-server toy.
It just means state lives in a shared server-side place instead of being pushed into every client and every token.

That matters on mobile because mobile apps are full of interrupted flows.
And interrupted flows are exactly where server-owned state earns its keep.

## This is where JWT starts costing more than people admit

Again, I am not anti-JWT. I am against defaulting to JWT before you have earned the complexity, because once JWT becomes the default answer to mobile auth, teams often start designing around the token instead of around the flow.

The token becomes the center of gravity, and every problem starts getting narrated in token terms:

- how do we refresh it?
- where do we store it?
- how do we sync it?
- how do we revoke it?
- when do we rotate it?
- what happens if permissions changed after it was issued?
- what happens if the user started onboarding anonymously and finished authenticated?

That is a lot of complexity to accept before asking whether the server could have just owned the state in the first place.

A token can tell you something that was true when it was minted.
A session lets the server evaluate what is true now.

That difference matters more than people admit. If an account is locked, if a permission changed, if an OTP flow timed out, if a suspicious risk flag was raised, or if the user must resume on a different step, server-owned state is often the more honest place for that truth to live.

And yes, a mobile app can still be snappy while the server owns that truth. The question is not whether the phone is allowed to keep local UI state. Of course it is. The real question is whether the phone should also become the primary coordinator of identity, security-sensitive flow state, and recovery logic. In most cases, I do not think it should.

## This is not nostalgia, and it is not anti-mobile

It is important to draw the boundary correctly.

I am not saying every mobile app should use sessions.
I am saying sessions deserve to be in the conversation far more often than they currently are.

There are situations where JWT or other token-based systems make perfect sense:

- third-party API ecosystems
- delegated access across organizational boundaries
- service-to-service identity assertions
- offline-first apps that must operate meaningfully without the server
- systems where portable claims are genuinely useful

Those are real cases. But a lot of ordinary product teams are not building that world. They are building an app that mostly talks to their own backend and needs login, onboarding, step recovery, permissions, logout, revocation, and current truth. That is exactly the territory where sessions still look very strong.

## The real question is who owns state

I think "cookies versus tokens" is the wrong debate because it stays at the transport layer. The deeper architecture question is:

**who owns the state that holds the user journey together?**

If the answer is "the client," you will keep building layers to recover continuity.
You will invent local persistence rules, refresh rules, merge rules, recovery rules, and expiration rules, and then call the resulting system modern because the nouns sound current.

If the answer is "the server," a lot of the architecture gets boring again, and that is good news. Boring is exactly what you want for authentication.

[OWASP's session guidance](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) still makes the core point clearly: the session identifier on the client should be meaningless, and the real business meaning should live on the server. [MDN's cookie guidance](https://developer.mozilla.org/en-US/docs/Web/Security/Practical_implementation_guides/Cookies) still recommends `Secure`, `HttpOnly`, and sensible cookie scoping for session identifiers. None of this is glamorous. That is part of why it is trustworthy.

If you do go with explicit mobile session handles instead of cookies, store them like credentials, not like random app preferences. Apple documents [Keychain Services](https://developer.apple.com/documentation/security/keychain-services?changes=_3_2) as the secure place to store small secrets on iOS. Android's [Keystore system](https://developer.android.com/privacy-and-security/keystore) exists to protect key material, and Android's storage guidance says sensitive app data should live in internal app storage rather than shared storage.

So yes, mobile changed the transport story, but it did not invalidate the session idea. What it really did was remove the browser automation and tempt us to put too much responsibility into the client. That is the mistake I am arguing against here. Sessions still work on mobile; we just stopped talking about them as if they do.

## Further reading

- [Sails sessions](https://sailsjs.com/documentation/concepts/sessions)
- [RFC 8252: OAuth 2.0 for Native Apps](https://datatracker.ietf.org/doc/rfc8252/)
- [OWASP Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html)
- [Apple Keychain Services](https://developer.apple.com/documentation/security/keychain-services?changes=_3_2)
- [Apple HTTPCookieStorage](https://developer.apple.com/documentation/foundation/httpcookiestorage)
- [Android Keystore system](https://developer.android.com/privacy-and-security/keystore)
- [Android CookieManager](https://developer.android.com/reference/java/net/CookieManager)
