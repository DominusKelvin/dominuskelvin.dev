---
layout: '../../layouts/BlogPost.astro'
title: 'Git Flow Worked For Me. Agents Need Something Faster.'
description: "I enjoyed Git Flow and I understand why so many teams did. But in an agentic world, the extra branches, release ceremonies, and branch-switching overhead slow down the one thing that matters most now: iteration."
pubDate: 'March 16, 2026'
---

I have enjoyed Git Flow.

I say that upfront because I do not want this essay to sound like one of those smug retrospectives where someone rediscovers a simpler workflow and pretends everybody who came before was foolish.

They were not.

Git Flow solved real problems for real teams. A lot of us liked it because it gave shape to a messy world. It gave us `develop` for integration, `main` for production, `feature/*` for work in progress, `release/*` for stabilization, and `hotfix/*` for emergencies. It felt disciplined. It felt safe. And when release processes were slower, CI was weaker, and deployment was a bigger ceremony, that discipline made sense.

You can still see why it became popular by looking at Vincent Driessen's original [successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/) and Atlassian's write-up of the [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). The selling point was never just more branches. The selling point was **control**.

And if I am being honest, I am still sympathetic to that instinct.

I like coherence. I like systems. I like workflows that make it harder to be careless.

But the world that made Git Flow feel like the right amount of structure is not the world I am building in now.

We are in an agentic world now.

And agentic work needs something faster.

## What Changed

When I say "agentic work," I mean a way of building where software creation is no longer one human, one branch, one terminal, one pace.

Now I can have:

- one AI agent exploring a refactor,
- another one writing docs,
- another one testing a fix,
- while I review code, answer product questions, and make the calls that actually matter.

The number of parallel attempts I can run has gone up dramatically.

That changes the bottleneck.

The bottleneck is no longer "how do I impose enough ceremony so nobody breaks production by accident?"

The bottleneck is "how do I preserve clarity while letting iteration happen at a much higher rate?"

That is a different problem.

Git Flow was optimized for a world where release management needed more ceremony.

Agentic work is optimized for a world where **feedback loops need less friction**.

## Why People Loved Git Flow

I want to linger here a little longer, because if we skip this part, the rest of the article becomes cheap.

Git Flow was attractive because it offered a few things many teams badly wanted:

### 1. It separated "what we are building" from "what we are shipping"

`develop` gave teams a place to integrate ongoing work while keeping `main` tied to production.

That felt reassuring.

### 2. It gave releases a staging lane

`release/*` branches let teams freeze scope, fix bugs, bump versions, and get comfortable before the final merge.

Again, reassuring.

### 3. It made hotfixes feel official

If production broke, `hotfix/*` gave everyone a clear story for how emergency work should happen.

### 4. It fit a slower release culture

If releases were infrequent, if QA was heavier, if deployment had more human coordination, then having special lanes for special situations seemed mature rather than wasteful.

And to be fair, sometimes it was mature.

There are still environments where that structure is justified: heavily regulated software, products with multiple maintained versions, teams with strict release trains, or organizations where deployment is still a coordinated event rather than a routine act.

So no, I am not saying Git Flow was dumb.

I am saying it was optimized for a different era.

## Where Git Flow Falls Short In Agentic Work

In an agentic world, the extra steps and ceremonies are not usually buying you enough.

They are just slowing you down.

### `develop` becomes a second main branch you have to babysit

This is one of the biggest problems.

In theory, `develop` is the integration branch and `main` is the production branch.

In practice, for a lot of product teams, `develop` becomes shadow `main`:

- code lands in `develop`,
- everyone treats it as the real center of gravity,
- then somebody has to merge it forward again,
- and now you are paying a tax just to keep two long-lived branches aligned.

That tax might feel small once.

It does not feel small after fifty releases.

### `release/*` branches add ceremony even when the release is already obvious

Most teams do not need a whole extra branch to bump a version number, make one or two final checks, and tag a release.

If your mainline is healthy and your changes are landing in small batches, a release branch often becomes a formal ritual around work that could have been a single release commit on `main`.

### `hotfix/*` branches duplicate a story `feat/*` can already tell

I understand the intention behind `hotfix/*`, but in practice it usually adds naming ceremony more than operational value.

If all urgent work is just work that needs to happen now, then forcing a separate branch taxonomy is often unnecessary. The urgency lives in your priority, not your branch prefix.

### The merge choreography keeps multiplying

This is the real pain:

- feature to develop,
- release to main,
- release back to develop,
- hotfix to main,
- hotfix back to develop.

That is a lot of movement for teams who mostly just want to ship product.

Every extra branch in the choreography is another place for drift, confusion, and merge noise to accumulate.

## The Part Git Flow Really Struggles With: Parallel AI Work

Git Flow was not built for a world where one person might run multiple work streams in parallel from the same machine.

But that is exactly the world we are entering.

When you are using AI seriously, you do not want one giant working tree where unrelated experiments keep colliding.

You do not want:

- one branch with three half-finished ideas,
- stash stacks you no longer trust,
- uncommitted changes blocking context switches,
- test runs from one task interfering with another,
- or terminal tabs where you can no longer remember what each checkout is supposed to represent.

This is where many teams still have the right instinct and the wrong tool.

They know they need isolation.

They just keep reaching for more branch categories instead of better workspace isolation.

## Why Worktrees Matter More Than Most People Realize

If you have never used Git worktrees seriously, here is the plain-English version:

**A worktree lets you check out another branch into another folder without cloning the repository again.**

That sounds small. It is not small.

It means every active task can have its own room.

That room can have:

- its own branch,
- its own terminal session,
- its own test run,
- its own editor window,
- its own AI agent,
- and its own mental context.

This is much easier to understand when you stop thinking of worktrees as a Git trick and start thinking of them as **task isolation**.

### Imagine your work like a house

Without worktrees, every task is sharing the same room.

You are moving chairs around every few minutes:

- now this room is for a UI change,
- now it is for a production fix,
- now it is for a blog post,
- now it is for a refactor,
- now it is for a release.

That gets chaotic fast.

With worktrees, each task gets its own room.

You do not need to clean up one room just to step into another.

That is the benefit people understand immediately once they use it.

### Worktrees reduce context switching cost

Branch switching sounds cheap until you are doing it all day.

But branch switching often comes with hidden costs:

- stashing,
- checking whether files are clean,
- restarting dev servers,
- rerunning tests,
- reopening tabs,
- and reconstructing what you were doing.

A worktree cuts a lot of that cost out.

The context is waiting for you where you left it.

### Worktrees make AI orchestration safer

This is where I think the conversation needs to catch up.

When every active task gets its own worktree, you can assign one task to one agent without cross-contamination.

That means:

- one agent can draft docs,
- another can refactor a controller,
- another can debug a failing test,
- and none of them need to step on each other in the same checkout.

This is not just convenient.

It is operationally saner.

## GitHub Flow And Trunk-Based Development Pointed In The Right Direction

I do not think Git Vibe appeared from nowhere.

It is really the result of following simpler ideas to their logical conclusion.

[GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow) made a strong case for lighter-weight branching around a stable mainline. [Trunk-based development](https://trunkbaseddevelopment.com/) pushed even harder on short-lived branches, small batches, and frequent integration.

Those workflows were already closer to what modern teams need:

- fewer long-lived branches,
- smaller units of work,
- faster integration,
- and less ceremonial branch management.

What I think they still left underemphasized, for the world we are moving into, is the importance of **workspace isolation**.

That is where `git worktree` changes the conversation.

And Git's own [worktree documentation](https://git-scm.com/docs/git-worktree) makes it clear that the feature was built for maintaining multiple working trees attached to the same repository. Once you experience that in an AI-heavy workflow, it becomes hard to go back.

## What Git Vibe Is Trying To Do

Git Vibe is my attempt to keep the discipline I liked from Git Flow while dropping the ceremony I no longer need.

The model is simple:

- `main` is the only long-lived branch,
- all work branches live under `feat/*`,
- every `feat/*` branch is created as its own worktree,
- releases are cut from `main`,
- and you finish a task by merging or syncing, then cleaning up the worktree.

That is it.

No `develop`.

No `release/*`.

No `hotfix/*`.

Just one mainline, isolated work lanes, and faster iteration.

That is why I built `git vibe`.

Not because I suddenly hate Git Flow.

But because I needed a workflow that behaves like this era feels.

## The Real Benefit Is Not Less Git. It Is More Momentum.

I want to be careful here.

The point of Git Vibe is not that it uses fewer branches and therefore wins some minimalist purity contest.

The point is that it reduces drag in the places that now matter most:

- starting work quickly,
- running multiple efforts in parallel,
- keeping `main` meaningful,
- avoiding stash gymnastics,
- reducing merge ceremony,
- and helping humans and agents collaborate without confusion.

That is the real win.

Momentum.

In the old world, the fear was chaos.

In this world, the bigger danger is drag.

## I Still Respect Git Flow

I do.

Git Flow taught many teams good habits:

- think about release discipline,
- take branch hygiene seriously,
- do not be casual about production,
- and treat workflow as part of engineering, not an afterthought.

I am grateful for that.

But gratitude should not turn into inertia.

A workflow can be right for one era and wrong for the next.

That does not make the old workflow foolish.

It just means the optimization target moved.

## The Agentic Era Needs Faster Rails

If AI is going to make software creation more parallel, then our workflows need to become more legible under parallelism.

That means:

- smaller work units,
- fewer long-lived branches,
- fewer ceremonial merges,
- more frequent integration,
- and stronger task isolation.

That is why I think Git Flow falls short for agentic work.

It assumes the extra steps are worth the safety they buy.

For many modern product teams, they are not.

Not anymore.

I enjoyed Git Flow.

A lot of people did.

But the workflow I want now is one where every active task gets its own lane, `main` stays real, and iteration can move as fast as the work now demands.

That is what Git Vibe is about.
