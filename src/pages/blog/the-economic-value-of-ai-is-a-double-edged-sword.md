---
layout: '../../layouts/BlogPost.astro'
title: 'The Economic Value of AI Is a Double-Edged Sword'
description: 'AI really can replace some labor. But falling model costs, premium seats, metered agents, and uneven ROI mean the winners will be the firms obsessed with cost per useful outcome.'
pubDate: 'April 16, 2026'
heroImage: /covers/the-economic-value-of-ai-is-a-double-edged-sword.png
---

I have now spent almost three years as a full-time entrepreneur and open-source builder. That changes how you evaluate every software bill. Pricing stops being theoretical, which is part of the same instinct behind [Build Globally, Price Locally](/blog/build-globally-price-locally). Every tool has to answer a rude but necessary question: if this were coming out of my own pocket every month, would the economics still make sense?

I currently have six months of ChatGPT Pro access, including Codex, because of my work on [Slipway](https://docs.sailscasts.com/slipway/), [Sounding](https://docs.sailscasts.com/sounding), [Pellicule](https://docs.sailscasts.com/pellicule), and [The Boring JavaScript Stack](https://docs.sailscasts.com/boring-stack). That is its own form of [social currency](/blog/social-currency-is-still-currency): open-source work converting into access I likely would not have bought for myself.

In my current Nigerian economic reality, there is no way I would have comfortably covered this out of pocket.

OpenAI's pricing still lists [ChatGPT Pro at $200 per month](https://openai.com/index/introducing-chatgpt-go/), and its help docs say [Codex is included with ChatGPT Pro](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan). Using XE's mid-market [USD/NGN rate of ₦1,344.04 per dollar at 04:03 UTC on April 16, 2026](https://www.xe.com/en-us/currencyconverter/convert/?Amount=1&From=USD&To=NGN), that comes to about **₦268,808 per month** before taxes and card spreads. Over six months, that is roughly **₦1,612,848**.

Put that beside Nigeria's [₦70,000 national minimum wage, announced on July 18, 2024](https://statehouse.gov.ng/news/labour-leaders-praise-president-tinubu-over-approval-of-n70000-minimum-wage-and-promise-review-after-three-years/), and the point becomes painfully concrete. One month of ChatGPT Pro is almost **four times** the monthly minimum wage. Six months of it is almost **twice** the entire annual minimum wage.

None of that means the tool has no value. It means the value is inseparable from who is absorbing the bill. A gifted subscription, a grant, a promotional runway, or a vendor subsidy can make frontier AI feel normal long before it is economically normal.

But constraint has a second edge. Cost does not only restrict; it clarifies. When you cannot afford to spray AI everywhere, you become more serious about where it actually matters. Constraint forces triage. It forces taste. It asks whether this task truly deserves model spend or whether you are just being lazy with your own attention.

It is one reason I keep pushing [Ship Lean](https://africanindiehackers.org/ship-lean). Cost is not some embarrassing side concern beneath the "real" work. Cost is a non-functional requirement. It shapes what gets adopted, what gets sustained, and what quietly gets abandoned after the initial excitement wears off.

That is also why there will always be a market for pirated or cracked software. People can call users cheapskates if they want, but that insult explains very little. Very often the deeper issue is that the software is not only hard to afford once; it is hard to keep paying for month after month.

Sustained affordability is part of product reality. If a tool is priced far above what the people who want it can sustainably afford, many of them will route around the pricing, postpone adoption, downgrade, share accounts, or exit the category entirely. AI software is not exempt from that law. It is just the newest place where the law is being rediscovered.

I still stand by the core instinct behind [AI Will Take Your Job (And That's The Economic Reality)](/blog/ai-will-take-your-job).

AI really is compressing routine software labor. It really is turning average output into a commodity. It really is making some categories of human work look more expensive than they did even a year ago.

But I think I smuggled in a second claim without meaning to: that because AI can make labor cheaper, AI itself must therefore be cheap. That part needs correction.

Those are different claims. AI can cheapen labor and still become a serious operating expense. It can shrink headcount while bloating software budgets. It can make a small team look larger while also forcing a company to buy seats, credits, governance, evaluations, and workflow redesign.

That is why I now think the economic value of AI is double-edged. One edge cuts labor cost. The other edge cuts into the budget of the company deploying it carelessly.

## The first argument was directionally right but financially incomplete

The strongest part of the original essay still holds. If a founder can get acceptable output from AI faster than they can hire, onboard, and manage mediocre labor, the labor market changes.

What I underpriced was the replacement side of the equation. The company is not swapping salary for magic. It is swapping one cost structure for another. And once AI stops feeling like a toy subscription and starts behaving like infrastructure, finance gets involved.

That is when the tone of the conversation changes. The question stops being "Is AI amazing?" and becomes "Is this worth what we are actually spending?" That second question is much colder, much less romantic, and much more useful.

## The commodity layer is getting cheaper. The enterprise layer is not.

This is where the story gets more interesting. The raw cost of intelligence really is falling. Stanford's [AI Index 2025](https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts) says the cost of querying a GPT-3.5-level model fell from **$20 per million tokens in November 2022** to **$0.07 by October 2024**, a more than **280-fold reduction**. The same report says much smaller models are now hitting benchmark thresholds that once required far larger systems.

That matters because it means the base model layer is rapidly commoditizing. Cheap intelligence is becoming more available, not less. So if a company is still paying frontier-model prices for every query, every assistant, and every employee, that is increasingly a choice, not a law of nature.

And that is exactly why enterprise AI spending feels more awkward now. The model layer is getting cheaper while the organizational layer stays expensive. In other words, inference is deflating even as deployment remains inflationary.

## The vendors themselves are telling you blanket AI is a bad budget strategy

Look at how the pricing pages are evolving.

Microsoft now offers [Microsoft 365 Copilot Chat](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/enterprise) at no additional cost for eligible Microsoft 365 customers, while the full [Microsoft 365 Copilot](https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/enterprise) still costs **$30 per user per month paid yearly**, and agent usage can be metered. That is not a company acting like one price fits all. That is a company segmenting between broad cheap access and higher-value workflow integration.

GitHub's [current Copilot plans](https://docs.github.com/en/copilot/get-started/plans) price Copilot Business at **$19 per granted seat per month** and Copilot Enterprise at **$39**, with additional premium requests billed at **$0.04 each**. Again, the seat is not the whole story. Overage is part of the story too.

Anthropic's [Team plan](https://support.claude.com/en/articles/9266767-what-is-the-team-plan) now lists Standard seats at **$25 per member per month billed monthly** or **$20 billed annually**, while Premium seats run **$125 monthly** or **$100 annually**. More revealing still, Anthropic's [Enterprise plan](https://support.claude.com/en/articles/9797531-what-is-the-enterprise-plan) says the seat fee covers access only and all usage is billed separately at API rates.

OpenAI is moving in the same direction. In an [April 2, 2026 update](https://help.openai.com/en/articles/11487671-flexible-pricing-for-the-enterprise-edu-and-team-plans), it introduced flexible pricing with separate standard ChatGPT seats and Codex-only seats for Business and Enterprise plans, plus shared credit pools for advanced usage. That is a live example of vendors still searching for the durable commercial shape of enterprise AI.

This is the part AI maximalists kept wanting to skip. The market is no longer pretending that one flat subscription cleanly covers the economics. The vendors themselves are admitting that usage, seat type, agent type, and workflow depth all have different cost profiles.

## Adoption is broad. Real economic value is much narrower.

And once you move past adoption headlines, the ROI story becomes much less triumphant.

IBM's [May 6, 2025 CEO study](https://newsroom.ibm.com/2025-05-06-ibm-study-ceos-double-down-on-ai-while-navigating-enterprise-hurdles) found that only **25%** of AI initiatives had delivered expected ROI and only **16%** had scaled enterprise-wide. McKinsey's [State of AI 2025](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) says nearly **two-thirds** of organizations have not yet begun scaling AI across the enterprise, and only **39%** report any EBIT (earnings before interest and taxes) impact at all. Most of those say AI contributes less than 5% of EBIT.

Then PwC made the concentration problem even clearer. In its [April 13, 2026 AI Performance study](https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-performance-study.html), **74% of AI's economic value was being captured by just 20% of companies**.

That is an extraordinary number. It means AI is not behaving like a universal dividend. It is behaving like a concentrated advantage that accrues to companies disciplined enough to redesign workflows, govern usage, and point AI at meaningful business outcomes.

This is the big correction I wish more people would make out loud: AI adoption is widespread, but AI economic performance is still extremely uneven.

## The real bill starts after the demo

This is why comparing AI to salary using only seat price or token price is too narrow.

The expensive part is often everything around the model: data readiness, access control, evaluation, integration work, workflow redesign, monitoring, human review, spend controls, security, and the slow administrative labor of making the system trustworthy enough to use at scale.

Gartner's [January 26, 2026 analysis](https://www.gartner.com/en/articles/genai-project-failure) says **at least 50%** of generative AI projects were abandoned after proof of concept by the end of 2025, citing poor data quality, inadequate risk controls, escalating costs, or unclear business value. The same piece is unusually blunt about total cost of ownership: the per-token cost that looked negligible in a demo becomes a budget problem once it is multiplied across thousands of users and hundreds of use cases.

Salesforce said something similar from the vendor side. In its [May 15, 2025 Agentforce pricing announcement](https://www.salesforce.com/news/press-releases/2025/05/15/agentforce-flexible-pricing-news/), it said **90% of CIOs** report that managing AI costs is limiting their ability to drive value. That is not an AI skeptic talking. That is a major seller of enterprise AI telling you that cost control is now part of the product conversation.

In other words, AI is cheap when it is autocomplete. AI gets expensive when it becomes organizational change.

## The next phase may be budgeted intelligence

One thing this cost pressure likely produces is not an AI retreat, but AI rationing. Instead of giving everyone unlimited frontier access, companies start issuing monthly token budgets, reserving the best models for planning, research, or high-stakes decisions, then pushing people toward mid-tier or local models for execution. That sounds strange only until you realize it is exactly what procurement does to every other expensive input.

You can already see the shape of it in how people talk about AI inside teams: use the expensive model to think, use the cheaper model to do, and use your own brain for the rest. That is not anti-AI. That is cost discipline finally reaching the prompt box.

And honestly, that discipline may improve the work. A real budget makes you ask better questions. Is this task ambiguous enough to need a frontier model, or clear enough that a smaller model will do? Is this research important enough to justify deep spend, or am I just asking the machine to save me from ten minutes of thinking? Is this a place where precision matters, or a place where draft quality is enough?

There is a subtler trap here too. Spending on AI can create a counterfeit sense of productivity because the easiest thing to measure is quantity. More tickets closed. More documents drafted. More code generated. More pull requests opened. More output over a month can look like progress even when the underlying work was low-leverage, badly chosen, or never worth doing in the first place.

AI is very good at accelerating execution. It is not automatically good at protecting you from triviality. In some cases it makes triviality cheaper, faster, and more impressive-looking. A team can end the month surrounded by artifacts and still be strategically lost. That is why "how much work did we do?" is now an even weaker question than before. The harder and more important question is the one at the heart of [Elon's The Algorithm](/blog/i-applied-elon-musks-the-algorithm-to-vibe-coding): was this work worth doing at all?

This is also where old management ideas quietly return. Span of control still matters. A manager may be able to oversee more output if AI makes individuals faster, but only up to the point where review, prioritization, and error correction saturate human attention. AI can widen output without abolishing supervision.

There is another hard thought here. If AI really delivered a clean, dependable 2x productivity boost for every engineer, firms would probably spend far more than a few hundred dollars per month per developer without blinking. The fact that many companies are experimenting with relatively tight budgets is itself a market signal: employers do not yet believe the average marginal dollar of model spend doubles output in a stable, universal way. The gains are real, but they are lumpy.

My guess is that access becomes stratified. The people who repeatedly convert model spend into measurable value will get bigger budgets, better tools, and more autonomy. Everyone else will get capped plans, cheaper models, and stricter review. In that sense, AI access may start looking less like a universal perk and more like capital allocation.

If I had to reduce that into a few practical rules, they would be simple:

- Use the best models for planning, architecture, research, and decisions where mistakes are expensive.
- Use cheaper or local models for drafting, summarizing, formatting, rote execution, and first-pass implementation.
- Treat every expensive prompt like a tiny investment thesis: what useful outcome am I buying here?
- Measure AI value by importance and outcomes, not by the raw volume of artifacts it helped you produce.
- Stop asking AI to do work whose real bottleneck is your own judgment, courage, or clarity.

Cost pressure, in that sense, may end up doing something healthy. It may push both companies and individuals away from AI as a comfort blanket and toward AI as a sharp tool.

## So was the original thesis wrong?

No.

It was incomplete.

AI still pressures labor. It still makes average work easier to automate. It still threatens people whose only moat is producing ordinary output at human speed.

What I would add now is this: the value of AI does not come from spraying the biggest model across everything. It comes from matching the right level of intelligence to the right task at the right price.

That means frontier models where the leverage is real. Smaller models where "good enough" is enough. Local or open models where privacy, latency, or repeated usage make them cheaper. Humans where the cost of error is higher than the cost of labor.

Hard budgets where curiosity would otherwise become runaway spend. It may even mean treating model access the way companies treat any other scarce resource: tiered, budgeted, and earned through ROI.

The winners will not be the companies chanting "AI everywhere." They will be the ones obsessed with **cost per useful outcome**.

## The correction happening now is healthy

I do not think we are watching AI collapse. I think we are watching AI meet accounting.

That is a good thing.

The subsidy phase trained people to confuse access with value. The next phase will force better questions. Which workflows deserve frontier-model spend? Which teams actually need premium seats? Which tasks should be routed to cheaper models? Where is the EBIT impact? What gets defunded to make room for this? Where is the human still cheaper, safer, or simply better?

Those are adult questions. Serious businesses ask them. And once you ask them honestly, the slogan changes.

The future is probably not "use AI for everything." It is "use AI where it pays off, and be disciplined enough to stop where it doesn't." Or, put more bluntly, the future may be less unlimited intelligence and more budgeted intelligence.

That is still an AI future. It is just a more mature and pragmatic one.

AI remains economically disruptive. But its value is not one-directional. It is a double-edged sword: cheapening labor on one side, forcing a new and often messier cost structure on the other. The companies that win will be the ones clear-eyed enough to hold both truths at once.
