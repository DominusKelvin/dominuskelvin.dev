---
 layout: '../../layouts/BlogPost.astro'
 title: "Build Globally, Price Locally"
 description: "I left money on the table for five years because I ignored one simple truth about pricing."
 pubDate: 'January 5, 2026'
 heroImage: /covers/build-globally-price-locally.png
---

I spent five years leaving money on the table because I refused to accept one simple truth

> The purchasing power of most Africans is tremendously lower than we think.

We [African builders](https://africanindiehackers.org) need to stop ignoring reality and start building with that constraint in mind.

## The Wake-Up Call

I've seen it too many times. African founders building products, pricing them at $29/month or $99/year because "that's what the market charges," then wondering why adoption is painfully slow among African users.

I was one of them.

For over five years, I priced my products, like [Hagfish](https://hagfish.app), and, [Sailscasts](https://sailscasts.com), with a single global price, convinced that the value I was delivering was premium enough to justify it.

"If the product is good, people will pay," I told myself.

I ignored purchasing power differences, thinking that lowering prices would somehow devalue my work.

The result? Half a decade of fewer sales than I could have had. Potential customers who wanted my products but couldn't justify the cost.

Communities I wanted to serve but inadvertently priced out. I wasn't building for my people — I was building _at_ them.

Here's the uncomfortable truth: **$29/month is not $29/month everywhere.**

For a developer in San Francisco, $29 is lunch. For a developer in Lagos, $29 is a significant portion of their monthly disposable income. Same person, same skills, same potential — wildly different purchasing power.

## The PPP Reality

Purchasing Power Parity (PPP) is the idea that the same amount of money has different buying power in different countries.

A dollar in Nigeria has less purchasing power than it does in the United States.

Ignore PPP at your own risk. It's the difference between your product being accessible or out of reach.

[Wes Bos](https://wesbos.com/parity-purchasing-power) has been offering PPP discounts on his courses for years. His reasoning is solid:

> It makes my web development training content accessible to many more devs around the world regardless of their income level. I've received tons of amazing stories of people using web development to increase their income and quality of life.

He also makes a practical business case — PPP cuts down on piracy and credit card fraud. He'd rather make less money than $0 (piracy) or -$15 (credit card fraud). It's a win-win.

When I added PPP pricing to [The African Engineer](https://africanengineer.com), something interesting happened. We got our first annual subscription almost immediately. The price was discounted at 85% based on the user's location, and suddenly what seemed expensive became comfortable.

That's not charity. That's understanding your market.

## Build Global, Price Local

[Ezra Olubi](https://browndroppings.co/don-t-build-for-the-gap) of Paystack argues that African builders shouldn't "build for the gap." When global incumbents ignore Africa, the temptation is to build specifically for that gap. But doing so means inheriting every constraint that made them ignore us in the first place, low GDP per capita, scarce capital, structural barriers to scale.

His advice: build for the world, informed by the gap. Use Africa as your proof of concept for global resilience, not your total addressable market.

I'd take it one step further. Yes, build globally. But price locally. The product should scale anywhere. The pricing should meet people where they are.

## Build With The Constraint, Not Against It

Here's my point: if you're an African builder and Africans will use your product, PPP isn't optional — it's essential.

This doesn't mean undervaluing your work. It means:

1. **Price in USD as your baseline**, your international customers pay full price
2. **Detect location and adjust**, use PPP conversion factors to calculate fair regional pricing
3. **Offer local payment methods**, Stripe isn't everywhere. Paga, Paystack, Flutterwave, and others exist for a reason

The math is simple. Would you rather have:

- 10 customers at $99/year = $990
- 100 customers at $15/year = $1,500

More users, more feedback, more growth, more revenue. The constraint becomes an advantage.
![Revenue comparison by pricing strategy](/post-images/revenue-comparison-by-pricing-strategy.png)

## Opt-In, Not Automatic

I chose to make PPP pricing opt-in, rather than applying it automatically for every user. This wasn't just a technical decision, but a deliberate choice about how I want to interact with my customers and community.

Here's why:

- **Transparency and trust:** I want users to know exactly what they're paying and why. An opt-in makes the discount explicit, not hidden or mysterious. It feels like a fair offer, not a trick.
- **Avoiding false positives:** Automatic detection can be wrong. VPNs, travel, or edge cases can misclassify users. Opt-in lets people self-identify if they need the discount, reducing support headaches and awkward conversations.
- **Respect for dignity:** Some users may not want or need a discount, even if they're eligible. Opt-in gives them the choice, rather than assuming their financial situation.
- **Business clarity:** It helps me track how many people are using PPP, how it's impacting revenue, and whether the program is working as intended.

Ultimately, I want PPP to be a tool for accessibility, not a source of confusion or resentment. Opt-in puts the power in the user's hands, and that's the kind of relationship I want with my customers.

## "But People Will Cheat!"

This is the first objection everyone raises. Wes addresses this directly:

> People do cheat it, but not enough that it's a big problem. In general, I make more money from these discounts than I lose from people cheating it.

Most people aren't willing to put their credit card into a sketchy VPN. Most people are good and want to support creators. You can check that the country on their credit card matches the discount country. And honestly? I'd rather not punish honest users because of a few bad actors.

## Go Build It

Ready to implement PPP in your own product? I've got you covered.

I wrote a detailed technical guide on [how I built PPP into The African Engineer](https://blog.sailscasts.com/implementing-ppp-in-the-boring-javascript-stack) using [The Boring JavaScript Stack](https://docs.sailscasts.com/boring-stack). It walks through the entire implementation, from detecting user location to calculating discounts to handling edge cases.

The blueprint is there. [Shut up and act](/blog/shut-up-act). Go make your product accessible.

## Final Thought

Build globally. Your product should work for anyone, anywhere. But price locally. Understand that the person in Nairobi and the person in New York have different economic realities.

The earlier you accept this constraint and design around it, the faster you'll grow.

Build with the constraint in mind, not against it.
