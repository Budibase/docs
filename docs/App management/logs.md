---
title: Automation history
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
It is possible to see a list of automation runs for your published apps.\
To do so, click 'Manage' beside your app in the app list screen.

<img src="https://files.readme.io/ba94036-Screenshot_2022-07-08_at_17.32.39.png" />

This will take you to the app overview screen where you can click on the 'Automation History' tab to see a list of your automation runs.

<img src="https://files.readme.io/c9d218b-Screenshot_2022-07-08_at_17.32.19.png" />

You can filter and order the logs by automation name, data range, and status. 

There are three statuses:

* **Success**: The automation run was successful
* **Stopped**: The automation run was correctly terminated by a [Condition](doc:conditions-1)
* **Error**: The automation run failed to complete due to an error 

## Investigating errors

Whenever an automation run errors, you will see a red banner at the top of your app list with the automation name and the number of times it failed in parentheses.

![](https://files.readme.io/c66db1c-Screenshot_2022-07-15_at_09.42.14.png)

There is a convenient 'View error' link which will take you to the automation history, or you can click the 'X' to dismiss the notification.

![](https://files.readme.io/e91299f-Screenshot_2022-07-15_at_09.44.22.png)

When selecting an error, you will be able to see which automation step failed as well as the error output.

Furthermore, you can click the 'Edit automation' button to be taken to the automation which may need fixed. 

> 📘
>
> Automation history will only show for published apps, and you must publish your app to apply any changes to your automations.

## Expiration 🔒

Logs are kept for a single day on the free plan, but you can expand the duration of time that logs are kept significantly by [upgrading](https://docs.budibase.com/docs/usage).
