---
layout: '../../layouts/BlogPost.astro'
title: 'The Conspiracy of Single-Page Applications'
description: 'Single-page applications did not just change rendering. They made frontend/backend separation, token auth, duplicated state, and managed everything feel normal. This is the genesis essay for a three-part series on how that happened.'
pubDate: 'March 26, 2026'
heroImage: /covers/the-conspiracy-of-single-page-applications.png
---

Let me be clear from the start.

When I say **the conspiracy of single-page applications**, I am not talking about a secret cabal meeting in a candlelit room to ruin web development.

I am talking about an incentive structure.

A way of building got popular.

That way of building changed what people considered normal.

Then a whole market grew around managing the complexity that this new normal created.

That is the conspiracy.

[DHH's warning about the "merchants of complexity"](https://world.hey.com/dhh/merchants-of-complexity-4851301b) gets at one side of this well: complexity is often easier to sell than restraint.

[Tom MacWright's SPA critique](https://macwright.com/2020/05/10/spa-fatigue) gets at another: the SPA pattern made it feel normal to build the UI in JavaScript and reduce the backend to an API.

And on the browser-performance side, [Addy Osmani and Jason Miller](https://web.dev/articles/rendering-on-the-web) explicitly recommend considering server-side or static rendering over full rehydration as the general default.

Different tribes.
Same discomfort.

The problem is not that SPAs exist.
The problem is that SPA assumptions escaped their original use cases and spread into ordinary web apps.

Once the browser started pretending it was a separate application, ordinary web concerns started turning into product categories.

Routing became a client concern.
Auth became a token concern.
State became a library concern.
Data fetching became a cache concern.
Deployment became a platform concern.
Databases became a managed concern.

Things that used to be application design decisions started getting repackaged as subscriptions, SDKs, courses, and hot takes.

And because this happened slowly, a lot of developers now treat the whole arrangement as if it were simply the natural order of the modern web.

It is not.

It is one branch of the web's history.
It is not the web's destiny.

## The browser started acting like a separate company

The browser was always important.

I have already made the broader case in [It's client-server not client/server](/blog/client-server), and I still believe it. The web was designed around a client and a server cooperating, not two rival governments negotiating a treaty over JSON.

But the SPA era quietly trained people to think of the frontend and backend as separate products that happen to know each other.

MacWright's formulation is still one of the clearest descriptions of the shift: the UI lives in JavaScript, and the backend becomes an API.
Once you accept that split as the default, the backend stops feeling like the application and starts feeling like a service boundary for the "real app" in the browser.

The frontend got its own router.
Its own auth flow.
Its own data cache.
Its own state tree.
Its own validation story.
Its own loading conventions.
Its own deployment surface.

Then the backend got demoted too.

Not the application in the richer sense.
Just an API surface waiting to be called.

That move changed more than rendering.
It changed how teams thought.
It changed how tools were sold.
It changed what young developers now assume is necessary.

If your browser is treated like a first-class separate client, then of course people start saying you need JWT for browser login.
If your browser owns a copy of server truth, of course people start saying you need Redux, Zustand, TanStack Query, or some other device to manage the drift.
If your backend is demoted to a service layer, of course people start saying auth, storage, queues, and databases should all be outsourced to specialists.

That is how architectural choices become market categories.

[The web.dev rendering guide](https://web.dev/articles/rendering-on-the-web) matters here precisely because it comes from people who care deeply about present-tense web performance, not nostalgia.
When they say the general default should lean toward server-side or static rendering instead of full rehydration, that should register as a cultural clue.
If even the browser-performance camp is telling you not to begin by booting an entire client application, the burden of proof belongs on the heavier architecture.

![Split-brain web app diagram](/post-images/the-conspiracy-of-single-page-applications-split-brain-diagram.png)

## What used to be app code became products

This is the part that interests me most.

The SPA story is not just a technical story.
It is also a commercial story.

And one of the clearest descriptions of the fallout comes from an alternative camp, not a critic.

[Inertia's "Who is it for?"](https://inertiajs.com/docs/v2/core-concepts/who-is-it-for) page spells out the taxes teams often incur once they accept the SPA split:
build a REST or GraphQL API,
figure out authentication and authorization for that API,
add client-side state management,
set up another repository,
and accept a more complicated deployment strategy.

That list matters because it shows the pain is not imaginary.
It is the price of the split.

Once you normalize frontend/backend separation, you create room for a long parade of things that now look inevitable:

- auth-as-a-service because login is apparently too sacred for your own app,
- JWT everywhere because the browser must now be treated like an API consumer,
- state-management libraries because the client has to coordinate with a server-shaped reality it only partially owns,
- managed databases because engineers have been trained to treat persistence as infrastructure theater rather than application design,
- deployment platforms because your "frontend" and "backend" are now strangers who need to be hosted like separate businesses.

The architecture did not merely create more code.
It created more surface area for vendors.

[I have found MY perfect React dosage](/blog/my-perfect-react-dosage) sharpened this for me. React was not the real problem. The real problem was everything people kept bolting around it to compensate for the full-stack story they had already broken.

That is also why [Every Few Months The JavaScript Ecosystem Pretends It Just Invented Rails](/blog/javascript-ecosystem-amnesia) irritated me so much. The JavaScript ecosystem keeps praising new ways to reassemble coherence after spending years celebrating fragmentation.

We keep applauding the repair as if it were the breakthrough.

## Even the performance story was warning us

One reason this debate gets cartoonish is that people frame it as old versus new.

That is not how the technical tradeoffs actually work.

A lot of SPA pain is startup pain.

The browser has to download more JavaScript.
Parse more JavaScript.
Execute more JavaScript.
Hydrate more UI.
Then reconstruct meaning that the server often already knew: who the user is, what they can see, what the page data is, what validation rules apply, whether the thing being edited still exists.

[MacWright](https://macwright.com/2020/05/10/spa-fatigue) made the awkward part of SSR plus hydration visible years ago: you can end up shipping HTML that looks ready but is still waiting for JavaScript before important interactions truly work.
That is a real cost.
It is not theoretical.

And ordinary apps pay for that in a very unglamorous way.

A booking app does not need to behave like a video editor before the user can click "Submit."
A back office does not need to boot a distributed client runtime just to render tables, forms, filters, and permissions.
A client portal does not become more sophisticated because the server has been forbidden from directly owning the page again.

Most boring business software needs reliability, legibility, and fast meaningful interaction.
Not ceremony.

## To be fair, SPAs are not stupid

The argument still needs a fair boundary.

SPAs are not fake. They are not useless. They are not always overkill.

There are product categories where a deeply client-driven architecture earns its keep.

If you are building an offline-first tool, a collaborative editor, a local-first notes app, a whiteboard, a design surface, a media workstation, a complex canvas, or something that behaves more like a native application than a traditional web app, then yes, the client may need to carry much more weight.

If you have multiple first-class clients, such as mobile apps, third-party consumers, and a browser frontend all hitting the same domain model, then yes, you are working with a more API-shaped world.

If you need instant interaction loops where the browser genuinely owns the experience, then yes, you may accept more state on the client and more complexity around synchronization.

That is real.

The problem is not that this world exists.
The problem is that its assumptions got exported to ordinary apps that never asked for them.

Most teams are not building Figma.
Most teams are not building Linear.
Most teams are not building a multiplayer game engine in a tab.

Most teams are building dashboards, forms, CRUD apps, SaaS back offices, internal tools, content products, client portals, marketplaces, admin panels, booking systems, and boring business software.

That software does not need to perform a theatrical reenactment of distributed systems research just to render a list, validate a form, and remember who is logged in.

## The alternatives were never gone

One of the most damaging things the SPA era did was make calmer alternatives seem old-fashioned.

But the prior art never disappeared.
It just stopped being fashionable.
Then, interestingly, multiple ecosystems started rediscovering it at once.

[Inertia](https://inertiajs.com/) calls itself the **modern monolith** and promises SPA smoothness without client-side routing or a separate API.

[Hotwire](https://hotwired.dev/) openly sells **HTML over the wire** as a way to get fast first loads, keep rendering on the server, and still feel modern.

[Turbo](https://turbo.hotwired.dev/) goes even further and promises the speed of a single-page application without requiring you to write the whole thing as one.

[Stimulus](https://stimulus.hotwired.dev/handbook/introduction) describes itself as a framework with **modest ambitions** for **the HTML you already have**.
That phrase matters.
It is a rebuke to the idea that every page must be reborn as a JavaScript state machine before it earns respect.

[Phoenix LiveView](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html) says, plainly, that it offers rich real-time experiences with server-rendered HTML.

[Laravel Livewire](https://livewire.laravel.com/) advertises dynamic front-end UIs without leaving PHP.

[petite-vue](https://github.com/vuejs/petite-vue) is explicitly optimized for progressive enhancement and for sprinkling small interactions on HTML rendered by a server framework.

[Carson Gross](https://htmx.org/essays/hypermedia-apis-vs-data-apis/) keeps making the same underlying point from the htmx side: a hypermedia application and a data API have different needs, and we broke something when we started treating every browser as if it were a third-party integrator.

When that many ecosystems keep independently rediscovering server-led or HTML-first approaches, the signal is hard to miss.

This is not nostalgia.
It is convergent evolution.

Even jQuery, for all the jokes people now make, was often closer to the natural shape of many websites than the massive frontend architecture that replaced it. It handled interaction where interaction was needed. It did not arrive with a manifesto about replacing the server's role in the web.

## Why JavaScript should stay boring

This is the part closest to my own work.

When I talk about [The Boring JavaScript Stack](https://docs.sailscasts.com/boring-stack/), I am not trying to cosplay 2012.
I am trying to answer a present-tense JavaScript problem.

JavaScript finally got to run seriously on the server.
That should have been the moment where the language owned more of the application again.

Instead, the culture often used JavaScript's success on the server to justify more separation:
a frontend repo here,
an API repo there,
a hosted auth layer,
a hosted database layer,
a hosted queue layer,
a frontend deployment layer,
and a thousand little explanations for why this is supposedly more modern than one coherent app.

I think that story is upside down.

With [Sails.js](https://sailsjs.com/), [Shipwright](https://github.com/sailscastshq/sails-hook-shipwright), and [inertia-sails](https://docs.sailscasts.com/inertia-sails/), the point is not "no JavaScript."
The point is "JavaScript in the right place."

Use JavaScript for view logic, page transitions, local interactivity, and the parts of the product that truly benefit from richness.
Do not force it to become your router, identity layer, cache coordinator, and shadow database for an ordinary SaaS app.

That is what I mean by keeping JavaScript boring.

It means the app stays legible.
It means the server can own auth, validation, jobs, and persisted truth.
It means React, Vue, or Svelte can still be welcome without turning the browser and backend into competing centers of authority.
It means the old web instinct of progressive enhancement gets to grow up rather than get mocked out of the room.

That is not anti-JavaScript.
That is JavaScript with a job description.

## Most apps should come back home

This is the heart of the argument.

Most apps should come back home.

By home, I mean the place where the web was already comfortable:

- the server owns persisted truth,
- the browser handles immediate interaction,
- the page does not have to pretend it is a mobile app,
- auth does not have to be sold back to you as a service,
- state does not have to be duplicated across realms unless the product actually demands it,
- your database does not have to become a venture-backed monthly dependency before your product has revenue.

A lot of modern frontend pain is self-inflicted by a mental model that assumes separation first and justification later.

The calmer model is the opposite.

Keep the app together by default.
Split only when the product really earns the split.

The stack that still makes the most sense to me is a boring one:
server rendering where it helps,
Inertia where SPA smoothness actually adds value,
small client-side interaction tools where they are enough,
and [plain old backend frameworks](/blog/javascript-ecosystem-amnesia) that are not ashamed of owning auth, validation, sessions, jobs, and data.

This is also why the usual false choice annoys me so much.
People frame it as if your only options are:

1. massive SPA architecture, or
2. no client interactivity at all.

That is nonsense.

There is a huge middle territory.
That territory is where most sensible web apps should live.

## The conspiracy is that cleanup gets marketed as progress

The pattern repeats so often now that it is hard not to notice.

First, a style of architecture becomes fashionable.
Then the costs of that architecture begin to hurt.
Then new tools arrive to reduce those costs.
Then the reduction is marketed as innovation rather than repair.

Suddenly we are celebrating the framework that reintroduced server-driven validation.
The tool that made page visits feel normal again.
The library that lets you keep the backend as the single source of truth.
The service that helps your client cache your server state more gracefully.
The platform that makes auth less miserable after you made auth harder than it needed to be.

Some of those tools are good.
I use some of them.
But good tools can still be solving a problem that became common for avoidable reasons.

That is what this series wants to examine.

Not in the vague sense of "frontend bad, backend good."
That would be lazy.

I want us to go one layer deeper.
I want us to look at the specific categories the SPA era made prominent, and ask whether they are truly necessary for most products or whether they became famous because the architecture underneath them kept creating demand.

## Where this series goes next

This opening essay is the map.

The next three pieces zoom in on the three cleanup markets the SPA era helped normalize.

Part 1 looks at [**auth-as-a-service and JWT**](/blog/spa-conspiracy-auth-as-a-service-and-jwt), and why the browser pretending to be a separate client made ordinary session auth look old and provincial.

Part 2 looks at [**state management libraries**](/blog/spa-conspiracy-state-management-libraries), and how duplicated truth between client and server turned normal apps into accidental distributed systems.

Part 3 looks at **managed databases**, and why JavaScript finally running on the server should have made us own more of our systems, not outsource more of them.

And through all of it, the point is not anti-JavaScript.
The point is anti-theater.

I still like React, but I am a Vue.js developer through and through.
I still like interactivity.
I still like rich products.
I just do not think ordinary apps should need an architecture tax to earn those things.

If the web's native architecture already gives us a calmer way to build, and frameworks like [Inertia](https://inertiajs.com/), [Hotwire](https://hotwired.dev/), [LiveView](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html), [Livewire](https://livewire.laravel.com/), and [The Boring JavaScript Stack](https://docs.sailscasts.com/boring-stack/) keep proving that point from different directions, then the burden of proof should shift.

The question should not be, "why are you still building full-stack apps like this?"

The question should be, "what exactly are you building that requires breaking the app apart this early?"

That is the question this series is going to keep asking.
