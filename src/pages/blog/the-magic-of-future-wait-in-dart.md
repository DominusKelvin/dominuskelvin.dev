---
  layout: '../../layouts/BlogPost.astro'
  title: 'The magic of Future.wait() in Dart'
  description: "Future.wait let me satisfy a fearture request in a Flutter codebase I was working on. I show how I used it."
  pubDate: 'Octobar 28, 2020'
---

> A software bug is an error, flaw or fault in a computer program or system that causes it to produce an incorrect or unexpected result, or to behave in unintended ways.

I spent some excruciating amount of time trying to figure out how to satisfy a feature request in a flutter codebase I am working on. This article is to help anyone or my future self easily solve this problem. Here we go...

## The problem

I have a list of keys that I want to loop through and make a network request to get some data using each item in that list. Naive me, I did something like this:

```dart
 Future<List> getAllFinalItems() async {
  List finalItems = [];
  // Get the item keys from the network
  List itemsKeysList =   await getItemsKeysList()

  // Loop over them with a forEach and make request
  itemsKeysList.forEach((item) {
    finalItem = await getFinalItem(item);
    finalItems.add(finalItem)
  })
  return finalItems;
 }
```

Obviously I have stripped out some implementation details for the sake of brevity but I think you get the gist.

At first glance the above code should work right? At least so it seemed to me. But here's the kicker; when I `print` the value of `finalItems` guess what I had?

```dart
print(finalItems) // []
```

Yes folks, I got me an empty list!

Here is why...

It turns out that since we are making an asynchronous operation, at a point in time, the value gotten will be an instance of the `Future` class so the value won't be added to the `finalItems` list. Classic right?

## Another naive implementation

When I figured out the problem with the first implementation out. I decided to use a `.then` block on the `getFinalItem` future so I ended up with something like this:

```dart
 Future<List> getAllFinalItems() async {
  List finalItems = [];
  // Get the item keys from the network
  List itemsKeysList =   await getItemsKeysList()

  // Loop over them with a forEach and make request
  itemsKeysList.forEach((item) {
    getFinalItem(item).then((item) {
      finalItems.add(finalItem)
    });
  })
  return finalItems;
 }
```

In my mind, I was killing it until... yeah you got it, it failed again! So the long and short of the reason why it failed was that I didn't make any change at all, I just rewrote the same thing in a different way!

## Community to the rescue

At the verge of almost calling it quit and give in to Imposter Syndrome, I decided to ask for help in the flutter Discord server. I got a couple of suggestions that was a bit too complex for my use case. Finally an amazing dude just slapped a code snippet in there and I was blown. With that snippet I came up with an implementation that was almost magic! Here is the final implementation that fits my need at the time:

```dart
Future<List> getAllFinalItems() async {
  List finalItems = [];
  // Get the item keys from the network
  List itemsKeysList =   await getItemsKeysList()

  // Future.wait will wait until I get an actual list back!
  await Future.wait(itemsKeysList.map((item) {
    finalItem = await getFinalItem(item);
    finalItems.add(finalItem)
  }).toList())

  return finalItems;
 }
```

According to the flutter docs, `Future.wait()`:

> Returns a future which will complete once all the provided futures have completed, either with their results, or with an error if any of the provided futures fail.

In the JavaScript world, this is achievable with [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) and frankly I didn't know until now that Dart had such a beauty!

It was really quite impressive how the `Future.wait` solved the problem for me by waiting until it gets actual results and not instances of the `Future` class.

## What I learnt

Well for one I need to up my Dart game and my knowledge of asynchronous programmings should be polished some more(it wouldn't hurt to do that eh? 😏). Finally we all need help so don't be shy to ask. Remember:

> He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever. – Chinese Proverb

Big kudos to the awesome brains in the flutter community for their willingness to help.

I hope this little piece will help you if you have to do something similar.

As always, you can [tweet](https://twitter.com/dominus_kelvin) at me on Twitter your thoughts on this article.

Code expressively 🎨, <br /> Kelvin
