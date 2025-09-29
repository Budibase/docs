---
title: Tenant management
excerpt: Managing your cloud and self-hosted workspaces and subscriptions
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Once you've created an account with Budibase, you will be able to create and manage multiple workspaces between Budibase cloud and [self-hosted](https://docs.budibase.com/docs/hosting-methods).

A workspace is a collections of apps, users, settings and roles that are tied to an environment.

When you login to your account, you will see a list of your workspaces under the _Workspaces_ tab.

<br />

### Cloud hosted workspaces

<Image align="center" alt="A cloud hosted workspace" border={false} caption="A cloud hosted workspace" src="https://files.readme.io/fc4077b097c7407a355f95330ef2c3fe1d41d1fe5467b569512f36515bfbe08b-cloud_workspace.png" />

<br />

Each cloud hosted workspace is hosted by us, and given a unique URL, where the workspace can be accessed. You can also navigate to the workspace from the account portal by clicking the `Go to workspace` button.

You can also see the _Subscription_, which will always initially be _Free tier_. Click the `Upgrade subscription` button to upgrade your workspace plan to get the full suite of Budibase features. You can choose between monthly payment, or annual.

Once the workspace subscription has been activated, the green light will appear. It may take a minute for the subscription to activate.

<Image align="center" alt="Cloud workspace on the Premium plan" border={false} caption="Cloud workspace on the Premium plan" src="https://files.readme.io/10eba5b71bd0a4113e7d933dcbf31bbe9c32ec639ff0ff14a6df240f7c9d7054-premium_cloud_workspace.png" />

Each workspace has it's own subscription. Whenever you buy a subscription, it will unlock the features and increase quotas on a per workspace basis.

To add a cloud workspace, click the `Add workspace` at the top of the page, and select `Budibase cloud`. You will then be prompted to enter a unique URL.

You can only have one _Free tier_ workspace. If you have an existing free-tier workspace, you must upgrade it before adding an additional one.

To delete the workspace, click the bin icon in the top right of the tile, and confirm.

> 🚧 Deleting a cloud workspace is not reversible
>
> Once you delete a cloud workspace, you will lose any apps and users associated with it.
>
> A cloud workspace that has an active subscription cannot be deleted.

<br />

### Self hosted workspaces

For full control of your data, you may wish to self-host. This means that you will [install Budibase](https://docs.budibase.com/docs/hosting-methods) on your own infrastructure, or hosting provider.

In order to unlock the full set of features and remove limits, you must link your installation to your account. This is done by adding a self-hosted workspace:

1. Click the `Add workspace` button
2. Select `Self host`
3. Enter a name to help you remember which installation this workspace will be linked to

<Image align="center" alt="Give your self-host workspace a memorable name" border={false} caption="Give your self-host workspace a memorable name" src="https://files.readme.io/3dd261d942ab23df2ceef024057a6a75173619f5616964b2bfaacbc92ca33e87-selfhost_workspace_name.png" />

4. Click `I have installed budibase` when your installation is ready to be linked
5. You will then be presented with your license key - copy it.

<Image align="center" alt="This modal will wait for you to paste the license key into your installation" border={false} caption="This modal will wait for you to paste the license key into your installation" src="https://files.readme.io/d3e87e45397be0da63baf4e941e6a7d0e5f28168d7d314bf51c93e2333b402dc-link_license.png" />

6. Visit your installation, and navigate to the `Upgrade plan` inside the settings area. Paste in your key and click `Activate`

<Image align="center" border={false} src="https://files.readme.io/a3e615f1065c7fb9ec5e22b0bc7d13679ade1cf0c887f40f4fe86615a5e47b26-Screenshot_2025-09-29_at_13.36.56.png" />

7. Now back in your account workspace page, you should see the message _License successfully linked_. Click `Done` to finish. Your workspace is now ready to be upgraded!

<Image align="center" border={false} src="https://files.readme.io/81aaabbc5b218bda86ffdeb50003964e07a28790cad7e611cbb03d95080dc94f-success.png" />

<Image align="center" alt="License linked" border={false} caption="License linked" src="https://files.readme.io/10fd71870159e267cc318174f86edfa8ac64154f3e3bced59128bec9cc4e943a-linked.png" />

Now you can upgrade your workspace. A green light beside the _Subscription_ when the subscription is active.

<Image align="center" alt="Premium subscription" border={false} caption="Premium subscription" src="https://files.readme.io/7c4ef01029988ebdf0cb66d2ea66c6ea78c75b9abe72cec9c8e250f392d10d74-upgraded.png" />

<br />

<br />

#### Refreshing your license

To get the features and quotas to update in your _installation_, navigate to the `Upgrade` tab of the `Account` section. Under **Plan**, click the `Refresh` button, and you should see the plan type update.

<Image align="center" alt="Installation will show the old plan until your 'Refresh'" border={false} caption="Installation will show the old plan until you 'Refresh'" src="https://files.readme.io/e8262e5a922e4ed466bbccb3589223ec75634a015684d25bac6955f60567505a-free_plan.png" />

After refreshing your upgraded plan will be applied to the installation:

<Image align="center" border={false} src="https://files.readme.io/3469f25c8c7d8ab8260d1af0de5d681f2673eb23ce454f36380cae805fbe5841-refresh.png" />
