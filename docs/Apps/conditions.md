---
title: Conditional UI
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5haf6
  robots: index
next:
  description: ''
---
A lot of the time you want to change the state of a component when certain conditions are true or false. For example, you might change color, show a component, or hide it. You will find the condition settings at the bottom of the settings panel.

Adding a condition is simple. Once you click the settings button, a drawer opens where you can add, edit, or remove conditions.

![](https://files.readme.io/38f0f21-conditions.png "conditions.png")

### Enabling and disabling conditions

You can temporarily disable a condition without deleting it by using the toggle switch located next to each condition in the drawer. This is useful for testing different UI states or temporarily pausing logic during development. Disabled conditions are ignored when evaluating component settings or visibility in both the builder preview and the published app.

When conditions are configured, the **Conditions** tab in the component settings panel displays a status indicator dot:
* **Green**: All conditions are enabled.
* **Orange**: Some conditions are disabled.
* **Red**: All conditions are disabled.

## Adding a condition

To add a condition, simply click the `Add condition` button. As explained above, you can choose whether to `Show`, `Hide` or `Update setting`. Depending on what you choose you will be presented with different options. They will all contain settings for comparing some value against another.

![](https://files.readme.io/6cfa595-conditionsexplainer_1.png "conditionsexplainer (1).png")

> 👍 Show/Hide
>
> When using a Show on boolean condition, the Hide occurs automatically for the opposite case, and vice versa.

## Tutorial

In the example we're going to discuss we have a simple backend table that contains three records. It looks like this:

![](https://files.readme.io/1b1464a-Screenshot_2023-07-04_at_14.15.19.png)

As we can see, there are four fields, Company, Due Data, Value, and Paid. In the Design section, we have designed a simple interface showing each of our invoices in rows. It looks like so:

![](https://files.readme.io/4653b06-conditionaldesign.png "conditionaldesign.png")

It would be great if the `Pay Invoice` button was in a disabled state if the invoice has been paid. So let's go ahead and add a condition to do just that!

Select the button component in the tree view on the left. Open the conditions drawer and select ``Update setting` and then pick the Disabled setting in the dropdown. Make sure the checkbox is checked. We then need to figure out which field we want to check. In our case, it's found under `{{ Repeater.Invoices.Paid }}`. This will of course differ depending on the structure of your application. If you click the little lightning bolt icon you will be able to see which fields are available for use.  Now we just make sure that it equals TRUE. Hit save, and that's it!

![](https://files.readme.io/31b6181-conditiondisablebutton.png "conditiondisablebutton.png")

Now that we have this condition set up we might also want to change the text of the button to say "PAID". To do that, simply click the copy button and change the setting to "text". Change the text to "PAID" and hit save.

And here's the end result.

![](https://files.readme.io/f65410b-conditionresultend.png "conditionresultend.png")

## Showing and hiding a component based on the user's role

When building apps, you can also use conditions to limit a user's access to specific components. For example, you may want to hide a button when the user's role is `BASIC`. Role values must be uppercase: `BASIC`, `POWER`, `ADMIN`.
