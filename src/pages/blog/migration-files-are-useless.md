---
layout: '../../layouts/BlogPost.astro'
title: 'Migration Files Are Useless'
description: 'Migration files promised reproducible schema evolution. In practice they often create drift, replay headaches, and fake safety. I prefer Sails auto-migrations in development and Slipway schema diff in production.'
pubDate: 'March 18, 2026'
heroImage: /covers/migration-files-are-useless.png
---

Migration files were clutch for the industry. They gave developers a way to stop treating database changes like tribal knowledge and start treating them like code. They brought order to a mess that used to live in shell history, half-remembered wiki pages, and one senior engineer's memory.

They were also a mistake, or at least they stopped being as clean as their mythology. The problem is not that database changes need ceremony. The problem is that the specific ceremony of hand-authoring and preserving an ever-growing history of migration files does not consistently deliver the promise people attach to it. It sounds rigorous. It often feels rigorous. But in real teams, real branches, real incidents, and real production databases, it breaks its own illusion all the time.

So this is not really a childish "migrations bad, vibes good" post. It is simpler than that. Migration files solved a real problem. They just did not become the final answer.

## The Promise Was Beautiful

[Rails' migration guide](https://guides.rubyonrails.org/active_record_migrations.html) says migrations let you evolve your database schema over time in a reproducible way. [Django's migration docs](https://docs.djangoproject.com/en/5.2/topics/migrations/) go even harder and tell you to think of migrations as a version control system for your database schema.

That framing won because it is genuinely compelling. You make a schema change in code, commit the migration file, let your teammates pull it, and trust that staging and production will both move forward the same way. That is not a silly idea. It is a serious improvement over chaos.

Migration files gave teams a reviewable history. They made it easier to discuss destructive changes before they happened. They gave deployment pipelines something explicit to run. They made "what changed in the database?" a question with an answer in source control instead of an argument in Slack.

That is why they became standard, and for the mess they were cleaning up at the time, they absolutely deserved that status.

## Where The Promise Starts Leaking

The trouble starts when people confuse a useful abstraction with reality, because reality is messier. As [the Rails docs](https://guides.rubyonrails.org/active_record_migrations.html) put it, "Migrations, mighty as they may be, are not the authoritative source for your database schema. Your database remains the source of truth."

The same guide also says it is usually faster and less error-prone to load a schema snapshot than to replay the full migration history, because old migrations can fail when application code or external dependencies have evolved.

That is a massive admission if you stop and think about it. The framework that helped popularize migration culture is telling you that the nice story about a perfect linear history is not the full truth. The actual database is truth. The schema snapshot is often a more reliable reconstruction mechanism than the migration files themselves.

And [Django's docs](https://docs.djangoproject.com/en/5.2/topics/migrations/) tell a similar story once you read beyond the glossy pitch. Yes, they say migrations are like version control for your schema. But the same page has to explain branch linearization, inconsistent history, irreversible operations, historical model weirdness, and the fact that if you manually edit the database, Django may not detect the mismatch until you start getting errors.

That is the pattern: the sales pitch is linear, but the lived experience is negotiated.

## Migration Files Usually Create Three Sources of Truth

This is the part people do not say loudly enough. Migration files are often presented as if they create one clear source of truth. In practice they usually create three: the current model definitions, the migration history, and the actual live database. Those three things drift apart more often than migration purists like to admit.

[Prisma's official troubleshooting docs](https://www.prisma.io/docs/orm/prisma-migrate/workflows/troubleshooting) are useful here precisely because they are honest. They document migration history conflicts caused by switching branches. They document schema drift caused by changing the database outside migrations. They document the need for a shadow database just to detect that drift in development.

They even tell you that if the manual change is the truth you want to keep, you may need to `db pull` the database back into your schema and then generate a new migration to reconcile history with reality.

That is not some fringe failure mode. That is the industry quietly admitting that history and state diverge.

And if you want another confession from the tooling world, [Flyway has a `repair` command](https://documentation.red-gate.com/flyway/reference/commands/repair) whose entire job is to repair the schema history table, realign checksums, and mark missing migrations as deleted. Again, useful tool. Honest tool. But the existence of that tool says a lot. If migration history were naturally clean and self-healing, "repair the history table" would not need to be a first-class workflow.

This is why I say migration files are a mistake when people treat them like sacred objects. Once your workflow needs branch conflict handling, checksum repair, schema drift detection, fake-initial flags, historical model caveats, and production hotfix reconciliation, what you really have is not a pristine source of truth. You have a negotiation mechanism. A useful one, sometimes, but still a negotiation mechanism.

## The Worst Part Is The Duplication

The deeper annoyance for me is not even the drift. It is the duplication of thought. When I model data, I am thinking in terms of the shape of the system: what entities exist, what fields they have, what should be unique, what belongs together, and what the relationships are. That thinking already lives naturally in the model definition.

Then migration-file culture asks me to repeat the same truth in another format. Now I must narrate the change as an imperative file as well: add this column, rename that field, create this table, drop that index, maybe add a down migration, maybe write a data backfill, maybe edit the generated file, maybe fix the merge conflict later, maybe keep that file around for five years because some future environment might need to replay it.

A lot of the time, that is not discipline. It is just duplicated bookkeeping. And the more ordinary the schema change is, the more pointless it feels.

## MongoDB Did Not Win Only Because Of This, But It Helped

I do not think MongoDB became popular only because developers hated migration files. That would be too neat. But I absolutely think migration fatigue was part of the emotional story.

[MongoDB's own material on flexible data models](https://www.mongodb.com/resources/basics/flexible-data-model) emphasizes the appeal directly: the document model stores semi-structured and unstructured data without a rigid schema, making it easier to adapt to changes without extensive redesign. That promise felt liberating to a lot of developers, especially teams tired of stopping every few minutes to formalize yet another schema step before they could continue moving.

And even [Prisma's docs quietly reflect that difference](https://www.prisma.io/docs/orm/prisma-migrate/workflows/troubleshooting): their migration troubleshooting guide explicitly says it does not apply to MongoDB, and that `db push` is used for Mongo instead of `migrate dev`.

That distinction matters. When the schema is treated as something you can push toward the database instead of replay as history, the experience changes. The developer's mental model changes too. You stop thinking, "What migration file should I write?" and start thinking, "What should the shape be now?"

That is much closer to how most people actually think when they are designing software. The beauty of what I am building with [Slipway](https://docs.sailscasts.com/slipway) is that you can get some of that fluidity while still using PostgreSQL or MySQL. That is the real prize. Not abandoning relational databases. Abandoning needless migration theater.

## Sails Is Refreshingly Honest About This

Sails comes at this problem from a healthier angle. It does not begin by treating a hand-written migration file as the primary artifact of schema design. It begins with the model.

In a Sails app, you describe the shape of your data in your [Waterline models](https://sailsjs.com/documentation/concepts/models-and-orm/models), and from there the framework can reconcile the datastore to match that shape during development.

That is a very different philosophy from frameworks that train you to generate a new migration file every time a thought about your schema passes through your head.

[Sails' model settings docs](https://sailsjs.com/documentation/concepts/models-and-orm/model-settings) are explicit about the split. If you are dealing with production data you care about, use manual migrations. If you are developing locally or running automated tests, auto-migrations can save you tons of time.

That is the kind of honesty I trust because it names the real trade-off instead of pretending one ritual should govern every stage of software development.

So the Sails way of thinking is not "migrations are fake" or "production safety does not matter." It is model-first, auto-migrate where speed is the point, and lock things down where the stakes are real.

If I am using a relational database, I can use `migrate: 'alter'` while iterating locally. If I want to wipe and rebuild fake data, I can use `drop`. In production, Sails forces `migrate: 'safe'` as a failsafe. The framework is not lying to me. It is not pretending my local convenience trick should be the same thing as my production change-management strategy.

Better still, [the same Sails docs](https://sailsjs.com/documentation/concepts/models-and-orm/model-settings) say that if I add a new attribute on a model backed by MongoDB, that is no big deal, but if I add one on MySQL, a column must be added. That sounds obvious, but it reflects the larger virtue here: Sails talks about schema reality plainly. It does not wrap datastore differences in dogma.

And that is the part I really care about as a builder. I do not miss migration files when I am building Sails apps. I change the Waterline model, lift the app, and keep moving. The DX is super dope because the framework is helping me stay inside the actual thought process of application design instead of dragging me into a parallel bureaucracy.

## The Better Production Story Is Desired State Plus Diff

Now let me make the more important argument. I am not saying "just run auto-migrate in production and pray." What I am saying is that migration files are not the only grown-up answer.

The model I increasingly prefer is simple: the model definitions in source control express intended state, the live database expresses actual state, and production migration is the diff between those two.

That is exactly why [Dock in Slipway](https://docs.sailscasts.com/slipway/dock) feels right to me. Dock reads your Waterline models, inspects the actual PostgreSQL or MySQL schema, compares the two, generates the SQL to synchronize them, and lets you review and apply that migration from the dashboard.

That is a far cleaner mental model for many teams. You are no longer preserving a sacred pile of hand-authored historical scripts just to add one more nullable column in 2026 because somebody added one in 2021 and somebody renamed another in 2023.

Instead you are asking a simpler, more honest question: what does the app say the data model should be today, and what does the database look like right now? From there, the tool computes the delta.

That is not childish. That is not unserious. It is closer to how infrastructure tools already work in other domains: desired state on one side, current state on the other, diff in the middle, review before apply.

And for people who love PostgreSQL but hate migration files, that is the experience that has been missing for too long. MongoDB gave people relief by relaxing the schema. Slipway can give relational developers relief by relaxing the migration ceremony.

## What Becomes The Source Of Truth Then?

This is where I think people get confused. When I say the model and source control should be the source of truth, I do not mean the live database stops mattering. That would be childish. The live database is still the truth of what is currently deployed.

What I mean is simpler: the model definitions in source control should be the source of truth for intended application structure, the live database should be the source of truth for deployed state, and the migration system should exist to reconcile those two realities instead of pretending to replace them with a holy archive of imperative files.

That distinction matters. Once you start treating migration files as canonical truth, you end up protecting the history more than the system. You become loyal to the ledger instead of loyal to the shape of the product you are actually trying to build.

I do not want that. I want the application model to stay legible, the production state to stay inspectable, and the change set between them to stay reviewable. That is a better split of responsibility.

## The Hard Cases Do Not Save The Pattern

The strongest objection usually comes from the hard cases: huge production tables, complex backfills, semantics rewrites, triggers, or multi-step rollouts that need to be choreographed carefully across deploys.

Fine.

But that is not really a defense of migration-file culture.

That is just an admission that complicated operational work sometimes needs bespoke operational work.

[Rails itself now advises against using migration files for many data migrations](https://guides.rubyonrails.org/active_record_migrations.html), largely because rollbacks are hard, performance can suffer, and schema changes and data changes have different lifecycles. [Django also documents irreversible operations and historical model constraints](https://docs.djangoproject.com/en/5.2/topics/migrations/). That should humble everybody a bit.

And that is exactly my point. The edge cases are edge cases. They are not a good argument for making handwritten migration files the center of ordinary schema evolution.

Most of the time, what developers need is not an artisan migration file. They need a truthful representation of the schema, a reliable way to inspect what exists, and a safe way to apply the delta. That is different. And better.

## Why I Gladly Build Differently Here

This is why I do not feel deprived when I build with Sails. I genuinely do not miss the file-generation ritual. In development, Sails auto-migration lets me stay close to the model and keep momentum. In production, Slipway gives me a schema diff workflow that respects the database enough to make me review the SQL before I apply it.

That combination feels closer to what developers have always wanted than the migration-file orthodoxy ever did. It gives you speed without pretending production does not exist. It gives you relational databases without forcing you into ceremony for every tiny schema change. It gives you a model-first workflow in source control without making you rent another monthly developer tool just to regain sanity around your own schema.

And yes, I think a lot of MongoDB's emotional appeal came from the fact that developers did not want to fight migration files anymore. The relational world should have answered that pain much earlier. With Sails and Slipway, I think we finally have a pretty compelling answer.

So I am comfortable being blunt. As the default badge of seriousness for ordinary application work, migration files are massively overrated.

Give me clear models, give me source control, give me the live schema, give me a diff, and give me review before apply. That is enough. That is cleaner. And honestly, that is the future I would rather code in.
