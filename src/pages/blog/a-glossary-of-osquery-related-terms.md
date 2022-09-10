---
 layout: '../../layouts/BlogPost.astro'
 title: 'A glossary of osquery related terms'
 description: 'Found these terms popping up more and more in my research into osquery. Thought it wise to document them.'
 pubDate: 'October 21, 2021'
---

In my research of osquery(still ongoing by the way), there were certain terms that just kept popping up.

Some of these terms I had barely heard of and others I knew but not that well. So I decided to just document them, call it a glossary of osquery related terms if you will. Let's check them out...

## Endpoints

These are devices such as laptops, phones, tables, servers, Internet-of-things devices that are connected of a particular computer network.

## Endpoint Monitoring

This refers to tracking activity and risks across all endpoints.

## File integrity

This is the process of protecting a file from unauthorized changes. Simply put, you validate a file's integrity to determine whether or not it has been altered after its creation, archiving or other events.

## File integrity monitoring (FIM)

FIM is a technology that helps to monitor and detect the changes in files or any suspicious activity which may lead to a future cyber attack.

## Fleet

Not to be confused with [FleetDM](http://fleetdm.com), fleet simply means a collection of endpoints.

## Incident Detection and Response

Also known as attack/threat detection and response, it is the process of finding intruders in your infrastructure, retracing their activity, containing the threat and removing their foothold.

## osqueryi

The interactive osquery shell, for performing ad-hoc queries.

## osqueryd

A daemon for sheduling and running queries in the background.

## osqueryctl

A helper script for testing a deployment or configuration of osquery.

## RocksDB

A highly write-optimized, embedded key-value database that is compiled into the osquery binary used by osquery for storage.

## Watchdog

In osquery speak, watchdog is a performance monitor guard for every query processing. It keeps the currently executing processes in check and kills unwanted worker process if they exceed beyond the defined performance thresholds. It can also blacklist the least performing or problem causing queries.

## Conclusion

This is by no means an exhaustive list of terms, but so far in my research these stood out as they are mostly new to me. Know more osquery related terms? [Tweet](https://twitter.com/dominus_kelvin) at me.
