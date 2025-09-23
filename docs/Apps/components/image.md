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

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/96cbfc6c15555f9ec7460000e009bb8ec3aa1e586457ba4cd2517eb341dc594a-Screenshot_2025-08-21_at_13.50.04.png",
        "CleanShot 2022-03-09 at 17.30.22.png",
        2559
      ],
      "align": "center",
      "sizing": "100",
      "caption": "By Noah Wulf - Own work, CC BY-SA 4.0, <https://commons.wikimedia.org/w/index.php?curid=97062864>"
    }
  ]
}
[/block]


## Displaying images from an attachment

Images can be uploaded as [Attachments](doc:attachments) and you may wish to display these outside of a [Table](doc:table). 

#### Data

Create a table called _Landscapes_ with a category name and an attachment column for the images. Upload your images.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6c51d2f723f94ef27b30a4a31e8a469e1535dce0c36095f1ccb65d0bc62a376c-Screenshot_2025-08-21_at_13.58.48.png",
        "Screenshot 2022-05-26 at 11.03.37.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


#### Design

1. In an app with a screen, add a [Data Provider](doc:data-provider) for the _Landscapes_ table.
2. Add a [Repeater](doc:repeater) to the data provider. This will add a container for each _Landscapes_ row.
3. Add a Text component to display a title for each _Landscapes_ row.  
   The <<glossary:Binding>> in this case is \`  
    {{ [New Repeater].Landscapes.title }}  
   {{ [New Repeater].Landscapes.photographer }} {{ [New Repeater].Landscapes.date }}  
   \`  which will fetch and display a title, the name of the photographer, and the date saved in the table.
4. Underneath the Text, add a data provider for the "Images". Attachments List column types which we created are saved in <a href="https://docs.budibase.com/docs/json#arrays">JSON Arrays</a>.
5. Change the source of the data provider to JSON / CSV

   [block:image]{"images":[{"image":["https://files.readme.io/fce32d01078b7a12838280c046fba5c5d9c3da6c734af9ffcbff24d1e0d686eb-Screenshot_2025-08-21_at_14.10.42.png","",""],"align":"center"}]}[/block]
6. Click the settings cog beside JSON / CSV and paste this binding inside it `{{ [New Repeater].Landscapes.images }}`
7. Add a repeater so that each attachment image can be displayed.
8. Finally, add an Image component within the repeater. Paste the below binding inside the URL setting of the image component. Using JavaScript `return $("[New Data Provider 2].Rows")[$("[New Repeater 2].[Row index]")].url` - This sets the image URL using the second Data Provider and the repeater's row-index.

#### Result

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/70536ef404a7420bc668b1657af8ba1f682da099429f42cfa6a132d8aa2a0838-Screenshot_2025-08-21_at_15.00.33.png",
        "image attachments.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


#### Single or fixed number of image attachments

If you know there will only be a single image attachment, you should make sure to use the [Attachment](doc:attachments#attachment) column type. Then you do not need to add a data provider and repeater for the attachment column. You will have access to the image bindings.

For a fixed number of attachments, simply adjust the index in the URL for each image component. This was shown in the above example

## Displaying images from an S3 bucket

You may wish to store your image files in an external S3 bucket instead of the built-in MinIO bucket.

#### Data

Upload your images to your S3 bucket. You will need to allow public access to the images in AWS:

![](https://files.readme.io/9bdcee7-Screenshot_2022-11-21_at_17.08.00.png)

Next add your S3 <<glossary:Datasource>> with a simple **Read** query to list all of the files in the bucket.   

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c7a5675f66c86c3fc085d673e704a8e55918a67c8fad560219d0afd7a996d076-Screenshot_2025-09-02_at_11.58.53.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


#### Design

Add a [Repeater Block](https://docs.budibase.com/docs/blocks#repeater-block) with the _Read_ query as its datasource. Nest your image components, using the following URL binding: `https://<bucket-name>.s3.us-west-1.amazonaws.com/{{ New Repeater block.Read.Key }}`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ee3bb39cdc25a5c7fcf259a5f7d0e027429f0312b84eac34ff0bec2bfdfb5ff4-Screenshot_2025-09-02_at_12.02.18.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


## Image carousel

There is no built-in slideshow component, however there is a tutorial <a href="https://github.com/Budibase/budibase/discussions/4985#discussioncomment-2444397">here</a> for building one.

## Background image

Add the background image component. This component can take children, which will appear in front of the background.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d0673713f5107a85e12e777fc976b124511296c5b6aa9db7e51ddc2cebc78a89-Screenshot_2025-09-02_at_11.57.35.png",
        null,
        "Adding the background image component"
      ],
      "align": "center",
      "caption": "Adding the background image component"
    }
  ]
}
[/block]


Provide a valid URL as the image source. The _Position_ property can also be edited to offset the background image.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4b7b09149846d4976213d4ed4f79f74defcc65a87ac9bd6ed811224c095a5e34-Screenshot_2025-09-02_at_11.57.05.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]