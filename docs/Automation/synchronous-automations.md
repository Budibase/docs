---
title: Synchronous automations 🔒
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hdoi
  robots: index
next:
  description: ''
---
<HTMLBlock>{`
<style type="text/css">
  .markdown-body>.img:not(.lightbox.open) img{ float: none!important;margin-left: 0;}
</style>
`}</HTMLBlock>

Use synchronous automations when the caller needs a result from the automation run, either in the Design section or from a webhook response.

Most automations run asynchronously, so the caller does not get the result directly. A synchronous automation returns the result to the caller.

> 📘 Licensing🔒
>
> The following features are available to:
>
> * **All installations** with a Premium or Enterprise license

<br />

## Creating a Synchronous Automation

Add a **Collect Data** step to make an automation synchronous.

<Image align="left" className="border" width="600px" border={true} src="https://files.readme.io/884adf3cb82523c86649826b2781c0df4c1b4f68106324ff3469740e817271bd-Screenshot_2025-02-28_at_07.42.47.png" />

A **Collect Data** step returns the binding or value passed into it.

Once the step is added, you can access the automation result as a Budibase user or as an external caller, depending on whether the trigger is [On demand](doc:app-action) or [Webhook](doc:webhook).

> 📘 Last step
>
> The **Collect Data** action must be the last step in the automation. Otherwise the action is greyed out:
>
> <Image align="center" src="https://files.readme.io/e4b49db014e7999146714aae75b1d872130d20d79deff087e9692c434ba5b91e-Screenshot_2025-02-28_at_07.46.22.png" />

<br />

## Webhook

With the [Webhook](doc:webhook) trigger, you can return data to the caller of the trigger URL.

For example, this webhook automation queries an Employees table and filters on the *city* value passed into the trigger:

![](https://files.readme.io/3ca2a7a2d1761fa3b65d63ee7582ec98ba3a1556fe7f50015b371140a21b1230-image.png)

![](https://files.readme.io/a4e4ece382d3fb981ba94430276c28fb45e7ae4526f2b7173a448de896c256ca-image.png)

You can then choose which data the trigger returns. In this example, it returns all rows matching the provided city.

<Image align="center" src="https://files.readme.io/c0d7a98a032694264ad104bae9314245712f8b62dabca41c597acd61fe1dbd0b-Screenshot_2025-02-28_at_07.53.29.png" />

After publishing the automation, the POST request returns the collected data:

![](https://files.readme.io/65975b456d3b96f5cdf20fc35633eacb4edabb31412730ae1e7e9a092e50c7de-image.png)

The response includes the value from the **Collect Data** step. In this case it is a string because **Handlebars always return strings**.

If you need a specific type, such as a number or array, use a JavaScript binding instead.

<Image alt="Making sure an array is returned" align="center" src="https://files.readme.io/025b517c587158ec8f081e42a64c813f76dab0dd40d3b7652e8248a70efcf7cd-Screenshot_2025-02-28_at_07.59.19.png">
  Making sure an array is returned
</Image>

And now the result:

![](https://files.readme.io/4cab3fff50069a5acc354af46da7e301b12494862164440ea68dc90ac867740d-image.png)

<br />

## On demand

To use the result in a published Budibase app, configure an [On demand](doc:app-action) trigger in the *Design* section. In this example, the automation gets a specific row based on the `_id` passed to it.

![](https://files.readme.io/210e91308bf6e0799e5f5c7b1d8a67f84ada077a4b5182e095777b26c8b44bba-image.png)

<Image alt="Filter attached to the query rows step" align="center" src="https://files.readme.io/94ee5c118656a97d93e44b350bae98b8246ef5e02ca8603e9fddfaa5c535625a-image.png">
  Filter attached to the query rows step
</Image>

With the automation ready, create a new screen and add a button component. Select the button, open the action drawer from `On click`, and add a trigger automation action that uses the new On demand automation.

![](https://files.readme.io/6c4d0b235c13af62487b3dd037b6c19dd8c11ff2bc6a2fd86a4cb793eaa94d20-image.png)

> 🚧 Timeout
>
> A synchronous automation can run for up to 120 seconds, or less if required.

Because the automation ends with a collect step, you can pass the result into later actions through [Chaining actions](doc:chaining-actions).

In this example, the binding adds the result to [App state](doc:app-state) and then displays it in a paragraph component.

![](https://files.readme.io/e50ca9214018f782819c4fb3f7a5d1d7f848623e4abb1be0d7db9e4c67109cc0-image.png)

When the button is clicked, state updates with a `result` key that contains the automation result.

Bind that state to the Text component to display it.

<Image align="center" width="300px" src="https://files.readme.io/2c25ca235df88584e338ab37662d36aac26367ed7d2d6fa65ffbb6d10743362f-image.png" />

Preview the app and click the [Button](doc:button) with the actions attached.

![](https://files.readme.io/5c4d20c0699da9f18db9550f80e66f4b1b4b6f8367d2e395d203cd1807c2e172-image.png)

The automation result is stored in state and appears in the text component whenever the `Trigger` button is clicked.

Instead of displaying the result in a component, you could use **Show Notification** or any other action combination.

> 📘 Automation Result
>
> The automation result binding is only available if the automation has a **Collect Data** step.
