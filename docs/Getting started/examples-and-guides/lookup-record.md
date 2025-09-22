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

<HTMLBlock>{`
<iframe width="800" height="620" style="border: thick double #32a1ce; max-width: 100%;" allow="clipboard-write;camera;geolocation;fullscreen" src="https://plugins.budibase.app/embed/lookup-record"></iframe>
`}</HTMLBlock>

*Note: The email addresses are displayed for demo purposes, so that you can test the lookup.*

## Scenario

In some [Forms](doc:forms), it is important to verify that the entered details are correct before proceeding. For example, you may want to check that an email address matches against a policy through a [REST API](doc:rest) call, or [SQL query](https://docs.budibase.com/docs/data-sources#custom-queries).

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: #000000;">★★★☆☆</span>
`}</HTMLBlock>

***

## Steps

1. In the **Data** section, click on your external <Glossary>Datasource</Glossary>, and click on the `Queries` tab. Click `Create new query`.

<Image align="center" src="https://files.readme.io/2b81478-Screenshot_2023-08-29_at_15.02.48.png" />

2. `Add binding`: 'email' and provide a valid default value
3. Enter your lookup query, e.g. `select * from public."Employees" where "Email" = '{{email}}'`
4. Click `Run Query` and then `Save Query`. 
5. Clear the default value of the binding - it is no longer needed now that we have our schema saved. Make sure to `Save Query` again.

<Image align="center" src="https://files.readme.io/ce1917e-steps2_to_5.png" />

6. Navigate to the **Design** section, `Add component`: **Form**
7. `Add component`: **Field Group**, and set *Type* to 'Main with Sidebar'
8. `Add component`: **Text Field**, and enter a *Field* name and *Label*
9. `Add component`: **Icon**, and set the *Icon*, *Size* and *Color*

<Image align="center" src="https://files.readme.io/ada288a-steps6_to_9.png" />

10. Click the button beside *On click*
11. `Add Action`: **Execute Query**
    1. Select the *Datasource*
    2. Select the *Query*
    3. Check *Do not display default notification*
    4. Provide the email binding, e.g. `{{ Search Form.Fields.Search Email }}`

<Image align="center" src="https://files.readme.io/3529549-Screenshot_2023-08-29_at_15.39.50.png" />

12. `Add Action`: **Update State**
    1. *Set value* 'EmployeeID' to JavaScript binding:
    2. ```javascript JavaScript
       return $("Action 1.Query result")?.data?.[0]?.["EMPLOYEE ID"]
       ```
13. `Add Action`: **Continue if / Stop if**
    1.

<Image align="center" src="https://files.readme.io/e354816-Screenshot_2023-08-29_at_15.43.52.png" />

14. `Add Action`: **Show Notification**
    1. Set *Type* to 'Warning'
    2. Set *Message* to 'Employee not found!'
    3. Check *Auto dismiss*
15. Be sure to `Save`

<Image align="center" src="https://files.readme.io/acb67ac-steps12_to_15.png" />

16. Click on the **Screen** component (root level of the <Glossary>Component Tree</Glossary>). `Add component`: **Repeater Block**
17. In the <Glossary>Settings Panel</Glossary>, select the 'Employees' table, set *Limit* to 1, and click the button beside *Filtering*
18. `Add filter`: 'EMPLOYEE ID' *Equals Binding* `{{ State.EmployeeID }}` and `Save`

<Image align="center" src="https://files.readme.io/8280ee9-steps16_to_18.png" />

19. Click on the `Conditions` tab, and click `Configure conditions`
20. `Add condition`: 
    1. *Hide component* IF `{{ State.EmployeeID }}` *Is empty*
    2. `Save`

<Image align="center" src="https://files.readme.io/c6c4333-steps19_and_20.png" />

21. `Add component`: **Form**, and set *Type* to 'Update', and the *Schema* to the 'Employees' table
22. `Add component`: **Field group** and click `Update form fields`

<Image align="center" src="https://files.readme.io/bd69e94-steps21_and_22.png" />

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
