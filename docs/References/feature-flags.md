---
title: Feature Flags
excerpt: How to enable flagged features on your tenant
deprecated: false
hidden: false
metadata:
  robots: index
---
We release features behind feature flags, before they are generally available.

<Callout icon="❗️" theme="error">
  Flagged features are still under development. We cannot guarantee their stability and they are subject to change. We recommend that you use them in a test environment. Proceed at your own risk!
</Callout>

## Enabling a feature flag on self-host

1. Ensure your `.env` file includes the following line

`TENANT_FEATURE_FLAGS=*:FEATURE_FLAG_1`

(You'll need to swap `FEATURE_FLAG_1` for a correctly named flag.)

2. Ensure your `docker-compose.yaml` has the following line, duplicate in both `app-service > environment` and `worker-service > environment`

`TENANT_FEATURE_FLAGS: ${TENANT_FEATURE_FLAGS}`

Copy this line exactly. This will pass the value from the `.env` file, into your container.

<br />

## Enabling a feature flag on Budibase Cloud

We will need to enable this from our end. Contact [support@budibase.com](mailto:support@budibase.com). Make sure to include

* The name of the feature flag that you'd like enabled.
* The URL of your Budibase tenant.

We cannot guarantee that we will enable the feature on your account - we will consider on a case-by-case basis.

<br />
