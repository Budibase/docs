---
title: Security
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
We take security very seriously at budibase - ensuring that your data is safe is crucial.

### Does Budibase Store My Data?

Budibase only stores your actual row data when using the budibase internal database. This is stored on a highly secure, scalable and fault tolerant multi-node couchDB cluster running in AWS, with the latest EC2 security updates.

When using external datasources, budibase works entirely as a proxy, and calls the datasource directly, returning the results to the client. 

Database credentials are always applied server side, and will never be exposed in the UI.

The self-hosted version of budibase can be deployed entirely inside your own network, on your own servers. When running self-hosted, you have total control over how you want to secure your data, and it never has to leave your VPC.

### How We Secure Budibase

* Force HTTPS connections and data-in-transit encryption in budibase cloud with TLS.
* Full Audit log tracking in budibase cloud for our internal systems.
* Regular penetration tests and AWS security configuration audits from 3rd party vendors
* Very regular data backups and snapshots in budibase cloud coupled with consistent database replication to minimise risk of data loss
* Host all servers in Ireland in SOC 1/2 and ISO 27001 certified datacenters.
* 2FA enabled for internal budibase cloud access.

### Found a vulnerability?

You can get in touch with us regarding a vulnerability via email at [community@budibase.com](mailto:community@budibase.com).

You can also disclose via huntr.dev. If you believe you have found a vulnerability, please disclose it on huntr and let us know.

[https://huntr.dev/bounties/disclose](https://huntr.dev/bounties/disclose)

This will enable us to review the vulnerability and reward you for your work!
