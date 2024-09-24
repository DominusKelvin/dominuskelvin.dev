---
 layout: '../../layouts/BlogPost.astro'
 title: 'Implementing Module Federation in The Boring JavaScript Stack'
 description: "By the end of this tutorial, you'll be able to transform your monolithic applications into flexible, distributed micro-frontends without sacrificing the simplicity and reliability of The Boring JavaScript Stack. "
 pubDate: '24 September, 2024'
---

Just in case you didn't catch the news, [I rolled out TBJS 0.4.0](https://x.com/Dominus_Kelvin/status/1838173026270982622) yesterday, now bundled with the [fully-featured Mellow templates](https://github.com/sailscastshq/boring-stack/tree/main/templates).

Given my recent tinkering into [Module Federation](https://module-federation.io/), I figured there’s no better moment to demonstrate its integration with TBJS than right after [this release](https://github.com/sailscastshq/boring-stack/releases/tag/v0.4.0)! So let's have at it!

In this tutorial, you'll learn:

- [What Module Federation is](#what-is-module-federation).
- [Why you should care about Module Federation](#why-you-should-care-about-module-federation).
- [A quick primer on bundler runtime](#a-quick-primer-on-bundler-runtime).
- [How Module Federation works at a high level](#how-module-federation-works).
- [Implementing Module Federation in The Boring JavaScript Stack](#implementing-module-federation).
- [Learnings on implementing Module Federation in The Boring JavaScript Stack](#learnings).
- [Next steps](#next-steps): Managing federated apps with [Zephyr Cloud](https://zephyr-cloud.io?utm_source=mf-in-tbjs) & Federated Sails Actions.

Whether you're looking to improve application performance, enhance team collaboration, or simply modernize your development workflow, this tutorial will equip you with the knowledge and skills to get your hands dirty with Module Federation in [The Boring JavaScript Stack](https://docs.sailscasts.com/boring-stack).

By the end of this tutorial, you'll be able to transform your monolithic applications into flexible, distributed micro-frontends without sacrificing the simplicity and reliability of The Boring JavaScript Stack.

## What is Module Federation

Initially developed by [Zack Jackson](https://x.com/ScriptedAlchemy) as a Webpack 4 feature to share code at runtime, Module Federation has now evolved into a bundler-agnostic method for sharing code between JavaScript applications.

Module Federation is a powerful architectural technique that allows different parts of your application to be **developed**, **deployed**, and **versioned** independently.

Module Federation can help you:

- Share component/modules between development teams.
- Improve code maintainability by fostering code reuse.

## Why You Should Care About Module Federation

When you employ Module Federation as an architectural pattern in your team you get the following benefits

- For large applications, Module Federation can help you break these applications into micro-frontends and then share code and assets amongst them.
- Improve ease of collaboration between large teams as each team can own different part of the applications and publish changes independently that can be easily consumed.
- An NPM-like experience for code reuse. I see Module Federation as JavaScript code sharing on steriods as you can share not just modules but components, assets, layouts and so much more.

## A Quick Primer on Bundler Runtime

Before we discuss how [Module Federation works](#how-module-federation-works), it's important to understand the concept of a bundler's runtime. A bundler is a tool that takes all the various files (JavaScript, CSS, images, etc.) in your application and "bundles" them into a smaller number of files that can be efficiently served to the browser.

The key part here is the "runtime" - this is the code that the bundler generates to manage the loading and execution of your application's code at runtime. Bundlers like Webpack and [Rspack](https://rspack.org) all have their own runtimes that takes care of things like:

- Resolving module dependencies
- Dynamically loading code on demand
- Managing shared modules and libraries
- Handling **H**ot **M**odule **R**eplacement (HMR)
- Providing an API for your application code to interact with the bundler

This bundler runtime is typically embedded into the final bundle that gets served to the browser. And it's this runtime that gives bundlers the ability to do dynamic things like [Module Federation](#how-module-federation-works).

Understanding the role of the bundler's runtime is crucial to grasping how Module Federation works under the hood. Now let's dive into how Module Federation leverages this runtime capability of bundlers.

## How Module Federation Works

At a high level, Module Federations works by enabling your application to dynamically load code from remote sources at runtime.

Here's how it works in simple terms:

1. **Defining Providers**: In your application, you designate certain parts as "providers" - these are the pieces of your app that can be shared and loaded dynamically by other parts of your app.

2. **Exposing Modules**: The providers expose specific modules or components that other parts of your app can access and use. This allows you to share functionality between different sections of your application.

3. **Consuming Providers**: Other parts of your app, known as "consumers", can then import and use the exposed modules from the providers. The consumer application dynamically loads the provider code when it's needed, without having to build or deploy it together.

As earlier stated, Module Federation leverages the fact that bundlers have runtimes, this means that the bundler's runtime can be used to dynamically load and execute code at runtime, even if that code was not originally part of the bundle.

This is the key ingredient that enables Module Federation. By exposing certain parts of the application as `providers` and allowing other `consumer` parts to dynamically load and use those providers, the application can be broken down into smaller, more independent federated modules.

For more indepth info on how Module Federation works, check out Zack Jackson's [Understanding Module Federation: A Deep Dive](https://scriptedalchemy.medium.com/understanding-webpack-module-federation-a-deep-dive-efe5c55bf366)

## Implementing Module Federation

Module Federation is supported by Rspack, the bundler used by the [Rsbuild](https//rsbuild.dev) tool employed by [Sails Shipwright](https://github.com/sailshq/sails-hook-shipwright). This means that any project scaffolded with The Boring Stack has the necessary components to implement Module Federation right out of the box.

### Step 1: Scaffold projects

Let's begin by scaffolding two projects - `provider` and `consumer` with the `create-sails` CLI tool of The Boring JavaScript Stack inside a directory called `tbjs-module-federation`. In your terminal run the below commands:

```sh
mkdir tbjs-module-federation && cd tbjs-module-federation
```

```sh
npx create-sails@latest provider --react &&  npx create-sails@latest consumer --react
```

### Step 2: Common set-ups

Okay, let's start with setup that both the provider and consumer needs project. Go into both projects and then run `npm i` to install dependencies.

Next, let's install the `@module-federation/enhanced` the package that provides enhanced features for [Module Federation 2.0](https://module-federation.io/blog/announcement.html) in both `consumer` and `provider`:

```sh
npm i @module-federation/enhanced -D
```

So now let's open up both `provider` and consi,er in an editor and start changing some stuff that will let us start exposing federated modules.

Create `assets/js/boostrap.js` which will contain the code currently in `assets/js/app.js` and then replace the content of `assets/js/app.js` with the following in both `consumer` and `provider`:

```js
import('./bootstrap')
```

And `assets/js/bootstrap.js` will now have:

```js
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import '~/css/main.css'

createInertiaApp({
  resolve: (name) => require(`./pages/${name}`),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})
```

The above is necessary because of the async boundary in Module Federation since the modules will be available at runtime not build time, dynamically loading the project with `import()` is necessary for Module Federation to work today.

### Step 3: Setting up the provider

What we want to do in `provider` is expose all the userland components in `assets/js/components/` and layout in `assets/layouts/` so `consumer` can start consuming them.

Let's import the `ModuleFederationPlugin` in `config/shipwright` and `dependencies` from `package.json`

```js
const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack')
const { dependencies } = require('../package.json')
```

Then let's add `assetPrefix: true` to `shipwright.build`

```js
  dev: {
    assetPrefix: true,
  }
```

Finally let's setup the `ModuleFederationPlugin` and expose the components and layouts. We will also specify that `react`, `react-dom`, and `@inertiajs/react` are all shared dependencies:

```js
module.exports.shipwright = {
  build: {
    tools: {
      rspack: (config, { appendPlugins }) => {
        config.output.uniqueName = 'federation_provider'
        appendPlugins([
          new ModuleFederationPlugin({
            name: 'federation_provider',
            exposes: {
              './components/GoogleButton':
                './assets/js/components/GoogleButton.jsx',
              './components/InputEmail':
                './assets/js/components/InputEmail.jsx',
              './components/InputText': './assets/js/components/InputText.jsx',
              './components/InputPassword':
                './assets/js/components/InputPassword.jsx',
              './components/InputButton':
                './assets/js/components/InputButton.jsx',
              './layouts/AppLayout': './assets/js/layouts/AppLayout.jsx',
            },
            shared: {
              react: {
                singleton: true,
                requiredVersion: dependencies['react'],
              },
              'react-dom': {
                singleton: true,
                requiredVersion: dependencies['react-dom'],
              },
            },
          }),
        ])
      },
    },
  },
}
```

Note both the `config.output.uniqueName` and `name` property of the `ModuleFederationPlugin` are the same and we will use this name while setting up the consumer to be aware of this provider.

So `config/shipwright.js` of `provider` should look like this:

```js
const { pluginReact } = require('@rsbuild/plugin-react')
const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack')
const { dependencies } = require('../package.json')
module.exports.shipwright = {
  build: {
    dev: {
      assetPrefix: true,
    },
    tools: {
      rspack: (config, { appendPlugins }) => {
        config.output.uniqueName = 'federation_provider'
        appendPlugins([
          new ModuleFederationPlugin({
            name: 'federation_provider',
            exposes: {
              './components/GoogleButton':
                './assets/js/components/GoogleButton.jsx',
              './components/InputEmail':
                './assets/js/components/InputEmail.jsx',
              './components/InputText': './assets/js/components/InputText.jsx',
              './components/InputPassword':
                './assets/js/components/InputPassword.jsx',
              './components/InputButton':
                './assets/js/components/InputButton.jsx',
              './layouts/AppLayout': './assets/js/layouts/AppLayout.jsx',
            },
            shared: {
              react: {
                singleton: true,
                requiredVersion: dependencies['react'],
              },
              'react-dom': {
                singleton: true,
                requiredVersion: dependencies['react-dom'],
              },
              '@inertiajs/react': {
                singleton: true,
                requiredVersion: dependencies['@inertiajs/react'],
              },
            },
          }),
        ])
      },
    },
    plugins: [pluginReact()],
  },
}
```

Now you can go ahead and start up the dev server for the provider by running

```sh
npm run dev -- --port 1338
```

### Step 4: Setting up the consumer

So for the consumer, we will begin by importing `ModuleFederationPlugin` and `dependencies` from `package.json`

```js
const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack')
const { dependencies } = require('../package.json')
```

Then we will make the consumer aware of the provider by setting up the `ModuleFederationPlugin`:

```js
module.exports.shipwright = {
  build: {
    tools: {
      rspack: (config, { appendPlugins }) => {
        appendPlugins([
          new ModuleFederationPlugin({
            name: 'federation_consumer',
            remotes: {
              federation_provider:
                'federation_provider@http://localhost:1338/mf-manifest.json',
            },
          }),
        ])
      },
    },
  },
}
```

Finally we will specified the shared dependencies

```js
  shared: {
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
    '@inertiajs/react': {
      singleton: true,
      requiredVersion: dependencies['@inertiajs/react'],
    },
  },

```

This is how `config/shipwright.js` in `consumer` should look like:

```js
const { pluginReact } = require('@rsbuild/plugin-react')
const { ModuleFederationPlugin } = require('@module-federation/enhanced/rspack')
const { dependencies } = require('../package.json')

module.exports.shipwright = {
  build: {
    tools: {
      rspack: (config, { appendPlugins }) => {
        appendPlugins([
          new ModuleFederationPlugin({
            name: 'federation_consumer',
            remotes: {
              federation_provider:
                'federation_provider@http://localhost:1338/mf-manifest.json',
            },
            shared: {
              react: {
                singleton: true,
                requiredVersion: dependencies.react,
              },
              'react-dom': {
                singleton: true,
                requiredVersion: dependencies['react-dom'],
              },
              '@inertiajs/react': {
                singleton: true,
                requiredVersion: dependencies['@inertiajs/react'],
              },
            },
          }),
        ])
      },
    },
    plugins: [pluginReact()],
  },
}
```

### Step 5: Using federated modules in consumer

Okay finally let's now begin replacing components and `AppLayout` used in `consumer` to use the federated counterparts. So you will replace these imports in `assets/js/pages/login.jsx`:

```js
import InputEmail from '@/components/InputEmail.jsx'
import InputPassword from '@/components/InputPassword.jsx'
import InputButton from '@/components/InputButton.jsx'
import GoogleButton from '@/components/GoogleButton.jsx'
```

With:

```js
import InputEmail from 'federation_provider/components/InputEmail'
import InputPassword from 'federation_provider/components/InputPassword'
import InputButton from 'federation_provider/components/InputButton'
import GoogleButton from 'federation_provider/components/GoogleButton'
```

Note we don't use the `.jsx` extension because the imports must match how we expose them in `provider`

Do these for all the usage in every file in `assets/js/pages/` and then finally delete the content of `assets/js/components/` and `assets/js/layouts` as we no longer need them as we are now using federated modules provided by `provider` 🚀

Now start up the dev server for `consumer` by running:

```sh
npm run dev
```

Now visit `http://localhost:1337` to see the project using federated modules!

### Step 6: Modifying Tailwind CSS

You might have noticed that the styling from `provider` no longer applies in `consumer` this is because Tailwind is not aware of `provider` codebase so it can crawl it to generate the final CSS.

To solve this we can either use Tailwind CSS [`safelist`](https://tailwindcss.com/docs/content-configuration#safelisting-classes) feature, which will need us to manually add classes to an array that should be generated whether Tailwind finds them in the `content` path or not.

However, since our setup is quite simple we can add the path to `provider` to the `tailwind.config.js` of `consumer` so the `content will now look like this:

```js
 content: [
    './views/**/*.ejs',
    './assets/js/**/*.{js,ts,jsx,tsx}',
    '../provider/assets/js/**/*.{js,ts,jsx,tsx}'
  ],
```

And that's it everything should now work as if those modules are in `consumer`. When you change any component in `provider` it will reflect in `consumer`. Pretty cool right?

[See the full demo project](https://github.com/DominusKelvin/tbjs-module-federation)

## Learnings

I had so much fun setting this up and learnt a ton.

- The async boundary caviar of setting up Module Federation is a necessary evil but a little bird tells me Zack Jackson might be working on this caviar not existing in the future.
- Module Federation is an amazing piece of engineering that big organizations like ByteDance leverages heavily for their web development needs.
- The application of Module Federation goes beyond just micro-frontend, it can potentially be used for something I call Federated Sails Actions.

## Next Steps

Alright, now that you know how to setup up Module Federation for your team in The Boring JavaScript Stack, what's next? Well a couple of things:

- Use [Zephyr Cloud](https://zephyr-cloud.io?utm_source=mf-in-tbjs) for deploying and managing federated Boring Stack apps.
- Implement Federated Sails Actions to make your Sails backend serverless, as Zack Jackson explained how Module Federation can enable [serverless computing](https://scriptedalchemy.medium.com/superpositioned-infrastructure-the-quest-for-truly-serverless-computing-a39fa3756e75).

I plan to blog about the above as sequels to this article so look out for those articles.
