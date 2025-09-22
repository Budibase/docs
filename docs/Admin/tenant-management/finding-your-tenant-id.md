---
title: Finding your tenant ID
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Your tenant ID will have a different structure and assignment depending on whether you use Budibase in the cloud or have chosen to self-host. This guide explains how to find your Tenant ID in both scenarios.

## For cloud users

When using the Budibase Cloud (e.g., yourtenant.budibase.app), you define your Tenant ID when signing up.

### How to find your tenant ID

Your Tenant ID is the first part of your Budibase Cloud URL.

For example:

```
https://birdwatch.budibase.app
```

In the above example, the Tenant ID is:

```
birdwatch
```

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7f555c92bd6460de4ff6a3373c3b70e9b34c4d6169bb9041531db095d411a09c-Screenshot_2025-07-10_at_13.33.09.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


You can also find this by:

- Checking any bookmarks or links you use to access Budibase.
- Looking at the login or workspace invitation emails you received from Budibase Cloud.

## Self-hosted users

If you created a self-hosted account when signing up for Budibase, your Tenant ID is tied to the email address you used to create the account. Typically, this is the same email address you used to set up your Budibase instance initially.

### How to identify your tenant ID

- Find the email you used during sign-up.
- Ask a colleague who already has access.
  - If you're part of an organisation, contact the person who initially set up the Budibase account; they'll know the owner's email (tenant ID).
- This email address acts as your identifier for licensing and support.

If you're unsure, you can:

Reach out to support using the email you used during signup.

## Reference Table

| Hosting Type | Where to Find Tenant ID                                             |
| :----------- | :------------------------------------------------------------------ |
| Cloud        | First part of your Budibase URL (e.g., myapp in myapp.budibase.app) |
| Self-hosted  | Email address used to sign up                                       |