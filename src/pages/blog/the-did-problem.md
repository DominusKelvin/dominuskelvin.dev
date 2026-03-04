---
layout: '../../layouts/BlogPost.astro'
title: 'The DID Problem: Three Things Killing African Startups Before They Start'
description: 'Distribution. Infrastructure. Design. Every African startup I review has the same three problems. Here is how I fix them.'
pubDate: 'March 4, 2026'
heroImage: /covers/the-did-problem.png
---

I've reviewed dozens of African startups over the past year. Founders DM me their products, their landing pages, their infrastructure setups. They ask what's wrong. Why users aren't coming. Why the money is running out.

Every single time, it's the same three problems. Not one. Not two. All three.

I started calling it the DID Problem. As in, your startup DID have a chance. Past tense. Because if you don't fix these three things, that's exactly how people will talk about it. "What happened to that app?" "Oh yeah, they DID try."

Distribution. Infrastructure. Design. Fix all three and your startup still has a chance. Ignore any one of them and you'll pivot in 6 months wondering what went wrong.

## D — Distribution

This is the one that kills the most startups. Not because the product is bad. Because nobody knows the product exists.

Here's what I see over and over: a founder spends 6 months building. They ship. They post once on X. They get 3 likes, two from friends, one from their alt account. Then they go back to building features, hoping the next one will magically bring users.

That's not a distribution strategy. That's a hope strategy. And [hope doesn't compound](/blog/shut-up-act).

The most common lie African builders tell themselves is "if I just add one more feature, users will come." No they won't. Nobody is coming. Your product works. Your app does the thing. But you've spent zero hours on distribution. You don't know who your audience is. You don't know where they hang out. You've never DM'd a single potential user. You've never written a single piece of content about the problem you solve.

Features don't bring users. Distribution does.

Your competitor with a worse product is getting more users than you. Not because their product is better. It's not. Yours is. But they post three times a week. They reply to everyone. They write threads about the problem their product solves. They DM potential users. They show up in communities. You posted your launch tweet four months ago and went silent.

Distribution is not a one-time event. It's [a daily habit](/blog/agency-is-what-you-need). The builder who shows up every day beats the builder with the better product who shows up once. Every single time.

### What distribution actually looks like

Distribution is not "doing marketing." It's not running ads. It's not hiring a social media manager to post quotes on your brand account.

Distribution is:

- **Knowing your audience by name.** Not "young professionals in Lagos." Actual people. Who are the first 100 humans who would pay for your product? Where do they hang out online? What do they complain about?
- **Being present where they are.** If your users are in WhatsApp groups, you should be in those WhatsApp groups. Not pitching. Being useful. Answering questions. [Building trust](/blog/social-currency-is-still-currency).
- **Creating content about the problem, not the product.** Nobody wakes up wanting your software. They wake up wanting their problem solved. Talk about the problem. Become the person people think of when they think about that problem.
- **Doing things that don't scale.** DM 10 potential users today. Not a cold pitch. A genuine message: "I built this for people like you. Would it be useful?" Ten DMs a day, five days a week, for 12 weeks is 600 conversations. Some percentage of those become users. Some become evangelists. None of them happen if you don't send the first message. [Sales is not marketing](/blog/sales-is-not-marketing). DMs are sales.

## I — Infrastructure

This is the one I posted on X about in January. That post got 180,000 impressions because it hit a nerve every African builder already felt.

> African startups should stop defaulting to AWS and Kubernetes. Get a VPS on Hetzner, deploy with Coolify, and start experimenting until you start making money. Oh, and when you do start making money, still stay there!

The replies confirmed what I already knew. African startups are hemorrhaging money on infrastructure they don't need. Not because they're stupid. Because the entire developer education ecosystem is built by and for companies operating at a scale most African startups will never reach.

You watch a tutorial by someone who worked at Google. They use Kubernetes because at Google, you need Kubernetes. You use Kubernetes because the tutorial used it. Now you're paying for infrastructure designed for millions of users when you have 40.

Here's a real cost comparison I put together:

**The hype stack:**

- Vercel Pro: $20/month
- Supabase Pro: $25/month
- Auth0 Essentials: $35/month
- Total: $80/month. And that's just hosting, database, and login. No Redis, no file storage, no email.

**The lean stack:**

- Hetzner VPS: $4/month
- Dokploy/[Slipway](https://docs.sailscasts.com/slipway): free, self-hosted
- PostgreSQL: free, self-hosted
- Auth: free, built into your framework
- Total: $4/month. Same app. Same performance.

That's a 95% cost reduction. And this is just three services. Most startups I review are running five to eight managed services, each charging $10-70/month, adding up to $200-400/month for an app with a handful of users.

The worst part is the lock-in. Every managed service you adopt is a dependency you can't easily remove. Your database is on Supabase? Your auth is on Auth0 or Clerk? Your hosting is on Vercel? Good luck migrating when the prices go up. And they will go up. These are VC-funded companies that the price spike once you start getting users will be several order bigger than you imagine.

A red flag for me with a young African startup is when I see Supabase, Neon, PlanetScale, or any auth-as-a-service on their stack. It tells me you're [building from hype, not from math](/blog/the-hungry-founder-paradox).

### What lean infrastructure actually looks like

- **One VPS.** A single Hetzner server running your app, your database, and your cache. $4-22/month depending on your needs. You own it. No usage-based pricing surprises.
- **Docker for everything.** Your database, your Redis instance, your app. All in containers. All on one machine. Easy to back up, easy to migrate, easy to understand.
- **Slipway/Dokploy for deployment.** Open source, self-hosted, gives you the Vercel experience on your own server. Push to git, it deploys. No vendor lock-in.
- **Cloudflare R2 for backups.** S3-compatible storage with no egress fees. Your database backups go here. Pennies per month.
- **Build auth into your framework.** Most real fullstack web frameworks like [Sails](https://sailsjs.com) and stack like [The Boring JavaScript Stack](https://docs.sailscasts.com/boring-stack) have authentication built in or available as a library. You don't need a $35/month service to handle login.

This is not about being cheap. It's about being intentional and being a demon on cost control. [Build globally, price locally](/blog/build-globally-price-locally). Every dollar you save on infrastructure is a dollar you can spend on distribution. And distribution is what actually grows your startup.

## D — Design

This is the one nobody wants to hear. Because it's personal.

I looked at 20 African startup landing pages recently. 17 of them had the same problems. Hero text that says nothing. "Revolutionizing the future of seamless solutions." A gradient background from a template they didn't customize. Four feature cards that all look identical. Zero social proof. A CTA button that says "Get Started" but you don't know what you're getting started with. A footer with more content than the entire page.

Your product might be solid. But your landing page looks like it was built at 2am with no sleep and no design sense. Mismatched fonts. Random spacing. Colors that fight each other. Copy that says everything and nothing at the same time. Even a Tailwind UI template would be an upgrade. And that's saying something, because [good enough is the enemy of great](/blog/good-enough-is-the-enemy-of-great) and your landing page isn't even good enough.

People judge your product in 3 seconds. Three seconds. That's how long you have before they decide whether to stay or bounce. If your website looks like you don't care, they assume your product doesn't either. First impressions are permanent. Yours is costing you users.

And here's the painful part: you might be losing users not because of your product, not because of your pricing, not because of your competition. You might be losing them because your landing page didn't convince them to try the product in the first place. They never even saw what you built. They bounced at the front door.

### What good design actually looks like for a startup

You don't need a designer. You don't need a design system. You need these five things:

1. **A headline that says what you do.** Not a metaphor. Not a vision statement. What does your product do for the person reading this page? Say it in one sentence. "Send professional invoices and get paid faster." Not "Revolutionizing the creator economy."

2. **Social proof above the fold.** How many people use it? Who uses it? A testimonial, a stat, a logo wall. Something that says "other humans trust this" before the visitor has to scroll.

3. **One clear call to action.** Not three buttons that all go to different places. One button. One action. "Start free." "Book a demo." "Try it now." One.

4. **Consistent spacing and typography.** Pick one font. Use three sizes: heading, subheading, body. Use consistent spacing. This alone makes a page look 10x more professional.

5. **Show the product.** A screenshot. A demo video. A GIF. Let people see what they're signing up for. If your landing page has zero images of the actual product, you're asking people to buy something sight unseen.

## Why It's Always All Three

Here's what I've noticed after reviewing enough startups: these three problems are connected. They feed each other.

Bad infrastructure means you're spending money you should be spending on distribution. No distribution means nobody sees your website. A bad website means the few people who do find you bounce immediately.

Fix your infrastructure and you free up budget for distribution. Fix your distribution and you drive traffic to your website. Fix your website and that traffic converts into users.

The flywheel works in both directions. When all three are broken, they compound the damage. When all three are fixed, they compound the growth.

## Ship Lean

This is why I built Ship Lean. One 45-minute session that covers all three.

I look at your infrastructure and find what's costing you without adding value. I map out the distribution channels that actually work for your product. I tell you the truth about your website and what needs to change.

You walk away with a clear plan. Not vague advice. Specific steps you can execute in a week. What to cut, what to keep, what to migrate. Where to post, who to reach, how to get your first 100 users. What to fix on your site so it actually converts.

**$350** per session. African builders pay **₦75,000**.

If you're building something and struggling with any of these three problems, book a session. If you're struggling with all three, book it today.

[africanindiehackers.org/ship-lean](https://africanindiehackers.org/ship-lean)
