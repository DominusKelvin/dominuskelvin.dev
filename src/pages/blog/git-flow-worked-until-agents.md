---
layout: '../../layouts/BlogPost.astro'
title: 'Git Flow Worked For Me. Agents Need Something Faster.'
description: 'Git Flow worked for me as a solo maintainer because develop stayed hot and main stayed stable. But in an agentic world, the branch tax is no longer worth it. Git Vibe keeps the safety and drops the ceremony.'
pubDate: 'March 16, 2026'
heroImage: /covers/git-flow-worked-until-agents.png
---

I liked Git Flow for a very specific reason.

I am often a team of one.

Even when I am maintaining open source in public, the day-to-day reality is still me carrying most of the operational weight: building the feature, testing the change, cutting the release, and living with the consequences if I rushed something dumb into the stable branch.

In that world, Git Flow gave me something that felt deeply practical:

- one branch that stayed hot
- one branch that stayed stable

For me, `develop` was the hot lane.

That was where I could test ideas, let unfinished work breathe a little, and shake out the rough edges without pretending it was already production-ready. `main` was the boring lane. Once something landed there, I wanted to feel calm. I wanted to know it was stable.

As a solo builder and open source maintainer, that separation was not theoretical. It was useful.

It meant I could keep moving on the next thing without making the stable branch feel like my workshop floor after a long night.

So when I say Git Flow worked for me, I mean it.

Not in the abstract.

In my actual day-to-day work.

## Why It Eventually Started Feeling Expensive

The problem is that Git Flow buys safety with ceremony.

That trade-off can be worth it. Sometimes it is exactly the right trade-off. But the cost does not disappear just because the workflow has a nice diagram.

You pay for it in branch choreography:

- feature into `develop`
- release off `develop`
- release into `main`
- release back into `develop`
- hotfix into `main`
- hotfix back into `develop`

If you are a big team shipping versioned software with long stabilization periods, maybe that cost is justified.

If you are a fast-moving product team, a solo maintainer, or an open source operator who wants to ship in smaller batches, that cost starts to feel like paying coordination tax to coordinate with yourself.

This is not even a controversial take anymore.

Vincent Driessen, who wrote the original [successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/), later added a note saying the model was conceived in 2010 and that teams doing continuous delivery should use something simpler such as [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow).

That matters.

Because it clarifies something people miss all the time: Git Flow was never supposed to be the final law of software development. It was a fit for a certain environment.

And for a lot of modern software, that environment is gone.

## The Limitation I Felt Most As a Team of One

Here was the real issue for me.

Git Flow gave me a hot lane and a stable lane at the repository level.

But I no longer wanted isolation at the repository level.

I wanted isolation at the task level.

That is a big difference.

`develop` works when you are comfortable pouring all unfinished work for "what comes next" into one long-lived branch.

But that branch becomes a warehouse.

It accumulates unrelated changes.

It becomes a place where half-finished ideas sit beside almost-ready fixes.

It turns the question "what is ready?" into archaeology.

And as a solo maintainer, that gets old fast.

`release/*` branches started feeling like ritual around work I could often express as a version bump, a final check, and a tag.

`hotfix/*` branches started feeling like urgency with a fancier name.

And `develop` started feeling less like freedom and more like inventory.

That is before AI even enters the picture.

## Then AI Changed the Unit of Work

AI did not make me want less discipline.

It made me want a different kind of discipline.

Now I can have one agent exploring a refactor, another drafting docs, another testing a fix, while I review the work, redirect it, or throw half of it away.

Even without AI, fast coders already live this way in miniature:

- one terminal for the app
- another for tests
- another for a risky experiment
- another for a bug fix you do not want tangled into the first thing

The branch model that fits that world is not a grand taxonomy of `develop`, `release/*`, and `hotfix/*`.

It is a stable mainline plus cheap, isolated work lanes.

That is the shift.

The thing I loved about Git Flow was the separation between hot and stable.

The thing I need now is that same separation, but scoped to each task.

## GitHub Flow And Trunk-Based Development Pointed The Way

The broader industry has been moving this direction for a while.

GitHub's own docs teach a simpler shape: `main` is the definitive branch, you branch off `main`, do the work, open a pull request, and merge back into `main`.

Trunk-based development pushes even harder. The guidance around [short-lived feature branches](https://trunkbaseddevelopment.com/short-lived-feature-branches/) is blunt: branches should live briefly, merge quickly, and be deleted. If a branch hangs around too long, it starts becoming the very thing trunk-based development is trying to avoid.

That maps cleanly to how I want to build now.

Not because I suddenly became ideologically minimal about Git.

Because I want less stale inventory living in branches.

I want `main` to mean something.

I want unfinished work isolated by task, not dumped into one perpetual "next release" branch.

## What Git Vibe Changes

That is why I built [Git Vibe](https://github.com/sailscastshq/git-vibe).

Git Vibe keeps the part I liked from Git Flow and changes the part that now feels too expensive.

The model is simple:

- `main` is the only long-lived branch
- every piece of work lives under `feat/*`
- every `feat/*` branch gets its own worktree
- releases are cut directly from `main`

That is the whole idea.

No `develop`.

No `release/*`.

No `hotfix/*`.

No giant holding pen for unfinished work.

Instead, every task gets its own lane.

## How Git Vibe Actually Works

Start from a clean `main` checkout.

Run:

```bash
git vibe code add-billing-webhook
```

Git Vibe creates a short-lived branch called `feat/add-billing-webhook` and checks it out into its own worktree, usually under `../.vibe/<repo>/add-billing-webhook`.

That sounds like a Git detail. It is not.

It means that one task now has its own:

- folder
- terminal
- editor window
- test run
- dev server
- agent context

If I need another piece of work, I do not pollute the first lane. I open another one.

```bash
git vibe code fix-login-timeout && git vibe code write-launch-post
```

Now each task lives in its own room.

Not its own pile in the same room.

That is the crucial distinction.

If I rerun `git vibe code add-billing-webhook`, Git Vibe reopens the same worktree instead of creating a duplicate. So the lane is persistent while the work is active, but disposable once the work is done.

When the branch is merged locally, I run:

```bash
git vibe finish --local add-billing-webhook
```

That fast-forwards `main`, removes the worktree, and deletes the feature branch.

If the branch was merged through GitHub, I run:

```bash
git vibe finish --sync add-billing-webhook
```

That fetches `origin/main`, confirms the merge, fast-forwards local `main`, and then cleans up the worktree and branch.

Releases stay boring too:

```bash
git vibe release 0.0.2 --push
```

That cuts the release directly from `main` with a version bump commit and an annotated tag.

Git Vibe also adds light guardrails around the workflow. It can block casual commits on the base branch, enforce semantic commit messages, and keep `main` from slowly turning into a scratchpad.

In other words, Git Vibe moves the hot lane down from one long-lived `develop` branch to many short-lived task lanes.

That is the whole point.

## Why This Fits Agents And Fast Coders

Git Vibe is not only for AI agents.

It is for anybody who wants to move quickly without smearing work across the same checkout.

The agent angle just makes the need more obvious.

When every task has its own worktree by default:

- one agent can refactor safely
- another can write docs safely
- another can debug a test safely
- and none of them have to step on each other in the same working tree

But the exact same benefit applies to a human coder moving fast.

You do not need AI to benefit from not branch-hopping, not stashing all day, not wondering which half-finished change belongs to which idea, and not restarting your mental context every 20 minutes.

Git Vibe is simply Git organized around velocity with isolation.

Not velocity with chaos.

## The Real Upgrade

Git Flow gave me a hot lane and a stable lane.

I am grateful for that.

But I do not need a cathedral of branches anymore.

I need a boring mainline and cheap rooms for unfinished work.

I do not want one long-lived hot lane for everything that is not ready.

I want a stable lane and many short-lived hot lanes, each tied to a single task, each easy to open, each easy to finish, each easy to delete.

That is a better match for how I actually build now:

- as a team of one
- as an open source maintainer
- as someone who wants `main` to stay trustworthy
- as someone who wants unfinished work isolated by task
- as someone who increasingly works with agents and parallel attempts

The old model separated stable from unstable.

The new model separates task from task.

That is a better abstraction.

## Git Flow Worked For Me. Git Vibe Fits Me Better.

I did not build Git Vibe because I wanted a clever new Git wrapper.

I built it because I wanted to keep the feeling Git Flow gave me without paying the branch tax Git Flow demands.

I still want `main` to feel stable.

I still want room to test new work.

I still want discipline.

I just do not think the right place for that discipline is a permanent `develop` branch anymore.

I think it belongs in a boring `main`, short-lived `feat/*` branches, and isolated worktrees that disappear when the job is done.

That is the workflow I wanted as a solo maintainer.

It is the workflow I want even more in the age of agents.

Git Flow gave me one hot lane and one stable lane.

Git Vibe keeps the stable lane and gives every task its own hot lane.

That is the upgrade.
