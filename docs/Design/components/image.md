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
The image component is used to display images. To add an image, link to an image using the URL setting. For example, add `<https://source.unsplash.com/random`> to the URL setting, and a random image from [Unsplash](https://unsplash.com/) will be added to your app.

<Image align="center" width="100%" src="https://files.readme.io/cf47601-CleanShot_2022-03-09_at_17.30.22.png" />

## Displaying images from an attachment

Images can be uploaded as [Attachments](doc:attachments) and you may wish to display these outside of a [Table](doc:table). 

#### Data

Create a table called *Vehicles* with a category name and an attachment column for the images. Upload your images.

![](https://files.readme.io/7f761c0-Screenshot_2022-05-26_at_11.03.37.png "Screenshot 2022-05-26 at 11.03.37.png")

#### Design

1. Add a [Data Provider](doc:data-provider) for the *Vehicles* table.
2. Add a [Repeater](doc:repeater) to the data provider. This will add a container for each *Vehicles* row.
3. Add a Headline to display a title for each *Vehicles* category.\
   The <Glossary>Binding</Glossary> in this case is `{{ Vehicles Repeater.Vehicles.Category }}`  
4. Underneath the headline, add a data provider for the "Images" attachment field.\
   Attachments are saved as <a href="https://docs.budibase.com/docs/json#arrays">JSON Arrays</a> which allows them to be used as a data source. 

![](https://files.readme.io/bbaac7f-Screenshot_2022-05-26_at_11.14.11.png "Screenshot 2022-05-26 at 11.14.11.png")

5. Add a repeater so that each attachment image can be displayed. Select *Row Direction* to get the images to display horizontally. 

![](https://files.readme.io/3e12094-Screenshot_2022-05-26_at_11.21.54.png "Screenshot 2022-05-26 at 11.21.54.png")

6. Finally, add an Image component within the repeater. Select the attachment URL from the dropdown:

![](https://files.readme.io/dc97adc-Screenshot_2022-05-26_at_11.24.41.png "Screenshot 2022-05-26 at 11.24.41.png")

#### Result

![](https://files.readme.io/87fc066-image_attachments.png "image attachments.png")

#### Single or fixed number of image attachments

If you know there will only be a single image attachment, then you do not need to add a data provider and repeater for the attachment column.\
Instead, you can simply use the URL binding: `{{ Vehicles Repeater.Vehicles.Images.0.url }}`

For a fixed number of attachments, simply adjust the index in the URL for each image component. 

<br />

## Displaying images from an S3 bucket

You may wish to use an external S3 bucket to store your image files instead of the built-in MinIO bucket.

#### Data

Upload your images to your S3 bucket. You will need to allow public access to the images in AWS:

![](https://files.readme.io/9bdcee7-Screenshot_2022-11-21_at_17.08.00.png)

Next add your S3 <Glossary>Datasource</Glossary> with a simple **Read** query to list all of the files in the bucket.   

![](https://files.readme.io/2c66ff5-Screenshot_2022-11-21_at_17.08.55.png)

#### Design

Add a [Repeater Block](https://docs.budibase.com/docs/blocks#repeater-block) with the *Read* query as its datasource. Nest your image components, using the following URL binding: `https://<bucket-name>.s3.us-west-1.amazonaws.com/{{ New Repeater block.Read.Key }}`

![](https://files.readme.io/c76d972-Screenshot_2022-11-21_at_17.13.28.png)

<br />

## Image carousel

There is no built-in slideshow component, however there is a tutorial <a href="https://github.com/Budibase/budibase/discussions/4985#discussioncomment-2444397">here</a> for building one.

<br />

## Background image

Add the background image component. This component can take children which will appear in front of the background.

<Image alt="Adding the background image component" align="center" src="https://files.readme.io/8db6eb1-Screenshot_2023-03-27_at_09.32.01.png">
  Adding the background image component
</Image>

Provide a valid URL as the image source. The *Position* property can also be edited to offset the background image.

![](https://files.readme.io/d753989-Screenshot_2023-03-27_at_09.48.06.png)
