---
title: Usage and Upgrading 💿
excerpt: Keep track of your current plan
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
The `Usage` tab allows you to see if you are nearing any limits for your current plan. 

![Screenshot showing the usage tabs information.](https://files.readme.io/a397f20-Screenshot_2023-06-12_at_08.44.26.png)

For example, in the screenshot above, the apps limit has been reached therefore an [Upgrade](https://docs.budibase.com/docs/usage#upgrading) would be required to add more apps.

## Usage Limits

The table below outlines each of the different usage limits. 

| Name                | Definition                                                                                   |
| :------------------ | :------------------------------------------------------------------------------------------- |
| Apps                | The total number of apps.                                                                    |
| Plugins             | The total number of plugins.                                                                 |
| Rows                | The total number of internal [Budibase DB](doc:budibasedb) table rows amongst all your apps. |
| Monthly Automations | The total number of automation runs amongst all your apps (including test runs) this month.  |
| Monthly Day Passes  | The total number of day passes used amongst all your users this month.                       |

\*Monthly usage resets on the 1st of each month.

## Upgrading

### Cloud hosted

From the side navigation press the `Upgrade` tab, alternatively you can click on the `Account` tab to visit the account portal and then click on the `Upgrade` tab. 

![](https://files.readme.io/708c964-Screenshot_2022-09-28_at_10.07.18.png)

> 📘 Accessing the account portal
> 
> Only the account holder will be able to access the account portal. The account holder is the user who first created the budibase account and chose the domain e.g. acme.budibase.app. All other users will be prompted to contact the account holder to perform an upgrade. If your account holder is no longer available please contact support@budibase.com

This will take you to the account upgrade page where you can select your plan.  
A detailed view of what's included is presented. The information available on the upgrade page is also available on <https://budibase.com/pricing/>.

![](https://files.readme.io/a7176ea-Screenshot_2022-09-28_at_10.12.58.png)

Click the 'Upgrade' button on your selected plan and complete checkout via Stripe to finish upgrading your account. 

### Self hosted

From the side navigation press click on the `Account` tab to visit the account portal. Unlike cloud where only the account holder will be able to perform an upgrade, any self hosted account can be used to upgrade a self hosted installation. 

> 🚧 Self hosted vs Cloud Account
> 
> It's important that when registering on <https://account.budibase.app/> that the "Self-Host" option is chosen. A cloud account cannot be used to upgrade a self hosted installation as a license key will not be generated.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3ae53a1-Screenshot_2022-09-28_at_10.20.30.png",
        null,
        "Signing up for a Self-Host account"
      ],
      "align": "center",
      "caption": "Signing up for a Self-Host account"
    }
  ]
}
[/block]

Visit the `Upgrade` tab, click the `Upgrade` button on your selected plan and complete checkout via Stripe to finish upgrading your account.

#### Accessing your license key

After checkout completes you will be presented with your License Key:

![](https://files.readme.io/f13e7ce-Screenshot_2023-04-19_at_15.37.48.png)

Alternatively you can access your license key at any time via the `License Key` tab:

![](https://files.readme.io/f6dd7f2-Screenshot_2023-04-19_at_15.35.41.png)

#### Activating your plan

Visit your self hosted installation and select `Account` tab then `Upgrade`

![](https://files.readme.io/bd79d44-Screenshot_2023-04-19_at_15.48.51.png)

Enter your license key and press `Activate` to finish upgrading your installation.