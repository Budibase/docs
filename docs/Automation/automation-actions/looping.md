---
title: Looping
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
[block:html]
{
  "html": "<iframe src=\"https://player.vimeo.com/video/746819148?h=80df83e472&title=0&portrait=0&byline=0\" style=\"margin-top: -100px; margin-bottom: -80px;\" width=\"640\" height=\"564\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>"
}
[/block]


> 🚧 Iteration hard limit
> 
> Users who self-host can configure this by changing the `AUTOMATION_MAX_ITERATIONS` environment variable. 
> 
> - For docker-compose users, update docker-compose.yaml > app-service > environment. 
> - For Kubernetes users update values.yaml > `automationMaxIterations`

Automation looping allows you to repeat an automation action across multiple records. For example, when an automation is triggered, delete the 10 last updated records in my database. Or, every Monday email my users with a usage update.

You can loop actions by clicking the 'Add looping' button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/66e13d3f002f6740b5942ed12ce0c5bcafbf405c4b7b16aebf6a1f2449bb56ed-Screenshot_2024-11-07_at_11.26.59.png",
        "162842514-361506ec-b7e9-486d-a466-e5c90d8261db.png",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


By clicking the Add looping button, Budibase will add a special loop block to the automation, which is stored as a separate block but linked to the selected block using an ID.

[block:image]{"images":[{"image":["https://files.readme.io/c18926518ee109924cada02b16b6cc0f84b1762b56de5aa7df420105d3e6f048-Screenshot_2024-11-07_at_11.30.05.png","looping.png",null],"align":"center"}]}[/block]

As shown in the image above, several different configuration options can be provided.  Bindings are also available.

### Array

Array / String dropdown denotes what type of binding should be provided to the loop, and if a different type is passed, Budibase reports error at runtime stating this:  
 `{ "items": [ { "success": true }, { "success": true } ], "iterations": 2, "success": false, "status": "INCORRECT_TYPE" }`

### Binding / Value

Binding / Value is the actual value that you want to loop over

### Max loop iterations

Max Iterations is a soft limit that is set by the user that defines how many times that automation will run (this is superseded by a hard limit that we or the self-hosting user sets)  
` { "items": [ { "success": true } ], "iterations": 1, "success": false, "status": "MAX_ITERATIONS_REACHED" }`

### Failure conditions

Failure Condition stops the loop whenever the currentItem equals the value provided in the failure condition, then loop is then broken at that particular point and the results up to then provided  
`{ "items": [ { "success": true }, { "success": true } ], "iterations": 2, "success": false, "status": "FAILURE_CONDITION_MET" }`

This leads to how we provide the bindings for each step. A block that is being looped gets provided the following binding (in addition to any previous blocks):

![](https://files.readme.io/84ff591-162908840-da9118f6-96c5-4283-b83d-813fe0b6734b.png "162908840-da9118f6-96c5-4283-b83d-813fe0b6734b.png")

Any blocks after the loop block get provided with the entire output, such as:

![](https://files.readme.io/515965d-162909302-0c9d0005-3efc-4daf-a68b-d67969cdadc1.png "162909302-0c9d0005-3efc-4daf-a68b-d67969cdadc1.png")