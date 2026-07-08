---
title: Chaining actions
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5v2f6
  robots: index
next:
  description: ''
---
Use chained actions when one action depends on the output of the previous one. Actions run synchronously, so if one fails, later actions do not run.

<Image align="center" src="https://files.readme.io/d6df7f500c280afc8607e794152e785cd9ce0cd3f1088e551ee38ba4e46a5f4e-Screenshot_2025-08-20_at_10.22.00.png" />

## Action referencing

Accessing data from a previous action in a later one can be useful.

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

**Note** X is the action number.

<br />

***

## Query result properties

In addition to the payload data of an execute query action result, you can also access:

* Status code - *Number*
* Response time - *String including the time unit*
* Payload size - *String including the size unit*

This can be useful with [Conditional UI](doc:conditions) for navigating to different screens on error or changing text color based on the status code.

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

Use chained actions when one action depends on the output of the previous one. A common pattern is to create one row, then use its ID in a second row.

#### Setup

Create two tables:

* `guides` with `name`, `phone_number`, and `email`
* `tours` with `destination` and `date`

Add a relationship from `tours` to `guides`.

#### Build the form

1. Add a form that creates a row in `tours`.
2. Add fields for `destination`, `date`, `TGname`, `TGphone`, and `TGemail`.
3. Add a button with a `Validate Form` action.

#### Chain the actions

1. Add a `Save Row` action for `tours`.
2. Add a second `Save Row` action for `guides`.
3. Use the row ID from the first action to link the new guide to the new tour.
4. Optionally add `Clear Form` or `Navigate To` after the saves complete.
