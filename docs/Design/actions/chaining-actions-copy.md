---
title: Chaining actions (COPY)
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Using Budibase, it's possible to create a sequence of actions. Below is a quick video demonstrating how to do this.

<HTMLBlock>{`
<div style="padding:75% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/842181639?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="chaining actions"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
`}</HTMLBlock>

## Action referencing

It can be useful to access data from a previous action in a new action. 

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
        \{\{ Action X.Query Result.data. de }}
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

   ![](https://files.readme.io/96b22be9b1e295eaf4d26ac20c6086ca9f1754d6371fdf1dbc7523752ea33b8e-image.png)
4. Switch back to your guides table to see that the relationship column has been created. The overlapping circles denote that this column is a relationship to another table.

   ![](https://files.readme.io/9a983b40d6208e151ce2bc5952b17850af8f977a526aa448616a434667841710-image.png)
5. Head to the design tab, and in a new screen, add a form component (not to be confused with a Form Block). Set the form component to create a row in the tours table.

   ![](https://files.readme.io/22195266bbb222326adba895cfe2f9f3cb42095377afa56871dc0f8b017f2219-image.png)
6. Add a Text Field component to your form, and set the name as "destination" and the label as "Tour Destination"

   ![](https://files.readme.io/6444b19ed36490cdd2b1e11e9f7c7fe67c369f5db6a49536035e84bcf9887955-image.png)
7. Repeat the previous step until your form has all of the following

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

    ![](https://files.readme.io/f84ecc7dfc84af1faf4b499ac15cffcaca9125324dd25e017532653a1af72c7e-image.png)

    <br />
11. Add another Save Row action, but this time we will save the Tour Guide's information to the guides table. Look closely at the fourth column - tours - this is saving row\_id from the previous action, which is linking the two rows together. This action will save a new tour and a new guide, and show the relationship between them.

    ![](https://files.readme.io/5ef9677fd1372b8f51cbcb588cd18ecbd49d9352fb075b4d30a4750e5cc873f7-image.png)
12. (optional) Check the "Do not display default notification" on *one* of the Save Row actions.
13. Add a "Clear Form" action to reset the form back to it's default values

You could also use a "Navigate To" action to take the user to a screen showing the information in a table, or back to the homepage.
