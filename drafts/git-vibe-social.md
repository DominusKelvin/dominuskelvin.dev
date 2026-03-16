# Git Vibe Launch Social Drafts

## X

I enjoyed Git Flow.

A lot of people did.

But in an agentic world, the extra steps and ceremonies are usually not buying us enough anymore.

We do not need more branch choreography.
We need faster iteration and cleaner isolation.

That is why I built Git Vibe:

- `main` as the only long-lived branch
- every `feat/*` branch created as its own worktree
- releases cut directly from `main`

Git Flow gave us discipline.
Git Vibe keeps the discipline and removes the drag.

New post:
https://dominuskelvin.dev/blog/git-flow-worked-until-agents

Install:
`curl -fsSL https://raw.githubusercontent.com/sailscastshq/git-vibe/main/install.sh | bash`

Skill:
`npx skills add sailscastshq/git-vibe`

## X Thread

1. I enjoyed Git Flow. A lot of people did.

2. It solved real problems in a slower release world: `develop` for integration, `main` for production, `release/*` for stabilization, `hotfix/*` for emergencies.

3. But agentic work changes the bottleneck.

4. Now one person can run multiple AI-assisted work streams in parallel. The problem is no longer "how do we add ceremony?" It is "how do we preserve clarity while iterating much faster?"

5. That is where Git Flow starts to feel heavy:

- `develop` becomes a second main branch
- `release/*` adds ceremony many teams do not need
- `hotfix/*` adds branch taxonomy more than real leverage
- the merge choreography keeps multiplying

6. The real unlock is not more branches. It is better task isolation.

7. That is why worktrees matter so much. Every active task gets its own folder, terminal, branch, and AI lane. No stash gymnastics. No context bleed.

8. Git Vibe is my attempt to keep the discipline I liked from Git Flow while dropping the drag:

- `main`
- `feat/*`
- every `feat/*` branch is a worktree
- release from `main`

9. I wrote about it here:
https://dominuskelvin.dev/blog/git-flow-worked-until-agents

10. Install:
`curl -fsSL https://raw.githubusercontent.com/sailscastshq/git-vibe/main/install.sh | bash`

11. Install the skill too:
`npx skills add sailscastshq/git-vibe`

## LinkedIn

I enjoyed Git Flow.

I really did.

It gave many of us a sense of discipline at a time when releases were slower, CI was weaker, and shipping software needed more ceremony.

But I do not think Git Flow is the right default for the agentic era.

The reason is simple: AI has changed the bottleneck.

Today, one developer can run multiple parallel work streams with AI. One agent can refactor, another can write docs, another can debug a failing path, while the human reviews, decides, and ships.

In that world, the extra steps of Git Flow often stop helping:

- `develop` becomes a second `main` branch you have to babysit
- `release/*` branches add ceremony many teams do not need
- `hotfix/*` branches create more taxonomy than value
- merge choreography multiplies

What teams need now is not more branch ceremony.

What they need is faster iteration with cleaner isolation.

That is why I think worktrees matter more than most people realize.

A worktree lets every active task have its own branch, folder, terminal, test run, and AI lane without recloning the repo. It is one of the clearest ways to make parallel human + AI work sane.

That idea is what led me to build Git Vibe.

Git Vibe is a simpler workflow:

- `main` is the only long-lived branch
- all work branches stay under `feat/*`
- every `feat/*` branch is created as its own worktree
- releases are cut directly from `main`

Git Flow gave us discipline.
Git Vibe tries to keep the discipline while removing the drag.

I wrote a detailed piece about why Git Flow worked, where it falls short for agentic work, and why worktrees should be part of the conversation now.

Read it here:
https://dominuskelvin.dev/blog/git-flow-worked-until-agents

Git Vibe:
https://github.com/sailscastshq/git-vibe
