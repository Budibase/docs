---
title: History and settings
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
It is possible to see a list of automation runs for your published apps. To do so, click the `Settings` tab in the app builder. You can also navigate here from your automation by clicking the `Logs` button at the top right of the screen.

<Image align="center" width="400px" src="https://files.readme.io/3b73c126a4247cb943c6b5e0c58e4662cfff51d22336e2ccf339ac211899f120-image.png" />

<br />

This will take you to the app overview screen where you can click on the `Automations` tab to see a list of your automation runs.

<Image align="center" src="https://files.readme.io/68603973cda1b4783b6546252215028382fd6728666e413981cf892ac3568d53-Screenshot_2025-03-12_at_13.24.15.png" />

You can filter and order the logs by automation name, data range, and status. 

There are three statuses:

* **Success**: The automation run was successful
* **Stopped**: The automation run was correctly terminated by a [Condition](doc:conditions-1)
* **Error**: The automation run failed to complete due to an error 
* **Stopped - Error**: Specific to [Cron jobs](doc:cronjob). If the cron automation errors five times back-to-back, it will be disabled until you re-publish your app.

## Investigating errors

Whenever an automation run errors, you will see a red banner at the top of your app list with the automation name and the number of times it failed in parentheses.

<Image align="center" src="https://files.readme.io/f4e695e52cc6bf07fa86eded1909ef992aa661d23b61f314ff8da82ea21826e6-Screenshot_2025-03-12_at_13.36.19.png" />

There is a convenient 'View error' link which will take you to the automation history, or you can click the 'X' to dismiss the notification.

<Image align="center" src="https://files.readme.io/1cfc3d72be82d67f90de9251965a80281242db57666108f1d4f9b500e73fb903-Screenshot_2025-03-12_at_13.36.54.png" />

When selecting an error, you will be able to see which automation step failed as well as the error output.

Furthermore, you can click the `Edit automation` button to be taken to the automation which may need fixed. 

> 📘
>
> Automation history will only show for published apps, and you must publish your app to apply any changes to your automations.

## Expiration 🔒

Logs are kept for a single day on the free plan, but you can expand the duration of time that logs are kept significantly by [upgrading](https://docs.budibase.com/docs/usage).

## Chain automations

On a per app basis, it is possible to toggle the *Enable chaining* setting on/off. 

By default, this setting if **off** in cloud, and **on** in self-host.

When this setting is **on**, it allows any automation within the app that has any of the **Row** [Triggers](doc:trigger) (*Created, Updated, Deleted*) to be triggered when another automation fires a **Row** action (*Create, Update, Delete*).

Whether to have this setting on or off depends on your use-case:

* If you want to restrict your automations to only trigger upon <Glossary>End User</Glossary> table writes, then toggle **off**.
* If you want your automation row triggers to fire when an <Glossary>End User</Glossary> *OR* an automation writes to a table, then toggle **on**. 

#### Example

<Image alt="The first automation creates a new row in the Employees table" align="center" src="https://files.readme.io/770ac3c2e49656c8d002c5237db3bbda9750ddadc38e7f6f70443abfb0fbc0ec-image.png">
  The first automation creates a new row in the Employees table
</Image>

<Image alt="The second automation triggers when a new row is added to the Employees table" align="center" src="https://files.readme.io/3f7bad603e007815edac0f9e9db1a4b5a9ddf9057efde2825d5923664f8d16bd-image.png">
  The second automation triggers when a new row is added to the Employees table
</Image>

In this basic example, the first automation would only trigger the second if the *Enable chaining* toggle was **on**.

> 📘 Additional info
>
> As it could be possible to accidentally get into an infinite loop, the maximum number of automations that can be triggered in a sequence is **five**.
>
> Also, chaining automation row events should not be confused with the [Trigger automation 🔒](doc:trigger-automation) action, which will always fire if used.
