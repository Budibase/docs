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

<HTMLBlock>{`
<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/719112528?h=3d06fb10c7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="02-smtp-with-head"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Property
      </th>

      <th>
        Description
      </th>

      <th>
        Example answer
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Host
      </td>

      <td>
        An SMTP email server will have an address (or addresses) that can be set and is generally formatted as smtp.serveraddress.com.
      </td>

      <td>
        email-smtp.eu-east-1.amazonaws.com
      </td>
    </tr>

    <tr>
      <td>
        Security type
      </td>

      <td>
        Both SSL and TLS facilitate email sending
      </td>

      <td>
        None/STARTTLS
      </td>
    </tr>

    <tr>
      <td>
        Port
      </td>

      <td>
        An “SMTP port” refers to the specific part of the Internet address that’s used to transfer email.  

        If you run your own SMTP server you can find the configured SMTP port number and address from the SMTP server configuration.  

        Ports 25, 465, 587, or 2525 for SMTP have all been considered standard SMTP ports at some point, but only 587 or 2525  really should be considered for modern use.
      </td>

      <td>
        587
      </td>
    </tr>

    <tr>
      <td>
        From email address
      </td>

      <td>
        The email address your onboarding emails are sent from.
      </td>

      <td>
        [noreply@budibase.com](mailto:noreply@budibase.com)
      </td>
    </tr>

    <tr>
      <td>
        Require sign-in
      </td>

      <td>
        SMTP auth - some SMTP server hosts require auth to send email.
      </td>

      <td>
        True udibase to se
      </td>
    </tr>

    <tr>
      <td>
        Username (visible when require sign-in is checked)
      </td>

      <td>
        Username for SMTP server
      </td>

      <td>
        AKIAX5ZKDVGGJ2SASAHT2M7Z
      </td>
    </tr>

    <tr>
      <td>
        Password (visible when require sign-in is checked)
      </td>

      <td>
        Password for SMTP server
      </td>

      <td>
        Password!23IhopeNot
      </td>
    </tr>
  </tbody>
</Table>

  

## Templates

Budibase comes with three different email templates: Password Recovery, Invitation, and Welcome. In addition to that, you can also create custom templates.

To edit a template, simply select it in the table. To insert dynamic content you can use the Bindings on the right side of the page. This makes it easier to include things such as the user's email, your organization's logo, or the name of your organization. When you're done hit the preview button to make sure it looks OK. Then hit save.

![](https://files.readme.io/11c9942-templates.png "templates.png")

The email templates work on all devices, email platforms, and themes (light and dark modes). Below is an image of the invitation email template.

![](https://files.readme.io/824b249-CleanShot_2022-04-12_at_15.22.54.png "CleanShot 2022-04-12 at 15.22.54.png")

## Video tutorial

<HTMLBlock>{`
<iframe src="https://player.vimeo.com/video/746819079?h=20d911a679&title=0&portrait=0&byline=0" style="margin-top: -100px;" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
`}</HTMLBlock>
