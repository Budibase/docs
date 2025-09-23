---
title: Lookup record
excerpt: Check if a record exists
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

[block:html]
{
  "html": "<iframe width=\"800\" height=\"600\" frameborder=\"0\" allow=\"clipboard-write;camera;geolocation;fullscreen\" src=\"https://cprem.budibase.app/embed/guide-lookup-record\"></iframe>"
}
[/block]


_Note: The email addresses are displayed for demo purposes, so that you can test the lookup._

## Scenario

In some [Forms](doc:forms), it is important to verify that the entered details are correct before proceeding. For example, you may want to check that an email address matches against a policy through a [REST API](doc:rest) call, or [SQL query](https://docs.budibase.com/docs/data-sources#custom-queries).

[block:html]
{
  "html": "<u><b style=\"font-size: 14px;\">Challenge: </b></u><br />\n<span style=\"position: relative; font-size: 24px; color: currentColor;\">★★★☆☆</span>"
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
        "https://files.readme.io/5c6b01b93c865cb21f78c7c7ed9bfb2a2e8b3e781c6fd689d610b630344624ed-Screenshot_2024-09-10_at_17.31.39.png",
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
        "https://files.readme.io/525e919fe8b282241e4740d8511adf535e995b72f6187d4f3151474163d33086-Screenshot_2025-08-15_at_11.19.49.png",
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
        "https://files.readme.io/6eeec44bd4871d06854e8a9d887edd124d63dff4f36834402f9fb7f61912a36d-Screenshot_2025-08-15_at_11.21.38.png",
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
        "https://files.readme.io/792d9a40ca88bca16ef197c276e98c33e082a57efff18b636ae1bc2a4e2fc181-Screenshot_2024-09-10_at_17.44.01.png",
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
    1. <br />

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
        "https://files.readme.io/8fb7ff89a627f40dfedc4f531d3048ed0f4b123f13b0e8bfcf3696fea4414327-Screenshot_2025-08-15_at_11.38.22.png",
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
        "https://files.readme.io/7f999943fa34ccdd75d12a61bbce29b51263bd2519e400367a88d921ad4ed196-Screenshot_2025-08-15_at_11.36.15.png",
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
        "https://files.readme.io/ec64766a26839c2b559148878765c6e8b9d0a56cad30b181a4a4ef20cf370076-Screenshot_2025-08-15_at_11.36.56.png",
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
        "https://files.readme.io/43f2bda737308e8204696f46a8cede8eee96cb19ed6c47c24d592636968f168b-Screenshot_2025-08-15_at_12.56.03.png",
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