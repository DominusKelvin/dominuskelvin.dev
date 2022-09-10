---
layout: "../../layouts/BlogPost.astro"
title: "The purpose of osquery"
description: "In this article we zoom in at the problem osquery was created to solve and some of the use case osquery can be applied to."
pubDate: 'October 22, 2021'
---

> When purpose is not known, abuse is inevitable - Myles Munroe

I am strong believer that knowing the purpose a tech was created thoroughly will help the user attain the full potential of usefulness of that tech.

So let's look at the purpose of osquery.

From my research I discovered that osquery was created for the purpose of **low-level operating system instrumentation, monitoring and analytics.**.

What the above mean is that osquery was intended to be a light level solution to maintaining real-time insight into the current state of your infrastructure.

osquery achieves this my exposing an operating system as a high-performance relational database and allow you wield good ol' SQL as your magnifying glass into your operating system or endpoints.

## osquery use cases for enterprise
From my research I have discovered that osquery has been deployed by several companies as a universal agent for various purposes like:

* Intrusion/Malicious activity detection (EDR)
* File Integrity Monitoring
* Incident Investigation
* Vulnerability Detection
* Audit and Compliance

If most of these terms are new to you, not to worry I covered most of them in my [previous](/blog/a-glossary-of-osquery-related-terms) post about osquery.

## osquery for the every day developer?
As you can see above, osquery is really being deployed and used as a base for a lot of security related use cases and all. But what excites me about osquery is anyone that knows SQL can pick it up and use it. That's interesting but what usecases can the every day developer like you and I apply osquery to?

The above question is something I am looking into as I myself have used osquery to find process hogging memory, my local machine info, etc. But I belive that only scratch the surface of what we can use it for on a day to day.

I will be researching in this light bearing the purpose of osquery in mind and will definitely share my finding in this blog as well as on [Twitter](https://twitter.com/dominus_kelvin)

Stay tuned...
