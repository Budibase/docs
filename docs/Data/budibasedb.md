---
title: Budibase DB
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
<Image title="create-table.png" alt="260" align="center" src="https://files.readme.io/44d2cff-Screenshot_2024-01-16_at_10.09.49.png">
  Create a new table using this button
</Image>

> 📘 External datasource constraints
>
> You can add Budibase constraints to external table columns, however this is entirely for form validation and will not restrict the data that is saved.
> Instead, you must add data constraints yourself to any external table schemas.

> 📘 External datasources
>
> Things are a little different when using an external database such as [SQL](doc:sql-datasource).
> In this case the data in either environment will read and write to the database that you connected to.
>
> You can use [Environment variables 🔒](doc:environment-variables) to make use of development and production databases.