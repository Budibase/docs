---
title: Feature Flags
excerpt: How to enable flagged features on your tenant
deprecated: false
hidden: false
metadata:
  description: kba_5hjpe
  robots: index
---
We release some features behind feature flags before they are generally available.

<Callout icon="❗️" theme="error">
  Flagged features are still under development. They may change and are not guaranteed to be stable. Use them in a test environment.
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

We need to enable this from our side. Contact [support@budibase.com](mailto:support@budibase.com) and include:

* The name of the feature flag that you'd like enabled.
* The URL of your Budibase tenant.

We cannot guarantee that we will enable the feature on your account. We review requests case by case.

<br />
