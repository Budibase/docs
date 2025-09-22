---
title: Enforce SSO 🔒
excerpt: Secure your organisation using enforced Single Sign-On
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Enforced SSO is a feature that allows login from a configured identity provider to be required for all of your users. Any existing password users will no longer be able to login after enabling the feature.

To access the feature you can navigate to the Settings section of your application, then Auth.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7d50982-Screenshot_2023-03-04_at_00.00.32.png",
        null,
        "Enforce SSO in the Auth settings"
      ],
      "align": "center",
      "caption": "Enforce SSO in the Auth settings"
    }
  ]
}
[/block]

## Unlocking enforced SSO

Contact sales to enquire about upgrading to the enterprise plan <https://budibase.com/contact/>

## Usage

Use the provided Single Sign-On URL to access your tenants unique login page. Here you will find your configured identity provider(s).

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4bdf517-Screenshot_2023-03-04_at_00.11.39.png",
        null,
        "Login page showing enforced SSO"
      ],
      "align": "center",
      "sizing": "600px",
      "caption": "Login page showing enforced SSO"
    }
  ]
}
[/block]

## Troubleshooting

### Testing the feature

When first enabling enforced SSO it is recommended to stay logged into your active session where you can make changes to settings, while using another private browsing window to login using a different account. 

### What to do if you are experiencing lockout

If you are having a problem with your identity provider you may be subject to lockout. Follow the [SSO Maintenance Mode](doc:sso-maintenance-mode) guide.