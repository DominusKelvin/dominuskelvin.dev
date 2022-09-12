---
 layout: '../../layouts/BlogPost.astro'
 title: 'What I learnt from rewriting my website with Astro'
 description: "I'm not quick to try out a new technology but when my buddy James Q Quick mentioned he rewrote his website with Astro, I decided to try Astro for myself"
 pubDate: 'September 12, 2022'
---

## How it all began

A while ago, [James Q Quick](https://jamesqquick.com) posted a [video](https://youtu.be/wND4lSml31A) of [Astro](https://astro.build) and why he loved it.

Before now, I've paid Astro no attention because every now and then in the JavaScript space a new tech is born. However, after the video and chatting with James a few times, I decided to just casually read the Astro docs and I started with the [Why Astro](https://docs.astro.build/en/concepts/why-astro/) section as **I always want to know the why of a tech before knowing the how**. This part got me:

> Astro is an all-in-one web framework for building fast, content-focused websites

So the gist is this: Astro let's you build content-based websites - think blogs(like this one), documentations, marketing pages, and even some e-commerce websites - with shipping little or zero JavaScript to the browser.

Astro claiming to ship little or zero JavaScript to the browser really resonated with me because I have grown weary of the SPA-for-everything culture we've been having and in fact my Sailsconf 2022 talk [touched](https://youtu.be/x7fkiLK9Sng) on this as well.

With some more [reading](https://docs.astro.build/en/concepts/mpa-vs-spa/) on the reasoning behind Astro and coincidentally, I already scheduled to redesign my website so it seemed like a good opportunity to have double benefits from a single venture i.e try out if Astro is everything it claimed to be and rebuild my ugly looking website. What's the harm in that?

### The rebuild

I found the [astro.new](https://astro.new) website which catalogs official example projects by the Astro team and I decided to check out the [Blog](https://astro.new/blog?on=stackblitz) project on StackBlitz.

In the `README.md` of the project I found the command to start a new Astro project with the blog example as a template. I copied the below command and ran it in my terminal:

```sh
npm init astro -- --template blog
```

The Astro CLI kicked in with some basic questions it needed for setup and under a minute I had scaffolded a project with `95%` of everything I needed to rebuild my website.

I needed Tailwind CSS as that's my go-to styling weapon. I turned out that in Astro I only needed to run `npx astro add tailwind` and Astro will handle the entire setup. Everything is looking good with my website so far.

### Authoring

I needed to migrate my blog posts to the new Astro project and since Astro is heavy on content and it comes built-in with support for my favorite way of authoring written content - Markdown - migration was easy as copying the already exsiting blog posts `.md` files into Astro's `src/pages/blog/` folder and that was it. Astro knows to make those `.md` files pages available via `www.example.com/blog/*`. This was begining to seem too good to be true(but it was too good and too true!).

### Deploying

I spent a little bit over and hour styling the website and blog to something I like and I deployed the Astro project - my new website - to [Render](https://render.com) as a static site. I was so impressed that everything took less than 4 hours(most of the time it was just me tinkering with styling. The astro bit was done in little over an hour). I have found a new love.

## My learnings

I have grown weary of trying new tools because they either don't do what they say, or setting them up is an herculean task or the learning curve is just too much - learning a new syntax or flavor of JavaScript has always turned me off.

However, with Astro, the setup was so basic and intuitive, and even though there was `.astro` component files, it was so similar to `HTML` I had to double check the extension just to be sure I wasn't writing in a `.html` file. And did I mention it was fast with development? Yes it was, owing a lot to Astro being based on [Vite](https://vitejs.dev) for tooling. Here are a couple more things I learnt:

### Do you really need all that JavaScript

I made [this tweet](https://twitter.com/Dominus_Kelvin/status/1568645691467247616?s=20&t=JBzyrzEjLcsUinL0Aksozw) after taking in the philosophy of Astro. I have seen blog posts that needed spinners to load or a marketing website that used so much JavaScript that Safari notified me on the memory usage(no kidding).

JavaScript in the context of websites(not web applications) was made to be sprinkled to handle interactivity on the website when need be. Having to let JavaScript handle everything including navigation for your blog or marketing page is an overkill in my opinion.

You can go the Astro way and ship zero JavaScript for such websites and your end users will thank you for it in terms of improved performance and SEO.

I know building MPA(Multi-page Applications) isn't all that popular because of the SPA-for-everything culture but with a tool like Astro, it's a missed opportunity not to ship zero or little JavaScript for that contend-based website.

### Astro websites are fast

Astro claimed to be [fast by default](https://docs.astro.build/en/concepts/why-astro/#fast-by-default) and that...

> It should be impossible to build a slow website in Astro.

I found this all to be true when I ran the PageSpeed test for my website. The [score](https://pagespeed.web.dev/report?url=https%3A%2F%2Fdominuskelvin.dev%2F) was unbelievable.

### Superb DX

A great DX is forefront for me when it comes to adopting a new tech and Astro didn't dissappoint on that front. From scaffolding a new Astro project, to authoring [Astro components](https://docs.astro.build/en/core-concepts/astro-components/), to integration with VS Code, and [many more](https://docs.astro.build/en/guides/integrations-guide/), everything was just screaming: "Great DX!"

### The docs were written by humans for humans

Nothing annoys me more than docs that seem as if it was written by robots for computers. The Astro docs read [like a prose](https://twitter.com/Dominus_Kelvin/status/1568843065967910913?s=20&t=JBzyrzEjLcsUinL0Aksozw) and I must commend the docs team for this.

I believe the success of a tech hinges a great deal on its documentation. I spent my weekend binging on the Astro docs not Netflix and that should tell you something.

### BYOF - Bring Your Own Framework

Though Astro generate websites with zero client-side JavaScript, it pioneers a technique called **partial hydration** that allow you have sections of your website be interactive and you can write those sections(Islands) with UI frameworks like Vue, React, Alpine, Svelte, Lit, etc. Astro implements this technique as [Astro Islands](https://docs.astro.build/en/concepts/islands/). Check out the [benefits](https://docs.astro.build/en/concepts/islands/#what-are-the-benefits-of-islands) of Islands in the Astro docs.

## Conclusion

You can tell, that I'm in love with Astro and I'm not one to fall in love with a tech so easily. In fact I haven't felt this way since I discovered Vue and [Sails](https://sailsjs.com) a couple of years ago.

**Understand**: I love JavaScript and I want to write in JavaScript but I want to ship little or zero of the JavaScript I write to the end users and I think Astro is a major player in doing just that. You can [try](https://docs.astro.build/en/getting-started/) Astro for yourself today.
