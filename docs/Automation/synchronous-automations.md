---
title: Synchronous automations 🔒
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
<HTMLBlock>{`
<style type="text/css">
  .markdown-body>.img:not(.lightbox.open) img{ float: none!important;margin-left: 0;}
</style>
`}</HTMLBlock>

Synchronous automations allow users to receive feedback from their automation, in the Design section or via a webhook response. 

Automations are usually asynchronous, this means that when an automation runs, it does so in the background and the user is unable to access its result, but with synchronous automations the result is available to the user. 

> 📘 Licensing🔒
>
> The following features are available to:
>
> * **All installations** with a Premium or Enterprise license

<br />

## Creating a Synchronous Automation

You can make an automation synchronous by adding a **Collect Data** step. 

<Image align="left" className="border" width="600px" border={true} src="https://files.readme.io/884adf3cb82523c86649826b2781c0df4c1b4f68106324ff3469740e817271bd-Screenshot_2025-02-28_at_07.42.47.png" />

A **Collect** step will simply return whatever binding or value is passed to it. 

Once this step has been added, you can access the result of your automation as a Budibase user, or external user depending on whether your automation trigger is [On demand](doc:app-action) or [Webhook](doc:webhook). 

> 📘 Last step
>
> As the **Collect Data** action returns data from your automation, it must be the last step. Otherwise you will see that the action is greyed out:
>
> <Image align="center" src="https://files.readme.io/e4b49db014e7999146714aae75b1d872130d20d79deff087e9692c434ba5b91e-Screenshot_2025-02-28_at_07.46.22.png" />

<br />

## Webhook

When using the [Webhook](doc:webhook) trigger, you can return data to the caller of the trigger URL. 

For example, consider this webhook automation that queries an Employees table, filtering on the *city* value that is passed into the trigger:

![](https://files.readme.io/3ca2a7a2d1761fa3b65d63ee7582ec98ba3a1556fe7f50015b371140a21b1230-image.png)

![](https://files.readme.io/a4e4ece382d3fb981ba94430276c28fb45e7ae4526f2b7173a448de896c256ca-image.png)

We can then specify data that should be returned to the caller of the trigger, in this case simply all of the rows matching the city provided.

<Image align="center" src="https://files.readme.io/c0d7a98a032694264ad104bae9314245712f8b62dabca41c597acd61fe1dbd0b-Screenshot_2025-02-28_at_07.53.29.png" />

After publishing this automation, we can see the result in our POST request:

![](https://files.readme.io/65975b456d3b96f5cdf20fc35633eacb4edabb31412730ae1e7e9a092e50c7de-image.png)

You can now see the response from the **Collect Data** step has been provided in the response of the trigger call. Note that value in this case is a string - this is because **Handlebars always return strings.**

If you want to ensure that the correct typing is returned, such as for numbers and arrays, then you can use a JavaScript binding instead.

<Image alt="Making sure an array is returned" align="center" src="https://files.readme.io/025b517c587158ec8f081e42a64c813f76dab0dd40d3b7652e8248a70efcf7cd-Screenshot_2025-02-28_at_07.59.19.png">
  Making sure an array is returned
</Image>

And now the result:

![](https://files.readme.io/4cab3fff50069a5acc354af46da7e301b12494862164440ea68dc90ac867740d-image.png)

<br />

## On demand

For users to access the result of your automations in a published Budibase app, you will need to configure an [On demand](doc:app-action) trigger within the *Design* section. Let's start off by creating a very simple automation that will get a specific row based on the \_id we are passing to it.

![](https://files.readme.io/210e91308bf6e0799e5f5c7b1d8a67f84ada077a4b5182e095777b26c8b44bba-image.png)

<Image alt="Filter attached to the query rows step" align="center" src="https://files.readme.io/94ee5c118656a97d93e44b350bae98b8246ef5e02ca8603e9fddfaa5c535625a-image.png">
  Filter attached to the query rows step
</Image>

With this done we can start setting up our screen. Create a new screen and add a button component. Select the component. The button's settings side panel should show up on the right of your screen. Then click on the button beside the label `On click` called `No actions set`. This will open the actions drawer. Add a new trigger automation action and select our newly created On demand automation.

![](https://files.readme.io/6c4d0b235c13af62487b3dd037b6c19dd8c11ff2bc6a2fd86a4cb793eaa94d20-image.png)

> 🚧 Timeout
>
> As shown in the screenshot, a synchronous automation can run for up to 120 seconds, or less if required.

Because we have a collect step at the end of the automation, a binding with the result of the automation can be provided to any of the following actions, through [Chaining actions](doc:chaining-actions). 

In this example, we will use the binding to add the result of an automation into [App state](doc:app-state) and then display it in a paragraph component.

![](https://files.readme.io/e50ca9214018f782819c4fb3f7a5d1d7f848623e4abb1be0d7db9e4c67109cc0-image.png)

When the button with these actions attached is clicked, state will now be updated with a key called `result` that contains the result of our automation. 

To display this we now simply to need bind the state to the Text component.

<Image align="center" width="300px" src="https://files.readme.io/2c25ca235df88584e338ab37662d36aac26367ed7d2d6fa65ffbb6d10743362f-image.png" />

We can now preview our app and click the [Button](doc:button) for which our actions are defined.

![](https://files.readme.io/5c4d20c0699da9f18db9550f80e66f4b1b4b6f8367d2e395d203cd1807c2e172-image.png)

The automation result is stored in state, and due to the binding of that state to the text component, appears on screen whenever the `Trigger` button is clicked.

Instead of displaying the result in a component, you could just as easily use the **Show Notification** action, or any other combination of actions.

> 📘 Automation Result
>
> The automation result binding will only be available if your automation has a **Collect Data** step.
