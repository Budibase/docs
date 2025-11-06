---
title: Whitelisting
excerpt: >-
  Ensuring that your self-hosted installation or Budibase Cloud usage is not
  disrupted by network conditions.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  pages:
    - slug: external-data-sources
      title: External data sources
      type: basic
    - slug: self-hosted-licensing
      title: Self-hosted licensing
      type: basic
    - slug: self-hosted-ai-features
      title: Self-hosted AI features
      type: basic
---
Budibase communicates with your databases, services, and Budibase Cloud infrastructure through a small number of well-defined network endpoints. If your environment uses a firewall, proxy, or private network, you may need to whitelist specific IP addresses or domains to ensure Budibase operates correctly.

This guide provides an overview of where whitelisting is required, along with links to more detailed pages tailored to your specific deployment type.

### Budibase Cloud

If you are using Budibase Cloud, the Budibase servers will connect to your external data sources (e.g., PostgreSQL, MySQL, Microsoft SQL Server, REST APIs). To allow these connections, **you’ll need to permit inbound traffic from the Budibase Cloud IP addresses on your database firewall**.

:arrow_right: Read more: [Connecting Budibase to External Data Sources]()

### Self-hosted Deployments

When you host Budibase on your own infrastructure—either on-premises or via a third-party provider—additional network rules may apply. **Self-hosted installations make outbound connections to Budibase Cloud** for specific services, including licensing, authentication, and AI features.

#### Licensing and Account Portal

License activation and account validation **require outbound HTTPS access to the Budibase Account Portal**. Without it, license synchronization and updates will fail.

:arrow_right: Read more: [Self-hosted Licensing and Account Portal Whitelisting]()

#### AI Features

Budibase AI capabilities (e.g., intelligent chat, smart automations) also depend on outbound connections to Budibase Cloud. If your network blocks these endpoints, **AI functionality will be unavailable**.

:arrow_right: Read more: [Self-hosted AI Features Whitelisting]()

### Keeping Up-To-Date

Budibase IP addresses and domains may change periodically as our infrastructure evolves. Registered users will receive advance notice of any changes. However, we recommend reviewing these pages periodically to confirm that your firewall rules are current.
