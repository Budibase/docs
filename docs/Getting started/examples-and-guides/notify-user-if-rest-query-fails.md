---
title: Notify user if query fails
excerpt: Displaying GUI content based on a status code
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Use this pattern when a REST query should return success or failure immediately so the UI can react.

## Build the automation

1. Create an automation triggered by an app action
2. Add the query fields you need
3. Run the REST query
4. Collect the query response so it returns to the UI

## Handle the response

1. Save the response code to app state
2. Stop the action chain when the status is not `200`
3. Add success actions such as refreshing a provider or closing a panel
4. Show an error component when the response is not successful

## Why this works

The UI can branch immediately based on the status code returned by the query.

## Try it out

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-notify-user-if-rest-query-fails"></iframe>
`}</HTMLBlock>

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1FVd44i08CTDDY5rKyt484EeR9LOlBqw-')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
