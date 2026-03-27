---
layout: '../../layouts/BlogPost.astro'
title: 'The Conspiracy of Single-Page Applications, Part 1: Auth-as-a-Service And JWT'
description: 'Auth-as-a-service and JWT became defaults because SPA architecture made the browser client behave like a separate application. Most web apps do not need that theater.'
pubDate: 'March 27, 2026'
heroImage: /covers/spa-conspiracy-auth-as-a-service-and-jwt.png
---

When the browser client started pretending it was a separate application, authentication got weird.

A normal web app login flow used to be a fairly boring thing.
The user submitted a form.
The server checked the password.
The server created a session.
The browser carried a cookie.
The server decided what the user could see.

Then the SPA worldview took over, and suddenly the browser client was treated as if it were not your own frontend talking to your own backend, but some independent client that needed a fully decoupled identity story.

That is where a lot of the JWT obsession came from.
That is where a lot of the auth-as-a-service dependency came from too.

The browser client talking to its own server got reframed as if it were a mobile app, a public API consumer, and a third-party integrator all at once.

So ordinary login was no longer ordinary login.
It became token issuance.
Refresh-token choreography.
Browser-storage debates.
Provider lock-in.
Magic SDKs.
A new bill.
A wider attack surface.

And the strangest part is that the standards involved were often solving a different problem than the one most teams actually had.

I already wrote the calmer technical companion in [How To Roll Your Own Auth](/blog/how-to-roll-your-own-auth).
This piece is the broader argument.
This is the one about how we got here.

## Authentication and authorization are different jobs

One reason this topic got so inflated is that people keep collapsing two different concerns into one giant "auth" bucket.

[NIST's glossary](https://pages.nist.gov/800-63-4/sp800-63b/glossary/) is useful here because it forces precision.
Authentication is about proving who you are.
Authorization is about deciding what you are allowed to do.

That distinction sounds elementary until you watch what happens when teams ignore it.

Logging in with an email and password is authentication.
Deciding whether that logged-in user can edit billing settings, delete a record, or impersonate another account is authorization.

When those two concerns get bundled together, people start shopping for a larger identity story than they actually need.
They buy a platform because login, policy enforcement, enterprise federation, and API access control are all being narrated as one emotional problem.

Sometimes they really do need all of that.
A lot of the time they do not.

And a lot of modern auth complexity starts right there: an app chooses an architecture that scatters identity checks, session state, and authorization decisions across too many places, then treats the resulting sprawl as if it were unavoidable.

## OAuth and JWT solved a different class of problem

This is the part that usually gets skipped.

OAuth did not show up because normal full-stack web apps were impossible to log into without it.
OAuth showed up because systems increasingly needed a standardized way for one application to obtain limited access to a protected resource on behalf of a user.

[RFC 6749](https://www.ietf.org/rfc/rfc6749.html), the core OAuth 2.0 spec, is explicit about that shape.
Its whole world is clients, resource owners, authorization servers, and resource servers.
That is a very useful world.
It is also not the starting point for every ordinary browser login flow.

The same RFC makes a distinction that matters for this whole series.
It describes a **web application** as a confidential client running on a web server, and it describes user-agent-based applications as public clients running inside the browser.

That distinction should have kept more teams honest.

If your browser client is mostly talking to your own server, then your server is still the center of gravity.
The browser client is the user-facing client of that application, not some sovereign identity consumer that must be treated like an unrelated external party.

JWT lives inside that larger OAuth-shaped world.
[RFC 7519](https://datatracker.ietf.org/doc/rfc7519/) defines JSON Web Token as a standard way of representing claims.
It is a useful and very real standard.
It is also not a mandatory rite of passage for every login form on the internet.

And once you step into bearer-token land, [RFC 6750](https://www.rfc-editor.org/rfc/rfc6750.html) states the awkward part plainly: any party in possession of a bearer token can use it, so those tokens must be protected from disclosure in storage and transport.

That line matters because people talk about tokens as if they are automatically more modern than sessions.
But the token model comes with its own obligations.
It is not simplification by itself.
It is a trade.

## Sessions were normal because the web app was still the app

Before the browser client was encouraged to think of itself as a separate product, session-based auth was just web engineering.

[OWASP's Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) is still refreshingly calm on this point.
If a web application needs to retain user context across requests, it uses a session.

The server remembers you.
That is the whole idea.

[MDN's cookie guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies) still lists session management as one of the primary uses of cookies.
The server sends a small piece of data to the browser client, and the browser client sends it back later.

That cookie does not need to contain your entire identity story.
It can carry an opaque session identifier.
The real meaning lives on the server.

OWASP says the session identifier should be meaningless on the client side.
That is not a weakness.
That is the design.

The browser client does not need to know every detail of the session.
The browser client needs a secure reference.
The server needs to know who the user is right now, what their permissions are right now, and whether the session should still be valid right now.

That model works beautifully for most full-stack apps because it matches the actual structure of the web.
The client asks.
The server answers.
The server can check the current session, load the current user, and run the current authorization rules before rendering a page or returning a response.

That is the same point I made in [It's client-server not client/server](/blog/client-server).
A browser client talking to its own app server is not some embarrassing legacy mode.
It is the native shape of the web.

![Authentication vs authorization](/post-images/spa-conspiracy-auth-vs-authorization.png)

## The SPA split changed the auth question before it changed the answer

This is the deeper problem.

The shift was not just "sessions versus JWT."
The shift was that SPA architecture changed the question teams were asking.

Instead of asking, "what is the simplest secure way for my own app to remember this user?"
teams started asking, "how do I make my client behave like an API consumer?"

That one change created a parade of follow-up chores.

If your frontend and backend are now separate systems, you need an auth story that crosses that boundary.
If you have chosen a token-based story, you need storage decisions.
If you need browser-based OAuth, you need PKCE, redirect handling, CSRF protection on the auth flow, token lifetime decisions, refresh behavior, and a plan for what happens when privileges change.

Even [Inertia's "Who is it for?"](https://inertiajs.com/docs/v2/core-concepts/who-is-it-for) page quietly tells on the split.
It lists the cost of a modern SPA setup in plain language:
you build an API,
you figure out authentication and authorization for that API,
you add client-side state management,
you often split repositories,
and you accept more complicated deployment.

That is the bill teams accept when they decide the frontend must act like a detached client.

The important part for this piece is that authentication complexity often appears downstream of a prior architectural choice.
People then treat the complexity as if it were the unavoidable price of seriousness rather than the cost of the split they already accepted.

## Browser-based OAuth is not simple. It is heavily conditional.

To be very clear, browser-based OAuth is real and sometimes appropriate.
But it is not the effortless default people often present it as.

The current IETF best-practice draft on [OAuth 2.0 for Browser-Based Applications](https://www.ietf.org/archive/id/draft-ietf-oauth-browser-based-apps-21.html) spends a lot of time on this for a reason.
It goes deep on malicious JavaScript, token storage, refresh-token handling, public-client constraints, and backend-for-frontend patterns.

That document explicitly notes that browser-based applications are usually public clients.
It also says malicious JavaScript in the browser can steal data from origin-based storage such as `localStorage` and IndexedDB, because hostile code running in the same origin has the same privileges as the real app.

That is the part people keep trying to hand-wave away.

If the JWT lives in `localStorage`, you now have a fresh set of XSS-related worries and a browser-storage debate you did not need for a normal full-stack app.
[OWASP's session guidance](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html) points out that `localStorage` persists across browsing sessions and that standards do not require the data to be encrypted at rest.

If the token lives in an `HttpOnly` cookie, you are back in cookie land anyway.
You still need to think about CSRF, expiry, rotation, revocation, and how the server re-establishes current user truth.

If you issue refresh tokens to the browser client, the current IETF browser-app guidance says browser-based clients need additional care there too, including rotation or sender-constrained tokens and sensible lifetime policies.

So no, this is not a story where sessions are the complicated legacy thing and tokens are the sleek modern thing.
Very often the opposite is true for ordinary browser apps.

In many cases, teams did not escape session-like behavior.
They rebuilt session-like behavior with more ceremony.

## Auth-as-a-service monetized a real fear and then widened the default

Now we get to the market.

Auth-as-a-service did not grow only because authentication matters.
It grew because the ecosystem learned to describe authentication as if ordinary builders should feel vaguely irresponsible touching it.

Some of that fear is justified.
Passwords are serious.
Account recovery matters.
MFA matters.
Abuse matters.
Bad auth can absolutely hurt people.

But serious work and mystical work are not the same thing.

When I wrote [How To Roll Your Own Auth](/blog/how-to-roll-your-own-auth), the point was never that security is trivial.
The point was that most full-stack apps are using established primitives, not inventing cryptography.

You need strong password hashing.
[OWASP's Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) gives sane guidance there.
You need properly configured cookies.
[MDN's `Set-Cookie` reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie) explains `HttpOnly`, `Secure`, and `SameSite`.
You need session management.
OWASP covers that too.

That is real engineering work.
It is also normal web engineering work.

This is also where proper server-first frameworks deserve more respect than the ecosystem gives them.

[Rails](https://guides.rubyonrails.org/security.html) has long shipped the core primitives around sessions and cookies, and starting with Rails 8.0 in November 2024 it also ships a default authentication generator that gives you a real starting point for sessions, login, and password reset.

[Laravel](https://laravel.com/docs/12.x/authentication) ships authentication facilities built around sessions, guards, route protection, logout, password confirmation, and the rest of the normal web-app story.

[Sails](https://sailsjs.com/documentation/concepts/sessions) has long treated sessions as a first-class part of the request lifecycle, which means auth can stay close to actions, policies, and backend truth instead of being pushed out into token theater.
That is part of why I keep making the case in [Every Few Months The JavaScript Ecosystem Pretends It Just Invented Rails](/blog/javascript-ecosystem-amnesia): JavaScript developers do not actually have to reinvent this stuff from scratch or wait for some new frontend celebrity launch to rediscover it.
Sails already exists, and it already assumes your app can own sessions, authorization, and the rest of the normal full-stack responsibilities.

So no, most teams are not standing alone in a dark room trying to invent login from scratch.
For a lot of products, the wiser move is to lean on the primitives that proper full-stack frameworks already provide, understand how they work, and customize where your product actually differs.

That does not make auth foolproof.
Nothing does.
But it dramatically reduces how much you have to improvise.

What auth vendors did very well was step into the gap between "serious" and "mystified."
They sold comfort.
Sometimes that comfort is worth paying for.
Sometimes it is not.

The trouble is that the rented version of auth now gets treated as the adult version by default, even when the product is a fairly ordinary full-stack application that could manage sessions, cookies, password reset, and authorization internally.

That default is not technical destiny.
It is a cultural shift produced by the SPA era.

## There are real cases where buying auth makes sense

I do not want to flatten this into a cartoon.

There are absolutely situations where an auth provider is solving a real high-order problem.

[Auth0's enterprise connections docs](https://auth0.com/docs/authenticate/enterprise-connections) are a good example of a legitimate vendor use case.
If you need to authenticate users against external federated identity providers such as Azure AD, Google Workspace, PingFederate, or similar enterprise systems, that is a different problem from "build me a login page."

[WorkOS Directory Sync](https://workos.com/docs/directory-sync) is another good example.
If you need SCIM-style provisioning and deprovisioning, group sync, and enterprise lifecycle management, you are no longer just solving ordinary web login.
You are solving enterprise identity plumbing.

That is real complexity.
That is why these companies exist.

If you genuinely need enterprise SSO, SCIM, deep federation, or a long list of workforce identity integrations, buying help can be rational.
If you are building a public API platform with third-party consumers and delegated access across services, token-based systems are part of a real answer.

That is not what I object to.

I object to the way those needs got exported downward into ordinary SaaS apps, internal tools, dashboards, content products, and client portals that do not actually need to begin life as identity platforms.

## The calmer answer is full-stack auth

For a normal web app, the calmer answer is still the server owning authentication.

A [Sails session](https://sailsjs.com/documentation/concepts/sessions) is not old-fashioned.
It is direct.

The server checks credentials.
The server stores the session.
The server loads the current user into the request lifecycle.
Policies and actions decide what happens next.

That gets even better when paired with [inertia-sails](https://docs.sailscasts.com/inertia-sails/) and [The Boring JavaScript Stack](https://docs.sailscasts.com/boring-stack/).
Now the browser client gets SPA smoothness without turning itself into a detached identity manager.
Your pages can be server-aware from the start.
Your app can avoid the whole flash-of-unauthenticated-content nonsense that happens when the browser client has to rediscover the user's identity after first render.

One app.
One route system.
One session story.
One place where authorization can remain close to backend truth.

That posture also fits the bigger argument I made in [Every Few Months The JavaScript Ecosystem Pretends It Just Invented Rails](/blog/javascript-ecosystem-amnesia).
Real full-stack frameworks are not ashamed of owning sessions, authorization, mail, jobs, and the rest of the boring application responsibilities.
That is not backward.
That is coherent.

## JWT is not fake. It is just overprescribed.

I am not anti-JWT.
I am anti-defaulting to JWT because the ecosystem made normal web architecture sound provincial.

JWT makes sense when you genuinely need portable claims across boundaries.
Public APIs.
Federation.
Service-to-service identity.
Mobile bearer-token flows.
Detached resource servers.
That is all real.

But most browser-based apps are not a detached network of separately deployed resource servers.
Most of the time, they are just human beings using your website.

For that world, session-based auth is often simpler, easier to revoke, easier to reason about, and more honest about where current truth actually lives.

If a user's permissions change, the server should know now.
If a session needs to be killed, the server should be able to kill it now.
If the user logs out, the app should not have to choreograph half a dozen token rituals just to return to the obvious state that the user is no longer logged in.

That is one of the underrated strengths of stateful auth.
The server is evaluating current truth instead of trusting a claim blob minted earlier and still circulating through the frontend after reality has moved on.

![Session vs JWT comparison](/post-images/spa-conspiracy-session-vs-jwt.png)

## The real rule of thumb

If your web app is mostly a browser client talking to its own server, start with server-side sessions and secure cookies.
And resist the urge to split the app into a separate backend and frontend before the product has earned that complexity.
Keep it as one full-stack app.
You can still use React, Vue, or Svelte through [Inertia](https://inertiajs.com/) or [The Boring JavaScript Stack](https://docs.sailscasts.com/boring-stack/) without turning the browser into a detached identity consumer.

Reach for JWT when the architecture genuinely needs portable claims across boundaries.
Reach for auth-as-a-service when you are actually buying a real high-order capability such as enterprise federation, SCIM, or identity infrastructure you truly do not want to own.

Do not reach for JWT because the ecosystem made normal web architecture sound unsophisticated.
Do not outsource auth by reflex.
Understand what you are buying.
Understand what risk you are actually reducing.
Understand what complexity you are introducing in exchange.

The rule is simple:

**Do not make the browser client pretend to be a stranger unless your product truly requires that distance.**

That is how a lot of auth complexity starts.
