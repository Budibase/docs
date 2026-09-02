---
title: Audit logs 🕵️
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hl6q
  robots: index
next:
  description: ''
---
Audit logs are a feature that allow admin users to track events that are happening across the Budibase installation, as well as view data that are associated with these events such as the user that triggered it, or the workspace where it originates from. 

To access the Audit logs feature you can navigate to the Account section of your application, then Audit logs. 

## Unlocking audit logs

If you are using the free tier you will see the following under the Audit Logs section:

![](https://files.readme.io/6133b8b-image.png)

You can click [Upgrade](doc:usage) to unlock audit logs or click `View Plans` to navigate to the [pricing page](https://www.budibase.com/pricing) to see the full range of options in more detail.

## Viewing Audit logs

![](https://files.readme.io/ccbbebc-image.png)

After navigating to the Audit logs section, you are presented with the above table, where you can monitor, filter and view more details about each of your logs. 

You can see here that all of these logs are associated with the `Car Rental Admin Panel` workspace, however, some logs like `User created` will have no workspace attached to them. 

You can also drill down to see more information and metadata on a particular log by clicking on the `Details` button. This will expand a side panel like the image below. 

<Image align="center" width="40% " src="https://files.readme.io/3afb50e-image.png" />

You can see numerous pieces of metadata including the IP address, User Agent as well Workspace and User IDs. Each event type will have different metadata and properties associated with it. 

## Filtering Audit logs

As shown in the above image, there are a number of different ways to filter your audit logs. 

### 🔍 Filter types

#### User

Filter by a single or multiple users. Use the search box within the dropdown to search through all users on the system

#### Workspace

Filter by a single or multiple workspaces. All workspaces available on the system will be displayed in the dropdown and can be searched

#### Event

Filter by single or multiple events. 

#### Date Range

You can filter by any date range. The default is set to 30 days, but any range is permissible. Selecting one date will display all results from then until the current date. 

#### Search

The search input allows a full text search on all of the properties within an audit log. For example, you could search for a Workspace ID such as `app_dev_uuid1a` and any audit logs that have that as a value within any property will be returned.

Any combination of these filters will work, and the filters will be applied in the order they are applied. 

## Downloading your audit logs

<Image align="center" width="60% " src="https://files.readme.io/6f92348-image.png" />

By clicking the download button in the above image, you will be able to download all of the logs that are assosicated with your current filter(s). To download *all* of your audit logs, please ensure that no filters are applied to the table.

## Audited events

Below you can see a list of the events that are currently audited and logged by the system.

> ⚠️ By default the auditing of rows and query runs are not supported
>
> If this is needed please contact [sales](https://budibase.com/contact/)

### User logs

| Event                               | Display Name                                     |
| ----------------------------------- | ------------------------------------------------ |
| USER_CREATED                        | User "{{ email }}" created                       |
| USER_UPDATED                        | User "{{ email }}" updated                       |
| USER_DELETED                        | User "{{ email }}" deleted                       |
| USER_PERMISSION_ADMIN_ASSIGNED      | User "{{ email }}" admin role assigned           |
| USER_PERMISSION_ADMIN_REMOVED       | User "{{ email }}" admin role removed            |
| USER_PERMISSION_BUILDER_ASSIGNED    | User "{{ email }}" builder role assigned         |
| USER_PERMISSION_BUILDER_REMOVED     | User "{{ email }}" builder role removed          |
| USER_INVITED                        | User "{{ email }}" invited                       |
| USER_INVITED_ACCEPTED               | User "{{ email }}" accepted invite               |
| USER_PASSWORD_UPDATED               | User "{{ email }}" password updated               |
| USER_PASSWORD_RESET_REQUESTED       | User "{{ email }}" password reset requested         |
| USER_PASSWORD_RESET                 | User "{{ email }}" password reset                   |
| USER_GROUP_CREATED                  | User group "{{ name }}" created                     |
| USER_GROUP_UPDATED                  | User group "{{ name }}" updated                     |
| USER_GROUP_DELETED                  | User group "{{ name }}" deleted                     |
| USER_GROUP_USERS_ADDED              | User group "{{ name }}" {{ count }} users added   |
| USER_GROUP_USERS_REMOVED            | User group "{{ name }}" {{ count }} users removed |
| USER_GROUP_PERMISSIONS_EDITED       | User group "{{ name }}" permissions edited          |

### Email logs

| Event                | Display Name                  |
| -------------------- | ----------------------------- |
| EMAIL_SMTP_CREATED | Email configuration created |
| EMAIL_SMTP_UPDATED | Email configuration updated |

### Authentication logs

| Event                   | Display Name                     |
| ----------------------- | -------------------------------- |
| AUTH_SSO_CREATED      | SSO configuration created       |
| AUTH_SSO_UPDATED      | SSO configuration updated       |
| AUTH_SSO_ACTIVATED    | SSO configuration activated     |
| AUTH_SSO_DEACTIVATED  | SSO configuration deactivated   |
| AUTH_LOGIN             | User "{{ email }}" logged in  |
| AUTH_LOGOUT            | User "{{ email }}" logged out |

### Organisation logs

| Event                       | Display Name                        |
| --------------------------- | ----------------------------------- |
| ORG_NAME_UPDATED          | Organisation name updated         |
| ORG_LOGO_UPDATED          | Organisation logo updated         |
| ORG_PLATFORM_URL_UPDATED | Organisation platform URL updated |

### Workspace logs

| Event                          | Display Name                               |
| ------------------------------ | ------------------------------------------ |
| WORKSPACE_CREATED              | Workspace "{{ name }}" created             |
| WORKSPACE_UPDATED              | Workspace "{{ name }}" updated             |
| WORKSPACE_DELETED              | Workspace "{{ name }}" deleted             |
| WORKSPACE_PUBLISHED            | Workspace "{{ name }}" published           |
| WORKSPACE_UNPUBLISHED          | Workspace "{{ name }}" unpublished         |
| WORKSPACE_TEMPLATE_IMPORTED    | Workspace "{{ name }}" template imported   |
| WORKSPACE_FILE_IMPORTED        | Workspace "{{ name }}" file imported       |
| WORKSPACE_APP_VERSION_UPDATED  | Workspace "{{ name }}" version updated     |
| WORKSPACE_APP_VERSION_REVERTED | Workspace "{{ name }}" version reverted    |
| WORKSPACE_REVERTED             | Workspace "{{ name }}" reverted            |
| WORKSPACE_EXPORTED             | Workspace "{{ name }}" exported            |
| WORKSPACE_BACKUP_RESTORED      | Workspace backup "{{ name }}" restored     |
| WORKSPACE_BACKUP_TRIGGERED     | Workspace backup "{{ name }}" triggered    |

### Datasource logs

| DATASOURCE_CREATED | Datasource created |
| ------------------ | ------------------ |
| DATASOURCE_UPDATED | Datasource updated |
| DATASOURCE_DELETED | Datasource deleted |

### Query logs

| Event          | Display Name  |
| -------------- | ------------- |
| QUERY_CREATED | Query created |
| QUERY_UPDATED | Query updated |
| QUERY_DELETED | Query deleted |
| QUERY_IMPORT  | Query import  |

### Table logs

| Event                 | Display Name                  |
| --------------------- | ----------------------------- |
| TABLE_CREATED        | Table "{{ name }}" created  |
| TABLE_UPDATED        | Table "{{ name }}" updated  |
| TABLE_DELETED        | Table "{{ name }}" deleted  |
| TABLE_EXPORTED       | Table "{{ name }}" exported |
| TABLE_IMPORTED       | Table "{{ name }}" imported |
| TABLE_DATA_IMPORTED | Data imported to table        |

### Automation logs

| Event                     | Display Name                            |
| ------------------------- | --------------------------------------- |
| AUTOMATION_CREATED       | Automation "{{ name }}" created      |
| AUTOMATION_DELETED       | Automation "{{ name }}" deleted      |
| AUTOMATION_STEP_CREATED | Automation "{{ name }}" step added   |
| AUTOMATION_STEP_DELETED | Automation "{{ name }}" step removed |

### Screen logs

| Event           | Display Name                  |
| --------------- | ----------------------------- |
| SCREEN_CREATED | Screen "{{ name }}" created |
| SCREEN_DELETED | Screen "{{ name }}" deleted |

### Component logs

| Event              | Display Name      |
| ------------------ | ----------------- |
| COMPONENT_CREATED | Component created |
| COMPONENT_DELETED | Component deleted |

### Environment variable logs

| Event                           | Display Name                    |
| ------------------------------- | ------------------------------- |
| ENVIRONMENT_VARIABLE_CREATED | Environment variable created |
| ENVIRONMENT_VARIABLE_DELETED | Environment variable deleted |

### Plugin logs

| Event            | Display Name    |
| ---------------- | --------------- |
| PLUGIN_IMPORTED | Plugin imported |
| PLUGIN_DELETED  | Plugin deleted  |
