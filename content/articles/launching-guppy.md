---
title: "Launching guppy: the needed Tinker tool for backend JavaScript"
description: "This simple yet powerful desktop application allows you to run Javascript code and act as a scratchpad for trying out new ideas – all within the context of your application. Here is the story of how it was built"
publishedAt: 'November 14, 2021'
id: 17
---
> Scratch your own itch

<!-- <img src="/images/covers/guppy-card.png" width="350"> -->

About a month ago(precisely on the 18th of October, 2021), I launched [guppy](https://guppy.sailscasts.com) on [Twitter](https://twitter.com/Dominus_Kelvin/status/1450221793344696324?s=20) after teasing about building it for a while [here](https://twitter.com/Dominus_Kelvin/status/1428057558145814530?s=20), also [here](https://twitter.com/Dominus_Kelvin/status/1431479983923515392?s=20) and [there](https://twitter.com/Dominus_Kelvin/status/1432152058250121220?s=20)

So if memory serves me correctly, it took about 3 months(August 18th - October 18th, 2021) to roll out the first version of guppy to the public!

## The journey to guppy 1.0
First of, I think its worth saying that I didn't start out having a plan to build another product this year. The goal was to add more content to both [The Sailscasts Blog](https://blog.sailscasts.com) and the [Sailscasts platform](https://sailscasts.com).

However I kept getting this itch that debugging backend JavaScript and in particular Sails can be better and will sure make me(and hopefully other folks) more productive.

Granted we have the **Sails console** that let's you quickly test out queries and helpers without needing to start the development server, but I find that amongst other things it presents a slow feedback loop as I need to kill it and start it again each time I make a change to my codebase.

Also I have always been a fan of the Laravel community and they don't have shortage in tools that make their developers lives easier(like Tinkerwell) and I asked myself why can't I do that for the Node.js community starting with Sails eh? What's the worst that can happen? I'd tell you I build something that I only use!

I however decided I don't know enough to build a tool like this and for months I just suck it up and went about my business. But it kept coming back and to the point I couldn't put it away no more...

Finally, I decided to take a stab at a [POC](https://twitter.com/Dominus_Kelvin/status/1428057558145814530?s=20) and boy was I right to! Just having a glimpse of what the thing I was concocting and hacking my way into can be, made me not want to stop.

So I kept working on "my thing" as I called it on Twitter(I haven't gotten a name for it then or didn't I?).

I had no shortage of ideas for features to go into the first version but I wanted something usable out the door for v1 as quickly as possible as it so happens quite a few folks in the Sailscasts Community was wanting a tool like what I was building. I narrowed down those features to the essentials which are guppy can:

* run any JavaScript code
* open a local Sails project and run code against
* run against the latest changes you make in your Sails codebase
* run Sails helpers and Waterline queries

 And in about a month plus I was done!

## Learnings, learnings
I had a lot of learning moments while building guppy and times I just wanted to stop because it was driving me nuts.

I hit this point where I couldn't get async code to run and guppy kept returning pending promises. It was a rather interesting problem which I however managed to solve in a way that made guppy capable of running async code with or without the user adding the `async` keyword! (See the [docs](https://guppy-docs.sailscasts.com) for guppy for more on that)

I also had it with streams and had to talk to some rather helpful folks like [Luciano Mammino](https://twitter.com/loige) and another of my friend on the internet(who funny enough I don't happen to know his Twitter handle). It was a learning moment(s).

## Launch it!
Okay, so I built v1, had my fair share of learnings and edge cases and came out of it strong! What else can go wrong eh? Nothing, right? Wrong!!! It turns out [Paystack](https://paystack.com) my beloved and go-to Payment processor happened to make a subtle change in their system that prevents merchants that haven't linked a Domiciliary account to their paystack account(merchats like yours truly) from receiving payments!

Prior to building guppy, I have had no issue accepting payments via Paystack in Sailscasts so I thought I just collect the payments for guppy same way but Karma didn't think so.

So for my negligence in attending to that litle detail, guppy launch was delayed for about 2 weeks or more as I had to talk to the bank to create a corporate account and all that jazz.

However Paystack was really helpful as they helped fast tracked the process(if not it might have taken two months for me to get that done myself)

During the wait, I built the guppy website(of wish I am really proud, take a [look](https://guppy.sailscasts.com) and see why).

 After that was done! I cleaned up guppy and then it happened - that feeling of "Dude don't launch this! No one is going to even noticed guppy not to talk of using it". My oh my can you believe it!, after doing all those work Imposter Syndrome was getting the best of me at Launch day.

## Moving forward with the launch
Let's skip the mental tussle I had to go through with Imposter Syndrome and cut right to the chase where I tell it "Not today", summoned courage and... Launched!

I launched first on [Twitter](https://twitter.com/Dominus_Kelvin/status/1450221793344696324?s=20) with a [demo](https://www.youtube.com/watch?v=9eCNERqwH1c) of course.

I went on to Launch of [ProductHunt](https://www.producthunt.com/posts/guppy-2) and I was shocked(I still am) at the upvotes guppy received. I also announced on [IndieHacker](https://www.indiehackers.com/product/guppy) and guppy picked by [daily.dev](https://app.daily.dev/posts/wQw-x8mT7) that same day!

## First license sold
So it's all good to get noticed on Launch day and the likes and retweets and all. However guppy is a paid product that sells a yearly license worth $30 per year(which is about $2 per month).

So I was waiting if someone finds guppy useful enough to pay for it! And that someone did come! guppy sold it's first license on the second day (October 19th, 2021). It was a great moment for me which I basked in of course. But my basking was cut short abruptly as the whole delivery flow for guppy wasn't working.

So with guppy when you pay for the license, you get emailed the license key and links to download guppy for whatever platform you are in(Mac, Windows or Linux).

But the email wasn't sent for some reason. I quickly had to fix that but only after I manually sent the customer the email containing those details. Customer was happy he finally got what he paid for and when he tried installing guppy... guppy didn't run! Oh my God! It so happened I was so bored waiting to launch guppy and I couldn't resist to make some last minute refactoring of guppy codebase that wasn't properly tested and the rest is history.

> Moral: don't refactor at the last minute, at least test the damn thing if you do!

I quickly had to ship out a `v1.0.1` that fixed this bug and send the customer the link to download it. He finally got a working guppy and he was one satisfied customer!

So far guppy has sold over 4 licenses which considering how young guppy is, is amazing!

## Onward
guppy is the code runner for Node.js/Sailjs I have always wanted and it has greatly improved my workflow with Sails.js. I can quickly test queries and helpers and those times I had issues sending the emails to guppy's licensee, guppy helped me resolved those issues faster than I would have if I was using the Sails console.

Still much in it's infancy but just yesterday I was having a conversation with one of guppy's licensee and turns out he has nothing but praise for guppy as he has integrated it into his workflow as much as I have.

I plan on improving guppy a whole lot by following my imagination of what I want it to be and also getting customers' feedback. Already looking at `v1.1` pretty soon and eagerly waiting for `v2.0` as I just can't contain my excitement in what guppy will bring to the table.

You can follow guppy's journey on [AppJourney](https://appjourney.io) or join the [Sailscasts Community](https://discord.com/invite/gbJZuNm) and discuss about guppy in the `#guppy` channel. Want a guppy? [Get one here](https://www.guppy.sailscasts.com/#buy).

Until next time, remember...
> See a need, fill a need - From the 2005 animated Sci-fi Robots
