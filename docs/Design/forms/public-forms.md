---
title: Building a public form
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
Budibase has everything you need to build a public form in minutes. Follow the guide below to understand how to build a public form.

![](https://files.readme.io/116d20e-CleanShot_2022-04-25_at_12.00.47.gif "CleanShot 2022-04-25 at 12.00.47.gif")

## Tutorial

Both Budibase and Google Forms are great options for building a public form (single-step). Google Forms is free, proprietary software. The data submitted within your form is hosted with Google. On the other hand, Budibase is free, open-source, and perfect for building forms; therefore, it's possible to quickly build forms and store your data in the safety of your infrastructure. For this guide, we will use Budibase.

### Step 1. Sign up for Budibase

If you've not signed up for Budibase, you can [register here](https://account.budibase.app/register). Simply complete the sign-up process - it only takes a few seconds - and you'll be ready to take the next step.

### Step 2. Create a new app

Click the 'Create new app' button, then click the 'Start from scratch' button. 

![](https://files.readme.io/382e09f-CleanShot_2022-04-25_at_10.57.34_2x_ezlsea.png "CleanShot_2022-04-25_at_10.57.34_2x_ezlsea.png")

Name your app (only use letters, no spaces or special characters) - we'll name our app `Form`. Budibase will generate a URL for you. If you are happy with the URL, click 'Create app'.

### Step 3. Set up your database

For demonstration purposes, we will use the Budibase DB as our data source. This is the easiest and fastest way to build a public form with Budibase.

*You can also build forms using MySQL, Postgres, Airtable, MongoDB, Rest APIs, and more. We'll cover each of these data sources in a different tutorial.*

Click Budibase DB, then click 'Continue'. Name your table: `Public Form`. And finally, click the 'Create' button.

### Step 4. Create your data structure

Now that we've set up our database, we need to build its structure by adding fields/columns.

* Click the 'Create column' button, and name it `Name`. Then click 'Save column'.
* Click the 'Create column' button, and name it `Email`. Then click 'Save column'.
* Click the 'Create column' button, and name it `Company`. Then click 'Save column'.
* Click the 'Create column' button, and name it `Company size`.  Click the Type dropdown and select 'Options'. In the options text box (bottom) add the following (one per line):
* `1 - 10`
* `11 - 100`
* `101 - 1000`
* `1001+`

Then click 'Save column'.

The final step within our data section, and a very important one, is to change the access to our database. To do this, click the 'Manage access' button. **Then set both the Write and Read levels to 'Public'**. Click 'Done'.

![](https://files.readme.io/4300755-CleanShot_2022-04-25_at_10.56.04_2x_hcb0v4.png "CleanShot_2022-04-25_at_10.56.04_2x_hcb0v4.png")

### Step 5. Create your public screen

Navigate to the Design section of the Budibase builder and create your first screen.

![](https://files.readme.io/d390492-Screenshot_2022-07-21_at_14.27.59.png)

The next step is to change the access from Basic to Public. This can be done in the screen settings panel.

![](https://files.readme.io/a446a2f-Screenshot_2022-07-21_at_14.35.29.png)

Your screen will now look like this:

![](https://files.readme.io/fb6e06f-Screenshot_2022-07-21_at_14.33.02.png)

### Step 6. Build your public form

First, we will add a Form component. You will find this under the Form section. In the settings panel (to the right of your screen), under the Schema label, select the dropdown and select 'Public Form'.

![](https://files.readme.io/fc51584-public-form-schema.gif)

Now, add a [Field group](doc:field-groups) component (under the Form section). In the settings panel, click the 'Update form fields' button.

![](https://files.readme.io/3ee0a92-Screenshot_2022-07-21_at_14.52.07.png)

Then click 'Update'. Your screen should now look like this:

![](https://files.readme.io/efc5b08-Screenshot_2022-07-21_at_14.53.02.png)

### Step 7. Add and configure submit button

To complete the creation of our public form, we will add a submit button. Add a button component to your screen, and in the settings panel, under the Text label, update the button's text to 'Submit'.

We now need to tell our button what to do when clicked. To do this, under the label On Click, click the Define actions button. Now click the 'Add Action' button, and select 'Save Row'. Change the Data source to 'New Form' (the name of your form component in the tree) and Table to 'Public Form' (the name of your table). Click 'Save'. Our form is now fully operational.

![](https://files.readme.io/e9dc80e-CleanShot_2022-04-25_at_10.05.09_2x_dzgloj.png "CleanShot_2022-04-25_at_10.05.09_2x_dzgloj.png")

### Step 8. Style our new form

Our form is looking a little lustreless. Let's bring it to life with some style updates. First, we'll remove our navigation by clicking on the Screen tab, and then in the settings panel, toggle off *Show navigation*.

![](https://files.readme.io/8f9ffc7-public-form-navigation-off.gif)

After removing the Navigation, go back to the Components tab, and follow the instructions below:

#### Resize our form and update spacing

Click on the root of the component navigation tree. In the settings panel, under 'Horiz. Align',  choose 'Center'.

![](https://files.readme.io/b98f86f-Screenshot_2022-07-21_at_15.04.36.png)

Click on our New Form component, and in the settings panel, change the Size to 'Large'.

Click on the component tree root and add a new container. Drag the form component into the container (within the component tree). 

![](https://files.readme.io/b374f4c-public-form-add-container.gif)

Click the 'New Container' component, and in its settings panel:

* Under the Horiz. Align label, select 'Left'.\
  Under PADDING, change:

* Top to 64px

* Right to 16px

* Bottom to 128px

* Left to 16px

Set your form component width to 100%.

#### Update the theme

* Click the Theme tab

![](https://files.readme.io/99af3ff-Screenshot_2022-07-21_at_15.19.57.png)

* Beside the 'Theme' label, drag the circle to the darkest setting

![](https://files.readme.io/5aaecf6-theme-slider.gif)

#### Add a logo, title and description to your container

##### Logo

* Add an [Image](https://docs.budibase.com/docs/image) component
* In the settings panel, under URL, link to your image. We will use [this image](https://res.cloudinary.com/daog6scxm/image/upload/v1647010468/logo/white-budibase-icon_yfgiy7.svg)
* Under Size, change the width to `48px`.

##### Header

* Add a Header component
* In the settings panel, change the Text to `Contact sales`
* Update the Size to 'Large'.

##### Description

* Add a [Paragraph](https://docs.budibase.com/docs/paragraph) component
* In the settings panel, under Text, add description text. We will add:\
  `Please complete the form below and we will respond as soon as possible.`
* Change the Color to a lighter grey (see screenshot below)

![](https://files.readme.io/ddab350-CleanShot_2022-04-25_at_11.01.21_2x_d7l7jv.png "CleanShot_2022-04-25_at_11.01.21_2x_d7l7jv.png")

### Step 9. Preview and test your app

Click the Preview icon (highlighted in blue below) to preview your app.

![](https://files.readme.io/2ad9a14-Screenshot_2022-07-21_at_15.27.09.png)

Your new public form should look something like this:

![](https://files.readme.io/d84fd12-CleanShot_2022-04-25_at_11.12.38_2x_qtmh4q.png "CleanShot_2022-04-25_at_11.12.38_2x_qtmh4q.png")

You can now test your form. Fill out your form with the following information and click the submit button.

* Name - `Joe Bloggs`
* Email - `joe@bloggs.com`
* Company - `Budibase`
* Company size - `1001+`

After submitting the form, if you navigate back to Budibase, and look at your Public Form table in the data section, you will see our test entry.

![](https://files.readme.io/40e9b6f-CleanShot_2022-04-25_at_11.11.52_2x_kyywtn.png "CleanShot_2022-04-25_at_11.11.52_2x_kyywtn.png")

If you are happy with your form, you can now publish it.

### Step 10. Publish your app

To publish your app, simply click the 'Publish' button, beside the preview button.

You will then be presented with an option to view the published app. Your new public form should look beautiful like the one below:

![](https://files.readme.io/ad2146f-CleanShot_2022-04-25_at_11.14.55_2x_rs3j7e.png "CleanShot_2022-04-25_at_11.14.55_2x_rs3j7e.png")

## How to build a multi-step public form

Building a multi-step form follows the same process as building a single-step form, but involves a few additional steps as detailed below:

### Step 11. Add Form Step components

To turn our single-step form into a multi-step form, we must use the [Form Step](https://docs.budibase.com/docs/form-steps) component. Click on the New Field Group component in your navigation tree, then add 2 Form Step components. After doing this, drag and drop the Name and Email component into Step 1; Company and Company size into Step 2.

![](https://files.readme.io/c5f4217-Screenshot_2022-07-21_at_15.55.56.png)

### Step 12. Change our button text depending on the step

For our first step, we don't want our button to say Submit, we want it to say Next. To do this, click the button, then click Configure conditions (at the bottom of settings).

What we want to do next, is tell Budibase to update our button text to say next if the current step is 1. To do this, we add the following values to our Conditions settings:

* Update setting
* Text
* Next
* Click the lightning bolt, and on the left hand side, select 'New Form.Current Step', and select Save.
* Equals
* Number
* 1

See the image below for guidance:

![](https://files.readme.io/56fe899-CleanShot_2022-04-25_at_11.40.40_2x_uzuvh4.png "CleanShot_2022-04-25_at_11.40.40_2x_uzuvh4.png")

Click 'Save', and the Button should be updated.

### Step 13. Tell our button to move from one step to the next

Our button currently has an action to Save a row, but we don't want to save a row for the first step. So, we will tell Budibase, when the user is on step 1, don't save, and instead, move them to the next step when the button is clicked. To do this, we must go back into our button Conditions, and enter the following:

* Update setting
* On Click
* Click the 'Define actions' button, then click Add Action, select 'Change form step'. Then change Form to 'New Form' (should be selected), and Step to 'Next Step'. Click 'Save'.
* Click the lightning bolt, and on the left-hand side, select 'New Form.Current Step', and select Save.
* Equals
* Number
* 1

![](https://files.readme.io/6a16400-CleanShot_2022-04-25_at_11.50.36_2x_zl189i.png "CleanShot_2022-04-25_at_11.50.36_2x_zl189i.png")

### Step 14. Preview and test our new public multi-step form

Click the preview button. In our form, enter `Test` for the name, and `Test` for the email. Click Next. Then enter `Test` for the Company and `1 - 10` for Company size, and press Submit.

![](https://files.readme.io/92a2460-CleanShot_2022-04-25_at_11.51.48_2x_vfqiyj.png "CleanShot_2022-04-25_at_11.51.48_2x_vfqiyj.png")

After submitting the form, if you navigate back to Budibase, and look at your Public Form table in the data section, you will see our test entry.

![](https://files.readme.io/14d51cc-CleanShot_2022-04-25_at_11.53.59_2x_erulr7.png "CleanShot_2022-04-25_at_11.53.59_2x_erulr7.png")

### Step 15. Publish your app

To publish your app, simply click the Publish button, beside the preview button.

![](https://files.readme.io/d06d5f9-CleanShot_2022-04-25_at_12.00.47_qsqupu.gif "CleanShot_2022-04-25_at_12.00.47_qsqupu.gif")
