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

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-lookup-record"></iframe>
`}</HTMLBlock>

*Note: The email addresses are displayed for demo purposes, so that you can test the lookup.*

## Scenario

In some [Forms](doc:forms), it is important to verify that the entered details are correct before proceeding. For example, you may want to check that an email address matches against a policy through a [REST API](doc:rest) call, or [SQL query](https://docs.budibase.com/docs/data-sources#custom-queries).

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★★★☆☆</span>
`}</HTMLBlock>

***

## Steps

1. In the **Data** section, click on your external <Glossary>Datasource</Glossary>, and click on the `Queries` tab. Click `Create new query`.

<Image align="center" src="https://files.readme.io/5c6b01b93c865cb21f78c7c7ed9bfb2a2e8b3e781c6fd689d610b630344624ed-Screenshot_2024-09-10_at_17.31.39.png" />

2. `Add binding`: 'email' and provide a valid default value
3. Enter your lookup query, e.g. `select * from public."Employees" where "Email" = '{{email}}'`
4. Click `Run Query` and then `Save Query`. 
5. Clear the default value of the binding - it is no longer needed now that we have our schema saved. Make sure to `Save Query` again.

<Image align="center" src="https://files.readme.io/525e919fe8b282241e4740d8511adf535e995b72f6187d4f3151474163d33086-Screenshot_2025-08-15_at_11.19.49.png" />

6. Navigate to the **Design** section, `Add component`: **Form**
7. `Add component`: **Field Group**, and set *Type* to 'Main with Sidebar'
8. `Add component`: **Text Field**, and enter a *Field* name and *Label*
9. `Add component`: **Icon**, and set the *Icon*, *Size* and *Color*

<Image align="center" src="https://files.readme.io/6eeec44bd4871d06854e8a9d887edd124d63dff4f36834402f9fb7f61912a36d-Screenshot_2025-08-15_at_11.21.38.png" />

10. Click the button beside *On click*
11. `Add Action`: **Execute Query**
    1. Select the *Datasource*
    2. Select the *Query*
    3. Check *Do not display default notification*
    4. Provide the email binding, e.g. `{{ Search Form.Fields.Search Email }}`

<Image align="center" src="https://files.readme.io/792d9a40ca88bca16ef197c276e98c33e082a57efff18b636ae1bc2a4e2fc181-Screenshot_2024-09-10_at_17.44.01.png" />

12. `Add Action`: **Update State**
    1. *Set value* 'EmployeeID' to JavaScript binding:
    2. ```javascript JavaScript
       return $("Action 1.Query result")?.data?.[0]?.["EMPLOYEE ID"]
       ```
13. `Add Action`: **Continue if / Stop if**
    1. <br />

<Image align="center" src="https://files.readme.io/e354816-Screenshot_2023-08-29_at_15.43.52.png" />

14. `Add Action`: **Show Notification**
    1. Set *Type* to 'Warning'
    2. Set *Message* to 'Employee not found!'
    3. Check *Auto dismiss*
15. Be sure to `Save`

<Image align="center" src="https://files.readme.io/8fb7ff89a627f40dfedc4f531d3048ed0f4b123f13b0e8bfcf3696fea4414327-Screenshot_2025-08-15_at_11.38.22.png" />

16. Click on the **Screen** component (root level of the <Glossary>Component Tree</Glossary>). `Add component`: **Repeater Block**
17. In the <Glossary>Settings Panel</Glossary>, select the 'Employees' table, set *Limit* to 1, and click the button beside *Filtering*
18. `Add filter`: 'EMPLOYEE ID' *Equals Binding* `{{ State.EmployeeID }}` and `Save`

<Image align="center" src="https://files.readme.io/7f999943fa34ccdd75d12a61bbce29b51263bd2519e400367a88d921ad4ed196-Screenshot_2025-08-15_at_11.36.15.png" />

19. Click on the `Conditions` tab, and click `Configure conditions`
20. `Add condition`: 
    1. *Hide component* IF `{{ State.EmployeeID }}` *Is empty*
    2. `Save`

<Image align="center" src="https://files.readme.io/ec64766a26839c2b559148878765c6e8b9d0a56cad30b181a4a4ef20cf370076-Screenshot_2025-08-15_at_11.36.56.png" />

21. `Add component`: **Form**, and set *Type* to 'Update', and the *Schema* to the 'Employees' table
22. `Add component`: **Field group** and click `Update form fields`

<Image align="center" src="https://files.readme.io/43f2bda737308e8204696f46a8cede8eee96cb19ed6c47c24d592636968f168b-Screenshot_2025-08-15_at_12.56.03.png" />

<br />

***

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1OtSRe8pC_kg2ni5_4srWFzEuA_M9D2DT')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
