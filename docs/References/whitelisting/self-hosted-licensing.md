---
title: Self-hosted licensing
deprecated: false
hidden: false
metadata:
  robots: index
---
Self-hosted deployments of Budibase require communication with the Budibase Account Portal for license activation and validation.

If **your environment restricts outbound internet access**, you must allow outgoing HTTPS (TCP port 443) to the following IP addresses:

```
54.154.107.87 
54.194.185.139
34.253.253.72
```

### Requirements

* Allow outbound HTTPS (port 443) traffic to the IPs listed above.
* These endpoints are used exclusively for licensing and account-related services.
* If outbound access is completely blocked, license activation and account synchronization will not function correctly.
* IP addresses may change in the future; check this documentation periodically for updates.

### Related domains

* https://account.budibase.app -- used for account management and platform integration.

### Notes  


If you use an outbound proxy or network security appliance, **make sure it does not perform SSL interception** or blocking for the domains and IPs listed above.

<br />
