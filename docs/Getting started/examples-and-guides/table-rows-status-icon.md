---
title: Table row status
excerpt: Add an icon to graphically indicate the status of your records
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Try it out!

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guides-table-row-status"></iframe>
`}</HTMLBlock>

## Scenario

In this example we have a table of sales records and we want to display an icon to show if the sale was made _Online_ or _Offline_.

The same approach could be applied for status based workflows, e.g. _Approved_, _In Progress_, _Complete_, etc.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★☆☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. Add a table to your screen, and point it to the Sales table (available in the download link at the bottom of the page)
2. In the Table settings, disable "Add rows", "Edit rows", "Delete Rows"
3. In the Table settings, under columns, click the cog/sprocket icon for the Sales Channel
4. Add a condition by clicking "No conditions set"

   <Image align="center" border={false} src="https://files.readme.io/3a918e69b821f54890acf1e9796cddd18e9760b8be1c9d5c1e9826bf35f96a3f-Screenshot_2025-08-18_at_09.17.25.png" />
5. Add the condition "Update `Cell` `Background color` to [red] if value `Equals` `Value` Offline"

   <Image align="center" border={false} src="https://files.readme.io/d579e8fb99547ec8d5dca564d37ff379f053245b557510999c3bbc5d31eff63d-Screenshot_2025-08-18_at_09.21.38.png" />
6. Duplicate the condition, and adjust it to show green for "Online"
7. Save

<Image border={false} src="https://files.readme.io/a5b3a3f942d7f408d67288d7c26e9f79f3c44d306ddd44920d204e60a96d128e-image.png" />

<br />

<br />

***

## App export

_Downloads may take a few seconds._

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/file/d/1OMsPMfkk915uCSR4SPIdxzQZrWztxPbU/view?usp=sharing')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
