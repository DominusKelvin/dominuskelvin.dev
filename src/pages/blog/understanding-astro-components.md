---
 layout: '../../layouts/BlogPost.astro'
 title: 'Understanding Astro components'
 description: 'Astro components improve the DX of writing MPAs as we have been so used to doing in SPA frameworks like Vue, React or Svelte.'
 pubDate: '19 September, 2022'
 updatedDate: '20 September, 2022'
---

After [rewriting my website](/blog/rewriting-my-website-with-astro) with [Astro](https://astro.build), I was impressed by Astro components and how easy it was for me to learn enough of its syntax and conventions to be productive. In this article, I'll give you a crash course on Astro components.

## The need for componentization

I believe one of the reasons frameworks like Vue, React, and Svelte have been super popular in the JavaScript frontend space is components.

I know this because as a developer myself, I have enjoyed writing components and following a component-driven paradigm for building websites.

These frameworks have been super appealing for building UIs on the web and in the JavaScript space, writing components is sort of a household concept at this point.

So it's only logical for a framework like Astro seeking to be an alternative school of thought for building content-based websites to have a component syntax of its own at its core and I believe it executed this perfectly.

## What is an Astro component?

An Astro component is a file ending with a `.astro` extension.

If you are familiar with a `.vue` file for Vue or a `.jsx` file for React, an Astro component is similar to these other SPA-focused frameworks components but with a notable difference which we will look at in a bit.

So whenever you are in an Astro codebase, you will typically find Astro components inside the `components/`, `layouts/` and `pages/` folders.

## The usage of an Astro component

If you speak frontend frameworks, the usage of an Astro component might be easy to infer. However, let's go over them.

In Astro, an Astro component can be used for either of these reasons.

- As a page. These components are found in the `pages/` folder. For example `pages/index.astro` will serve as the home page of your website since Astro uses a file-based routing.
- As page layout. An Astro component found in the `layouts/` folder by convention is intended to be used as layouts to wrap pages that share some similarities e.g you might have a `layouts/BlogPost.astro` component which will be used for laying out each blog post in your blog.
- For code reusability. Astro components found in `components/` folder are mostly used for code reusability so you can import them into other Astro components found in `components/`, `pages/`, or `layouts/` folders. For example, a common use case is to have a reusable header or footer component that you can import in either a layout component or a page component.

## HTML-only

Remember I mentioned Astro components have a notable difference from frameworks like Vue, React, or Svelte components? Yeah and this is the difference...

Unlike these other frameworks, Astro components don't have a client runtime and it renders to HTML at build time.

"What does this mean?", you may ask, well, it means that Astro components output HTML during build time in Node.js and this HTML is what it's being sent to the client when you visit a page.

This is a difference worth mentioning because you might not fully grasp the implication of this if you are coming from a SPA-based framework.

For example, since Astro allows you to have Vue, React, and Svelte components in Astro components, you may think these components you've imported will work as they do in their respective frameworks but then you click a button component and you didn't get the expected behavior because Astro renders them to HTML only at build time(although there are ways to [hydrate interactive components](https://docs.astro.build/en/core-concepts/framework-components/)).

Understand: Astro components are HTML-only. They are a superset of HTML and as such you get HTML in the client by default.

To put it simply: **The output of an Astro component after it is built is HTML by default.**

## Inside an Astro component

Let's step into an Astro component and see what it is made of. Below is the basic structure of an Astro component:

```astro
---
// Component Script (JavaScript/TypeScript)
---

<!-- Component Template (HTML + JS Expressions) -->
```

Let's take a look at these two sections of an Astro component separately.

### Component Script

Within `---`(code fences) is where you author JavaScript(and TypeScript). Variables in this section are available by default in the Component Template. If you are familiar with Frontmatter then the `---` code fence will be familiar.

One thing I love about the Component Script is that with zero setup and configuration, you can author TypeScript by default.

I think this is cool as the TypeScript setup is one of the reasons I don't use it often in my project but in Astro I find myself writing TypeScript and it does feel good.

Here are a couple of things you'd want to do in the Component Script:

#### Import other components

```astro
---
import HeaderLink from "./HeaderLink.astro";
// ...
---
```

#### Define component props

```astro
---
// ...
export interface Session {
  title: string;
  teacher: string;
  teacherUrl: string;
  date: string;
  poster: string;
  url?: string;
}
export interface Props {
  session: Session;
}
const { session } = Astro.props;
// ...
---
```

Notice that I am using TypeScript for validating component props. That's sweet.

#### Variables and business logic

Any valid **non-client side** JavaScript is valid within the Component Script. Emphasis on **non-client side** JavaScript. Recall these components will be executed at build time in Node.js so you don't have access to `document` or `window` and generally the `DOM`. Here is an example of some business logic going on in the Component Script:

```astro
---
// Use Astro.glob() to fetch all posts,
// filter out draft posts and sort them by date.
const posts = (await Astro.glob("./blog/*.{md,mdx}"))
  .filter((post) => !post.frontmatter.draft)
  .sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
---
```

### Component Template

An Astro component is made up of good ol' HTML and optionally JavaScript expressions inspired by JSX for things like interpolation, conditional rendering, loops, etc.

Let's look at an example combining both Component Script and Component Template

```astro
---
import SocialLink from "./SocialLink.astro";
import socials from "../socials.json";
---

<ul class="flex items-center space-x-2">
  {
    socials.map((social) => (
      <SocialLink link={social.link} icon={social.icon} title={social.title} />
    ))
  }
</ul>
```

You can see like in JSX, I can use the built-in array map method on an Array-like object to dynamically create markup.

Also, notice interpolation is done via `{}` just like in JSX.

## Difference between Astro components and JSX

Even though Astro components are inspired JSX for things like interpolation and dynamic rendering, they differ in 2 significant ways. Let's take a look.

### Attributes

This is a big one for me because I didn't like having `className` replace the HTML `class` attribute in JSX. Astro took care of this so you can use `class` attributes inside Astro components.

```astro
<ul class="flex items-center space-x-2"></ul>
```

### Comments

Unlike in JSX, HTML comments are valid inside Astro components.

```astro
<!-- A valid HTML comment syntax is a .astro file -->
```

## Conclusion

Astro components improve the DX of writing MPAs as we have been so used to doing in SPA frameworks like Vue, React, or Svelte. In this article, we took a high-level look at Astro components, and how it is both similar and different from other frameworks' components.
