---
layout: '../../layouts/BlogPost.astro'
title: 'Free Credits And Usage-Based Pricing Are The Softest Kind Of Lock-In'
description: 'Free credits and usage-based pricing sell the feeling of affordability. What they often deliver is delayed pain, distorted validation, and the softest kind of lock-in.'
pubDate: 'March 23, 2026'
heroImage: /covers/free-credits-are-not-generosity.png
---

Free deployment plans do not just lower the cost of building.

They lower the cost of denial.

They let founders spend months building what nobody wants.

That sounds harsh until you sit with it for a minute.

If I know the stack will start billing me from day one, I ask harder questions earlier. Do I really need this service? Can I host this myself? Will anyone pay for this thing? Can I get a customer before I add one more managed dependency?

When the stack is floating on credits, grants, and startup-program perks, those questions get delayed. The product feels cheap before it is actually cheap. The architecture feels sustainable before it is actually sustainable. A founder mistakes temporary subsidy for real affordability.

That is the first deceit.

The second is the phrase everybody loves because it sounds fair: **pay for what you use**.

That line sounds disciplined and efficient. In practice, it often means something much less comforting: **pay for what you failed to predict**.

That is a very different promise.

Managed services are not automatically bad. But the marketing around them is often much cleaner than the lived reality. For bootstrapped founders, especially African founders, that gap matters because cash discipline is not a nice-to-have. It is survival.

This is the same instinct behind [The DID Problem](/blog/the-did-problem) and [The PlanetScale CEO Said I Don't Value My Time. Here's My $22/Month Server Running 4 Apps.](/blog/planetscale-ceo-22-dollar-server). Cost is not some embarrassing side quest beneath "real engineering." Cost is part of the engineering.

## Free credits are customer acquisition, not generosity

Let's stop pretending free credits are generosity.

They are customer acquisition.

That is not a moral accusation. It is just the business model. Platforms subsidize your first steps because they want your future dependence. If that future dependence never shows up, the credit program was just marketing. If it does show up, you become a paying customer inside an architecture you are now less motivated to leave.

The details from the pricing pages make this clearer than the slogans do.

Take [Railway](https://docs.railway.com/pricing). The pitch feels simple: try it free, then pay for what you use. But the [free trial](https://docs.railway.com/pricing/free-trial) is a one-time $5 grant for up to 30 days, and after that you land on a Free plan with $1 of monthly credit. Their [credits docs](https://docs.railway.com/pricing/credits) also say promotions apply to new signups and require a credit card to cover usage beyond the credit amount.

Look at [Vercel](https://vercel.com/pricing). Hobby is free, Pro includes $20 of usage credit, and that sounds generous until you read the [Pro plan docs](https://vercel.com/docs/plans/pro), which say the credit expires monthly and additional usage is billed on-demand. Their [startup program](https://vercel.com/startups/credits) offers up to $30,000 in credits, but even that page still has to answer why a payment method is required.

[Supabase](https://supabase.com/pricing) frames itself as free to start with simple paid plans. Then the [billing docs](https://supabase.com/docs/guides/platform/billing-on-supabase) remind you that some usage items are quota-based while others are charged for the entirety of usage. Their [compute docs](https://supabase.com/docs/guides/platform/manage-your-usage/compute) are even clearer: compute is billed independent of database usage and every project you launch increases monthly compute costs.

[Neon](https://neon.com/pricing) says get started for free and pay per usage as you grow. The pricing page says Free gives you 100 compute hours per month per project and Launch is a "$15/mo typical spend." Their [startup program](https://neon.com/blog/startup-program) offers up to $100,000 in credits, but the same page says they are generally looking for companies that have raised $1M to $5M in venture funding.

Then there is [PlanetScale](https://planetscale.com/pricing), where the story is managed database pricing that starts low and scales with you. Their [startup page](https://planetscale.com/startups) says "No hidden costs or surprise bills" and "Pay-as-you-go," while the [pricing docs](https://planetscale.com/docs/postgres/pricing) say branches are billed separately and network egress beyond included amounts is billed per GB. Migration credits exist too, but only [case by case](https://planetscale.com/startups).

That is the pattern.

Credits are either tiny, temporary, or reserved for the venture-backed class. Often all three.

So when founders defend this world by saying "but it starts free," what they usually mean is: somebody else's balance sheet is briefly absorbing a cost you will eventually inherit.

That is not affordability. That is a coupon.

## Usage-based pricing is not what most founders think it is

The most misleading thing about usage-based pricing is not that it is always expensive.

It is that variability gets sold as fairness.

It is not.

Usage-based pricing transfers forecasting risk from the vendor to the builder. Instead of paying a stable amount for a stable box, you pay according to a moving combination of compute, storage, bandwidth, invocations, branch-hours, image operations, active CPU time, memory hours, or whatever other meter the product team has decided best reflects their platform.

The bill becomes a function of behavior you do not fully control yet.

That can be fine when you are a larger company with observability, buffers, finance oversight, margin, and enough scale to make utilization modeling a real discipline.

Then comes the standard comeback: what happens if you scale?

Fair enough. But most founders do not die from under-preparing for scale. They die from building a cost structure they have not earned yet.

A founder with two users, shaky distribution, and no appetite for billing archaeology is solving a different problem.

Look at how the platforms themselves describe cost estimation.

[Railway's pricing FAQ](https://docs.railway.com/pricing/faqs) says that to understand what it will cost to run your app, you should deploy it, let it run for one week, and then check your estimated usage. That is honest, but it also tells on the model. If the way to know your price is to run an experiment and wait for the estimate, then the price is not really legible upfront.

[Vercel's Pro docs](https://vercel.com/docs/plans/pro) say your $20 monthly credit can be used across infrastructure resources, and once it is exhausted, additional usage is billed on-demand. Their [spend management docs](https://vercel.com/docs/spend-management) add an important detail people miss: setting a spend amount does not automatically stop usage unless you explicitly configure it to pause projects. The platform even says new customers get spend notifications at $200 per billing cycle by default. That should tell you who this pricing model is optimized for. A $200 warning is not a comfort blanket for a bootstrapped founder in Lagos.

[Supabase's spend cap docs](https://supabase.com/docs/guides/platform/spend-cap) say the spend cap covers only certain usage items, and then explicitly list things it does **not** cover, including compute, branching compute, read replica compute, and several other line items. Their [compute guide](https://supabase.com/docs/guides/platform/manage-your-usage/compute) says you are charged for the compute resources of the server independent of your database usage, and that compute hours are not covered by the spend cap. So even the thing called a spend cap is not the universal safety blanket people think it is.

[Neon's pricing page](https://neon.com/pricing) says Launch is a "$15/mo typical spend" and Scale is a "$701/mo typical spend." That word "typical" is doing a lot of work. [Neon's pricing explainer](https://neon.com/blog/new-usage-based-pricing) used to frame this as "no quotas, no overages, just pay for what you use," which sounds beautiful right until you remember that the hard part is not the sentence. The hard part is whether the founder can predict the usage profile well enough for that sentence to feel safe.

[PlanetScale's pricing docs](https://planetscale.com/docs/postgres/pricing) say each branch runs on its own cluster and is billed separately, public network egress is included up to a point, and beyond that you pay per GB. Their [startup page](https://planetscale.com/startups) simultaneously promises "No hidden costs or surprise bills." I do not think that sentence becomes more convincing when a user says they got burned by a spike and the reply is, essentially, "it must have been egress." That is not reassurance. That is the model revealing its sharp edge.

So let me ground the wording clearly:

**The problem with usage-based pricing is not that it always spikes. The problem is that it can spike in ways early-stage builders do not model well, and the burden of prediction sits with the builder, not the vendor.**

That is the fact underneath the feeling.

## Free credits distort validation

This part matters most to me.

Free credits teach the wrong lesson.

They make bad architecture feel affordable and unvalidated ideas feel easier to indulge. If the database, deploy surface, auth provider, edge functions, logs, storage, and cron jobs are all being subsidized, a founder can spend months polishing infrastructure choices before proving that anybody wants the product.

That is one reason I keep pushing the leaner path in [Build Globally, Price Locally](/blog/build-globally-price-locally) and [Dear African Builders, Subscriptions Might Kill Your SaaS](/blog/subscriptions-might-kill-your-saas). Constraints are not the enemy. They are often the adult in the room.

If your stack costs real money from day one, you will often sell earlier.

You will prune dependencies faster.

You will ask whether you really need auth-as-a-service or whether you have simply been socially trained to treat login as a mystical cloud primitive instead of an application feature. You will ask whether the branch previews, read replicas, and serverless niceties are solving an actual bottleneck or just making you feel like a proper startup.

That is why the dismissive "good luck running your own auth" type of reply always misses the real point. The question is not whether self-hosting or owning more of your stack requires effort. Of course it does. The question is whether renting every boring capability from a SaaS vendor is actually the smartest thing for a young company with tiny margins and uncertain demand.

Sometimes it is.

Far more often than the ecosystem wants to admit, it is not.

## The venture-backed version of "free"

There is another quiet thing going on here.

A lot of the loudest credit programs are not even really for the ordinary founder.

[Neon's startup program](https://neon.com/blog/startup-program) is generally aimed at companies that have raised $1M to $5M.

[Vercel's startup credits](https://vercel.com/startups/credits) are tied into a partner ecosystem and proof-of-partnership flow.

[PlanetScale's migration credits](https://planetscale.com/startups) are case by case.

[Railway's promotion credits](https://docs.railway.com/pricing/credits) only apply to new signups and still require a card on file.

So when people talk about free credits as if this is some grand democratization of software infrastructure, let us be honest. A lot of it is venture subsidy flowing through cloud tooling. It is less "everyone can build now" and more "we will buy your first few steps if you look like the customer we want later."

That can still be useful.

It is just not generosity.

## Predictability is a feature

What founders need early is not maximum elasticity.

They need legibility.

They need to know what the floor is.

This is why a boring VPS still deserves more respect than the ecosystem gives it.

[Hetzner's cloud billing FAQ](https://docs.hetzner.com/cloud/billing/faq) says a server has a monthly price cap and will never exceed that cap. The same docs explain that outgoing traffic is billed only after the included amount and that project owners get notified at 75% and 100% of included traffic. Their [traffic docs](https://docs.hetzner.com/robot/general/traffic/) list 20 TB of included traffic for EU cloud servers. Their [2026 cloud pricing update](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/) shows a CAX11 cloud server at $5.49 per month.

Which is why the PlanetScale-style "your app costs $22" reply misses the point. I never said one app cost $22. I said the **server** cost $22, and that box was carrying four apps, four databases, and four Redis instances. Under Hetzner's published **April 1, 2026** pricing, roughly that money gets you a CAX31 in Europe at **$18.49/month**, with **8 Arm vCPUs, 16 GB RAM, 160 GB NVMe storage, and 20 TB of included traffic**. Fixed box. Fixed price. No suspense.

And a [Boring JavaScript Stack](https://docs.sailscasts.com/boring-stack) app is not some exotic workload. The docs assume a perfectly ordinary production shape: one app, one PostgreSQL database, one Redis instance, and a production Dockerfile. So four modest Boring Stack apps, four PostgreSQL databases, and four Redis instances on a box like that are not fantasy math. That is a normal low-to-moderate traffic setup. The weird part is not the claim. The weird part is how managed-service pricing has trained people to hear "$22" and picture one tiny app hanging off one database.

That is not free.

That is better.

It is honest. It is legible. It is budgetable.

And for many early products, a small VPS plus Docker plus PostgreSQL plus Redis plus SMTP is not some caveman setup. It is a coherent cost model.

This is why I keep advocating simpler infrastructure, and why I keep telling founders to [Ship Lean](https://africanindiehackers.org/ship-lean). Not because managed services are evil, but because predictable pricing is underrated developer experience.

You cannot plan well around vibes on a billing dashboard.

## The subtle deceit

The deceit is rarely in the literal numbers.

The pricing pages usually tell you something technically true.

The deceit is in the framing.

Free credits frame subsidy as accessibility.

Usage-based pricing frames unpredictability as fairness.

Startup programs frame selective vendor investment as ecosystem generosity.

And then when the bill finally stops feeling theoretical, founders are made to feel like the problem is that they misunderstood the platform, misconfigured something, or should have watched usage more carefully.

Sometimes that is true.

But sometimes the more honest answer is simpler: the pricing model never felt understandable enough for the stage they were at.

If your infrastructure story requires free credits, partner perks, billing alerts, usage estimators, dashboards for spend management, and a CEO in your mentions explaining why the bill moved, then maybe the setup is not as founder-friendly as the homepage copy suggests.

## What I would rather founders learn

I would rather a young founder learn to think clearly about fixed costs than become emotionally dependent on temporary credits.

I would rather they spend $5.49 on a box they understand than build a little castle on subsidized abstractions they will have to renegotiate later.

I would rather they feel the cost early, because early pain produces better discipline than delayed pain.

And I would rather African founders, especially, stop inheriting Silicon Valley's appetite for rented infrastructure without asking whether the economics actually travel.

Because that is the deeper issue.

The cloud vendor sees one more developer.

The founder sees one more managed convenience.

But the runway sees a stack of recurring liabilities.

That stack does not become wise just because the first month was free.

Free credits and usage-based pricing are not generosity.

They are often just the softest kind of lock-in.
