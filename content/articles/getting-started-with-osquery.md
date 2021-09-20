---
title: "Getting started with osquery"
description: "osquery is an interesting tool that allows you query your operating system as if it was a big relational database"
publishedAt: 'September 20, 2021'
id: 14
---
I've always had a knack for databases and SQL.

Don't get me wrong, I am not a pro at both but I am constantly fascinated on how databases work and even more on the language we use in communicating with them(relational database speaking) - SQL. Fascinating stuff!

With all that said, you won't be surprise at my joy when I discovered a tech that allows me use SQL to ask my local operating system questions like "Hey OS, what running programs are hogging a lot of memory eh 🙃?". Trust me I am not kidding such a tech exists and it's (drum roll please 🥁 🥁) - osquery

## What is osquery?
There be a fancy definition for osquery that goes like this:

> osquery is an operating system instrumentation framework for Windows, OS X (macOS), Linux, and FreeBSD.

But to me osquery is...

> a tool that allows one ask questions about the running state of their machine using SQL.

What this means is that with osquery and a basic understanding of SQL you can put on a system engineer's hat and analyze a system for threat detection or just like me want to know what programming is so greedy with memory(one of my favorite statements so far in osquery 😁).

## Who made osquery
Like everything I am interested in, I did a bit of research to understand the genesis of osquery and the why of osquery and here are my findings:

osquery was created in 2014 by [Mike Arpaia](https://twitter.com/mikearpaia) at Facebook for the purpose of __low-level operating system monitoring__.

It was meant to be a light-weight solution to the problem of getting real-time insight into the current state of your infrastructure.

## How osquery works
At a high-level and to the best of my understanding at this time, osquery works by exposing an operating system as a high-performance relational database. This allows you to write SQL-based queries about your OS state efficiently and let you explore and ask questions about your operating system.

Remember tables hold data in relational database speaking? In osquery tables represent the current state of your operating system attributes or properties such as uptime, runing processes etc.

## Installing osquery

I hope you are as excited as I was when I discovered the world of osquery? Anyways let me show you how to get it setup if you are interested in giving it a spin.

To install osquery, head over to this [download](https://osquery.io/downloads) page and you should find a package for your operating system. I am on a Mac so I grabbed the .pkg installer.

Once you are done installing, you should have the `osqueryi` and `osqueryd` executables on your machine.

`osqueryi` is the osquery interactive query console/shell. It's similar to the Node.js REPL for example. I am still playing with this shell and haven't even touched on the `osqueryd` (which is a daemon for osquery).

## Your first osquery statement
To try osquery out, you can start `osqueryi` by going to your terminal and then running:

```sh
osqueryi
```

This should start the osquery shell and then enter this statement:

```sql
SELECT * FROM uptime;
```
Hit enter and you will see a table showing you the uptime of your operating system! 🤯

You can also see all the tables available to you by entering: `.tables` in the shell and hitting enter.

When you are done with the osqueryi shell you can type in `.exit` to exit the shell.

## My favorite statement 😍

Do well to just have fun playing with osquery like I do and explore the tables it present you with. I haven't played with all the tables yet but I want to leave you with a statement I pull out often 👇🏾

```sql
SELECT pid, name,
ROUND((total_size * '10e-7'), 2) AS memory_used
FROM processes
ORDER BY total_size DESC LIMIT 10;
```

The above statement will return the top 10 processes or programs(if you will) that are consuming a lot of memory. I discovered a forgotten running mysql daemon hogging a lot of memory from running this statement and you can believe that!

## Conclusion
osquery just gave me more reasons to write SQL and beyond that I think it's an amazing tool with amazing potential and use cases I haven't discovered yet.

I will sure want to see how I can be a sort of security engineer(in trainig) by leveraging osquery and it's tables.

If you do try osquery let me know what you think on [Twitter](https://twitter.com/dominus_kelvin)
