---
 layout: '../../layouts/BlogPost.astro'
 title: 'How osquery works'
 description: 'osquery makes it simple to ask question about your machine using SQL, but how does osquery work?'
 pubDate: 'October 18, 2021'
---

In my [previous](/blog/getting-started-with-osquery) article, I introduced osquery and how to get started using it to ask questions about your operating system.

In that article, we touched on the "why" and "what" of osquery mostly; why it exists and what osquery is.

In this article however we are going to be zooming in on the "how" of osquery; how osquery works under the hood. Let's begin...

## How osquery works

osquery exposes operating system information as a high performant relational database that you can query using SQL. osquery does this by leveraging SQLite as a query engine.

osquery also uses the SQLite query syntax so if you know the SQLite syntax, you will find osquery queries to be quite similar and easy to grasp in asking questions.

So what happens when you ask a question like `SELECT * FROM system_info` in osquery?

What happens is that osquery will parse, optimize and execute your query using the SQLite engine and then call the equivalent system's API to return the system's info and then go ahead to generate the data needed by your query using a concept called [**Virtual Tables**](https://www.sqlite.org/vtab.html) on-the-fly at query execution time.

> Do note that the data captured is not stored in SQLite but is mostly captured in Virtual Tables or RocksDB Database which is embedded in osquery.

## What are Virtual Tables
Virtual Tables are an SQLite concept and they are at the core of how osquery operates. As earlier stated, they are generated during query execution time either by calling a system's API or by parsing a file.

**Understand**: what osquery provides is a unified, simple and Low-level API - SQL - that gives us access to information already present in our operating systems. osquery helps organizes these information via Virtual Tables and the RocksDB database.

osquery leverages the SQLite engine for all query execution and accesses the equivalent system API or parse a file that holds the information the specified query needs.
## Conclusion
osquery has been a growing interest of mine and this article is meant to document my research on how osquery really works under-the-hood and also serves the purpose of educationg any one new to osquery on how osquery works technically.

I hope like me you better understand and appreciate how osquery does its magic!

As always if you've got any questions do tweet at [@Dominus_Kelvin](https://twitter.com/Dominus_Kelvin)
