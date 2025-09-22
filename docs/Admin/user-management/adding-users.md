---
title: Adding users
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
To invite new users into your Budibase installation, you need to have the [Administration permission](doc:user-roles).

Navigate to the Budibase [Portal](doc:portal), and then along the top navbar, you'll find a `Users` section.

<Image align="center" width="450px" src="https://files.readme.io/a176a8a-Screenshot_2023-11-21_at_09.23.55.png" />

Click the `Add users` button on the top-left, and you'll be presented with a modal to add new users.

<Image align="center" width="450px" src="https://files.readme.io/7f5f570-image.png" />

Enter the user email addresses, and choose the [User Roles](doc:user-roles) applicable for the user from the dropdown. 

Upon confirmation you will be prompted to select the onboarding type.

<Image alt="Choose your onboarding" align="center" src="https://files.readme.io/5d7bc4e-Screenshot_2022-11-25_at_15.32.56.png">
  Choose your onboarding
</Image>

## Email vs basic onboarding

You can choose to have email onboarding or basic onboarding. 

Email onboarding will send the users you're adding an email that they're invited to join your organisation. This allows them to configure a password for themselves. 

Basic onboarding will not send anything to your new user but present you, as the user creator, with a randomly generated password. You can give the passwords to the new users who **should** change their password once they're logged in with their new credentials. The passwords can be individually copied to the clipboard, or a CSV of all new user credentials can be downloaded.

<Image alt="Example of basic onboarding." align="center" src="https://files.readme.io/2b49067-Screenshot_2022-11-25_at_15.34.16.png">
  Example of basic onboarding.
</Image>

It's up to you which onboarding flow you prefer, but we always recommend the `Email onboarding` flow. 

> 🚧 Configure SMTP
>
> For emails to be sent from Budibase you will need to have [SMTP configured](doc:email). Make sure this is set up before attempting to invite users through the email onboarding flow.

## Import users

If you have many users that need to be added into Budibase, then you can bulk import them through a CSV file.

To do that, on the *Users* page, click on `Import users`

Here you will be prompted to upload a CSV and choose the role that each user should receive. Similar to the basic onboarding, a dialog will appear from which you can download the new users credentials. 

> 📘 User emails CSV format
>
> The format for the CSV file should just be the emails for the users on their own separated by line break. No columns or commas are necessary.
>
> ```Text users.csv
> andy@example.com
> conor@example.com
> joe@example.com
> mel@example.com
> ```

<Image align="center" width="450px" src="https://files.readme.io/af6aa11-image.png" />
