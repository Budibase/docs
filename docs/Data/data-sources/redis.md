---
title: Redis
excerpt: Connect Redis as a datasource
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use Redis when you need a fast key-value store for simple read and write operations.

For the official Redis documentation, see the [Redis docs](https://redis.io/docs/about/).

## Connect Redis

1. Open the **Data tables** link
2. Add a datasource and select `Redis`
3. Enter the connection details
4. Save the datasource

## Connection details

You will usually need:

* Host
* Port
* Username, if your Redis server requires one
* Password, if your Redis server requires one
* TLS settings, if your Redis server requires TLS

If Budibase Cloud is connecting to your Redis server, allow the Budibase IP addresses through your firewall. See [Whitelisting](doc:whitelisting).

If you are using Redis locally in Docker, `localhost` points to the Budibase container, not your host machine. Use `host.docker.internal`, or `172.17.0.1` on Linux.

## Test the connection

After saving the datasource, create a simple read query such as `GET my-key` or a write query such as `SET my-key test-value` to confirm Budibase can reach Redis.

If the connection fails, check the host, port, authentication details, TLS requirements, and firewall rules.

## Use the Redis Command query

`Redis Command` is the most flexible query type. Use it when you want to run a Redis command directly.

1. Open the Redis datasource
2. Create a query with the `Redis Command` function
3. Enter a valid Redis command in the query box
4. Test and save the query

## Common operations

### Create

Use `SET` to create or update a key. You can also set a TTL in seconds.

### Read

Use `GET` to return the stored value for a key.

### Delete

Use `DEL` to remove a key.

## Notes

* The basic query examples only support string values
* Use the command query when you need more than the built-in helpers
* Refer to the Redis docs for supported data types and commands
