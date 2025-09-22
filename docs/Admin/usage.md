---
title: Usage and upgrading 💿
excerpt: Keep track of your current plan
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The `Usage` tab allows you to see if you are nearing any limits for your current plan. 

<Image align="center" src="https://files.readme.io/77acbd4-Screenshot_2024-04-26_at_21.40.37.png" />

For example, in the screenshot above, you can see it has a link to the account area which allows you to [Upgrade](https://docs.budibase.com/docs/usage#upgrading).

## Usage limits

The table below outlines each of the different usage limits. 

| Name                | Definition                                                                                   |
| :------------------ | :------------------------------------------------------------------------------------------- |
| Apps                | The total number of apps.                                                                    |
| Plugins             | The total number of plugins.                                                                 |
| Rows                | The total number of internal [Budibase DB](doc:budibasedb) table rows amongst all your apps. |
| Users               | The total number of users.                                                                   |
| Monthly Limits      | The total time until your limits are reset.                                                  |
| Monthly Automations | The total number of automation runs amongst all your apps (including test runs) this month.  |

\*Monthly usage resets on the 1st of each month.

## Upgrading

### Cloud hosted

From the side navigation press the `Upgrade` tab, alternatively you can click on the `Account` tab to visit the account portal and then click on the `Upgrade` tab. 

<Image align="center" src="https://files.readme.io/2fa1062-account.png" />

> 📘 Accessing the account portal
>
> Only the account holder will be able to access the account portal. The account holder is the user who first created the budibase account and chose the domain e.g. acme.budibase.app. All other users will be prompted to contact the account holder to perform an upgrade. If your account holder is no longer available please contact [support@budibase.com](mailto:support@budibase.com)

This will take you to the account upgrade page where you can select your plan.\
A detailed view of what's included is presented. The information available on the upgrade page is also available on [https://budibase.com/pricing/](https://budibase.com/pricing/).

<Image align="center" src="https://files.readme.io/c7840b2-Screenshot_2024-01-24_at_08.48.21.png" />

Click the 'Upgrade' button on your selected plan and complete checkout via Stripe to finish upgrading your account. 

### Self-hosted

From the side navigation press click on the `Account` tab to visit the account portal. Unlike cloud where only the account holder will be able to perform an upgrade, any self hosted account can be used to upgrade a self hosted installation. 

> 🚧 Self-hosted vs Cloud account
>
> It's important that when registering on [https://account.budibase.app/](https://account.budibase.app/) that the "self-host" option is chosen. A cloud account cannot be used to upgrade a self hosted installation as a license key will not be generated.

<Image alt="Signing up for a Self-Host account" align="center" src="https://files.readme.io/ab29ac1-usage_highlight.png">
  Signing up for a self-host account
</Image>

#### Accessing your license key

You can access your license key at any time via the `License Key` tab:

![](https://files.readme.io/2a58151-Screenshot_2023-06-12_at_10.59.01.png)

Copy either of the above methods license key and head back to your self host installation.

#### Activating your installation

Visit your self hosted installation, select the `Account` tab then `Upgrade`, paste your license key into the activate area and then click the activate button.

![](https://files.readme.io/bd79d44-Screenshot_2023-04-19_at_15.48.51.png)

Please navigate to the [Upgrade](https://account.budibase.app/portal/upgrade) page and proceed to click on the upgrade button corresponding to the plan you wish to upgrade to. Finally, complete the checkout process.
