---
title: Chaining actions
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

1. In the */booking/new/row* screen, delete the drop down for the leader, and replace it with a new text field. Type in the field name: **LeaderName**

![Screenshot 2022-03-22 at 12 01 01](https://user-images.githubusercontent.com/101575380/159480786-8c100a27-d798-412d-bbfc-05d00ce718f5.png)

2. Next click on the 'Save' button and 'Define actions'.\
   Here you will need to add another 'Save Row' action underneath the existing one for the Leader table. This will allow you to create a new row for the leader entered into the in-line **LeaderName** field. 

![Screenshot 2022-03-22 at 12 17 06](https://user-images.githubusercontent.com/101575380/159481463-854513b8-7fcc-44da-a0ba-d75ffcfa35fe.png)

3. Two columns overrides must be added.\
   The first **Name** `{{ Form.Fields.LeaderName }}` saves the leader name as the value from our new **LeaderName** form field.\
   The second **Booking** column (the relationship field) is set to `{{ Action 2.Saved row._id }}`. This represents the relationship id of the booking row that was saved in the previous action.

## Continue if / Stop if

A chain of actions can be halted early on a condition. 

![](https://files.readme.io/f5340ac-Screenshot_2022-11-25_at_13.12.45.png)

In this example, you only want to save a row to a confirmed sales table given the item required payment. 

If the queried item was free, then the chain of actions would be halted early before reaching step 3, or any further steps.

Alternatively you can achieve the same result with 'stop if' as follows:

![](https://files.readme.io/3f9d24d-Screenshot_2022-11-25_at_13.15.27.png)
