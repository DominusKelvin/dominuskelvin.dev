---
layout: '../../layouts/BlogPost.astro'
title: 'No more subsidy'
description: 'Some people were outraged that The African Engineer charged ₦1,500 for its Lagos Life interview. It made $200 in two days. I’m building for the readers already willing to pay, and for everyone who joins them later. Good writing deserves a business model.'
pubDate: 'October 11, 2026'
heroImage: /covers/no-more-subsidy.png
---

I published [the Lagos Life interview](https://africanengineer.com/i/lagos-life) in The African Engineer. The Nigerian price was ₦1,500 (≈$1), already heavily discounted from the regular $4.99 price.

That discount was deliberate. I was accommodating our culture of not paying for written work, making it easier for people to try a paid publication. Some people were still outraged that they had to pay at all.

An engineer built something people were interested in. I spoke with her about how she built it, the decisions she made, and the problems that arrived once people started using it. I published the work. Somehow, charging for it became something I was expected to defend.

The African Engineer is a paid publication. There is a price because the writing is the product.

You can decide that ₦1,500 is more than you want to spend on an article. You can be interested and still have more pressing things to do with your money. Nobody needs to explain their finances to me before choosing not to buy something.

But I am not going to apologise for putting a price on my work. Our tech ecosystem needs to get comfortable with that, including when the product arrives as words on a screen.

I've been sharing free work since 2018. There are [free articles on my website](https://omereshone.com/articles/), open-source projects, Sails, the Boring JavaScript Stack, and the teaching I've done through Sailscasts. If you've followed my work for any length of time, you already know that I believe in making useful things available to people.

That history doesn't turn everything I produce afterwards into a public entitlement. I can maintain open-source software, teach for free, and charge for a publication. I don't have to pick one identity and spend the rest of my life proving I deserve it.

## A paid publication is a normal business

A paid publication produces editorial work and asks readers to pay for access to some or all of it. Sometimes you buy an individual issue. Sometimes you subscribe. The writing is the product you are buying.

We have understood this arrangement with books, newspapers and magazines for a long time. Putting the words on a website doesn't make the arrangement strange. The browser is a way to deliver the work. It hasn't abolished the business of publishing.

[Gergely Orosz's The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/about) publishes engineering reporting and long-form articles for paying subscribers alongside free material. [Ben Thompson's Stratechery](https://stratechery.com/about/) has free articles and subscriber-only updates about technology and business. Readers pay because they find the work useful and want access to it.

An African publication can make the same offer. It doesn't need to wait until it is based somewhere else before charging becomes respectable. We don't need a special exemption from ordinary commerce because the writer and the readers happen to be Nigerian.

## What The African Engineer actually does

[The African Engineer](https://africanengineer.com/) exists to document how engineers build technology in Africa. I want us to have useful accounts of the systems around us, from the people making the decisions and living with the consequences.

We use these products. We hear about the companies. But how much can we learn about the engineering behind them without already knowing someone on the team?

I want those decisions written down, so the knowledge can travel beyond the people who were in the room.

The deep dives cover work such as Kuda's Nerve core banking system, the evolution of Paga's payments infrastructure, and now Lagos Life. The Lowdown is the free part of the publication, covering engineering stories from across Africa with our commentary. The full deep dives require paid access.

Look at the Lagos Life story.

The first version came together overnight. Shalom then had to keep the game running while people were already playing it. Her infrastructure moved from Cloudflare D1 to DigitalOcean and then AWS. The account gets into PostgreSQL, Redis and Socket.IO, alongside the Three.js work behind the 3D characters.

There are decisions in that story that a list of technologies cannot explain. Claude advised waiting on a migration; Shalom insisted on moving. She used AI to help sort through feedback on X. The characters had to work as characters, including the surprisingly awkward business of getting them to sit properly. Meanwhile, the game needed protection from bots.

Then there was the money. Too much in-game currency had entered circulation, and players were transferring it to one another. Reversing the problem involved dealing with balances on the receiving end of those transfers. Once money has moved through a live system, correcting the original mistake becomes more complicated than changing the line that created it.

You can learn something from that whether or not you plan to build a game. You can think about migration timing, about human judgment while working with AI, about what happens when users move faster than your assumptions. You can follow how a small application becomes an operational responsibility.

Stop at the overnight build and you miss most of that. You get an impressive launch story and lose the engineering that followed it.

I want more of those accounts to be available. An engineer here should be able to read how another engineer here approached a difficult problem, including the parts that became messy. Those accounts have to be gathered and published. I am asking the people who want to read them to help pay for that work.

## About those three articles

Another criticism was that there were only three paid articles.

If you are considering a subscription, the size of the catalogue is a fair consideration. So is how often new work appears. You can decide to wait. I have work to do in building the publication.

But an article count is a terrible substitute for a judgment about the work. Three careless articles are too many. Three deep, useful accounts can give you plenty to think about and return to.

When was the last time you read a book for one uninterrupted hour?

Proper reading takes attention. You follow an argument, stop at something you don't understand, connect it to a problem of your own, and sometimes go back over a paragraph. Put these three deep dives together and you have roughly an hour or more of that kind of reading, depending on your pace. There is plenty there to engage with before dismissing it as only three articles.

Length alone proves nothing either. An article can be long because the writer hasn't done the work of making it clear. A short explanation can save you days. I would rather publish something useful at the length it needs than pad it to advertise a bigger reading time.

Judge the piece by what you understand after reading it. Did you see a trade-off you hadn't considered? Did an account of someone else's mistake help you recognise a risk in your own system? Did it save you the time you would have spent trying to find the story yourself?

An article can do those things long after its publication date. A growing archive of useful engineering accounts has value beyond the week each one appears.

## The free alternative argument

I saw the same expectation in the reaction to Lagos Life's plan to charge ₦500 ([≈$0.37](https://wise.com/us/currency-converter/usd-to-ngn-rate/history/09-10-2026)) for live football: why pay when you can watch elsewhere for free? Having somewhere else to watch is a reason to choose that option. It doesn't establish that Lagos Life must provide its own offering for nothing.

A business has to persuade enough people that its offer is worth choosing. It can fail at that. Charging is allowed; success isn't guaranteed.

But choosing a free alternative and demanding that another producer work for free are different decisions. One is a decision about your own money. The other tries to set the terms on which somebody else must work. A free option gives you somewhere else to go. It doesn't give you control over every other price.

This is also why I don't believe publishing more articles will settle every objection to paid writing. Look at YouTube. It has an enormous catalogue. [YouTube Premium](https://support.google.com/youtube/answer/6306276?hl=en) offers benefits including ad-free viewing, downloads and background play, while the free, ad-supported option remains available. Nobody has to subscribe. But a shortage of things to watch cannot explain a blanket objection to paying there.

Then consider Nollywood. We want better movies. We want filmmakers to take creative risks and make work worth watching. Yet [piracy remains a recognised obstacle to the industry's growth](https://fmacce.gov.ng/film). Pirating their work undermines the paid distribution that can help fund those ambitions. Wanting a better industry has to leave room for the people making the films to earn from them.

YouTube's authorised free tier and a pirated film are different things. The point is that demanding better work while undermining the ways its makers get paid is self-defeating. Cheering a creator while the work is free, then treating an attempt to earn as something to punish, is a crabs-in-a-barrel mindset. We should want people building useful things here to be able to stay in business.

If three articles are too few, how many would be enough? That is a useful conversation. We can talk about coverage, depth and what a reader wants from the publication. If the answer is that written work should never carry a price, adding another hundred articles won't solve it. The objection will survive every new issue because the number was never the condition that needed to change.

The fact that a product is digital doesn't give its maker an obligation to charge nothing. Somebody funding a free alternative has made a choice about their own business. They haven't made it for everyone else. No amount of content can satisfy a demand that the price must always be zero.

## Somebody is paying

If the reader doesn't pay, somebody else has to cover the work. Frequently, that somebody is the creator, paying with time and income from somewhere else. Calling it free doesn't change who carries the cost.

Advertising and sponsorship are legitimate ways to fund a publication. They can make valuable work available to people who would otherwise miss it.

But finding advertisers is also work. Someone has to sell the space and maintain those relationships. The publication has to consider what it can offer an advertiser, and the reader gives some of their attention to that arrangement. Even when it is handled well, there is still another party whose needs enter the business.

I can also ask the reader to pay directly. That gives me a very clear job: keep producing work those readers want enough to pay for.

Why should I have to exhaust every possible third-party payer before I am allowed to offer that arrangement directly?

The reader is the person who wants the article. The publication is the business producing it. We are allowed to deal with each other without first recruiting an advertiser to make the transaction socially acceptable.

I want The African Engineer to become a durable publication. That means being able to keep doing the work after the excitement around a particular story has passed. Interviews need to be arranged. Technical accounts need to be understood, checked and edited. The next issue needs attention even when the previous one doesn't go viral.

That continuity needs more than whatever time and money I can spare after doing other work. A publication cannot keep treating its own work as the thing that gets done after the paying work.

It's almost as if you're supposed to be ashamed of running a business that intends to make money. Build something useful, make it good, keep improving it, support the people using it. But charge for it? Suddenly you owe everyone an explanation.

Making money is part of what allows a business to keep its promises. I should have to justify the value of what I sell. I shouldn't have to apologise for selling it.

## Some readers are already here

In two days, The African Engineer made $200.

You can call that small. I consider it proof of demand. People saw the offer, decided the work was worth paying for, and paid. There is a lot of work between that and a durable business, but the willingness to pay is already there.

My goal is to reach 10,000 subscribers. If 10% become paying readers, that is 1,000 people helping fund the publication. I would consider that a win. It's an ambitious goal, and I intend to work towards it.

I am not trying to get rich off The African Engineer. I want to build something useful that can pay for the work it requires. The principle is bigger than my revenue: our ecosystem needs to mature enough to treat paying for good writing as an ordinary choice. We should be judging whether the work earns its price, rather than demanding that the price disappear.

That deserves more of my attention than another argument about whether people will ever pay for writing. Some already have. I can spend my energy finding more of them, understanding what they want to read, and making the publication better for them.

The people who paid have given me a much more useful problem: how do I keep earning their trust? How do I find the next engineering story worth their time? How do I reach another reader who would be glad this publication exists?

I want to answer those questions by doing the work. I don't want the people who are ready to keep waiting while I negotiate with everyone who isn't.

Giving work away remains a choice I can make, as I have for years. It doesn't oblige me to keep absorbing the cost of whatever people would like to read next. The African Engineer will charge for its deep dives, and I will put my energy into making them worth paying for.

Whenever more people in the ecosystem decide they're ready for paid writing, we will welcome them with open arms.

Until then, I have readers to serve.

No more subsidy.
