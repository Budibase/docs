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

A workspace is a collection of apps, users, settings, and roles that are tied to an environment.

When you log in to your account as the owner, you will see a list of your workspaces under the _Workspaces_ tab.

<br />

### Cloud hosted workspaces

Each cloud workspace appears as a tile in the account portal. The tile shows the workspace URL, the current subscription status, and actions such as `Go to workspace`, `Upgrade subscription`, and delete.

<br />

Each cloud hosted workspace is hosted by us, and given a unique URL, where the workspace can be accessed. You can also navigate to the workspace from the account portal by clicking the `Go to workspace` button.

You can also see the _Subscription_, which will always initially be _Free tier_. Click the `Upgrade subscription` button to upgrade your workspace plan to get the full suite of Budibase features. You can choose between monthly payment, or annual.

Once the workspace subscription has been activated, the green light will appear. It may take a minute for the subscription to activate.

When the subscription is active, the tile updates to show the upgraded plan and a green status indicator next to _Subscription_.

Each workspace has its own subscription. Whenever you buy a subscription, it will unlock features and increase quotas on a per-workspace basis.

To add a cloud workspace, click the `Add workspace` at the top of the page, and select `Budibase cloud`. You will then be prompted to enter a unique URL.

You can only have one _Free tier_ workspace. If you have an existing free-tier workspace, you must upgrade it before adding an additional one.

To delete the workspace, click the bin icon in the top right of the tile, and confirm.

> ⚠️ Deleting a cloud workspace is not reversible
>
> Once you delete a cloud workspace, you will lose any apps and users associated with it.
>
> A cloud workspace that has an active subscription cannot be deleted.

#### De-activated workspaces

If your workspace is de-activated (for example, due to a trial ending, an expired subscription, or the deprecation of a legacy plan), it will be locked, and you will see a notice when attempting to access it. 

While a workspace is de-activated, you can still perform the following actions:

*   **Upgrade plan**: Reactivate your workspace by upgrading to a supported paid plan.
*   **Export workspace**: Download your workspace data. This allows you to keep a backup or migrate your apps to another instance.
*   **Self-host Budibase**: You can move your exported workspaces to a self-hosted instance of Budibase to continue building without cloud limitations.

If your workspace is scheduled for removal, the lock screen will display a notice with the scheduled removal date and a countdown of the days remaining. Ensure you export your data or upgrade your plan before this date to avoid permanent data loss.

<br />

### Self hosted workspaces

For full control of your data, you may wish to self-host. This means that you will [install Budibase](https://docs.budibase.com/docs/hosting-methods) on your own infrastructure, or hosting provider.

In order to unlock the full set of features and remove limits, you must link your installation to your account. This is done by adding a self-hosted workspace:

1. Click the `Add workspace` button
2. Select `Self host`
3. Enter a name to help you remember which installation this workspace will be linked to

The workspace name is only for identification in the account portal, so choose something descriptive for the installation it will be linked to.

4. Click `I have installed Budibase` when your installation is ready to be linked
5. You will then be presented with your license key - copy it.

The linking dialog shows your license key and waits for you to paste it into the `Upgrade plan` screen in your self-hosted installation.

6. Visit your installation, and navigate to the `Upgrade plan` section in the settings area. Paste in your key and click `Activate`

After activation, the installation should confirm that the license has been linked successfully.

7. Now back in your account workspace page, you should see the message _License successfully linked_. Click `Done` to finish. Your workspace is now ready to be upgraded.

Once upgraded, the subscription tile shows the paid plan and a green status indicator beside _Subscription_.

<br />

<br />

#### Refreshing your license

To get the features and quotas to update in your _installation_, navigate to the `Upgrade` tab of the `Account` section. Under **Plan**, click the `Refresh` button, and you should see the plan type update.

Before you refresh, the installation may still show the previous plan.

After refreshing, the installation updates to the new plan and the revised quotas become available.
