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
Use URL parameters when a list screen needs to open a detail screen for a selected row.

## Build the list screen

1. Add a [Data provider](doc:data-provider)
2. Add a [Repeater](doc:repeater) inside the provider
3. Nest a Container inside the repeater
4. Use bindings from the repeater row to show the values you want

## Build the detail screen

1. Create a screen at a path such as `/staff/:id`
2. Add a [Data provider](doc:data-provider) for the same table
3. Filter the provider by `_id`
4. Set empty filter behavior to return no rows
5. Disable pagination
6. Use `{{ New Data Provider.Rows.0 }}` to read the returned row

## Navigate to the detail screen

Add an `On Click` action to the list item or row container.

Use `Navigate To` and pass the row `_id` in the URL, for example:

`/staff/{{ New Repeater.Employees._id }}`

## Recommended settings

Use `_id` rather than a human-readable field such as email.

That keeps the URL stable and avoids guessable values.

## Try it out

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-url-parameters"></iframe>
`}</HTMLBlock>

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/file/d/1S-2Bt-SBy1q7sdGMalQVPBJMjZ_H96ms/view?usp=sharing')" style="width:100%"><i class="fa fa-download"></i> Download</button>

<style>
  .btn {
    background-color: #3571de;
    border: none;
    color: white;
    padding: 12px 30px;
    cursor: pointer;
    font-size: 16px;
  }

  .btn:hover {
    background-color: #2e64c9;
  }
</style>
`}</HTMLBlock>
