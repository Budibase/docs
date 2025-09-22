---
title: Chaining actions
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
Using Budibase, it's possible to create a sequence of actions. Below is a quick video demonstrating how to do this.

[block:html]
{
  "html": "<div style=\"padding:75% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/842181639?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"chaining actions\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]


## Action referencing

It can be useful to access data from a previous action in a new action. 

The following actions expose data after execution:

[block:parameters]
{
  "data": {
    "h-0": "Action Name",
    "h-1": "Data Binding",
    "h-2": "Returns",
    "0-0": "Save Row",
    "0-1": "{{ Action X.Saved Row }}",
    "0-2": "Field value pairs (including auto-columns)  \n  \n\\_id: Unique row identifier",
    "1-0": "Duplicate Row",
    "1-1": "{{ Action X.Duplicated Row }}",
    "1-2": "Field value pairs (including auto-columns)  \n  \n\\_id: Unique row identifier",
    "2-0": "Execute Query",
    "2-1": "{{ Action X.Query Result }}  \n  \n_First row example_  \n{{ Action X.Query Result.data.[0] }}",
    "2-2": "`{ data: [ <query-schema>_ ] }`  \n  \n\\_ An object as determined by the query schema",
    "3-0": "Trigger Automation",
    "3-1": "{{ Action X.Automation Result }}",
    "3-2": "The response of a [Synchronous automation 🔒](doc:synchronous-automations)"
  },
  "cols": 3,
  "rows": 4,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]


**Note** X is the action number

<br />

***

## Query result properties

In addition to the payload data of an execute query action result, you can also access the following additional information:

- Status code - _Number_
- Response time - _String including the time unit_
- Payload size - _String including the size unit_

This can be useful in combination with [Conditional UI](doc:conditions) for navigating to different screens upon an error, or to change text color based on the status code.

### Example

1. Save the query result to [App state](doc:app-state). Use the **literal** keyword to ensure an object is saved, and not text.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/5ff9cad-Screenshot_2023-11-20_at_12.08.06.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


2. Reference the metadata properties with the following <<glossary:Binding>>s:

```handlebars
### Status code: {{ State.QueryResult.code }}

### Response time: {{ State.QueryResult.time }}

### Payload size: {{ State.QueryResult.size }}
```

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f02b99c-Screenshot_2023-11-20_at_12.10.17.png",
        "",
        "Response info returned after executing the query"
      ],
      "align": "center",
      "caption": "Response info returned after executing the query"
    }
  ]
}
[/block]


<br />

***

## Tutorial: Creating and Linking two table entries in one form

#### Schema

- Bookings
- Leaders
- One Booking -> One Leader

***

#### Use Case

 Create a new booking and a new associated leader in one form

***

#### Steps

1. In the _/booking/new/row_ screen, delete the drop down for the leader, and replace it with a new text field. Type in the field name: **LeaderName**

![Screenshot 2022-03-22 at 12 01 01](https://user-images.githubusercontent.com/101575380/159480786-8c100a27-d798-412d-bbfc-05d00ce718f5.png)

2. Next click on the 'Save' button and 'Define actions'.  
   Here you will need to add another 'Save Row' action underneath the existing one for the Leader table. This will allow you to create a new row for the leader entered into the in-line **LeaderName** field. 

![Screenshot 2022-03-22 at 12 17 06](https://user-images.githubusercontent.com/101575380/159481463-854513b8-7fcc-44da-a0ba-d75ffcfa35fe.png)

3. Two columns overrides must be added.  
   The first **Name** `{{ Form.Fields.LeaderName }}` saves the leader name as the value from our new **LeaderName** form field.  
   The second **Booking** column (the relationship field) is set to `{{ Action 2.Saved row._id }}`. This represents the relationship id of the booking row that was saved in the previous action.

## Continue if / Stop if

A chain of actions can be halted early on a condition. 

![](https://files.readme.io/f5340ac-Screenshot_2022-11-25_at_13.12.45.png)

In this example, you only want to save a row to a confirmed sales table given the item required payment. 

If the queried item was free, then the chain of actions would be halted early before reaching step 3, or any further steps.

Alternatively you can achieve the same result with 'stop if' as follows:

![](https://files.readme.io/3f9d24d-Screenshot_2022-11-25_at_13.15.27.png)