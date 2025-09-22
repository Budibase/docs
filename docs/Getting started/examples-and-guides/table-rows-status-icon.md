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
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/docs-table-row-status"></iframe>
`}</HTMLBlock>

## Scenario

In this example we have a table of sales records and we want to display an icon to show if the sale was made *Online* or *Offline*. 

The same approach could be applied for status based workflows, e.g. *Approved*, *In Progress*, *Complete*, etc.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: #000000;">★☆☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. Add a table to your screen, and point it to the Sales table (available in the download link at the bottom of the page)
2. In the Table settings, disable "Add rows", "Edit rows", "Delete Rows"
3. In the Table settings, under columns, click the cog/sprocket icon for the Sales Channel
4. Add a condition by clicking "No conditions set"  

   <Image align="center" src="https://files.readme.io/0714778d8cf439e9611c76c7895792a48a83e1afdf8329a9f005cab609123b87-untitled_3.png" />
5. Add the condition "Update `Cell` `Background color` to \[red] if value `Equals` `Value` Offline"
6. Duplicate the condition, and adjust it to show green for "Online"
7. Save

![](https://files.readme.io/a5b3a3f942d7f408d67288d7c26e9f79f3c44d306ddd44920d204e60a96d128e-image.png)

<br />

<br />

***

## App export

*Downloads may take a few seconds.*

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
