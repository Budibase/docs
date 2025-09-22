---
title: Notify user if query fails
excerpt: Displaying GUI content based on a status code
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Try it out!

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-notify-user-if-rest-query-fails"></iframe>
`}</HTMLBlock>

## Scenario

Typically when executing a REST query, such as creating a new resource with a POST request, the response will come back successfully and the <Glossary>End User</Glossary> can continue with their workflow. 

There will however be occasions when the request is badly formed, or there is a timeout or server error. Ideally these situations should be caught, and the user should be notified so that they can either try again, or fix their request. 

To accomplish this, we will make use of [Synchronous automations 🔒](doc:synchronous-automations).

For demonstration purposes, this guide will use a dummy query that will either return a 200 or a 404 in the response body.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★★☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. Go to the [Automations](doc:automation-steps) section of your app, and `Add automation`
2. In the *Create Automation* modal, enter a *Name*, and select `App Action` as the trigger. `Save`.
3. `Add field` for each binding that you will need to pass into your query
   1. In this example we will use a simple pass boolean to determine the 200 or 404 response.

<Image align="center" src="https://files.readme.io/3147aed-steps1_to_3.png" />

4. Click the `+` below the trigger step, select `External Data Connector` and `Save`
5. Select your query from the *Query* dropdown, and pass in your trigger fields as the query <Glossary>Binding</Glossary>s, for example: `{{ trigger.fields.pass }}`

<Image align="center" width="600px" src="https://files.readme.io/4d3e90a-steps4_to_5.png" />

<Image alt="Our query with 'resource' binding as seen in the Data section" align="center" src="https://files.readme.io/70503dd-Screenshot_2023-08-23_at_14.28.26.png">
  Our query with 'resource' binding as seen in the Data section
</Image>

6. Add the final automation step: **Collect Data**, which will allow us to return the response data to the <Glossary>End User</Glossary>.
7. Under *What to collect* add the following binding: `{{ literal steps.1.response }}`. The literal keyword is used to ensure an object is returned, and not a string.

<Image align="center" width="600px" src="https://files.readme.io/1f1f394-steps6_to_7.png" />

8. With the automation setup, we can now go to the Design section, and `Add component`: **Button**
9. In the <Glossary>Settings Panel</Glossary>, click the button beside *On click* to open the actions drawer.
10. `Add Action`: **Trigger Automation**
    1. Select the *Automation* you created. You should see an info note: *This automation will run synchronously* 
    2. Pass in any [App action](doc:app-action) fields

<Image align="center" src="https://files.readme.io/e785885-steps8_to_10.png" />

11. `Add Action`: **Update State**
    1. *Set value* 'ResponseCode' to `{{ Action 1.Automation Result.value[0].code }}` (this binding will depend on how your API returns data)

<Image align="center" src="https://files.readme.io/4c03aca-Screenshot_2023-08-23_at_15.55.30.png" />

12. `Add Action`: **Continue if / Stop if**
    1. *Continue if* `{{ State.ResponseCode }}` *Equals* 200
13. Add actions that you want for the continue case, such as **Refresh Data Provider** and **Close Side Panel**.
14. Be sure to `Save`

<Image align="center" src="https://files.readme.io/d3b9797-Screenshot_2023-08-23_at_16.01.21.png" />

15. `Add component`: **Headline** for the error scenario
16. Click on the `Conditions` tab: `Configure conditions`
17. `Add Condition`:
    1. *Show component* IF `{{ State.ResponseCode }}` *Like* 4
    2. `Save`

<Image align="center" src="https://files.readme.io/e2eaf06-steps13_to_16.png" />

***

<br />

## App export

*Downloads may take a few seconds.*

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1FVd44i08CTDDY5rKyt484EeR9LOlBqw-')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
