---
title: Lookup record
excerpt: Check if a record exists
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
## Try it out!

[block:html]
{
  "html": "<iframe width=\"800\" height=\"620\" style=\"border: thick double #32a1ce; max-width: 100%;\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://plugins.budibase.app/embed/lookup-record\"></iframe>"
}
[/block]

_Note: The email addresses are displayed for demo purposes, so that you can test the lookup._

## Scenario

In some [Forms](doc:forms), it is important to verify that the entered details are correct before proceeding. For example, you may want to check that an email address matches against a policy through a [REST API](doc:rest) call, or [SQL query](https://docs.budibase.com/docs/data-sources#custom-queries).

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: #000000;\">★★★☆☆</span>"
}
[/block]

***

## Steps

1. In the **Data** section, click on your external <<glossary:Datasource>>, and click on the `Queries` tab. Click `Create new query`.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2b81478-Screenshot_2023-08-29_at_15.02.48.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

2. `Add binding`: 'email' and provide a valid default value
3. Enter your lookup query, e.g. `select * from public."Employees" where "Email" = '{{email}}'`
4. Click `Run Query` and then `Save Query`. 
5. Clear the default value of the binding - it is no longer needed now that we have our schema saved. Make sure to `Save Query` again.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ce1917e-steps2_to_5.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

6. Navigate to the **Design** section, `Add component`: **Form**
7. `Add component`: **Field Group**, and set _Type_ to 'Main with Sidebar'
8. `Add component`: **Text Field**, and enter a _Field_ name and _Label_
9. `Add component`: **Icon**, and set the _Icon_, _Size_ and _Color_

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ada288a-steps6_to_9.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

10. Click the button beside _On click_
11. `Add Action`: **Execute Query**
    1. Select the _Datasource_
    2. Select the _Query_
    3. Check _Do not display default notification_
    4. Provide the email binding, e.g. `{{ Search Form.Fields.Search Email }}`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3529549-Screenshot_2023-08-29_at_15.39.50.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

12. `Add Action`: **Update State**
    1. _Set value_ 'EmployeeID' to JavaScript binding:
    2. ```javascript JavaScript
       return $("Action 1.Query result")?.data?.[0]?.["EMPLOYEE ID"]
       ```
13. `Add Action`: **Continue if / Stop if**
    1.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e354816-Screenshot_2023-08-29_at_15.43.52.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

14. `Add Action`: **Show Notification**
    1. Set _Type_ to 'Warning'
    2. Set _Message_ to 'Employee not found!'
    3. Check _Auto dismiss_
15. Be sure to `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/acb67ac-steps12_to_15.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

16. Click on the **Screen** component (root level of the <<glossary:Component Tree>>). `Add component`: **Repeater Block**
17. In the <<glossary:Settings Panel>>, select the 'Employees' table, set _Limit_ to 1, and click the button beside _Filtering_
18. `Add filter`: 'EMPLOYEE ID' _Equals Binding_ `{{ State.EmployeeID }}` and `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8280ee9-steps16_to_18.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

19. Click on the `Conditions` tab, and click `Configure conditions`
20. `Add condition`: 
    1. _Hide component_ IF `{{ State.EmployeeID }}` _Is empty_
    2. `Save`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c6c4333-steps19_and_20.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

21. `Add component`: **Form**, and set _Type_ to 'Update', and the _Schema_ to the 'Employees' table
22. `Add component`: **Field group** and click `Update form fields`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bd69e94-steps21_and_22.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]

<br />

***

## App export

_Downloads may take a few seconds._

[block:html]
{
  "html": "<!-- Add icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<!-- Full width -->\n<button class=\"btn\" onclick=\"window.open('https://drive.google.com/uc?export=download&id=1OtSRe8pC_kg2ni5_4srWFzEuA_M9D2DT')\" style=\"width:100%\"><i class=\"fa fa-download\"></i> Download</button>\n\n<style>\n  /* Style buttons */\n.btn {\n  background-color: #3571de;\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n/* Darker background on mouse-over */\n.btn:hover {\n  background-color: #2e64c9;\n}\n</style>"
}
[/block]