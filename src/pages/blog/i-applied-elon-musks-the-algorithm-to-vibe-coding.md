---
layout: '../../layouts/BlogPost.astro'
title: "Applying Elon Musk's The Algorithm To Vibe Coding"
description: 'The Algorithm is a useful discipline for builders with more leverage than ever: question the requirement, remove what is unnecessary, simplify what remains, shorten the loop, and automate last.'
pubDate: 'March 30, 2026'
heroImage: /covers/i-applied-elon-musks-the-algorithm-to-vibe-coding.png
---

For the past few weeks, I have kept returning to Elon Musk's "The Algorithm." What interests me here is not the persona, but the sequence itself. The version I mean is the five-step sequence that showed up in Walter Isaacson's masterful [biography of Musk](https://a.co/d/0c0Wk3n8) and is now framed more directly in Jon McNeill's book [The Algorithm](https://a.co/d/0c1UxQOT).

It is simple:

1. Question every requirement.
2. Delete any part or process you can.
3. Simplify and optimize what remains.
4. Accelerate cycle time.
5. Automate last.

What has stayed with me is not that the steps are new. None of them are. We already know simplification is good, speed matters, and automation can help. What matters is the order.

In practice, many builders apply it in reverse. They automate first, optimize second, speed things up third, simplify only after the system starts becoming painful, and almost never go back to ask whether the original requirement deserved to exist in the first place. That is how people end up building systems that add cost without adding much value.

That matters more now because we can all build much faster than before. One person can now ship a landing page, onboarding flow, dashboard, checkout, support bot, and AI workflow in a weekend. That is real leverage. It also makes it easier to produce needless complexity.

That is why this framework feels especially relevant now.

Call yourself an [indie hacker](https://africanindiehackers.org), vibe coder, founder, entrepreneur, solo builder, or product engineer. The label does not matter much. The work now looks increasingly similar. You are shaping the offer, cutting scope, [deciding where state lives](https://sailscasts.com/courses/durable-ui), writing copy, fixing onboarding, handling support, and deciding what stays manual versus what deserves automation.

What makes The Algorithm useful is that it gives order to a kind of work that now arrives all at once.

It also aligns with something I wrote years ago in [Write The Code You Need Today](/blog/write-the-code-you-need-today). That post was really saying: do not build for an imagined future before the present has earned it. The Algorithm feels like that instinct applied to the whole business of building products.

## Vibe Coding Needs Sequence

In [Vibe Coding Is Not The Insult You Think It Is](/blog/vibe-coding-is-not-the-insult-you-think), I argued that building in a more fluid, conversational, intuitive way is not inherently unserious. I still think that. Without sequence, though, vibe coding becomes a fast way to ship too much.

Vibe coding is useful because it shortens the distance between an idea and a working artifact. The Algorithm is useful because it imposes sequence on that speed. One helps you generate options quickly. The other helps you decide which of those options deserve to survive.

The problem with AI-assisted building is not that it makes things fast. The problem is that it makes the wrong things fast too. You can now generate a page, a feature, a workflow, and an architecture that looks plausible on first pass in very little time. If judgment is weak, that leverage makes overbuilding easier.

That is why this framework matters. It does not resist speed. It gives speed discipline.

## 1. Question Every Requirement

This is the step most builders skip because requirements sound respectable. That is part of what makes them hard to challenge.

"We should probably support multiple roles."

"We should probably have notifications."

"We should probably offer monthly and annual billing."

"We should probably expose an API."

"We should probably think about enterprise now."

The more I build, the more I think a lot of "requirements" are really one of these:

- a preference pretending to be necessary
- fear about future scale
- a copy of what another product has
- a workaround for an earlier bad decision

AI makes this worse because weak ideas can now become very convincing software in a few hours. What used to die because implementation was expensive can now live long enough to become tech debt.

So the first job is not implementation. It is questioning. Who wants this? What pain does it solve? What breaks if we remove it? What evidence says it matters now? Is this a real constraint like security, privacy, accessibility, or payments? Or is it simply a preference being presented as a requirement?

A lot of work falls away under that kind of scrutiny. Multi-role permissions disappear. Three-tier pricing pages disappear. Fancy onboarding trees disappear. Admin surfaces disappear. Plugin systems disappear. "Platform" work disappears.

A lot of modern product work is inherited complexity mistaken for progress.

If you have been reading my recent writing, this should sound familiar. I have been making this same argument from the architecture side in [the SPA conspiracy series](/blog/the-conspiracy-of-single-page-applications), [It's client-server not client/server](/blog/client-server), and [the Rails amnesia piece](/blog/javascript-ecosystem-amnesia). A lot of what gets presented as a "modern requirement" is just fallout from an earlier decision nobody stopped to question. We keep treating repair work as if it were progress.

This is one reason I like [The Boring JavaScript Stack](https://docs.sailscasts.com/boring-stack) so much. It already begins by questioning assumptions. Do you really need a separate API for page-first product work? Do you really need client state mirroring server truth? Do you really need realtime here? Do you really need a queue, cache, or search service right now? Or are you solving for problems you do not actually have yet?

That is The Algorithm's first step in architecture form.

## 2. Delete Any Part Or Process You Can

Once a requirement survives questioning, the next move is not to build everything around it. The next move is to delete.

This is the step builders need most because we are trained to add. More features. More options. More settings. More roles. More plans. More "just in case."

But products usually get worse from carrying too much, not too little. Every extra field becomes friction. Every extra page becomes maintenance. Every extra role becomes policy. Every extra state becomes debugging. Every extra abstraction becomes a future you have to carry.

This is especially true when you are small. In a tiny product, complexity has nowhere to hide. It comes back to you as support, bugs, copy drift, and general exhaustion.

That is why I have become suspicious of anything that looks "complete" too early. A strong first version usually looks narrow: one clear user, one sharp promise, one happy path, one pricing idea, one primary action. Not because ambition is bad, but because undisciplined ambition is expensive.

For an early product, smaller is usually stronger. It is easier to explain, easier to sell, easier to support, easier to test, and easier to improve. Deletion is how ambition stays focused on the work that matters.

## 3. Simplify And Optimize What Remains

Only after questioning and deleting should you simplify. This matters because a lot of people think simplification means cleaning up after complexity. Build the big thing first, neaten it later. That is not simplification. That is repair work.

Real simplification makes the surviving thing smaller and clearer. Fewer nouns. Fewer handoffs. Fewer states. Fewer files. Fewer places where truth can drift. Fewer ways to do the same thing.

You can see the same instinct in DHH and Taylor Otwell. Different products, different styles, same principle. One good path beats a maze of options. Common things should feel easy. Software should not require a long explanation before you can add a form.

Laravel feels elegant because Taylor keeps smoothing the common path. Basecamp feels calm because DHH keeps refusing unnecessary complexity. Good software is often shaped more by what it leaves out than what it adds.

That is also why boring architecture keeps making sense to me. Let the server own more. Let the database stay the source of truth. Render the page with the data it actually needs. Do not invent a second router, a second state system, and a second validation story unless reality forces you to.

That is not old-fashioned. That is just refusing to make your app harder than it needs to be.

And this is not only about code. One clear promise is simpler than a homepage full of hedging. One obvious CTA is better than six equal buttons. One onboarding path is better than a branching tree built to look impressive. Simplicity makes the path easier to understand and easier to use.

## 4. Accelerate Cycle Time

Only after that should speed enter the picture. This is the part of the framework that gives speed a useful direction.

A lot of teams say they want velocity. What they usually mean is more output. That is not the same thing. Cycle time is really about how fast you can learn whether you are right.

That changes the question. Not "How do we move faster?" but "How do we shorten the distance between decision and evidence?"

That question leads to better decisions: a landing page before a full product, a manual service before a platform, a page stub before a subsystem, a request-level test before a browser suite, a narrow slice before a quarter of parallel work.

This is also where AI is genuinely useful. Not just because it writes code, but because it shrinks loops. You can test an idea faster, prototype a flow faster, write copy faster, compare two approaches faster, and turn a fuzzy thought into something you can react to while the context is still fresh.

That is real leverage. But only after the earlier steps. Otherwise you are just using better tools to move faster in the wrong direction.

One thing I made explicit in the Boring Stack skill is the proof ladder. Start with the cheapest honest proof: written hypothesis, static mock, page stub, local happy path, focused test, real user, production signal. The mistake many builders make is skipping the cheap proofs and jumping straight to the expensive ones.

For small teams, that is costly. What matters is not more motion, but shorter loops.

## 5. Automate Last

This step is especially relevant in 2026. AI has made it very easy to automate work we do not understand.

Content. Support. Prospecting. Onboarding. Code generation. Project management. Testing. Deployment.

All of it is now within reach. That is exactly why "automate last" matters.

Automation does not create judgment. It encodes a workflow into a repeatable system. If the workflow is clear, great. If the workflow is confused, you have only made it easier to repeat the same mistake.

The wrong move is using automation to discover the process for you. The right move is using automation after the process is already clear.

This is true of scripts, CI, background jobs, and AI agents too. AI agents should be treated as automation tools, not as substitutes for process clarity.

So ask the usual questions. Is the task bounded? Do we know what good output looks like? Can a human review it quickly? Do we understand how it fails? Who owns it when it breaks?

If the underlying workflow is still unclear, giving it to an agent does not create leverage. It only scales the confusion.

That is why so many agent demos look impressive in a short demo and unreliable in day-to-day use. They are automating ambiguity.

## The Algorithm Skills

After thinking through all of this, I ended up turning the framework into a reusable skill inside [The Boring JavaScript Stack repository](https://github.com/sailscastshq/boring-stack/tree/main/skills/the-algorithm). That skill is now the source of truth for how I want to use this idea while building.

If you want to install it for your agent, you can do it like this:

```bash
npx skills add sailscastshq/boring-stack/skills/the-algorithm
```

If you are using Codex, Cursor, or whatever AI-assisted setup you use, restart it after installing so it picks up the new skill.

What I like about the Boring Stack skills in general is that they are divided by concern. There is `sails` for the framework, `inertia` for page and form flows, `waterline` for data modeling, `authentication`, `payments`, `email`, `quest`, `realtime`, `testing`, `beautiful-ui`, `durable-ui`, `shipwright`, and now `the-algorithm` for product judgment and scope control.

This skill follows the same pattern.

### Five Steps

This is the core sequence itself: question the requirement, delete what should not be there, simplify what survives, tighten the loop, automate last.

### Product Shaping

This is where the skill moves from code to product work: scope, offer, UX, pricing, launch, and the shape of the MVP itself.

### Simplify the Design

This part translates the framework into design and architecture choices. When should you stay page-first? When do you actually need a queue, realtime, or more infrastructure? When should the simpler default win?

### Feedback Loops

This is the cycle-time part. It helps the agent look for the cheapest honest proof instead of jumping straight to the most expensive implementation.

### Automation Last

This is where the guardrails around jobs, CI, agents, workflows, and AI automation live. It forces the question: are we automating clarity or automating confusion?

### Review Prompts

This is the practical layer. These are the prompts and questions you can use when planning, pruning, reviewing, or steering an agent.

What I like about that structure is that it stays modular. You are not loading one broad philosophical document into an agent. You are giving it a single mental model and translating that model into usable rules for the kind of decision the agent is making.

In other words, it is meant to be practical. The point is not to quote Musk in a planning document. The point is to avoid building unnecessary complexity with more confidence and speed than before.

That is the deeper reason this matters to me. In the age of AI, the bottleneck is not typing speed. It is judgment, [taste](/blog/you-want-originality-too-early), and [agency](/blog/agency-is-what-you-need). Vibe coding helps us generate possibilities. The Algorithm helps us decide what deserves to survive.

For builders working with this much leverage, that is a sound way to build.
