---
title: Chaining actions
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5h7ya
  robots: index
next:
  description: ''
---
Using Budibase, you can create a sequence of actions. Actions run synchronously; if one fails, the actions after won't run.

<Image align="center" src="https://files.readme.io/d6df7f500c280afc8607e794152e785cd9ce0cd3f1088e551ee38ba4e46a5f4e-Screenshot_2025-08-20_at_10.22.00.png" />

## Action referencing

Accessing data from a previous action in a new action can be useful. 

The following actions expose data after execution:

<Table align={["left","left","left"]}>
  <thead>
    <tr>
      <th>
        Action Name
      </th>

      <th>
        Data Binding
      </th>

      <th>
        Returns
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        Save Row
      </td>

      <td>
        \{\{ Action X.Saved Row }}
      </td>

      <td>
        Field value pairs (including auto-columns)  

        * id: Unique row identifier
      </td>
    </tr>

    <tr>
      <td>
        Duplicate Row
      </td>

      <td>
        \{\{ Action X.Duplicated Row }}
      </td>

      <td>
        Field value pairs (including auto-columns)  

        * id: Unique row identifier
      </td>
    </tr>

    <tr>
      <td>
        Execute Query
      </td>

      <td>
        \{\{ Action X.Query Result }}  

        *First row example*\
        \{\{ Action X.Query Result.data.ne  }}
      </td>

      <td>
        `{ data: [ <query-schema>_ ] }`  

        * An object as determined by the query schema
      </td>
    </tr>

    <tr>
      <td>
        Trigger Automation
      </td>

      <td>
        \{\{ Action X.Automation Result }}
      </td>

      <td>
        The response of a [Synchronous automation 🔒](doc:synchronous-automations)
      </td>
    </tr>
  </tbody>
</Table>

**Note** X is the action number

<br />

***

## Query result properties

In addition to the payload data of an execute query action result, you can also access the following additional information:

* Status code - *Number*
* Response time - *String including the time unit*
* Payload size - *String including the size unit*

This can be useful in combination with [Conditional UI](doc:conditions) for navigating to different screens upon an error, or to change text color based on the status code.

### Example

1. Save the query result to [App state](doc:app-state). Use the **literal** keyword to ensure an object is saved, and not text.

<Image align="center" src="https://files.readme.io/5ff9cad-Screenshot_2023-11-20_at_12.08.06.png" />

2. Reference the metadata properties with the following <Glossary>Binding</Glossary>s:

```handlebars
### Status code: {{ State.QueryResult.code }}

### Response time: {{ State.QueryResult.time }}

### Payload size: {{ State.QueryResult.size }}
```

<Image alt="Response info returned after executing the query" align="center" src="https://files.readme.io/f02b99c-Screenshot_2023-11-20_at_12.10.17.png">
  Response info returned after executing the query
</Image>

<br />

***

## Tutorial: Creating and Linking two table entries in one form

#### Schema

* Bookings
* Leaders
* One Booking -> One Leader

***

#### Use Case

 Create a new booking and a new associated leader in one form

***

#### Steps

1. In the Data tab, using the internal BudibaseDB, create a new table, "guides", containing the following columns - name (text), phone\_number(text), email(text). Populate these with a few rows of dummy-data.
2. Create another table, "tours", containing the following columns - destination(text) date(date, set to "Date only").
3. In the tours table, add a column called "guide", with a relationship of many rows in tours to one row in guides. Set the column name in the other table to be "tours". 

   <Image align="center" width="450px" src="https://files.readme.io/379cfdf3e0ea1b602e05960d785a43682174ea385ea90276b0b9dedb51a6a08e-Screenshot_2025-08-20_at_10.31.24.png" />
4. Switch back to your guides table to see that the relationship column has been created. The circle with an arrow denote that this column is a relationship to another table.

   <Image align="center" src="https://files.readme.io/bdf6f5ee689c4be3708716c56f81d69d3f2790ac6610f755a7a3280d7e3ef22f-Screenshot_2025-08-20_at_10.32.06.png" />
5. Create a new app called "Creating and Linking two table entries in one form"
6. Add a new screen, add a form component (not to be confused with a Form Block). Set the form component to create a row in the tours table.

   <Image align="center" width="450px" src="https://files.readme.io/b98bfada201939d81b9fedb5f3fbb0f3076800a19a1f819ef22879c80bb8a125-Screenshot_2025-08-20_at_10.34.41.png" />
7. Add a Text Field component to your form, and set the name as "destination" and the label as "Tour Destination"

   <Image align="center" width="450px" src="https://files.readme.io/91482e3fcfc165faf8bbb3247f4d7544571efd5861db28310d61430c745a428c-Screenshot_2025-08-20_at_10.34.52.png" />
8. Repeat the previous step until your form has all of the following

| Field      | Name        | Label                      |
| :--------- | :---------- | :------------------------- |
| Text Field | destination | Tour Destination           |
| Date Field | date        | Tour Date                  |
| Text Field | TGname      | Tour Guide's Name          |
| Text Field | TGphone     | Tour Guide's Phone Number  |
| Text Field | TGemail     | Tour Guide's Email Address |

8. Next, add a button as a child of your Form Component - Set the text to "Save" and (optional) add an Icon
9. Add an On click action to the button: Validate Form will catch any "required" fields, as well as any custom validation set on a per-field basis (though not applicable in this guide).
10. Add another action - Save Row. Select your form as the datasource, and set the table as tours. Add two columns from the tours table, destination and date, and assign the values from the destination and date fields accordingly.

    <Image align="center" src="https://files.readme.io/ecaf2de39ae06cea70ae0a539945b2c5b0418686bd5c91c514bf64f435a80812-Screenshot_2025-08-20_at_10.43.59.png" />

    <br />
11. Add another Save Row action, but this time we will save the Tour Guide's information to the guides table. Look closely at the fourth column - tours - this is saving row\_id from the previous action, which is linking the two rows together. This action will save a new tour and a new guide, and show the relationship between them.

    <Image align="center" src="https://files.readme.io/801967478789633d48ff502f0ed83971fdc70203b4278d2440db02004892c740-Screenshot_2025-08-20_at_10.44.36.png" />
12. (optional) Check the "Do not display default notification" on *one* of the Save Row actions.
13. Add a "Clear Form" action to reset the form back to it's default values

You could also use a "Navigate To" action to take the user to a screen showing the information in a table, or back to the homepage.