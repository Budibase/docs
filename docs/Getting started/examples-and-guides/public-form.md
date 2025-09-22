---
title: Create a secure public form
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: >-
    The document provides a step-by-step guide on creating a secure public form
    using Budibase 3.0, allowing data collection from unauthenticated users
    while ensuring only app admins can access the submitted data. It includes
    instructions on setting up tables, designing forms, configuring automations,
    and publishing the app.
  robots: index
next:
  description: ''
---
## Try it out!

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/docs-public-form"></iframe>
`}</HTMLBlock>

## Scenario

This is for situations where you want to collect data from unauthenticated users, but want to keep your table secure so that only App admins can see the submitted data. With the release of Budibase 3.0, table RBAC has been streamlined, so we'll use automations to write this data securely to the table. It's ideal for public forms like surveys where a user submits data and doesn't ever have to see it again.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★★☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. In the Data section, create a **new table** with columns for the data you want to capture. By default, only App admins can access this table, which is fine for our example. 

   <Image align="center" src="https://files.readme.io/f119f4c27335cff66aaff1542f5bf8d4a2937ac97335f1ed6908d77a4bef2df2-Pasted_Graphic.png" />
2. In the Design section, create a **new screen** for your form
3. Set the screen's **Access** to `Public user`
4. Build a **Form** with field components that suit your table's schema. 

   ![](https://files.readme.io/cedebffbaa3d7cd6974eeaff998d3c16dc92dafb6409380b5b18229fb26e1369-Pasted_Graphic_2.png)

> ℹ️ Generating fields from the Form Schema
>
> You can use your table as the Form Schema to generate the relevant field components in a Field Group, but please note that a public user won't have access to that schema, so they may see errors when using the app. Once you have created your form fields, switch the Form Schema to Custom to prevent any issues for public users.

5. In the Automation section, create a **new automation** that is triggered by an *App Action*

   ![](https://files.readme.io/883ed8471172c912143dc3f5291c73a63917af7e2c06bc87f8a66d3989032cf2-Pasted_Graphic_3.png)
6. **Change the role** for this automation to `Public user`
7. **Add fields** that match the fields in your form 

   ![](https://files.readme.io/89b417eb87a6a51c41342f9503cba7f258482bf9104e60ff4893e97ad239d7fb-Pasted_Graphic_5.png)
8. **Add a Create Row step** to the automation
9. Select the relevant table and use the relevant bindings from your automation trigger for each column value 

   ![](https://files.readme.io/14d1e7d170ab0073320ca3bcfcf8304fe6af6597ee97f2dc8e0979629ec5e822-request.png)
10. Go back to your screen in the Data section and add a **Button component,** which we'll use to submit your form
11. **Add a*Trigger Automation* On click action** to the Button that triggers the automation we made 
12. **Add bindings** from your Form fields to send them to the automation

    ![](https://files.readme.io/54c115c1d0803eaedb47ac95c4cd15af4c86582c55b9b0e2bcc79b3a17ad9f43-Pasted_Graphic_8.png)
13. **Publish the app** and test the public form in a private window

<br />

***

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1nInFRXnaX7N4u3F-zIOtKBdIQAP1SIsf')" style="width:100%"><i class="fa fa-download"></i> Download</button>

<style>
  /* Style buttons */
.btn {
  background-color: #3571de;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 16px;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: #2e64c9;
}
</style>
`}</HTMLBlock>
