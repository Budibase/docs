---
title: Passing bindings in URL parameters
excerpt: Using URL parameters to bring information into a screen
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: url-parameters
      title: URL variables
---
# Try it out!

Use this pattern when a list screen needs to navigate to a detail screen for a specific row. The example below uses the sample data in Budibase DB, but you can follow along with any table that has a stable row ID.

Start by adding a `Data Provider`, then nest a `Repeater` and add a `Container` inside it.

![](https://files.readme.io/c264816-image.png)

<br />

In the data provider settings, select the *Employees* table as the *Data* source. Components inside the repeater will then have access to the employee bindings.

Open `Bindings >> New Repeater` to see the available columns. In this example, `Headline` components show *First Name*, *Last name*, and *Employee Level*.

![](https://files.readme.io/6f1b3c9-image.png)

Create a detail screen for each employee and set its URL to `/staff/:id`. The colon `:` marks `id` as a URL variable.

![](https://files.readme.io/236ee22-image.png)

On the detail screen, add a `Data Provider` for the *Employees* table and filter `_id` to match the value passed in the URL.

If the screen opens without a valid `_id`, set "When filter empty" to return no rows. That avoids showing the first row in the table by accident. Disable pagination as well.

![](https://files.readme.io/4da7075-image.png)

Inside the data provider, remember that rows are returned as an array. Even when the filter returns one row, use `{{ New Data Provider.Rows.0 }}` to access the row object before reading a column value.

![](https://files.readme.io/413c875-image.png)

<br />

Add the remaining detail components to the page, then return to the `/staff` screen. On the repeater container, add an *On Click* action with a *Navigate To* step. Set the destination to `/staff/{{ New Repeater.Employees._id }}` so the clicked row ID is passed through to the detail screen.

<Image alt="Click the lightning bolt to open the Bindings Drawer..." align="center" src="https://files.readme.io/2d1b5e6-image.png">
  Click the lightning bolt to open the Bindings Drawer...
</Image>

When the user navigates from `/staff`, Budibase substitutes `:id` with the row ID and uses it to filter the detail screen.

## A few things to consider...

Use a stable identifier such as `_id` rather than a human-readable value like email. Human-readable values are easier for users to guess or edit in the browser.

![](https://files.readme.io/ed82c1e-image.png)

<br />

<br />

Remove `/staff/:id` from the navigation bar if you do not want users opening the page without a selected row.

![](https://files.readme.io/7fec6d5-image.png)

When working in the builder on `/staff/:id`, no `_id` is set yet. Temporarily change the empty-filter behavior to return all rows while you test, then switch it back to return no rows.

![](https://files.readme.io/00d60ff-image.png)

Try it yourself, then use the download below to inspect the example app.

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/file/d/1S-2Bt-SBy1q7sdGMalQVPBJMjZ_H96ms/view?usp=sharing')" style="width:100%"><i class="fa fa-download"></i> Download</button>

<style>
  /* Style buttons */
.btn {
  background-color: #3571de;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 16px;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: #2e64c9;
}
</style>
`}</HTMLBlock>
