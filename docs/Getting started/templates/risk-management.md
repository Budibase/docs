---
title: Risk Management
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
Our risk management template provides a ready-to-use solution for recording, assessing, and working with data around risks, incidents, and improvement initiatives.

It’s fully customizable, offering the perfect basis for creating your own custom solution utilizing your own data, logic, and processes.

In this guide, we cover everything you need to know about working with our template, including what it does, how it’s built, and the key ways that you can modify it to suit your needs.

To use this template, [click here](https://budibase.app/builder?template=app/risk-management).

## What does this template do?

At its core, our application is based around submission and approval workflows for risks, incidents, and improvements.

This includes:

* Enabling **App Users** to submit new risks, incidents, or improvements. They also can view and cancel their own previous submissions.
* Routing submissions to **Power Users** for review and approval.
* Providing records of all ongoing and previous submissions.
* Notifying stakeholders of changes to the status of submissions or when there are new submissions that need their attention.

Our template utilizes simple approval workflows for each type of submission, with two distinct user roles in addition to our **App Admin** role.

It’s built on top of five tables within Budibase’s internal database. We’ll examine what each of these is and what it stores a little later.

Let’s check out the core functionality first.

### CRUD operations

Our application enables different kinds of users to perform specific CRUD actions across the various underlying tables, with user permissions varying according to their roles.

**App Users** can create new records on our Improvements, Risks, or Incidents tables using dedicated data submission forms, populating only a subset of each table’s columns.

![Risk Management Template](https://files.readme.io/6806d4815318b3fa6729e66de8de6c76dbda0fe78bd578cdc37c20173171a95e-Risk_Management_Template_1.gif)

However, they have limited permissions to **Read** or **Update** entries across the tables. Specifically, they’re only able to access their own previous submissions. Within these, they can update the **Status** attribute to **Canceled** via a **Row Action**.

![My Submissions](https://files.readme.io/f96209a0a016a4b4ba76c839ba65d0686cfdb13441a910c1f22fcc41edf0c857-Risk_Management_Template_2_Previous_Submissions.png)

This works the same way for **Improvements, Risks**, and **Incidents**.

### Approval workflows

**Power Users** inherit all permissions from our **App Users**. On top of this, they can view all incoming submissions across our three tables.

They can also carry out **Update** actions relating to certain fields.

Specifically, they can use **Row Actions** to either **Approve** or **Reject** the row in question, updating its status attribute. At the same time, they can use a form UI to populate the **Feedback** colum&#x6E;**.**

If a submission is **Approved**, it can also be assigned to a specific **Improvement Project** for implementation by populating a relationship column.

![Approval Flow](https://files.readme.io/84e3c0c5f6cf6c7968eaef00ff73d48f729218d8044e4ec1bdf991ff6d8a2676-Risk_Management_Template_3_APproval_Flow.png)

### Tracking submission statuses

Both classes of users are able to track the status of the submissions that are relevant to them.

Again, this matches the level of data exposure that’s provided for each Role, as we laid out earlier.

So, **App Users** can access dedicated screens where they can check the status of any of their own previous submissions.

Meanwhile, **Power Users** are able to edit submissions, regardless of the user who created them, including viewing or updating their statuses.

### Automated emails

Lastly, our application utilizes Budibase’s built-in email automation actions to send notifications to stakeholders based on defined events in our approval workflows.

Specifically, the original creator of a submission across any of our three tables is notified when it has a response.

In the case of a **Rejection** or **Approval**, the user is notified of this outcome. When they **Cancel** their own submissions, they’ll also receive email confirmation of this.

**Power Users** receive a summary of the submissions that require their attention at fixed intervals via a separate automation.

Take a look at our documentation on [working with email automations](https://docs.budibase.com/docs/send-email).

## How does it work?

Now that we know what our template does, we can drill deeper into how it is built across the different sections of the Budibase builder.

### User roles

Our risk management template relies on three user roles within Budibase’s RBAC system. RBAC enables us to assign a role to individual users in order to grant them access to appropriate data and actions.

We’ll see how permissions are actually granted in the next section.

Users with the **App User** role can primarily create submissions across our three tables. They can also view key details of their own previous submissions, including their status, or cancel the submission.

**Power Users** can view all submissions, as well as triggering approval or rejection automations and assigning them to projects. They also inherit all permissions from **App Users**.

Roles are configured using Budibase’s visual RBAC editor. We can use branch UIs to define how roles relate to one another, including permission inheritance.

<Image align="center" src="https://files.readme.io/93f8353713f71bb1219d7e170b0182ab41adde6bea9c218dccb730f9c739d6f5-Screenshot_2025-08-13_at_09.41.39.png" />

We can use this to define which actions and data each role is permitted to access from within the data section, as we’ll see in the following section.

Users with the **App Admin** role have full CRUD permissions across all tables.

### Data structure

Our template utilizes Budibase’s internal database, enabling us to define and manage schemas using our Data section’s visual editor.

Check out our documentation on [Budibase DB](https://docs.budibase.com/docs/budibasedb) to learn more.

Our application relies on several interrelated internal tables, as well as role-specific **Views** based on these.

Let’s break it down.

#### Tables

As we said earlier, our template utilizes five internal tables. These are:

* **Glossary** - Storing definitions of our different kinds of submissions. This is provided as a reference for **App Admins**.
* **Risks** - For storing submissions relating to potential risks.
* **Incidents** - Where incidents are recorded and tracked.
* **Improvements** - Allowing customers to suggest new improvement initiatives.
* **Improvement Projects** - Which accepted Risks, Incidents, or Improvements can be related to.

Our app also relies on Budibase’s internal **Users** table to enable individual rows across these to be assigned to specific users, as we’ll see in the next section.

Our glossary simply stores definitions for each of our other tables.

Each of our other tables stores data that’s required to record and process submissions. Here’s a summary of the attributes within each.

**Improvement Projects:**

* **title** - Text,
* **id** - Number,
* **created\_by** - Single User,
* **last\_updated\_by** - Single User,
* **description** - Long Forn Text,
* **created\_at** - Date,
* **status** - Single Select,
* **start\_date** - Date,
* **end\_date** - Date,
* **project\_manager** - Single User,
* **improvement** - Relationship,
* **risks** - Relationship,
* **incidents** - Relationship,
* **updated\_at** - Date.

**Improvements:**

* **title** - Text,
* **id** - Number,
* **start\_date** - Date,
* **end\_date** - Date,
* **created\_at** - Date,
* **updated\_at** - Date,
* **description** - Long Form Text,
* **created\_by** - Single User,
* **last\_updated\_by** - Single User,
* **Improvement Project** - Relationship,
* **status** - Single Select.
* **feedback -** Long Form Text.

**Risks:**

* **title** - Text,
* **id** - Number,
* **created\_at** - Date,
* **updated\_at** - Date,
* **created\_by** - Single User,
* **last\_updated\_by** - Single User,
* **description** - Long Forn Text,
* **improvement\_project** - Relationship,
* **status** - Single Select,
* **feedback** - Long Form Text.

**Incidents:**

* **title** - Text,
* **id** - Number,
* **reported\_by** - Single User,
* **employee\_involved** - Single User,
* **date\_of\_incident** - Date,
* **date\_created** - Date,
* **notes** - Long Form Text,
* **status** - Single Select,
* **Improvement Project** - Relationship,
* **feedback** - Long Form Text.

#### Relationships

Our app utilizes two distinct types of relationships.

Relationships between tables in BudibaseDB are created using a special **Relationship** column. This allows us to configure links between rows across tables, either within our Data section or in end-user applications.

We’ve used three instances of this to create **Many-To-One** relationships from our **Improvement Projects** table to the **Improvements**, **Risks**, and **Incidents** tables.

<Image align="center" src="https://files.readme.io/d11015ecf951346519a4fb6c9de7a4772213961c94f027b37f3531c06b4af214-Screenshot_2025-08-13_at_09.42.34.png" />

<br />

Rows in each of our tables can also be linked to records in Budibase’s internal **Users** table. This allows us to record which user created or updated certain submissions, as well as assigning rows to particular owners.

In Budbase, we have two dedicated columns for linking tables to **User** records - the **Single User** or **Multi-User** columns.

Our app utilizes Single User columns across each of our tables to represent various relationships with users. 

<Image align="center" src="https://files.readme.io/6b83dfd577cd1288a85702ea1b56b650d21c41ed7298d6fa15515f2b66bcd1a2-Screenshot_2025-08-13_at_09.43.14.png" />

#### Views

**Views** are subsets of data across one or more tables, with specific rules around accessing and interacting with data. 

In Budibase, these are used to centrally configure what each user role can do with our stored data, including granting read or write permissions at the row or column level. We can then use these to autogenerate CRUD UIs and automation rules.

Our underlying tables have their **Access** settings to only be readable or writable by **App Admins**. 

<Image align="center" src="https://files.readme.io/d6d005c78b1d9c5fcfeca6670c5d7fc0092d0ec058446ff0e48c9bd456063f52-Screenshot_2025-08-13_at_09.43.41.png" />

Each of our tables has distinct Views for each of our two core user roles. 

For **App Users**, the views for our **Risks, Incidents**, and **Improvement** tables are broadly similar, enabling them to create records, read their own submissions, or set the status attribute to cancel via a **Row Action**.

The specific attributes that users can read or write are then defined under the **Columns** tab, so **App Users** are able to access the columns that are required to initially create their submission, check its status, or perform a cancellation.

![](https://files.readme.io/a8aa13345e6000c18daed0c70abcaad8a242e612d0d2413c369038bad9bf4ffd-Screenshot_2025-08-13_at_09.44.16.png)Each of these tables has two additional **Views** for **Power Users**. The first provides full **Read** and **Write** access across the tables, along with two **Row Actions** to either **Approve** or **Reject** submissions.

This is attached to the respective **Review** screens for each of our submissions tables.

The other provides **Read-Only** access for each of the submission tables. This populates the **Projects** screen.

We can also use **Views** to perform key calculations on our database tables. Our template features views for each of our three submissions tables to provide counts of submissions for individual users based on their statuses.

For instance, we have a **View** called **My Improvements Count**. Using the **Configure Calculations** tab, we’ve set this to return the **Count** of rows, **Grouped By** the **status** attribute.

This will return each unique status, along with the number of relevant entries in our table.

<Image align="center" src="https://files.readme.io/76b6089c54f99e0c4500dcec70b5f58ea51cb5d2ca70ddada8bb2c2b83834ca8-Screenshot_2025-08-13_at_09.45.23.png" />

However, we don’t want to include any submissions that have either been canceled or rejected. We also only want to include the rows that are related to the current user in the front end.

So, we’ve applied three filtering rules. The first includes rows that have been submitted by the current user. The other two exclude rows where the **status** is **Rejected** or **Canceled**.

<Image align="center" src="https://files.readme.io/5100ff1a98ce3c9240d8c6241f28c03857d5bb67b37d89aedf4e7b9e86845076-Screenshot_2025-08-13_at_09.45.51.png" />

These are then displayed on the home screen for App Users, as we’ll see in a moment.

### User interfaces

Our application uses a combination of fully custom screens and UIs built around Budibase’s autogenerated layouts.

Check out our docs page on [working with screens within Budibase](https://docs.budibase.com/docs/screens).

The screens available for each user cohort across our three types of submissions follow a broadly similar pattern.

**App Users** can access three kinds of screens. Firstly, there are three data collection forms, where they can create records on our three submission tables. These rely on Budibase’s autogenerated **Form** layout, with minor changes to their design.

<Image align="center" src="https://files.readme.io/d42f429ccd6d658623bee1538e1c6a068e839c4b908de8e617b058af5249f300-Screenshot_2025-08-13_at_09.50.44.png" />

We’ve provided fully custom screens for **App Users** to view, track, or cancel their own submissions. These are made up of a variety of nested components wrapped in **Data Providers** and **Repeaters** to populate display elements with values from the relevant Views.

Take a look at our documentation on [working with data in design](https://docs.budibase.com/docs/working-with-data) to learn more about how this works.

<Image align="center" src="https://files.readme.io/a8cee78705299cdb4ccdd4699aac1fb1752a7ff3e89ac057165414bcc548b64c-Screenshot_2025-08-13_at_09.51.20.png" />

We’ve also created a dedicated home screen for **App Users**. This provides links to navigate to the screen for each type of submission. Its design relies on stylized **Container** and **Text** components.

The **Container** relating to each type of submission displays the total number of entries that the user has created, along with how the active submissions break down by status.

First, we have a **Text** component that displays the total number of each type of submission by the current user, by calculating the length of the relevant **View**. So, for improvements, we use `{{ My Improvements Data Provider.Rows Length }} Submitted`

The My Improvements Data Provider has a filtering expression to exclude entries where the **status** is set to **canceled**.

<Image align="center" src="https://files.readme.io/f6ea91afe63ce72f7691e140a405cf7f9bf4ffe835040ba31da75b2e87acb285-Screenshot_2025-08-13_at_09.53.28.png" />

Beneath this, we have a second **Text** component which is wrapped in a **Data Provider** and **Repeater**. 

These components will connect to a data source and display each of the elements nested within them for each individual row. In our case, we’re displaying the **status** and **count** from our **View Calculation**, using: 

```
{{ Improvements Counts Repeater.My Improvements Counts.Count id }} {{ Improvements Counts Repeater.My Improvements Counts.status }}
```

<Image align="center" src="https://files.readme.io/adc38e4f45dae6c612eeaa59c204eb0484006380edd709d0637391b7bf6008e8-Screenshot_2025-08-13_at_09.54.03.png" />

**App Users** can also use buttons to navigate to either the submission form or table UI for each respective type of submission.

Our **Power User** screens for reviewing submissions follow the same pattern as the **App User** versions we saw earlier, with the additional ability to **Approve** or **Reject** records.

They can add additional details on a modal form that’s displayed when they hit reject.

<Image align="center" src="https://files.readme.io/e2c15e2fbc44acb4829dd81e0d70dc2b641404bed6c43dfe603f1008cddd79e2-Screenshot_2025-08-13_at_10.07.35.png" />

**Power Users** can also access a similar screen for viewing or editing **Improvement Project** records, including reading all of the details of associated submissions, via the **View** we discussed earlier.

### Automations

In Budibase, the Automation section is used to create workflow logic within our applications, including enabling users to take specific actions. Take a look at our [automation docs](https://docs.budibase.com/docs/automation-steps) to learn more.

Our template makes extensive use of **Row Actions**. These are user-triggerable automation workflows that run on a specific row within a database table. These can be created from the Data section, under the **Row Actions** tab within a database table or view.

The **App User** view for each of our submission tables features a **Row Action** called **Cancel**.

Once triggered, this performs two actions. First, it updates the **Status** attribute of the trigger row to **Cancelled**. Then, it sends a template email to the user, confirming that this has been successful.

<Image align="center" src="https://files.readme.io/c127e6421f3f855319c548ee076e10bf7bc1f08a6e8281ad9034db78e689fc89-Screenshot_2025-08-13_at_10.56.12.png" />

**Power Users** have two additional **Row Actions** for each submission table, called **Approve** and **Reject**. These follow the same structure as our **Cancel** action, changing the **Status** to **Approved** and **Rejected**, respectively.

They then send an email template to the original submitter, notifying them of the outcome.

<Image align="center" src="https://files.readme.io/4ddf4deb5f68f23d83a2646809302683b4b9db773e02b015398c1b6218153e78-Screenshot_2025-08-13_at_12.44.59.png" />

Lastly, we’ve built an Automation called **Outstanding Attributes**, using a **Chron Trigger**. This enables us to set rules which are executed at defined intervals. Ours runs every Monday and Thursday morning at 09:30.

We’ve set our Cron Trigger manually, but we also have the option of using AI to generate an expression.

<Image align="center" src="https://files.readme.io/963f2d75a96d7ef303bfde4a5c6fb3543f4a07e8b156e353640a3dca72d423d2-Screenshot_2025-08-13_at_11.08.14.png" />

This uses three **Query Rows** steps to return all of the rows from our **Risks**, **Incidents**, and **Improvements** tables with **Status** attributes set to **Pending**.

We then use a **Condition** block, with some custom JavaScript, to count the total number of rows across all three tables that are currently **Pending**. If this is **not 0**, we continue.

Lastly, we use an **Email** action to notify relevant users that submissions need their attention. By default, this is set to notify the current user, but this can be overridden to target a specific email address or a comma-separated set of emails.

Alternatively, we could configure this to notify all users with a particular role, such as **Power User** or **App Admin**.

By default, this Automation is set to **Paused**.

## Customizing our risk management template

Budibase templates are created as ready-to-use solutions, but they also provide a basis for you to build your custom workflow apps.

Let’s think about some of the key ways that you can modify our change management template within Budibase.

### Updating the data model

The Data section is the core of every Budibase app. Our template utilizes Budibase’s internal database. So, we have two broad options for customizing our data model. We could swap this for an entirely different database, or we could alter the schema of our existing one.

If we wanted to connect to an external SQL database, for example, we could recreate the various Views that we have in place for our existing database before connecting this to our existing UIs and automations.

We can also easily modify the schema of our existing database, including adding, removing, or editing existing tables and columns, using the spreadsheet-like interface in Budibase’s Data section.

For example, say we wanted to add a new Long Form Text column to our **Risks** table, called inspector\_notes.

We could do this by hitting the **+** icon at the top of our table.

<Image align="center" src="https://files.readme.io/68f3aa4d1c32a034786bced0fd8295f03c5e587b4b9128c1806a7fa75472bc06-Screenshot_2025-08-13_at_11.11.47.png" />

At the same time, we might update our existing **status** attribute by adding an option called **Inspected**.

<Image align="center" src="https://files.readme.io/6327e39bc13fa0414fae9ee4c73abd5923fc9c99081e499b26b5c0f6abfbc6d7-Screenshot_2025-08-13_at_11.12.18.png" />

### Adding and altering user roles

Another key area where you can modify our template is its user roles. Budibase offers a fully visual interface for creating and configuring user roles, including with branching inheritance.

We’re going to create a new role called **Inspector** this will inherit permissions from the existing **App User** role, but it will be placed in its own branch, separate from the **Power User** role.

This means that **Inspectors** will be able to create any submissions that **App Users** can, as well as whatever additional permissions we grant them. However, this will be unrelated to the existing **Power User** role’s permissions.

<Image align="center" src="https://files.readme.io/951378e3b8d2655cccc2897e58e4ed0d5a2bc5548be52d011d569137bfefe29b-Screenshot_2025-08-13_at_11.12.54.png" />

To go along with this, we’ll create a new **View** and set its **Access** to the **Inspector** role. We’ll then make all columns except for **Inspector Notes** read-only.

<Image align="center" src="https://files.readme.io/570aa8f297897ffac3e093a898d9bed0a4eb48f83aeca99dc8932a1eeb9f33b3-Screenshot_2025-08-13_at_11.15.51.png" />

We’ll also set a filter to only include entries where the **status** is set to **Pending**.

<Image align="center" src="https://files.readme.io/fcd7fa67372507ed8a8c99e1ee06fb5f6dd12400665c66ce89e224ed416a1ef3-Screenshot_2025-08-13_at_13.03.28.png" />

Now, **Inspectors** have permission to view all pending **Risks** entries, and add their notes.

### Adding extra screens

Next, we need to provide an interface for our inspection workflow.

This will be relatively simple, enabling **Inspectors** to read our entries and populate the **Inspector Notes** field.

From our new view, we’ll start by autogenerating a **Table** screen with the **Side-Panel Form** option.

<Image align="center" src="https://files.readme.io/b4aa9d9977fdb8a90395ef59eb9945585d6416899cdacf9294029463c8bf3f9d-Screenshot_2025-08-13_at_11.17.27.png" />

Then, within the Design section, we’ll make a couple of UX tweaks. Specifically, we want to remove the **Create Form**. On our remaining **Edit** form, we’ll remove the **Delete** button and set all fields except for **Inspector Notes** to **Disabled**.

<Image align="center" src="https://files.readme.io/c704d4ae7f91d04ca44a774f096bedd69a08cca000455b5262250604d7bdcfb8-Screenshot_2025-08-13_at_13.37.36.png" />

### Adding your own business rules

Lastly, we can use the Automation section to add our own application logic. To carry on our example we want to add an automation flow so that when the **Inspection Notes** field is populated, the **status** is updated to **Inspected**.

We’ll then email the original submitted, notifying them of this update.

We’ll start by creating a **Row Action** from our new database View. We’ll call this **Inspect**.

<Image align="center" src="https://files.readme.io/96466db8395fa60622edb71c7d55fd4b70722eeedb479b390e7e6e0835ecca72-Screenshot_2025-08-13_at_13.08.58.png" />

We’ll then mimic the structure of our existing **Row Actions**, first adding an **Update Row** step, followed by an **Email** step.

To update our row, we’ll set the **ID** to our trigger ID and the **status** to **Inspected**. We’ll populate the **Send To, Subject**, and **Body** fields of our **Email** action too.

<Image align="center" src="https://files.readme.io/30e8f7eae8f7213d78861cb54359b10e1893bc83fc99415e75d15437f759d442-Screenshot_2025-08-13_at_13.12.02.png" />

Next, we need to provide a way to trigger this automation from our app’s UI. Head back to the Design section, and we’ll add a **Button Action** to the form on our **Inspection** screen. 

Here, we’ll add a **Row Action** step. Our **Form Block** has an attribute called **RowID**, which we’ll copy into the corresponding field on our button action.

<Image align="center" src="https://files.readme.io/4281b4087ad2867a579e52d5d6f2aa236c7d35668fe3764f6347a5ef109de392-Screenshot_2025-08-13_at_13.16.07.png" />
