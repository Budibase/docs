---
title: Form bindings
excerpt: When and how to use bindings in forms
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Forms are critical in a workspace, as they allow users to collect, edit, and submit data. 

While bindings are not necessary to build functional forms for the internal [Budibase DB](doc:budibasedb) and [SQL](doc:sql-datasource) tables provide additional flexibility for your form fields when you need dynamic labels, placeholders, or default values. 

You may want to read the value of a form field when handling cases such as:

* [On change event](https://docs.budibase.com/docs/actions#on-change)
* [Conditional UI](doc:conditions)
* [Filtering](https://docs.budibase.com/docs/searchfilter-data#filtering-data-from-the-front-end)

***

## Read Query: Setting default values

A default value binding will be applied on the initial load of a screen.

Consider a [REST query](doc:rest-queries) that retrieves an employee record for a bound ID. We can add a [Repeater block](https://docs.budibase.com/docs/blocks#repeater-block) to a [Screen](doc:screens) to pull that employee data.

#### Step 1 - Setup the repeater block

<Image alt="REST query to GET a single employee from rowId binding" align="center" src="https://files.readme.io/abebb6f0286d09cbf8eba6b77773a186fab7171016619280e27facde4a9f8dd7-Screenshot_2025-08-19_at_08.22.19.png">
  REST query to GET a single employee from rowId binding
</Image>

<Image alt="Selecting the GET query as the data source" align="center" width="450px" src="https://files.readme.io/5fb28bceea88e3a1e4a4ca90ac6d977a110cfced5952378387dbf79c9eee2dd4-Screenshot_2025-08-19_at_08.24.30.png">
  Selecting the GET query as the data source
</Image>

After selecting the GET query as the data source for the repeater block, click on the cog icon and provide a binding value. 

In this example I am using the `{{ URL.id }}` binding which is made available through [URL variables](doc:url-parameters). You can however, use any value here, including [App state](https://docs.budibase.com/docs/app-state#app-state-in-blocks).

<Image alt="Passing the rowId into the GET query" align="center" src="https://files.readme.io/57d2ba419b4dc435b3748507d9ba3e620ed21bf3455ca1df56ee9c04ebe42e9a-Screenshot_2025-08-19_at_08.30.12.png">
  Passing the rowId into the GET query
</Image>

#### Step 2 - Configure the form

Add a [Form](doc:forms). Add the form fields that you would like to pull data into. Make sure to enter a unique name in the *Field* setting, or select a field if you are also using a [Create query](https://docs.budibase.com/docs/form-bindings#create-query-mapping-query-bindings-to-form-fields).

For the *Default value* setting, click on the lightning bolt icon, and add the binding to pull out the specific field, for example *Address*:

<Image align="center" src="https://files.readme.io/4c1c57a0b58b698ee443492a24b6110baf29c5ff93970e669ab3298c5198f54d-Screenshot_2025-08-19_at_09.42.46.png" />

```Text Default value binding example
{{ Employee Repeater block.GET Employee Row.Address }}
```

Once all fields have been added with their appropriate default values, you should see something like so:

<Image align="center" src="https://files.readme.io/bb3a1bb942faf134660d569f2a073eaf0fd8128491d7c539e5a5ec2bbc2e7106-Screenshot_2025-08-19_at_09.43.45.png" />

Note that you may need to refresh the page - remember that default values only apply on load of the screen.

***

## Create Query: Mapping query bindings to form fields

If you are building a create form, then it is possible to use the bindings of a 'Create' type custom query as the schema of your form. This means that the form fields will automatically be populated in a [Field group](doc:field-groups) to match the query inputs.

For example consider the case of a POST REST query:

#### Step 1 - Add the REST query

Add your binding fields, and optionally set some default values. These will be used in the body of your POST query, and as the schema for your form in the Design section.

<Image alt="POST query bindings" align="center" src="https://files.readme.io/3619df04d41b514950b8a7f821753cfbdd128aa43c5ea453c3f1db00d0b4a826-Screenshot_2025-08-19_at_12.18.39.png">
  POST query bindings
</Image>

<Image alt="POST query body" align="center" src="https://files.readme.io/6b559f137e0c4e4c6386d84555b86e8ddf06bdff7282e67b894cd1d4db765c04-Screenshot_2025-08-19_at_11.01.56.png">
  POST query body
</Image>

#### Step 2 - Add the form

Add a form and select your create query as the schema.

<Image alt="Selecting the form schema" align="center" src="https://files.readme.io/b3b08e7-Screenshot_2023-07-18_at_17.26.39.png">
  Selecting the form schema
</Image>

Next add a field group, and click the `Update form fields`. You can see that this will now populate the <Glossary>Component Tree</Glossary> with form fields that match your bindings.

<Image alt="Auto-populating form fields via the field group" align="center" src="https://files.readme.io/8a451c5eedbadde5829b2d32fd15620a237b8c17ebfff3601f01301204ac9343-Screenshot_2025-08-19_at_12.34.42.png">
  Auto-populating form fields via the field group
</Image>

Finally you can add a submit [Button](doc:button) with an [Execute query action](https://docs.budibase.com/docs/data-actions#execute-query). Bind the query bindings to your the form fields:

<Image align="center" src="https://files.readme.io/5e047be8a8774304e3723da252922b36b588019c3cbb60bc5b285cb3753bbbb1-Screenshot_2025-08-19_at_12.35.38.png" />

> 👍
>
> It is possible to combine the Read and Create query examples shown here into a single form.

***

## On Change event

If you want to perform [Actions](doc:actions) when a form field value has changed, you can use the *On Change* event. 

Within the <Glossary>Settings Panel</Glossary> of each form field you can find the `Define action` button beside the *On change* label.

### Tutorial: Calculate age from DOB field

1. Create a new app with a new internal Budibase DB table called **Patients**. Add a [Text](doc:text) field for the *Name* of the patient, and another [Date/Time](doc:datetime) field for the *DOB*. Add some rows.

<Image align="center" src="https://files.readme.io/626db3376bf5104f28e258c555c7b4044429c4f87e7160076cbfb32650a8e811-Screenshot_2025-08-19_at_12.38.56.png" />

2. Add a **Side panel** [Autogenerated screen](https://docs.budibase.com/docs/screens#autogenerated-screen) for the **Patients** table. Delete the new row side panel.
3. Eject the form block inside the Side panel.
4. In the form within the *Edit row side panel* , add another field, this time a [Number field](https://docs.budibase.com/docs/text-inputs#number-field), and make it *Disabled*. Type 'Age' into the *Field* name setting.

<Image align="center" src="https://files.readme.io/862a81f58dc608d45879f8fcd96dc688cc32705b84df5674ddeb8f0d6f4071cd-Screenshot_2025-08-19_at_12.43.41.png" />

4. Next select the *DOB* field, and click on `No actions set` beside the *On change* setting. Add an **Update Field Value** action for the *Details Form*, and choose the 'Age' field as the target.\
   For the value, click on the lightning bolt icon and select the *JavaScript* tab. Here we will calculate the *Age* from the *DOB*.

![](https://files.readme.io/a52f4f6-small-Screenshot_2023-05-10_at_15.04.20.png)

5. Provide the following JavaScript binding:

```javascript Calculate Age from DOB
/**
* Source: https://stackoverflow.com/questions/10008050/get-age-from-birthdate
*/
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

return getAge($("Field Value"));
```

Make sure to save! Also note the binding that is being used - we want to use the newly selected date value:

> 👍 `{{ Field Value }}`
>
> Gets the current field value.

> ❗️ `{{ Details Form.Fields.DOB }}`
>
> Will get the previous value; before the on change was triggered.

***

##
