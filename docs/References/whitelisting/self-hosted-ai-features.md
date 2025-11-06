---
title: Self-hosted AI features
deprecated: false
hidden: false
metadata:
  robots: index
next:
  pages:
    - slug: self-hosted-licensing
      title: Self-hosted licensing
      type: basic
---
<br />

When using** the Budibase AI provider** in a self-hosted installation, Budibase makes outbound connections to Budibase Cloud to fulfill AI-powered functionality.

If **your environment restricts outbound internet access**, you must whitelist the IP addresses used by the Budibase AI service.

### Requirements

* Allow outbound HTTPS (port 443) traffic to the IPs listed below.
* These endpoints are used exclusively for Budibase AI features such as automated app generation, content suggestions, and data interpretation.
* If outbound access is completely blocked, AI-related functionality will not work.
* IP addresses may change in the future; check this documentation periodically for updates.

```
52.49.212.28
52.51.194.21
52.215.97.67
```

### Related domains

* https://budibase.app -- used to authenticate and resolve AI-related API requests.

### Notes

If you’re using an outbound proxy or firewall, ensure SSL inspection does not interfere with AI requests. You might have to verify that your firewall allows SSL termination.
