---
title: Image
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
The image component is used to display images. To add an image, link to an image using the URL setting. For example, add `https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Photographer_Photographing_Nevada_Mountains.jpg/1920px-Photographer_Photographing_Nevada_Mountains.jpg` to the URL setting, and an image from wikipedia of a photographer photographing mounts will be added to your app.


## Displaying images from an attachment

Images can be uploaded as [Attachments](doc:attachments) and you may wish to display these outside of a [Table](doc:table).

Images uploaded to either a Single Attachment or Multi Attachment column will both appear as an array of objects. Each object contains specific keys relating to the attachment, including the URL. For single attachment columns like the one used in the Budibase DB sample data table Employees, it is possible to display the image for each employee using `{{ [New Repeater].Employees.[Badge Photo].0.url }}`, assuming you're using a Data Provider and Repeater combo. This takes the current-row from the Data Provider, looks into the Badge Photo column (an array of objects), takes the first (zero-indexed) object, and picks out the URL.

This would be the same as setting the src attribute in an HTML img element

```
<img src="<-- Image URL here -->" />
```

<br />


<br />

#### Data

Create a table called _Landscapes_ with a category name and an attachment column for the images. Upload your images.


#### Design

1. In an app with a screen, add a [Data Provider](doc:data-provider) for the _Landscapes_ table.
2. Add a [Repeater](doc:repeater) to the data provider. This will add a container for each _Landscapes_ row.
3. Add a Text component to display a title for each _Landscapes_ row.  
   The <Glossary>Binding</Glossary> in this case is `  
   \{\{  Repeater].Lan.Landscapes.title }}  
   \{\{  Repeater].Lan.Landscapes.photographer }} \{\{  Repeater].Lan.Landscapes.date }}  
   `  which will fetch and display a title, the name of the photographer, and the date saved in the table.
4. Underneath the Text, add a data provider for the "Images". Attachments List column types which we created are saved in <a href="https://docs.budibase.com/docs/json#arrays">JSON Arrays</a>.
5. Change the source of the data provider to JSON / CSV

6. Click the settings cog beside JSON / CSV and paste this binding inside it `{{ [New Repeater].Landscapes.images }}`
7. Add a repeater so that each attachment image can be displayed.
8. Finally, add an Image component within the repeater. Paste the below binding inside the URL setting of the image component. Using JavaScript `return $("[New Data Provider 2].Rows")[$("[New Repeater 2].[Row index]")].url` - This sets the image URL using the second Data Provider and the repeater's row-index.

#### Result


#### Single or fixed number of image attachments

If you know there will only be a single image attachment, you should make sure to use the [Attachment](doc:attachments#attachment) column type. Then you do not need to add a data provider and repeater for the attachment column. You will have access to the image bindings.

For a fixed number of attachments, simply adjust the index in the URL for each image component. This was shown in the above example

## Displaying images from an S3 bucket

You may wish to store your image files in an external S3 bucket instead of the built-in MinIO bucket.

#### Data

Upload your images to your S3 bucket. You will need to allow public access to the images in AWS:


Next add your S3 <Glossary>Datasource</Glossary> with a simple **Read** query to list all of the files in the bucket.


#### Design

Add a [Repeater Block](https://docs.budibase.com/docs/blocks#repeater-block) with the _Read_ query as its datasource. Nest your image components, using the following URL binding: `https://<bucket-name>.s3.us-west-1.amazonaws.com/{{ New Repeater block.Read.Key }}`


## Image carousel

There is no built-in slideshow component, however there is a tutorial <a href="https://github.com/Budibase/budibase/discussions/4985#discussioncomment-2444397">here</a> for building one.

## Background image

Add the background image component. This component can take children, which will appear in front of the background.


Provide a valid URL as the image source. The _Position_ property can also be edited to offset the background image.

