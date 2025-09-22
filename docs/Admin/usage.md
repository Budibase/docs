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

![Updated usage tab area.](https://files.readme.io/65d9d61-Screenshot_2023-06-12_at_08.44.26.png)

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

[block:image]{"images":[{"image":["https://files.readme.io/2fa1062-account.png",null,null],"align":"center"}]}[/block]

> 📘 Accessing the account portal
> 
> Only the account holder will be able to access the account portal. The account holder is the user who first created the budibase account and chose the domain e.g. acme.budibase.app. All other users will be prompted to contact the account holder to perform an upgrade. If your account holder is no longer available please contact [support@budibase.com](mailto:support@budibase.com)

This will take you to the account upgrade page where you can select your plan.  
A detailed view of what's included is presented. The information available on the upgrade page is also available on <https://budibase.com/pricing/>.

[block:image]{"images":[{"image":["https://files.readme.io/c7840b2-Screenshot_2024-01-24_at_08.48.21.png",null,null],"align":"center"}]}[/block]

Click the 'Upgrade' button on your selected plan and complete checkout via Stripe to finish upgrading your account. 

### Self-hosted

From the side navigation press click on the `Account` tab to visit the account portal. Unlike cloud where only the account holder will be able to perform an upgrade, any self hosted account can be used to upgrade a self hosted installation. 

> 🚧 Self-hosted vs Cloud account
> 
> It's important that when registering on <https://account.budibase.app/> that the "self-host" option is chosen. A cloud account cannot be used to upgrade a self hosted installation as a license key will not be generated.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ab29ac1-usage_highlight.png",
        null,
        "Signing up for a Self-Host account"
      ],
      "align": "center",
      "caption": "Signing up for a self-host account"
    }
  ]
}
[/block]


#### Accessing your license key

Go to the **Upgrade** page and select the plan you wish to upgrade. Click on the upgrade button for the selected plan, a modal with instructions should popup. You can copy your license key from here

![Upgrade modal after clicking the upgrade button.](https://files.readme.io/785e44e-Screenshot_2023-06-12_at_11.12.42.png)

Alternatively you can access your license key at any time via the `License Key` tab:

![](https://files.readme.io/2a58151-Screenshot_2023-06-12_at_10.59.01.png)

Copy either of the above methods license key and head back to your self host installation.

#### Activating your installation

Visit your self hosted installation, select the `Account` tab then `Upgrade`, paste your license key into the activate area and then click the activate button.

![](https://files.readme.io/bd79d44-Screenshot_2023-04-19_at_15.48.51.png)

Please navigate to the [Upgrade](https://account.budibase.app/portal/upgrade) page and proceed to click on the upgrade button corresponding to the plan you wish to upgrade to. Finally, complete the checkout process.