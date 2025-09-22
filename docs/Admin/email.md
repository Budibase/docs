---
title: Email
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
For Budibase to send emails, you must add your SMTP settings. After you have set this up, you can [invite users](doc:user-management) and send emails using the email [Action](doc:automation-actions).

![](https://files.readme.io/b283bce-CleanShot_2022-04-12_at_14.18.152x.png "CleanShot 2022-04-12 at 14.18.15@2x.png")



  

### Email setup

[block:html]
{
  "html": "<div style=\"padding:56.25% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/719112528?h=3d06fb10c7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"02-smtp-with-head\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]



[block:parameters]
{
  "data": {
    "h-0": "Property",
    "h-1": "Description",
    "h-2": "Example answer",
    "0-0": "Host",
    "0-1": "An SMTP email server will have an address (or addresses) that can be set and is generally formatted as smtp.serveraddress.com.",
    "0-2": "email-smtp.eu-east-1.amazonaws.com",
    "1-0": "Security type",
    "1-1": "Both SSL and TLS facilitate email sending",
    "1-2": "None/STARTTLS",
    "2-0": "Port",
    "2-1": "An “SMTP port” refers to the specific part of the Internet address that’s used to transfer email.  \n  \nIf you run your own SMTP server you can find the configured SMTP port number and address from the SMTP server configuration.  \n  \nPorts 25, 465, 587, or 2525 for SMTP have all been considered standard SMTP ports at some point, but only 587 or 2525  really should be considered for modern use.",
    "2-2": "587",
    "3-0": "From email address",
    "3-1": "The email address your onboarding emails are sent from.",
    "3-2": "noreply@budibase.com",
    "4-0": "Require sign-in",
    "4-1": "SMTP auth - some SMTP server hosts require auth to send email.",
    "4-2": "True [recommended]",
    "5-0": "Username (visible when require sign-in is checked)",
    "5-1": "Username for SMTP server",
    "5-2": "AKIAX5ZKDVGGJ2SASAHT2M7Z",
    "6-0": "Password (visible when require sign-in is checked)",
    "6-1": "Password for SMTP server",
    "6-2": "Password!23IhopeNot"
  },
  "cols": 3,
  "rows": 7,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]

  

## Templates

Budibase comes with three different email templates: Password Recovery, Invitation, and Welcome. In addition to that, you can also create custom templates.

To edit a template, simply select it in the table. To insert dynamic content you can use the Bindings on the right side of the page. This makes it easier to include things such as the user's email, your organization's logo, or the name of your organization. When you're done hit the preview button to make sure it looks OK. Then hit save.

![](https://files.readme.io/11c9942-templates.png "templates.png")



The email templates work on all devices, email platforms, and themes (light and dark modes). Below is an image of the invitation email template.

![](https://files.readme.io/824b249-CleanShot_2022-04-12_at_15.22.54.png "CleanShot 2022-04-12 at 15.22.54.png")



## Video tutorial

[block:html]
{
  "html": "<iframe src=\"https://player.vimeo.com/video/746819079?h=20d911a679&title=0&portrait=0&byline=0\" style=\"margin-top: -100px;\" width=\"640\" height=\"564\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>"
}
[/block]