---
title: Multi-select
excerpt: Using the multiple options data type in Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
In Budibase, there are two data types that allow a value to be set from a list of options.

The first is the [Options](https://docs.budibase.com/docs/text#options) type, which is compatible with the *Text* data type, and only allows a single option to be chosen.

The **Multi-select** type is similar to the options type, but it allows you to select multiple options, and is not convertible to any other type. You can still select a single option or none at all.

A common use of the multi-select data type is to pair it with the [Multi-select picker](doc:multi-select-picker) in your [Forms](doc:forms).

<Image alt="Multi-select column" align="center" src="https://files.readme.io/1763d01-Screenshot_2023-02-17_at_11.01.51.png">
  Multi-select column
</Image>

<Image alt="Selecting multiple options" align="center" src="https://files.readme.io/78651d6-Screenshot_2023-02-17_at_11.03.02.png">
  Selecting multiple options
</Image>

When a multi-select value is saved to a data table, the values will be presented in individual coloured pills:

<Image alt="Multi-select row presenting two selected options" align="center" src="https://files.readme.io/eb341a7-Screenshot_2023-06-29_at_09.12.50.png">
  Multi-select row presenting two selected options
</Image>

<br />

## Filtering

A number of array based [filters](doc:searchfilter-data) are available when using a multi-select.  

### Contains

>  The multi-select value must contain all of the selected comparison options.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Result
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <img src="https://files.readme.io/317c9e3-Screenshot_2023-02-17_at_11.34.16.png" />
      </td>

      <td>
        <img src="https://files.readme.io/41c2407-contains_senior.png" />
      </td>
    </tr>

    <tr>
      <td>
        <img src="https://files.readme.io/5369cde-Screenshot_2023-02-17_at_11.33.10.png" />
      </td>

      <td>
        <img src="https://files.readme.io/b0afbc7-contains_senior_manager.png" />
      </td>
    </tr>
  </tbody>
</Table>

<br />

### Does not contain

>  The multi-select value must not contain all of the selected comparison options.

#### Single value

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Result
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <img src="https://files.readme.io/e412aa2-Screenshot_2023-02-17_at_11.41.56.png" />
      </td>

      <td>
        <img src="https://files.readme.io/152c925-not_senior.png" />
      </td>
    </tr>
  </tbody>
</Table>

#### Multiple values

Note that in this case only rows that have both *Senior* AND *Manager* are filtered out.

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        Filter
      </th>

      <th>
        Result
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <img src="https://files.readme.io/17641c9-Screenshot_2023-02-17_at_11.48.05.png" />
      </td>

      <td>
        <img src="https://files.readme.io/435ea25-not_senior_manager.png" />
      </td>
    </tr>
  </tbody>
</Table>

<br />

### Has any

> The multi-select value contains any of the selected comparison options.

<Image alt="Has any: Senior or Manager" align="center" src="https://files.readme.io/81b44e9-Screenshot_2023-02-17_at_11.52.37.png">
  Has any: Senior or Manager
</Image>

<Image alt="Result" align="center" src="https://files.readme.io/5ce87dd-has_any.png">
  Result
</Image>
