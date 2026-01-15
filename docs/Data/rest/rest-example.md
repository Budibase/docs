---
title: REST example
excerpt: A tutorial on using rest to create an application with budibase
deprecated: false
hidden: false
metadata:
  robots: index
---
## Create our API

First we're going to start by creating our API, to do this we will be using MockAPI and create an endpoint with data we can use within our app

Head to MockAPI.com and create a new project

<Image border={false} src="https://files.readme.io/7dd7a9b4e41e062968f1a2088bdce78d04acd035780a4c14da6f510db4394e8c-image.png" />

Next,  create a new resource under this new project and fill it with sample data, for this example, we will use names, addresses and 'created at'

<Image border={false} src="https://files.readme.io/fba989249ccec21f935403e6fcb0dcfd1460e6b9bd0137bcf4888ad090f8f13a-image.png" />

<Image border={false} src="https://files.readme.io/7f1b9e94935d41d1eb6afe28467db0e3113ba2aa5868d9044a103eec536048ab-image.png" />

## Create the custom REST API Requests

Now that we have our API endpoint set up, we will head over to budibase and create our API requests

Head to API, and select custom REST API 2. We will not be using templates in this tutorial, however if you wish to use them you can access a similar guide [here](https://docs.budibase.com/update/docs/rest-templates)

Add a new action and set it to GET, then with the API endpoint link we have from our MockAPI project, we can send and verify that it works.

<Image border={false} src="https://files.readme.io/63cd71889d4cab4a2f188bb2ce22528954aeabff963b7fa281b143e946da246e-image.png" />

Once we've verified it works, we can add our bindings and then our schema, name this GET request as GET User, we will then need to make three more, GET User**s**, POST Users and PUT Users, these will help us later when we are building our app

<Image border={false} src="https://files.readme.io/799e039649b6e585e82ae3a50b196140c9ac158b18f606d4d0fcff1982f0bf3b-image.png" />

<Image border={false} src="https://files.readme.io/db81b3c1ea014da762db6a80577cdd71ca9c219a8e4123bd57e5a8f31f74026b-image.png" />

<Image border={false} src="https://files.readme.io/3337528f2ca515957c9c8bfeae3d73056a3113c037f13c103e28238d44914d6b-image.png" />

Note that the URL will change on certain API requests based on the information we are trying to pull, but more often than not it will stay default

<br />

<br />

## Create the app

We've now created our API and all of its requests, we must now start working on our app to see how this all ties together

Open up a new budibase app and start by adding a table component, set the data source to the GET Users request we made earlier, you should now see the table is displaying the names, addresses and times the users were created at in front of you, feel free to reorganise the order of the columns

<Image border={false} src="https://files.readme.io/6732816c3fdf52b5bbcc2f1b1928b4b53bb12cc87eddd8294a98b44df73d896e-image.png" />

Now set two _On row click_ actions, **update state** and **open side panel**, we will come back to the side panel later but for now, set the following for the update state action

<Image border={false} src="https://files.readme.io/64e1f766aac7ab864e394e2761925717894a9c8c4537b255a8b0577fedbb526f-image.png" />

Now we want to create our side panel, this is what will open when we click on a user and want to update their information, create a side panel component and back in the Users table, connect it by setting the _Open Side panel_ to open this one

Now, on this 'update' side panel, add a data provider and set the data source to our GET users request, then add a repeater and set the provider to this data provider we just created, then add a form component followed by a button and two text fields. We now need to connect this all together

For the button we just made, name it 'update' and add the following on click actions

<Image border={false} src="https://files.readme.io/c6c238c78d984c51489b02e90a910e76b923826591cdb243844528588534221b-image.png" />

For the _execute query_ action, we will need to set the datasource as REST API 2, and the query we will be executing is the PUT Users one we made earlier in this tutorial, for the bindings, the javascript function within the Userid is **return JSON.parse($("State.Clicked_Row")).id**, for the rest, use the following:

<Image border={false} src="https://files.readme.io/99769001c56f6f1a94ce0a17bedf167ee31fa3836cb08ead6a7ac193c0e47f94-image.png" />

We will then want to refresh the table after we make an update, so in our second on click action _refresh data provider_ set it to the users table, then to confirm our changes have went through we will want a notification action, followed by the close side panel action

Now select our form component and set the type to _Update_ (this may be different depending on what you called your update button)

Lastly, when we click on a user we want this form to return the name and address of the user we've clicked on so that we may update it, select the two text fields we added earlier and name them as _Name_ and _Address_, we will then need to click on the lightning symbol beside _Default value_ and add this javascript function: **return JSON.parse($("State.Clicked_Row")).name** and then for the address text field default value: **return JSON.parse($("State.Clicked_Row")).address**

<Image border={false} src="https://files.readme.io/f1413d265f9d88030692abfe6f0ba515a8287dbda84b2117a5ad01a05c740fbd-image.png" />

When we click on a User it should now open a side panel, with our users name and address, when we edit this information and click our update button, it should then pop up with a notification that our changes have went through and you should see these changes in the table

<Image border={false} src="https://files.readme.io/d6516c0f74a68b462fddb3f26e1e25281b39ca0ee3317bf837ed3a44410b8b98-image.png" />

<Image border={false} src="https://files.readme.io/1913ab620ac1247ab38a99011c931b613d3f96d01c5a4d3225d7db47d34a7c14-image.png" />

We can now update our users, but we also want to be able to create new users from our app, add a button to our main page and name it _Add new user_, then add another side panel component and within this, add a form component, then within this container component, add two text fields and a button. This will be similar to our previous side panel with the difference being this will add fresh data to our table instead of pulling and updating.

For the two text fields, you'll want to name these _name_ and address, similar to before, and the button, you will want to name _save new user_, now it should look something like this

<Image border={false} src="https://files.readme.io/e485066db120f04566c6c9b17858f0417857b8365baea3a88ac6902bc73059c8-image.png" />

We will need a constraint added to both fields, to ensure that data needs to be entered in order for our table to create a new row, add the following constraint:

<Image border={false} src="https://files.readme.io/07f330b1c9ddcbaf2ff775c3524ece0cffa243f6c764031b9c77beb2bf7ab76b-image.png" />

For our save new user button, we will want to add some on click actions, add the following

<Image border={false} src="https://files.readme.io/83adf25f4324d69ec18a9b0bfb9a6ed200fc7074c26f47f4562da73c304585fd-image.png" />

<Image border={false} src="https://files.readme.io/d46f2ccd0f964efeaffc3f8ff11be4b8624b81cc1bf0bab4179590196f99669b-image.png" />

For the remainder of our actions, set the _show notification_ type to success and the message as 'saved'. _Refresh data provider_ will refresh our users table, followed by _clear form_ clearing our create form, then the create side panel will close with the _close side panel_ action

<Image border={false} src="https://files.readme.io/7e694570aaf6ea7b040cd7b375b84acf2a8fa01c7fba52302286ad9072d15482-image.png" />

<Image border={false} src="https://files.readme.io/754375ebc541ad15a62d57080392349071fcdbecc2ed28360ac56d04fbae9f5b-image.png" />

You can now see if we add a new user, they will appear within our table.

<br />

﻿

<br />