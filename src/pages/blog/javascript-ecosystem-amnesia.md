---
layout: '../../layouts/BlogPost.astro'
title: 'Every Few Months The JavaScript Ecosystem Pretends It Just Invented Rails'
description: 'A new full-stack launch appears, JS influencers rave that it is the Rails or Laravel for JavaScript, and the ecosystem forgets Sails and Adonis already exist.'
pubDate: 'March 13, 2026'
heroImage: /covers/js-ecosystem-amnesia.png
---

Every few months the JavaScript ecosystem does this thing. A new full-stack launch appears, usually attached to a tool or personality the ecosystem already reveres, and people start announcing that we have finally found the Rails or Laravel of JavaScript.

As if the ecosystem has been wandering in backend darkness waiting for a famous frontend mind to discover controllers, sessions, queues, storage, and coherent application structure.

I am tired of it, not because new tools keep showing up, but because of the amnesia. The JavaScript ecosystem keeps reacting as if full-stack maturity only counts when it arrives wrapped in the branding of whatever tool currently owns the timeline.

The sales pitch is usually familiar enough. A full-stack SDK. Auto-provisioned infrastructure for databases, KV, storage, AI, cron jobs, and queues. Support for all the usual frontend suspects. A framework story with routing, loaders, actions, SSR, ISR, islands, maybe even a nod to Inertia.

A little bit of lock-in explained away as the price of great DX. External packages doing important work under the hood. A promise that now, finally, JavaScript developers can move fast.

Fine. Call that an opinionated platform. Call it a deployment product with framework ambitions. Call it a frontend-native path into backend land.

But Rails? Laravel? That is where I call BS and strongly object.

Because Rails and Laravel are not just a pile of integrations with nice DX. They are deeply opinionated full-stack frameworks with mature answers for the backend-heavy parts of web development: routing, actions/controllers, ORM, sessions, authorization, background jobs, file handling, mail, realtime concerns, deployment workflows, and a coherent app architecture that reduces decision fatigue instead of outsourcing it to a dozen logos on a pricing page.

If you want the Rails-like framework in JavaScript, Sails has had a far better claim for years.

If you want the Laravel-like framework in JavaScript, Adonis is the closer comparison by a mile.

## What Rails And Laravel Actually Mean

When people reach for Rails or Laravel as shorthand, they usually mean more than "feels productive."

They mean a framework that comes with strong opinions about:

- how a serious web application should be structured,
- how the server should behave, how data should be modeled,
- how authentication should work,
- where authorization lives,
- how background work gets done,
- how files are uploaded,
- how views are rendered,
- and how the whole thing gets deployed without turning the architecture diagram into a supermarket receipt.

That is what made Rails powerful. That is what made Laravel powerful. Not that they glued together trendy primitives. Not that they wrapped infrastructure with pleasant ergonomics. Not that they made a compelling launch trailer. They gave developers a coherent world.

That is the standard.

And by that standard, this recurring class of launch is usually not the Rails or Laravel of JavaScript. It is often a promising platform product with strong infrastructure opinions, explicit coupling, and a frontend-first worldview trying to grow downward into the backend.

That is a different thing.

## Sails Has Been Doing The Rails-Like Thing For Years

This is the part that irritates me most.

People keep talking as if JavaScript has never had a serious full-stack framework with backend opinions, when Sails has long shipped:

- [actions and controllers](https://sailsjs.com/documentation/concepts/actions-and-controllers),
- [declarative policies](https://sailsjs.com/documentation/concepts/policies),
- [session-based auth](https://sailsjs.com/documentation/concepts/sessions),
- [file uploads through Skipper](https://sailsjs.com/documentation/concepts/file-uploads),
- [Waterline](https://sailsjs.com/documentation/concepts/models-and-orm), as a first-party database-agnostic ORM
- [blueprint routes and actions](https://sailsjs.com/documentation/concepts/blueprints),
- and [built-in realtime](https://sailsjs.com/documentation/concepts/websockets) architecture through Sails sockets.
- [Scripts](https://sailsjs.com/documentation/concepts/shell-scripts) and [Background jobs](https://docs.sailscasts.com/sails-quest)
- [Payment](https://docs.sailscasts.com/sails-pay) integration
- [Mail](https://docs.sailscasts.com/mail)
- [Oauth](https://docs.sailscasts.com/wish) with GitHub and Google

That is not theoretical completeness.

That is a framework with an actual backend story.

Sails gives you a server-centered architecture. It expects you to think in terms of actions, policies, models, helpers, sessions, routes, and application-level behavior. It is not ashamed of the backend. It is not trying to pretend the server is just an inconvenient implementation detail hiding behind a bundler.

That is already much closer to Rails than the usual JavaScript formula of bundler-first tooling plus managed primitives.

And before someone reaches for the stale "but Sails is old" talking point, let me be clear: modern Sails is not stuck in the Grunt era. The ecosystem around it has moved in a serious way.

[Shipwright](https://github.com/sailscastshq/sails-hook-shipwright) replaces the old asset pipeline with an Rsbuild-based setup that gives you fast rebuilds, HMR, manifest-based asset versioning, and a development flow where your Sails app and your frontend still feel like one application instead of two awkward roommates. You are not bolting a backend onto a frontend toolchain after the fact. You are running a backend-heavy full-stack app with a modern pipeline.

That matters more than people admit. A lot of JavaScript developers have been trained to think "modern" means renting DX from outside the framework. Modern auth from one service. Modern storage from another. Modern queues from another. Modern previews from another. Modern deployment from yet another. Sails with Shipwright takes a different posture. It says the app itself can still be the center of gravity.

The [Sails language tools and VS Code extension](https://marketplace.visualstudio.com/items?itemName=Sails.sails-vscode) matter for the same reason. Healthy frameworks produce environments, not just packages. If there is active language tooling, editor support, generators, and a coherent development model, that is a sign the framework is being treated like real ground to build on, not a historical footnote people only mention when they feel nostalgic about MVC.

Then there is [The Boring Stack](https://docs.sailscasts.com/boring-stack/), which is where this argument becomes very difficult to ignore. The Boring Stack takes Sails, [inertia-sails](https://docs.sailscasts.com/inertia-sails/), Shipwright, session-based auth, file uploads, payments, email, and modern frontend tooling, and turns them into a present-tense full-stack experience.

With Inertia in the middle, you get React, Vue, or Svelte while still thinking in server-side routes, actions, policies, and sessions. You do not need to build and maintain a separate API theater just to feel contemporary. You get one codebase, one language, one deployment surface, one app.

That is the part the "Rails/Laravel of JavaScript" conversation keeps missing. Sails is not just historically closer to Rails. With Shipwright, the editor tooling, Inertia, and The Boring Stack, it is also far more modern than people who have not looked at it in years seem to realize. You can build with server-rendered discipline and SPA ergonomics at the same time. That is not a nostalgic compromise. That is an extremely sane way to ship software.

And it goes further than core alone. The surrounding Sails ecosystem has been quietly solving the exact problems JavaScript developers keep paying a monthly SaaS tax to patch over.

If you want modern SPA ergonomics without building a separate API circus, [inertia-sails](https://docs.sailscasts.com/inertia-sails/) gives you React, Vue, or Svelte in one codebase and one deployment. If you want role-based access control that fits naturally into the Sails request lifecycle, [Sails Clearance](https://docs.sailscasts.com/clearance/) already exists.

If you need background jobs and scheduling, [Sails Quest](https://docs.sailscasts.com/sails-quest/) gives you recurring jobs, cron expressions, and full access to your app context. If you need caching, [Sails Stash](https://docs.sailscasts.com/sails-stash/) gives you a unified cache layer. If you need payments, [Sails Pay](https://docs.sailscasts.com/sails-pay/) exists.

If you need a deployment platform built for the framework instead of a framework built to flatter the platform, [Slipway](https://docs.sailscasts.com/slipway/) gives you one-command deploys, self-hosted infrastructure, database management, backups, monitoring, team access, and job scheduling on your own server.

That last point matters a lot. [One of the quiet lies of the modern JavaScript stack](http://localhost:4321/blog/planetscale-ceo-22-dollar-server) is that developer experience has improved while costs stay reasonable. What really happened in many cases is that framework weakness got externalized into a marketplace of monthly services. Auth as a service. Database as a service. Queue as a service. Cache as a service. Storage as a service. Deployment as a service.

Observability as a service. Search as a service. Then people act surprised when a supposedly productive stack ends up with a bill and architecture footprint that look ridiculous for a small team.

This is why I keep stressing modern Sails instead of only historical Sails. With Shipwright, Inertia, the language tools, and The Boring Stack, the framework story is no longer "yes, but you will have to accept ancient tooling." No. You get fast local development, frontend comfort without API sprawl, backend coherence, editor support, and a growing ecosystem of hooks that cover the real work. You do not have to begin by subscribing to your architecture.

Sails has had a different instinct for a long time. It tries to give you a coherent backend world first. That is what full-stack maturity looks like.

## If You Want The Laravel Comparison, Adonis Is The Better Candidate

If someone insists on making the Laravel comparison in JavaScript, I would point them to Adonis long before I pointed them to the latest hyped platform.

[Lucid](https://docs.adonisjs.com/guides/database/lucid) is an actual ORM with models, migrations, relationships, transactions, hooks, and a clearly integrated data layer. [Adonis authentication](https://docs.adonisjs.com/guides/authentication/introduction) is not hand-wavy either; it has official support for session-based auth and access tokens, with documented [session guards](https://docs.adonisjs.com/guides/authentication/session-guard) and [access token guards](https://docs.adonisjs.com/guides/authentication/access-tokens-guard). [File uploads](https://docs.adonisjs.com/guides/basics/file-uploads) are first-class. [Drive](https://docs.adonisjs.com/guides/digging-deeper/drive) gives you a storage abstraction. [Queues](https://docs.adonisjs.com/guides/digging-deeper/queues) exist as an official package. [Inertia support](https://docs.adonisjs.com/guides/views-and-templates/inertia) is documented. [Deployment](https://docs.adonisjs.com/guides/getting-started/deployment) is documented as part of the framework story.

That is much closer to Laravel's actual shape.

You may prefer Adonis or not. That is not the point.

The point is accuracy.

If a framework already has a real ORM, real auth story, storage, queues, deployment guidance, and full-stack conventions, then that is the thing you compare to Laravel. Not the latest announcement just because the launch graphics looked polished and the people behind it are famous.

## What These Launches Usually Are

What many of these launches actually look like to me is a frontend-centered ecosystem trying to expand downward into the backend and infrastructure world. The shape is familiar by now: start with an admired build tool or UI framework, add hosting, add database and storage primitives, add auth and ORM through dependencies or partnerships, add a thin full-stack story, then let the timeline announce that JavaScript has finally discovered coherence.

But the core shape still matters. There is nothing wrong with trying this. Some of these products will be useful. Some may even be excellent for people who accept the lock-in and the platform boundaries. But useful is not the same as Rails-like. Productive is not the same as framework-complete.

But that is not the same thing as a mature full-stack framework with years of backend opinion, server architecture, and application-level ergonomics behind it.

And to be very honest, I do not instinctively trust a bundler author or a UI framework author to have superior opinions about the backend-heavy world of sessions, authorization boundaries, persistence models, queue semantics, file processing, deployment surfaces, and long-term operational sanity. That is a different discipline. Adjacent, yes. Same, no.

Frontend brilliance does not automatically translate into full-stack maturity.

## Why The JavaScript Ecosystem Keeps Making This Mistake

I cannot prove anyone's motive, so I will not pretend I can read hearts.

But the incentive landscape is obvious.

A fragmented ecosystem is very profitable. It keeps developers shopping. It keeps attention moving. It keeps room open for a new database company, a new auth company, a new queue company, a new storage company, a new deployment company, and another "modern full-stack" layer that promises to unify the pieces until the next cycle of fragmentation begins again.

That is why the JavaScript ecosystem often celebrates assembly more than coherence.

Coherence closes markets.

Fragmentation creates them.

When a true full-stack framework gets strong enough, it reduces the number of tools you need to buy, integrate, debug, and mentally finance. That is good for developers. It is not always good for the surrounding tool economy.

So yes, I do think the ecosystem has a bias toward fragmentation, and yes, I think that bias conveniently creates oxygen for products like Supabase, Prisma, PlanetScale, and the rest of the modern service parade. Some of those tools are good. That is not the issue. The issue is what happens when the entire mental model of building web software becomes dependency shopping instead of framework leverage.

That is how you end up with developers who can assemble stacks but cannot tell when a framework already solved the problem ten years ago.

## The Calm JavaScript Developer Should Want Better

What I want for JavaScript developers is not another flashy announcement that convinces people the language has finally discovered backend structure.

I want memory. I want people to remember that Sails has been here. I want people to notice that Adonis has been here. I want people to stop acting like every new frontend-adjacent full-stack launch is automatically the long-awaited Rails or Laravel of JavaScript.

It is okay to be interested in new things.

It is not okay to erase the frameworks that already carried the weight.

If one of these new products becomes great, fine. Let it become great on its own terms.

But stop rewriting history every time a famous person in the ecosystem ships a new thing.

JavaScript already has calmer, deeper, more coherent answers than this ecosystem likes to admit.

Power to the calm JavaScript developer.
