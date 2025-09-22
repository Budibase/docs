---
title: Application actions
excerpt: >-
  These actions can be anything from notifications, to triggering automations or
  navigating between screens.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
  pages:
    - type: basic
      slug: form-actions
      title: Form actions
---
## Navigate To

Use this action if you want to go to another web page or app screen.  
For example: [Navigation on row button click](doc:url-parameters)

When the _Destination_ is set to 'URL', you have the option to open the link in a new tab.

![](https://files.readme.io/8f018e8-new_tab.png)

Alternatively, if the _Destination_ is set to 'Screen', then you can select a screen to navigate to from the dropdown. The screen can optionally be opened in the current tab, or in a [modal](https://docs.budibase.com/docs/screens#modal-screen).

![](https://files.readme.io/a455654-open_modal.png)

## Trigger Automations

Often there are times where you would like to trigger a automation after a user has performed an action. There are a range of different [Automations](doc:custom-automations). You are able reference any created automations by clicking the `Use an existing automation` radio button and then selecting an existing previously created automations to use and run. 

![Select a previous made automation to be used within the app.](https://files.readme.io/224bfaf-Screenshot_2023-05-19_at_11.27.45.png)

Additionally you have the option to create new automations. It doesn't allow you to fully configure the automation, but you can assign a name and go over to the automate tab and continue configuring from there. (Assigning the name and clicking the save button will link it to that newly created automation). 

![Create new automaton to be used for the click action.](https://files.readme.io/68e9a69-Screenshot_2023-05-19_at_11.26.08.png)

Lastly, creating fields within the automation itself allows data/bindings to be sent to it, this can then be used in your automation to perform whatever task you require. An example of this would be passing an `_id` of a row to the automation to then update the row's state e.g. from `Pending` to `In progress`. 

![](https://files.readme.io/6bfc5bc-Screenshot_2023-05-19_at_11.50.58.png)

## Logout

If you want to log a user out, you can use this action. It has redirect functionality built in meaning you can redirect to whatever url you desire.

## Close Screen Modal

If the current screen has been opened as a [Modal](https://docs.budibase.com/docs/screens#modal-screen), then close it. Additionally, you can open a different modal afterwords also using this action.

## Show Notification

This allows you to show a popup notification, of which there are four different types; `Success`, `Warning`, `Error` and `Info`. Changing the type will change the styling of the popup for example: success will be have a green background where as error will have a red background. Additionally you can make use of the bindings to output more informative messages. E.g. `Hi {{ Current User.email }} welcome to Budibase.` 

![](https://files.readme.io/628717b-Screenshot_2023-05-19_at_12.20.57.png)

## Prompt User

This action adds an additional step before other actions are ran. The title and text are the only configurable aspects of this action. It provides a prompt to the user, and won't run any other action after it unless they click the confirm button. This is very useful for a longer chain of actions, as it provides context and gives the option to cancel the process before it starts

## Open Side Panel

Provides a list of all side panels within a current screen, selecting one will open that side panel whenever the action is hit.

## Close Side Panel

Closes the currently open side panel.