---
title: V2 reCAPTCHA 🔒
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hmrm
  robots: index
next:
  description: ''
---
This feature introduces reCAPTCHA v2 (**This only works with v2 of reCAPTCHA**) support at the application level, enhancing security by requiring users to complete a reCAPTCHA challenge before accessing an app. This approach protects access to the entire app, similar to how platforms like Stack Overflow implement global bot protection, rather than protecting individual forms.

> 📘 Licensing🔒
>
> This feature is only available to customers with an **Enterprise** plan.
>
> You can view more details on [our pricing page.](https://budibase.com/pricing/)

## How It Works

When a user attempts to access an app with reCAPTCHA enabled:

1. The system checks for a valid reCAPTCHA verification cookie
2. The user is presented with a verification screen
3. After completing reCAPTCHA, they are granted access to the app
4. The session remains valid for 30 minutes, after which the user must re-verify

## Configuration

### Setup google reCAPTCHA keys

Before enabling reCAPTCHA in the platform, you need to get a Site key and Secret key from Google:

1. [Register a site for reCAPTCHA](https://www.google.com/recaptcha/admin/create)
2. Under reCAPTCHA type, select reCAPTCHA v2
3. Enter the domain where the app will run
4. Use your production domain (e.g., tenant.budibase.app)
5. You can also add staging or dev domains if needed
6. Accept the reCAPTCHA Terms of Service
7. Click Submit
8. Copy the Site key and Secret key provided

### Budibase global settings

1. In the platform, go to:\
   Settings → Recaptcha
2. Paste the Site key and Secret key into the respective fields
3. Click the save button

### Enable reCAPTCHA in your apps

1. Go to the desired app’s Settings → General
2. Scroll down reCAPTCHA section
3. Click the enable button
4. You're all set!

🔒 If your account does not have an enterprise license, this section will be locked

**reCAPTCHA challenge screen**

<Image align="center" src="https://files.readme.io/2d4c32c1dd6d9bb279b03e335931920e4f78647f8c232c84a3e4a987bcc03593-Screenshot_2025-08-08_at_09.48.27.png" />

<Image align="center" src="https://files.readme.io/98776b5b094d1e8db3d32065d6247726b1fda56f387e3c0783d043aecb11f1b7-Screenshot_2025-08-08_at_09.48.39.png" />