---
 layout: '../../layouts/BlogPost.astro'
 title: 'Testing NPM packages locally'
 description: "Harminder Virk the creator of AdonisJS showed me this super easy way to test NPM packages locally."
 pubDate: 'November 8, 2022'
---

> You can [watch](https://youtu.be/h_L7q91LTOE) a screencast version of this article on YouTube

A part of my [job](https://twitter.com/Dominus_Kelvin/status/1587844494749155329?s=20&t=WZpehnK7AFd7MsMaM4S6Xg) at [Treblle](https://treblle.com), is to build and maintain our JavaScript SDK packages.

I recently created the [treblle-adonisjs](https://github.com/Treblle/treblle-adonisjs) SDK for AdonisJS - to let AdonisJS developers easily monitor and observer their APIs with Treblle - and it was a fun experience as I had the privilege to ask the creator of AdonisJS - [Harminder Virk](https://twitter.com/AmanVirk1) - about the AdonisJS way to create the SDK and it made the job a whole lot easier.

I also learnt from Harminder a way to test NPM packages locally.

## How I tested NPM packages locally

Previously, I test NPM packages locally using `npm link` but we ran into some issues doing so and he showed me how he test NPM packages locally

## Using yalc

Harminder showed me [yalc]() - which promises a better workflow than using `npm link` or `yarn link` and yes it does all that.

### Publishing locally with yalc

To use yalc, all you need to do is the following 👇🏾

Run

```sh
npx yalc publish
```

in the package directory you want to test(in my case I want to test `treblle-adonisjs`). Yalc will then grab only the files that should be published to NPM and put them in a global store.

### Using the locally published package

Then to use that package you've just published in yalc's local global store, in another project, you can add the package by using

```sh
npx yalc add treblle-adonisjs
```

Yalc will pull the package content into a `.yalc` file in the current folder and inject a `file:` or `link:` dependency in your package.json.

The dependency will look something like this 👇🏾

```json
"dependencies": {
    "treblle-adonisjs": "file:.yalc/treblle-adonisjs"
  }
```

## Conclusion

And that's it! What I like about this workflow is that yalc will run your NPM scripts and mimic the same publishing flow you should have if you are publishing the package to NPM. It's amazing.
