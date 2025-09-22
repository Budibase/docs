---
title: Relationship picker
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
Whilst also a dropdown list, the relationship picker enforces select one or many options depending on whether the chosen relationship field is defined as one or many. Furthermore, the available options will automatically be populated from the rows of the related table.

The label column (the option text the user sees) will match the [display column](https://docs.budibase.com/docs/budibasedb#selecting-the-display-column) of the related table.\
The value column (the option value that will be saved) will be the **\_id** of the selected relationship row(s).

<br />

## \_id

The **\_id** field represents a unique row identifier, which will exist on all data tables, including the internal DB and SQL tables within Budibase. It is a URL-safe encoded string.

For testing purposes, you can copy the row **\_id** by right-clicking on a row in the **Data** section, and clicking `Copy row _id`. In the vast majority of cases you will not need to manually access the **\_id** field. 

<Image alt="Copy row \_id" align="center" src="https://files.readme.io/31a42fd-Screenshot_2023-08-11_at_09.40.03.png">
  Copy row \_id
</Image>

As [Relationship](doc:relationships) links in Budibase are stored in this format, the **\_id** field must be used when filtering a table on a chosen relationship picker value.

<Image alt="Displaying the underlying values of the chosen relationship links" align="center" src="https://files.readme.io/45244d6-Screenshot_2023-08-11_at_10.23.49.png">
  Displaying the underlying values of the chosen relationship links
</Image>

> 📘 One or Many relationship value
>
> Regardless of whether the relationship picker is a multi-select or a single-option, the relationship picker will always return an array of rows IDs.

### Default value

As mentioned above, relationship pickers expose encoded row identifiers. Therefore, to provide a <Glossary>Default Value</Glossary> for a relationship picker, we must provide an array of row identifiers.

While you can manually enter an array of hard-coded row identifiers, typically you'll want to base the default value on the known display name, as this is easier to maintain and read. 

1. Above your relationship picker, add a [Data provider](doc:data-provider)
2. Select the table that matches the source of the relationship field, and untick *Paginate*

<Image alt="Adding a Data provider to be used by the 'Cities' relationship picker" align="center" src="https://files.readme.io/6b32cfc-Screenshot_2023-08-11_at_10.42.09.png">
  Adding a Data provider to be used by the 'Cities' relationship picker
</Image>

3. Click the button beside *Filtering*, and add an **Is in** filter as follows:

<Image alt="Fetch some default (comma separated) cities" align="center" src="https://files.readme.io/69f961b-Screenshot_2023-08-11_at_10.44.33.png">
  Fetch some default (comma separated) cities
</Image>

4. Make sure the relationship picker is nested under the data provider
5. Click the lightning bolt icon beside the *Default value* field of the relationship picker, and add the following JavaScript code:

```javascript
return $("City Data Provider.Rows")?.map(row => row._id);
```

6. Refresh the page to see the default values load in

<Image alt="Relationship picker with default values" align="center" src="https://files.readme.io/71294c3-Screenshot_2023-08-11_at_10.47.49.png">
  Relationship picker with default values
</Image>

<br />

## Filter the list of options

By default, the relationship picker options will be populated by all rows in the related table. This may be appropriate for small numbers of relationships, but for larger lists you will want to filter this down. Furthermore, there is a **hard limit of 100 options**, so if you have more than this you will need to apply a filter.

You can add filters in the <Glossary>Settings Panel</Glossary> by clicking on the *Filtering* button.

For example, only show related cities of the selected country:

<Image align="center" src="https://files.readme.io/a384468-4d873bd-Screenshot_2023-08-14_at_11.51.17.png" />

> 👍
>
> For the full tutorial, check out the [Cascading dropdown filters](doc:cascading-dropdown-filters) recipe!

<br />

## On change

You may want to perform an action when changing the relationship picker value. If you want to do something with the underlying related row data, then you will need to use the **Fetch Row** action.

1. Click the button beside *On change* in the <Glossary>Settings Panel</Glossary>
2. `Add action`: **Fetch Row** and select the table that matches the relationship table
3. Set the *Row ID* to `{{ Field Value }}`

<Image alt="Fetching the selected row data" align="center" src="https://files.readme.io/77a8708-Screenshot_2023-08-14_at_13.32.59.png">
  Fetching the selected row data
</Image>

4. `Add action`: **Show Notification** and use [Action chaining](doc:chaining-actions) to retrieve the value from the **Fetch Row** action, using the <Glossary>Binding</Glossary> `{{ Action 1.Fetched row }}` to retrieve the whole row, or reference specific columns such as the country name.

<Image align="center" src="https://files.readme.io/cd4adf7-Screenshot_2023-08-14_at_13.35.13.png" />

**Result**

<Image align="center" src="https://files.readme.io/5b28ad6-Screenshot_2023-08-14_at_13.36.52.png" />

There are many other [Actions](doc:actions) that you can make use of.

***

<br />

## Tutorial: Filter on selected relationship picker value(s)

When using an external **SQL** datasource, such as [MySQL](doc:mysql-mariadb), [PostgreSQL](doc:postgresql) and [SQL Server](doc:ms-sql-server), it is possible to use the **Relationship Picker** to filter related data.

The Budibase DB could be used in this context, however it is a NoSQL database and generally not ideal for extensive relationship functionality.

For this tutorial we will use PostgreSQL, and assume there are three tables with the following relationships:

* One Owner -> Many Pets
* One Pet -> Many Appointments

For a given owner, we want to display a list of appointments based on the chosen pet. 

Follow this [guide](https://docs.budibase.com/docs/postgresql-1) to see how to connect to your Postgres database, fetch the tables and define the relationships.

![](https://files.readme.io/d4ca78e-Screenshot_2022-08-17_at_14.24.20.png)

### 1. Setup the owner form

Set the *Pet* and *Owner* name column as the [display column](https://docs.budibase.com/docs/budibasedb#selecting-the-display-column) and create the [autogenerated screen](https://docs.budibase.com/docs/screens#autogenerated-screen) for the *Owner* table.

Next [Eject](https://docs.budibase.com/docs/blocks#ejecting-blocks) the [Table block](doc:table-block). Select the 'Details' [Form block](doc:form-block), uncheck all fields except for the *Pets* relationship field, and also uncheck the *Show save button* and *Show delete button* settings. Finally eject the details form block, and once ejected rename the form to 'Details Form' and set the form type to **Create**.

<Image alt="Ejected 'Details' form block" align="center" src="https://files.readme.io/54a880b-Screenshot_2023-03-08_at_15.42.34.png">
  Ejected 'Details' form block
</Image>

### 2. Add the appointments

Within the details form, add a [Headline](https://docs.budibase.com/docs/displaying-text#headline) for 'Appointments' and add a [Divider](https://docs.budibase.com/docs/divider) below.

Next add a [Repeater block](https://docs.budibase.com/docs/blocks#repeater-block) for the Pets relationship.

<Image align="center" src="https://files.readme.io/7a437f5-Screenshot_2022-08-17_at_15.47.23.png" />

*Define filters* for the repeater block using the **Is in** filter as follows: 

![](https://files.readme.io/479fe92-Screenshot_2023-03-13_at_10.38.49.png)

Finally, nest a [Cards block](https://docs.budibase.com/docs/blocks#cards-block) within the repeater block. Set the datasource to the appointments relationship.

<Image align="center" src="https://files.readme.io/1403c33-Screenshot_2022-08-17_at_15.55.33.png" />

Set the title to the name of the pet: `{{ Pets Repeater block.Pets.Name }}`\
Set the cards title and subtitle to the date and reason of the appointment, e.g. `{{ Appointments Cards block.Appointments.Reason }}`

The date can be prettified as follows: `{{ date Appointments Cards block.Appointments.Date "dddd, MMMM Do, h:mm a" }}`

<Image alt="Details side panel final component tree" align="center" src="https://files.readme.io/d501633-Screenshot_2022-12-12_at_16.16.16.png">
  Details side panel final component tree
</Image>

#### Result

![](https://files.readme.io/ba7a4e8-filter_with_rel.gif)
