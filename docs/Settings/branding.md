---
title: Branding 🔒
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
There are several ways in which you can customise the branding of your Budibase instance and, of course, your applications!

> 📘 Licensing🔒
>
> The following features are only available to customers with a **Premium** or **Enterprise** plan.
>
> You can view more details on [our pricing page.](https://budibase.com/pricing/)

In the Budibase **admin portal**, navigate to the to the branding section, **Settings > Branding**. In here you can manage all available elements of your Budibase branding configuration.

<HTMLBlock>{`
<style type="text/css">
  .markdown-body>.img:not(.lightbox.open) img{ float: none!important;margin-left: 0;}
</style>
`}</HTMLBlock>

<Image align="left" border={false} width="600px" src="https://files.readme.io/39a92e9-branding_section.png" />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

### Logo

Easily the most impactful part of your branding. Your custom logo will be visible in the **portal header**:and the **app navigation**

You can, of course, update the logo on a per application basis. In the **builder design section**, you can override the global branding and configure a logo especially for your application navigation.

For **self host** environments, your logo will also appear in your Budibase login page!

<Image align="left" border={false} width="500px" src="https://files.readme.io/fe44e69-login.png" />

<br />

<br />

<br />

<br />

<br />

<br />

<br />

### Favicon

<Image border={false} src="https://files.readme.io/d13b49f-favicon.png" />

If a custom favicon has been set, it will be displayed in the tab for any **published** or **previewed** application.

In **self host** environments, the favicon will also appear in your Budibase login and authentication pages!

### Title (Self Host)

For **self host** environments, the title attribute can be used to customise the tab text for your Budibase login and authentication pages.

### Email Branding

Emails sent from Budibase will carry our branding header, as shown below.If you would like to remove this from your Budibase emails and customise your correspondence, simply flip the toggle.

<Image border={false} src="https://files.readme.io/5b124da-remove-brand.png" />

### Login Customisation (Self Host)

With a self hosted instance of Budibase you can further customise elements of the log in screen.

<Image border={false} src="https://files.readme.io/644d6fb-Screenshot_2023-03-28_at_17.22.49.png" />

#### Available options

* **Header** - the main text below your branding. Currently this defaults to **Log in to Budibase**
* **Button** - the text displayed on the login button. Currently this defaults to **Log in to Budibase**.
* **Remove Testimonials** - Testimonials currently default to **enabled** but you can flip the toggle and remove them if you wish

Your fully customised home page:

<Image border={false} src="https://files.readme.io/3aee6d9-Screenshot_2023-03-28_at_17.24.02.png" />

### App Preview Meta tags

Meta tags are primarily used to describe your application to search engines or when sharing a link to your application via social media.

If you post the link to your application on e.g **Facebook**, **Twitter** or **Slack**, you would typically see a card that looks something like this: In the branding section, you can customise the look and feel of your applications meta data with the following **optional** properties.

<Image align="left" border={false} width="500px" src="https://files.readme.io/0df050e-Screenshot_2023-03-21_at_16.58.11.png" />

<br />

<br />

<br />

<br />

<br />

<br />

#### Image URL

Use the **Image URL** property to configure a custom branding image URL.

Ensure the target image is **appropriately sized** for the media preview of your target platforms.

Lastly, be mindful of the **availability** of the file when configuring this property. If the file is inaccessible when sharing your application link, the card will not render as intended.

#### Title

The default behaviour for the meta title combines the **application name**  with **"- built with budibase."**.
For example, if your application was called "My Expenses Portal", it would be displayed as **"My Expenses Portal - built with budibase."**

You can use the **Title** property to override this behaviour. Any value set here will **override all app titles** displayed in meta cards.

#### Description

The description field is entirely optional. A description typically provides supplementary information about the target, or in this case, additional information about your organisation/apps.

#### App Meta Card example

The following is an example of some of the custom meta card elements in action. Our custom branding has replaced the Budibase default and we now have our own description.

<Image align="left" border={false} width="400px" src="https://files.readme.io/b13d9f4-Screenshot_2023-03-21_at_16.40.01.png" />
