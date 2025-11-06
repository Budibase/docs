---
title: Whitelisting
excerpt: Firewall Requirements for external data sources
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Inbound connections

If you're using Budibase and attempting to connect to your own datasources, you may have difficulty if you're running a firewall. You will need to allow connections from Budibase to your database.

### Budibase Cloud

The following IP addresses are used by Budibase Cloud to connect to your data source. You should whitelist these IP addresses on your firewall to allow Budibase Cloud to access your Database Server. Your organisation Database Administrator should be able to help with this.

```
34.246.43.190
34.255.55.113
3.248.69.251
18.203.209.221
```

> 📘 Firewall Considerations
>
> Note that the IP addresses above are subject to change. We will notify registered users prior to any change to give advance notice for firewall amendments. If you notice that a previously working connection has stopped working check back here.

### Budibase Cloud client side

While using Budibase Cloud in your browser, requests are made to our CDN which is behind AWS CloudFront. The CloudFront address is:

```text
https://d2l5prqdbvm3op.cloudfront.net
```

We may also connect to this CloudFront distribution through an alternate domain:

```text
https://cdn.budicloud.prod.budibase.net
```

Both will need to be allowed in your browser for all Budibase functionality to work.

## Self-hosted

If you are self-hosting Budibase on your own hardware or using a third-party provider you will need to ensure that the IP address used by your Budibase installation is whitelisted on any firewalls between Budibase and the data source.

## Outbound connections

This section only applies to users self-hosting Budibase.

## Self-hosted

There are some features that Budibase's self-hosted installation makes network calls back to Budibase Cloud to fulfill, for example AI functionality when using the Budibase AI provider.

For this to work, you will need to allow connections to [https://budibase.app](https://budibase.app) from your self-host installation.

### Account Portal Whitelisting

Self-hosted deployments of the platform require communication with the Account Portal for license activation, validation.

If your environment restricts outbound internet access, you must allow outgoing connections to the following IP addresses:

```
54.154.107.87
54.194.185.139
34.253.253.72
```

#### Requirements

* Allow outbound HTTPS (TCP port 443) to the IPs listed above.
* These endpoints are used exclusively for licensing and account-related services.
* If outbound access is completely blocked, licensing and account synchronisation will not function correctly.
* IPs may change in the future; check this documentation periodically for updates.

## Troubleshooting Connection Issues

If you have set up the connection to your data source within a self-hosted Budibase installation and you are experiencing difficulties connecting and you have terminal access to your Budibase instance you could try:

**Can you make contact from the Budibase container or host using telnet?**

```
apt install telnet
telnet 111.222.111.222 3306
```

Attempting a telnet connection to the IP address of your datasource and the port used by the data source (e.g. 3306 for MySQL, 5432 for Postgres, 1431 for MSSQL). If a connection is not made you should check if there is a firewall protecting your data source.

**Is your database server listening for remote connections?**

For security reasons many database servers will listen only for local connections by default. To allow connections from external servers your database server may need to be configured to listen for remote connections. As an example MySQL would need a configuration parameter as shown below:

```
bind-address           = 0.0.0.0
```

You can also check your database server is listening for remote connections by analysing the output from the `netstat` or `ss` commands.

**Does your data source force particular security settings?**

Some data sources will only allow encrypted connections. Some may require valid certificates for connecting. If you are having difficulties should should check with your Database Administrator for the correct settings to use.
