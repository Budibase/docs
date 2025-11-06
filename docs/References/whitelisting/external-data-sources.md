---
title: External data sources
deprecated: false
hidden: false
metadata:
  robots: index
---
If you're using Budibase and attempting to connect to your own data sources, you may encounter issues if a firewall is blocking traffic. You will need to allow inbound connections from Budibase to your database server.

### Budibase Cloud

Budibase Cloud **uses the following IP addresses** to connect to your data sources. You **should whitelist these IP addresses **in your firewall to allow Budibase Cloud **to access your database server**. Your organization’s Database Administrator can assist with this.

```
34.246.43.190 
34.255.55.113 
3.248.69.251
18.203.209.221
```

<Callout icon="📘">
  Firewall Considerations  

  The IP addresses above may change over time. Budibase will notify registered users prior to any change to give sufficient notice for firewall updates. If a connection that previously worked no longer functions, please check back here for updates.
</Callout>

### Budibase Cloud Client Side

While using Budibase Cloud in your browser, **requests are made to our CDN**, which is hosted behind AWS CloudFront. The CloudFront endpoints are:

```
https://d2l5prqdbvm3op.cloudfront.net
https://cdn.budicloud.prod.budibase.net
```

Both endpoints must be accessible from your browser for all Budibase functionality to work correctly.

### Self-hosted

If you are **self-hosting Budibase** on your own hardware or using a third-party provider, ensure that the IP address of your Budibase installation is whitelisted on any firewalls between Budibase and your data source.

<br />
