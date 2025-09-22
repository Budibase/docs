---
title: Actions
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Often you want to run automations or update data when a user presses a button. This is what actions are for.   To define your actions, click the Define actions, a drawer will appear where you can add, or remove actions tied to this component.

![](https://files.readme.io/18e8e22-actionslocation_1.png "actionslocation (1).png")

***

## Available actions

The list of available actions are listed below:

### Save Row

Saving a row can mean two things, updating or adding a new row. Depending on what you want to do you will have to structure your code differently. 

If you're adding a new row the easiest way is to add a Form component. Once you've set that up correctly you add a button to it and select the Save Row action. You then select your form and the table you want to save it to. That's it. An example of how it might look is below.

![](https://files.readme.io/fcb7ce5-actionsnewrow_1.png "actionsnewrow (1).png")

Updating a row can be done in a number of different ways. If you have a structure containing a Data Provider and a Repeater, selecting the repeater as your Data Source will make it so you can correctly get the values from the specific row. To change a field you then take advantage of the add column button that is at the bottom. Click it, select the field you want to change, and type in the value you want to change it to (or use a binding). A descriptive image of this is shown below:

![](https://files.readme.io/af5f1c8-actions.png "actions.png")

If you are not using a repeater, an alternative way to update a row is to add the **\_id** column and provide a value that matches an existing id.\
For example, you could be passing a task id in the URL:

![](https://files.readme.io/a76c3a3-Screenshot_2022-05-10_at_16.48.11.png "Screenshot 2022-05-10 at 16.48.11.png")

### Duplicate Row

Allows you to clone a row into any table with shared column names.\
If you are performing this action from a <a href="https://docs.budibase.com/docs/button#adding-buttons-to-table-rows">row button</a> click, then no **\_id** needs to be provided. 

Alternatively, your button could be nested within a [Repeater](https://docs.budibase.com/docs/repeater).

### Delete Row

This action is used to delete rows from your data source. It's used much in the same way that you would when updating a row.

### Navigate To

Use this action if you want to go to another web page or app screen.\
For example: [Navigation on row button click](doc:url-parameters)

When the *Destination* is set to 'URL', you have the option to open the link in a new tab.

![](https://files.readme.io/8f018e8-new_tab.png)

Alternatively, if the *Destination* is set to 'Screen', then you can select a screen to navigate to from the dropdown. The screen can optionally be opened in the current tab, or in a [modal](https://docs.budibase.com/docs/screens#modal-screen).

![](https://files.readme.io/a455654-open_modal.png)

### Close Screen Modal

If the current screen has been opened as a [Modal](https://docs.budibase.com/docs/screens#modal-screen), then close it.

### Execute Query

The queries that you have created in the backend can be triggered via this action.

### Trigger Automation

 If you have set up an automation you can use this to trigger it.

### Validate Form

To be used in conjunction with [Form validation](doc:form-validation).

### Log Out

If you want to log a user out, you can use this action

### Clear Form

An action that is used when you want to clear a form.

### Export Data

Allows users to export all of the selected rows of a table to either a CSV or JSON file.

### Refresh Data Provider

Refetch the latest data from the specified provider.

### Update Field Value

Will update the value of a form field with a literal value or <Glossary>Binding</Glossary>.

The *Reset to default value* type will change the value of the chosen field to its <Glossary>Default Value</Glossary>.

![](https://files.readme.io/759ee62-Screenshot_2022-05-09_at_16.41.45.png "Screenshot 2022-05-09 at 16.41.45.png")

## On Change

Form fields have the ability to trigger an action on change of their value. 

Specifically, [Pickers](doc:pickers) will update on selection, whereas [Text input](https://docs.budibase.com/docs/text-inputs) fields will update on loss of focus.

![](https://files.readme.io/f13e9d1-Screenshot_2022-05-09_at_16.48.42.png "Screenshot 2022-05-09 at 16.48.42.png")

In addition, there is a convenient <Glossary>Binding</Glossary> `{{ Field Value }}` which represents the value of the trigger form field.

## Video tutorial

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/746819363?h=a950be3e5d&title=0&byline=0&portrait=0" style="margin-top: -100px;" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
`}</HTMLBlock>
