---
title: Change Requests
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
Our change management template offers a fully functional solution for handling incoming requests. Use it as a ready-to-deploy app or customize any aspect of its data, design, and logic to suit your own unique processes.

In this guide, we outline exactly what our template does, how it’s built, and some of the key areas where you can put your own stamp on it using Budibase.

To use this template, [click here](https://budibase.app/builder?template=app/change-request).

Let’s jump right in.

## What does this template do?

Change requests are a key part of managing projects, processes, or services. This presents a few challenges:

1. Gathering request data.
2. Enforcing approval workflows.
3. Documenting decisions and outcomes.
4. Handling follow-on actions, including communicating with stakeholders.

Our solution is based around a two-step approval workflow. It’s built on two tables in Budibase DB.

Here’s a summary of core functionality. 

### CRUD Operations

Users can take distinct CRUD actions across the application, according to their role. Different users can create, read, update, or delete specific data depending on their needs within the change request workflow.

In Budibase, user permissions regarding CRUD actions are defined in the Data section. Once we’ve configured which data users can interact with, we can autogenerate CRUD UIs that reflect these permissions.

Our app UI is made up of a range of task-specific forms and tables. For example, enabling users with the **Requestor** role to add new records to our requests table:

![Change Request Management Template](https://files.readme.io/955ba8599cd68c6c05e8aa23ee5b9ccf196ad2b1fb4dc701c85e2557b7b4059b-Change_Request_Form_Gif_1.gif)

### Approval flows

When a request is submitted, its **status** attribute is automatically set to **Submitted** using Budibase’s **default values**. At this point, a **Row Action** automation is triggered, notifying a **Manager** that a new request needs their attention.

The manager then has the option to Accept or Reject the request using separate Row Actions. When a request is accepted by the manager, its status is updated to **In-Review**.

![Change Management](https://files.readme.io/78cbecbc02fbb8991f63874aa487e4d5c1a8722e68fb6d35d861441736c08180-Change_Request_Template_Gif_2.gif)

At this point, it is sent to all users with the **Reviewer** role.

Reviewers are able to provide the final sign-off for the request.

### Tracking change statuses

A key part of change management is documenting exactly what has been adopted and who signed it off. 

Our template features a dedicated **Status History** table. Each time a **Request’s** status attribute changes, this table is updated with a new row. The new status, previous status, user, and timestamp are automatically recorded.

This provides a clear record of how requests progress through our approval process, providing oversight and auditability.

We can view these records using a dedicated History UI, which is accessible only to users with the **Admin** role.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0f6c7989323350ae70dbab848ac743512f0d0f12f8d05d0b2ac35b8e47bc5dbf-Change_Request_Management_Template_4_Request_History_Screen.png",
        null,
        "Admin Screen"
      ],
      "align": "center"
    }
  ]
}
[/block]


### Automated emails

As a change request progresses through our workflow, it’s important to keep stakeholders up to date with developments. 

Our application utilizes Budibase’s automated email capabilities as the **status** of requests changes, notifying users when there’s something that requires their attention, as well as the final outcome of requests.

Take a look at our documentation on [working with email automations](https://docs.budibase.com/docs/send-email).

### User roles

Our change management workflow utilizes three custom access roles, along with Budibase’s default Admin user type. 

These are used to determine data exposure and permitted actions for end users.

The permissions associated with each of our roles are as follows.

**Requesters** are able to submit change requests or view and edit their own previous submissions.

**Managers** inherit all permissions from the **Requester** role. On top of this, they can review all requests with a **Submitted** status and trigger approve or reject row actions. When a **Manager** approves a request, it is passed to the next stage of our approval workflow.

**Reviewers** also inherit permissions from **Requesters**, and from **Managers**. They can then carry out row actions for final approval or rejection and provide additional information.

**Admins** can manage application settings, users, and roles. They also have full CRUD permissions across all connected data.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/062df7631d9a6e6fb17a9dc643797d3951d87b7f59c9e8b308c154ee44b86423-Screenshot_2025-08-18_at_13.19.55.png",
        null,
        "RBAC"
      ],
      "align": "center"
    }
  ]
}
[/block]


## How does it work?

Our templates are designed to help you get started with Budibase. They’re fully working solutions, but you can customize them as much as you need to suit your change request management workflows.

Let’s check out how our change request app is built.

### Data structure

In Budibase, the Data section is at the core of the app-building experience. In addition to configuring our app’s data, we can use this to set access rules, define user actions, and even generate UIs.

Check out our documentation on [Budibase DB](https://docs.budibase.com/docs/budibasedb) to learn more.

Our template is built on two tables within Budibase’s internal database. It also utilizes several role-specific views to control which data different kinds of users can interact with across these.

Here’s how this works.

#### Tables

Our application utilizes two database tables and Budibase’s internal **Users** table.

One is **Change Request,** which stores all information about incoming requests and additional details provided during the approval process. 

The other is **Status History**, which stores information about how the Status attribute of individual Change Request rows has changed.

The **Change Request** table stores the following attributes:

- **Title** - Text,
- **Description** - Long Form Text,
- **Change type** - Single Select,
- **Submitted date** - Date,
- **Date required** - Date,
- **Status** - Single Select,
- **Submitted by** - Single User,
- **Priority** - Single Select,
- **Reason for change** - Long Form Text,
- **Attachments** - Attachment,
- **References** - Text,
- **Date signed** - Date,
- **Status history** - Relationship,
- **Review signature** - Signature,
- **Rejection reason** - Long Form Text,
- **Completion date** - Date,
- **CrId** - Number.

Meanwhile, the **Status** **History** table maintains a record of updates to the **Status** attribute on our **Change Request** table, with the following attributes:

- **New status** - Text,
- **Previous status** - Text,
- **Timestamp** - Date,
- **Changed by** - Single User,
- **Change request** - Relationship.

Whereas the **Change Request** table is primarily populated manually by users, entries on the **Status History** table are created automatically when the **Status** is updated. We’ll see how this works a little later.

#### Relationships

Our data model relies on a relationship between our two database tables and between each of these and Budibase’s internal Users table.

The ** Relationship ** table allows us to configure links between rows across tables in BudibaseDB. Our application uses a **One-To-Many** relationship from our **Change Request** table to **Status History**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1ed7a7af65f1bf30998f1ff0d01d8b28f1a791d315b68a67ef31dc468c88832e-Screenshot_2025-08-18_at_13.23.28.png",
        null,
        "Relationship"
      ],
      "align": "center"
    }
  ]
}
[/block]


Budibase also allows us to set up relationships between our database and the internal **Users** table. For instance, to assign a row to a particular record, or track who has created a row.

This is also helpful when defining data permissions for specific users. For instance, only allowing users to view their own submissions or assigned rows.

We can do this with two special data types, the **Single User** and **Multi User** columns.

Across our two tables, we’ve included several **Single User** columns, primarily to track actions. For instance, the **Submitted by** column on our **Change request** table.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cacfd8f7e504749d83f791cd942dd58170145d6ad6a4e2aeb3f27cae016a2d00-Screenshot_2025-08-18_at_13.24.12.png",
        null,
        "Submitted By"
      ],
      "align": "center"
    }
  ]
}
[/block]


#### Views

**Views** are subsets of data across one or more tables that we can create for a specific purpose or function by setting rules for which rows, columns, or permitted actions to include. We can then set access rules, defining which **Views** can be used by different user roles.

We’ve created three **Views** based on our **Change Request** table to provide **Employees**, **Managers**, and **Reviewers** with data exposure that’s appropriate for their roles.

**Employees** can submit data or view their own previous submissions using a **View** called **My Requests**. This uses a filter expression to only return the rows where the **Submitted by** attribute is set to the **Current User** in app’s front-end.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/af41586e420031c986e6033cf0b2e278851ebcbf69850b9ded67f9872825364c-Screenshot_2025-08-18_at_13.24.50.png",
        null,
        "Filter"
      ],
      "align": "center"
    }
  ]
}
[/block]


Under the **Columns** tab, we’ve granted **Write** permissions for all attributes required to create an initial change request, as well as **Read** access for the **Status** column.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/158d6f4d8520f60ffc5b65e6c2d3abe30d8740b88dc577b2324f95035a4c3314-Screenshot_2025-08-18_at_13.25.13.png",
        null,
        "Columns"
      ],
      "align": "center",
      "sizing": "450px"
    }
  ]
}
[/block]


Our **Manager Approval** and **Reviewer Approval** views include rows irrespective of which user created them. Instead, they’re filtered by their current **Status**, enabling these users to access requests that are at an appropriate stage in our workflow for their role.

**Managers** can access rows where the **Status** is **Submitted** while the **Reviewer Approval** View returns requests that are **In Review**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/65b921ac1246a23f00f9719b857fde19290657af82cfd97e294c6e2ef05ffb73-Screenshot_2025-08-18_at_13.25.42.png",
        null,
        "Request status filter"
      ],
      "align": "center"
    }
  ]
}
[/block]


They also each have **Read** and **Write** permissions for the columns that are required for each of them to respond to requests.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f95c92fabd9f3950054658fe0d531e59bd1e40f171e1d4b3b7f15ae82bd574bb-Screenshot_2025-08-18_at_13.25.55.png",
        null,
        "Permissions"
      ],
      "align": "center",
      "sizing": "450px"
    }
  ]
}
[/block]


Users with the **Admin** role have full **Read** and **Write** permissions for both our **Change Request** and **Status History** tables.

### User interfaces

Next, let’s check out how our template’s front end is built. Check out our docs page on [working with screens within Budibase](https://docs.budibase.com/docs/screens).

Since users primarily need to either create database entries or view and update existing ones, our app relies heavily on Budibase’s autogenerated **Form** and **Table** layouts.

These inherit the access roles of the tables or views they’re based on.

For **Employees**, the app’s home screen is **CRUD** **UI**. This has been auto-generated from the **My Requests** View, using the **Table** layout with separate form screens.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c45d32d612a3d84af0b4d424cc89964727849055028b88beb117850ee791b09a-Change_Request_Management_Template_9_My_Requests_Table.png",
        null,
        "My Change Requests"
      ],
      "align": "center"
    }
  ]
}
[/block]


Our template uses a single screen for handling both **Manager** and **Reviewer** actions. This displays relevant **Change Request** records for each type of user within a **Table** UI where they can open modal forms to **Approve** or **Reject** submissions and provide notes.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b0e768276a6a00facc3692f74d8f58f9450c777b31b36540bf6a05b3324dd588-Screenshot_2025-08-18_at_14.14.45.png",
        null,
        "Modal Form"
      ],
      "align": "center"
    }
  ]
}
[/block]


In the Budibase builder, this screen actually contains two separate tables. We’re using conditionality rules to determine which one to display in the end-user app, depending on the current user’s role.

Take a look at our documentation on [working with data in design](https://docs.budibase.com/docs/working-with-data) to learn more about how this works.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/414a4899e7901b68b95ae0a03c2861ef11341ec846600a2531f4c0dfba2c96fb-Screenshot_2025-08-18_at_14.15.42.png",
        null,
        "Conditional UI"
      ],
      "align": "center"
    }
  ]
}
[/block]


The specific **form** that loads within the **modal** is determined by which action the user has selected. This works by setting an in-app state when they initially hit **Approve** or **Reject** and applying a conditionality rule to our forms based on this.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e302b4dafb73a1383809e7c7f8f40510a854436ed06aaba4028393b0b6987eef-Screenshot_2025-08-18_at_14.16.33.png",
        null,
        "Condition"
      ],
      "align": "center"
    }
  ]
}
[/block]


Lastly, our **Administration** screen is also based on an autogenerated **Table** layout with some important modifications. Firstly, we’ve nested our table inside a form and added filter expressions based on user selections in the provided form fields.

This means that our table can be filtered from the front-end, so **Admins** can more easily find the history of specific **Change Request** records.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b98988f6d97267422ad83575d36eca69c5ad2b816cc99a935baad8fffefc3972-Screenshot_2025-08-18_at_14.17.39.png",
        null,
        "Front end filtering"
      ],
      "align": "center"
    }
  ]
}
[/block]


Secondly, rather than opening an **Update** form, when a user clicks a row, it opens a custom screen to expand the details of the specific **Change Request**.

This utilizes a series of **Markdown Viewer** components and **Containers** to display the data from the original request, as well as a **Read-Only** table of all related **Status History** rows.

![Audit Form](https://files.readme.io/9fc98bbf632ad878ddf8dd20ef2d5befca6c7b8dc45fa0673e133d2f01c74bee-Change_Request_Template_14_Admin_Screen.png)

### Automations

In Budibase, Automations are used to define sequences of steps that can be triggered by user actions, database events, cron expressions, or other triggers. Take a look at our [automation docs](https://docs.budibase.com/docs/automation-steps) to learn more.

We’ve used several Automation flows across our template to handle key interactions with our data, as well as notifying users of how their submissions are progressing.

Many of these rely on Budibase’s **Row Actions** functionality. A Row Action is a user-triggered automation rule that relates to a particular entry in a database or view. Others are triggered when a database entry is created or updated.

Let’s check these out.

#### Request submission and cancellation

Our first Automation is called **Submitted Change Request**. This uses a **Row Created** trigger on our **Change Request** table. So, it will run each time a user creates a new request.

This flow contains three steps. First, we use a **Query Rows** action to return all rows in the **Users** table with their role set to **Manager**. Second, we use some custom JavaScript to pass these users’ emails into an array.

Thirdly, we use an **Email** action to notify all **Managers** that there’s a new request that requires their attention.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c5abb139345f5131b9a38af6635bbddcfd1d04aa395a817f01db60396a3c5623-Screenshot_2025-08-18_at_14.19.00.png",
        null,
        "Automation flow"
      ],
      "align": "center"
    }
  ]
}
[/block]


We’ve also included a **Cancel** row action. This uses an **Update Row** step to change the **Status** attribute of the trigger row to **Cancelled**, before emailing the original submitter to confirm that this has been successful.

This is triggerable from the front-end using a dedicated **Cancel** button within the **Update Form** for **Requesters**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/178cf2af03f78b182eb79372978e2a4b05ce551ba36429c29e292345045cb36f-Screenshot_2025-08-18_at_14.19.43.png",
        null,
        "Automation Flow"
      ],
      "align": "center"
    }
  ]
}
[/block]


#### Approval/rejection

**Row Actions** are also central to our review and approval workflow.

Specifically, we’ve created two sets of **Approve** and **Reject** actions for our **Manager** and **Reviewer** roles. These follow the same pattern but with a couple of important differences.

**Manager: Approve** sets the **Status** of the original request to **In Review**, before querying the **Users** table for entries with the **Reviewer** role, passing their emails to an array, and notifying them that the request needs their attention.

**Manager: Reject** updates the **Status** to **Rejected** and notifies the original submitter.

Both of these are triggerable from the **Managers** version of our review screen, using button actions.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b30cbddd8a990b88bfa1a3cf9bca3091694368b17bff48bf78cd5273c936d0a1-Screenshot_2025-08-18_at_14.20.33.png",
        null,
        "App Preview"
      ],
      "align": "center"
    }
  ]
}
[/block]


**Reviewer: Approve** and **Reviewer: Reject** follow the same pattern as **Manager: Reject.**

These update the **Status** to **Approved** or **Rejected**, respectively. Both then send an email notification of this update to the original **Requester**.

They’re triggerable from the **Reviewer** UI.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/381e34455c86b14b045e7322e49aa180cda8364e3575865597e090c1c3373824-Screenshot_2025-08-18_at_14.21.13.png",
        null,
        "Approval Flow"
      ],
      "align": "center"
    }
  ]
}
[/block]


#### Change history

Our final Automation works slightly differently, utilizing a **Row Update** trigger for our **Change Request** table. This means that it will run each time a row is updated, regardless of how this change was initiated.

When this is triggered, it carries out three actions.

First, we use a **Query Rows** action with a filter set to return all existing **Status History** rows that are related to the **Change Request** row in our trigger.

Next, we use a **Condition** step so that our automation only continues if the most recent returned row does not have the same **Status** as our trigger row. 

Lastly, we use a **Create Row** action to add a record to our **Status History** table, recording the current status, previous status, timestamp, and the user who made the update.

## Customizing our change request template

Budibase templates are fully functional apps, but they’re also designed with customization in mind.

Let’s think about some of the key ways that you can tailor your application to match your internal change management processes.

### Updating the data model

Budibase apps center around the Data section. This isn’t just where we set up the data our app connects to. It’s also a centralized location for managing access and permissions or generating screens and automations.

At the most basic level, we might want to make adjustments to existing attributes within our data model. For instance, we could add additional options to our **Status** column to reflect a more complex approval process.

Alternatively, we could remove certain attributes or add entirely new ones. For example, we could create a **Number** column called **Estimated Cost** on our **Change Requests** table using the plus icon.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4106776e3b024f78c2f425dea2ae6c65d7e6eb770d6f6f4a0c7c8af383b1c355-Screenshot_2025-08-18_at_14.22.27.png",
        null,
        "Add a column"
      ],
      "align": "center",
      "sizing": "450px"
    }
  ]
}
[/block]


Alternatively, you might want to make more wholesale changes to our app’s backend, such as entirely swapping out the database.

Budibase offers connectivity for a huge range of external datasets. We can even connect to SQL databases and interact with them in the Data section, exactly as we would in Budibase DB.

We could then recreate our role-specific views and connect these to our existing screens and automations. Alternatively, we might recreate these from scratch using the **Generate** button.

### Adding and altering user roles

Our change management app relies on Budibase’s customizable RBAC system. If we wanted to create a more sophisticated approval flow, we could start by adding additional user roles. 

Say we wanted to update our approval flow so that the CTO can fast-track requests, by setting their status to **Approved**, regardless of their current status. We’d start by creating a new user role called **CTO**.

RBAC within Budibase applications utilizes visual branches to establish hierarchies and handle permission inheritance.

We want our CTO to inherit all of the permissions that our **Reviewer** role has but with access to additional data and actions.

Therefore, we’re placing our CTO in the same branch as our existing roles, to the right of **Reviewer**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/533feb213d4c64cbf5ad2e78f86e504f745e0bef7ebff01509ae4c2ec9d34614-Screenshot_2025-08-18_at_14.23.18.png",
        null,
        "Configure Roles"
      ],
      "align": "center"
    }
  ]
}
[/block]


### Adding your own business rules

After adding a new role, we need to define which data and actions they’ll be able to access. Let’s carry on with the example of only allowing our CTO to approve high-priority requests.

Currently, our **Reviewers** and **Managers** have permissions to view and approve all requests with certain **Statuses**. Our CTO will be able to approve any request, regardless of its current status.

Then, we’ll create a new view and call it **CTO** **Approval**. We’ll assign the **Access** to our new **CTO** role.

Here, we want to recreate our **Reviewer View** but omit the filtering expression for the **status** attribute.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c3258e058c07ae7fdc02896a2dab3b844ae82a2f3a1d1bc2e15a3733596742a9-Screenshot_2025-08-18_at_14.24.27.png",
        null,
        "Acces"
      ],
      "align": "center",
      "sizing": "450px"
    }
  ]
}
[/block]


### Creating new user actions

Currently, our **Reviewers** approve or reject requests, using **Row Actions**, as we saw earlier. We’ll need to set up similar actions for our new **CTO Approval** view.

We’ll start by hitting **Row Actions** and creating an action called **CTO: Approve**.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bc25fbb601641a256a9de42090a0b09804773cf046bae80c051c91066851a571-Screenshot_2025-08-18_at_14.25.02.png",
        null,
        "Add Row Action"
      ],
      "align": "center"
    }
  ]
}
[/block]


Within the Automation section, we can follow the same pattern as our existing Automations, adding the following steps:

- **Update Row** - Updating the original **Change Request’s** Status to approved.
- **Email** - To notify the original Requester of this update.

We could also add a corresponding **CTO: Reject** rule using the same process.

### Modifying our screens

Lastly, we’ll need to add an appropriate UI for our CTO role. This will essentially match our existing **Managers** and **Reviewers** UI with our updated data view.

We can achieve this by duplicating one of the existing tables on our Review screen, and updating the Data Source for the new one to our CTO View, making sure to also update the corresponding conditionality rule and button actions.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/458b0223a6542aefcd7748f967f897955f563f237f6ffc0fb136f208729eba9f-Screenshot_2025-08-18_at_14.26.23.png",
        null,
        "Duplicate Table"
      ],
      "align": "center"
    }
  ]
}
[/block]


We’ll then repeat this process to provide conditional forms for our **CTO: Approve** and **CTO: Reject** row actions, mimicking our current settings, including setting an app state as one of the initial button actions.