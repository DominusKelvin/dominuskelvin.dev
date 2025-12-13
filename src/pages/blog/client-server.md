---
layout: '../../layouts/BlogPost.astro'
title: It's client-server not client/server
description: The web was designed in a client-server architecture. Being a Client-Server Pragmatist is not a new concept; it simply means you are mature enough to distribute work in alignment with the original architecture of the web.
pubDate: '16 January, 2024'
---

I've been thinking a lot about how websites work, specifically the relationship between clients and servers. Today, two different school of thoughts in web development got me pondering about this even more.

## Server Purists

On one hand, we have the Server Purists. These folks believe that little or no work should be done on the client, and everything should be evaluated on the server. They argue that the client should only display to the user the final state of that evaluation.

In fact, this school of thought will go as far as making a button click interaction on the client to increment a counter and then send that increment to the server in order to compute it and retrieve the result.

What I've found is that server purists hail from the days when JavaScript ran only on the client, so these folks mostly use languages other than JavaScript on the server. The need to not do any work on the client has led to some interesting technologies like [Phoenix Liveview](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html), [Rails Hotwire](https://hotwired.dev/), and of course, [Laravel Livewire](https://livewire.laravel.com).

I get it, really. For a while, I considered myself a server purist as well, and that's the whole reason why [The Boring JavaScript Stack](https://sailscasts.com/boring) was so enticing to me - let's move some of the work of building an SPA to the server.

## Client Enthusiasts

On the other hand, we have the Client Enthusiasts. These folks are mostly JavaScript lovers who want their websites and web applications to run exclusively on their users' devices. Client Enthusiasts arose from the heyday of SPAs (Single Page Applications).

You would think that since JavaScript runs on both the client and the server, the Client Enthusiasts would take that as a cue to distribute work between the client and the server.

I can make arguments for both sides, and there are valid points, really. But to me, few things are absolutely and completely right in software development. That's why you'd get the classic "it depends" answer in our circle because it really "depends".

## Client-Server Pragmatists

What if you don't have to choose between being exclusively a Client Enthusiast or a Server Purist? What if there's a third way? What if you can be a Client-Server Pragmatist?

You see, the web was designed in a client-server architecture. Being a Client-Server Pragmatist is not a new concept; it simply means you are mature enough to distribute work in alignment with the original architecture of the web.

I love this definition on Wikipedia:

> The client–server model is a distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients.

Based on the definition above, it is evident that work was intended to be distributed between two roles: a server, who provides the resources, and a client, who requests those resources.

I have found that both the Server Purists and Client Enthusiasts, in their insistence on one side being the absolute truth, have negatively impacted web development and user experiences. The Client Enthusiasts, in particular, led us into the era of Spinnerfests by burdening the client with excessive responsibilities.

Client enthusiasts are also the folks who make Ship less JavaScript™️ a thing because they just throw megabytes of JavaScript at their users' devices to download, parse, and evaluate.

Server purists also hurt user experiences because for every interaction, there is a round trip to the server, so their apps are not as snappy as they should be. I don't know about you, but I don't want every button click on a page to make a request to the server to update the UI state.

Client-Server Pragmatists believe that both the client and the server are equally important, and a great user experience on the web must have a balanced distribution of work between the client and the server.

This belief is practical, pragmatic, and grounded in reality.

As I write this I get to think about this [post](https://x.com/sarah_edo/status/1744750970611941497?s=20) by Sarah Drasner

> Brene Brown says: 'When someone knowledgeable admits uncertainty, they become more credible'. I wonder if this is why it’s clear someone is a new dev when they’re 100% committed to an idea, and more Senior with 'it depends'

The Client-Server Pragmatists believe that neither side is 100% right when it comes to distributing the workload between the client and server. This distribution depends on various factors, among other things:

- the kind of work,
- the feedback expectations of the users

I believe Dan Abramov brilliantly illuminated this concept in his article ["The Two Reacts"](https://overreacted.io/the-two-reacts/). Here is an excerpt:

> Asking the server for a fresh UI works well when the user expects a little delay, for example, when clicking a link. When the user knows they're navigating to some different place in your app, they'll wait. However, any direct manipulation (such as dragging a slider, switching a tab, typing into a post composer, clicking a like button, swiping a card, hovering a menu, dragging a chart, and so on) would feel broken if it didn't reliably provide at least some instant feedback.

Server purists choose to ignore that trips to the server involve latency. Because of that, they hurt the user experience as the feedback time feels broken for interactions where users expect instant feedback, such as clicking on a button.

Client enthusiasts chose to ignore the fact that the server is capable of handling page navigation. As a result, they reinvented navigation on the client side, which often leads to a broken user experience. Additionally, this approach requires shipping more JavaScript than necessary to handle the task.

## There is always a server

I hate to break it to the client enthusiasts, but there has always existed a server.

Even during development, what do you think happens when you run `npm run dev` in your project? A development server is started for you! This is because servers are good at handling requests.

At development time, your laptop acts like a server, taking in requests when you visit `localhost:1337` or whatever port your framework of choice gives you!

And do you want to know what is even more interesting? Even after you run `npm run build` to generate the static assets for your static sites, written in whatever static builder you use, you still need to give those generated files to a CDN (Content Delivery Network), which is responsible for serving your static files.

So, there will always be a server as long as you are developing websites or web applications, and that's fine. However, what varies is the degree of control or abstraction layer in which your server exists.

Server enthusiasts appreciate the abundance of control they have over their servers, placing everything front and center for their convenience.

## Work distribution

As mentioned earlier, the web architecture expects a healthy distribution of work for your users to have great experiences. Let's look at a couple of examples to give you an idea of how to go about distributing said work.

- When a user clicks the close button of a modal, there's no need to go to the server to close it. It may seem like common sense, but I've witnessed server purists doing this, and it just doesn't feel right.

- Load the content of the page alongside with the page itself. No need to load the page shell and then make another request for data to bake the necessary HTML. Let the server handle it; it's efficient at sending HTML over the wire.

- Users don't expect the page to reload when they click on an "add to cart" button. Let the client handle that.

- Drag and drop interactions should provide instant feedback and as such should be done on the client.

- When a list of data is already loaded, filtering should be done on the client.

- Authentication and authorization should happen on the server. This prevents Flash of Unauthenticated Content and the layout shift it brings. The server is best for handling the work that involves the security of your web applications.

## Conclusion

This is mostly my brain dump on the debacle about client or server that has been going on in the web development space. It should serve as a clarion call that the web is architectured as client-server and also encourages more web software developers to embrace that architecture and be Client-Server Pragmatists.

I already see the pendulum swinging on this one, as the idea of RSC (React Server Component) to me is an embrace of the client-server architecture of the web. Or, to be more philosophical about it, it's an embrace of the Client-Server Pragmatist way.
