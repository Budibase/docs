---
title: MS SQL Server
excerpt: Connecting Budibase to an existing Microsoft SQL Server
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
> 👍 SQL Databases
>
> Budibase is designed to integrate with any core SQL database. 
>
> Read more about [SQL Datasources](doc:sql-datasource).

# Connecting to SQL Server

After clicking on the SQL Server datasource you will be prompted to enter connection details:

<Image align="center" width="480px" src="https://files.readme.io/4cad850-sqlserver.png" />

## Advanced authorisation

If you are using an MS SQL Server protected via Azure Active Directory, you can setup the `Advance auth` field to `Active Directory`, providing the required secrets.

<Image align="center" width="480px" src="https://files.readme.io/a7b40f6-ad.png" />

The Azure documentation can be found [here](https://learn.microsoft.com/en-us/sql/relational-databases/security/authentication-access/azure-ad-authentication-sql-server-setup-tutorial?view=sql-server-ver16).

<br />

***

<br />

# Tutorial: Building a Bike Store app

In this tutorial we will look at building a Budibase app from scratch using an existing Microsoft SQL Server database as our foundation. Our data is split between two schemas. 

One schema is called **Production** which contains our products, details and stocks. This data will be available to the public for customer use. 

The second schema is called **Sales** which contains internal data to be seen and managed by employees only.   

The full dataset can be found on [sqlservertutorial.net](https://www.sqlservertutorial.net/sql-server-sample-database/).

## Setting up the datasources

Given you have an MS SQL Server instance running, with the dataset committed, we can begin pulling that data into Budibase.

First create an app - no sample data needed.

![](https://files.readme.io/ef353f8-create_app.png)

As we have two schemas, we will want to create two [Datasources](doc:data-sources); one for each schema.

Click `Add source` and select `MS SQL Server`. Fill out the connection details and press `Save and fetch tables`.

![](https://files.readme.io/ec7639b-create-ds-sales.png)

Repeat the same process, but change the *Schema* to **production**.

By default the datasource names will be *SQL Server* and *SQL Server-2*. It is best to rename these to match the corresponding schemas. 

For example, select the datasource for the **production** tables, change the name under configuration, and click `Save`. Do the same for **sales**.

![](https://files.readme.io/1fa4ca6-rename-ds-prod.png)

Your final *Sources* tree should look as follows:

![](https://files.readme.io/0672e31-Screenshot_2022-12-19_at_15.27.11.png)

## Define existing relationships

Now that we have pulled in our tables, we need to inform Budibase how the tables relate to each other.

* One Brand -> Many Products
* One Category -> Many Products
* One Store -> Many Staff
* One Store -> Many Orders
* One Staff -> Many Orders
* One Customer -> Many Orders

To get started, click on the `brands` table. Next click on the `Define existing relationship` button along the top of the table.

![](https://files.readme.io/282c97d-Screenshot_2022-12-19_at_15.53.58.png)

This will pop up a dialog for you to select the `products` table as the *to table*, and select the *brand\_id* as the foreign key.

![](https://files.readme.io/838d21f-define_relationship.png)

Click `Save` and you will see the relationship links successfully added in both tables.

<Image alt="Product links in the brands table" align="center" src="https://files.readme.io/4973af1-Screenshot_2022-12-19_at_15.58.58.png">
  Product links in the brands table
</Image>

<Image alt="Brand links in the products table" align="center" src="https://files.readme.io/5cad2d4-Screenshot_2022-12-19_at_16.00.16.png">
  Brand links in the products table
</Image>

The same process can be followed for the other desired relationships mentioned. Alternatively you can [define relationships](https://docs.budibase.com/docs/sql-datasource#defining-relationships) from the datasource configuration page.

## Adding a public products catalogue screen

In this tutorial we want to allow customers to browse the available products of the bike store. First we must give public users permissions to view the data. For each table under the **Production** datasource, click on `Manage access`. 

![](https://files.readme.io/0d0bb56-Screenshot_2022-12-19_at_16.13.28.png)

This will display a modal for setting the read and write access levels. As we only want the public to be able to read the data, select the **Public** role for *Read* and click `Done`.

<Image alt="Anyone can read the products, but write require authorization" align="center" src="https://files.readme.io/367bf5e-Screenshot_2022-12-19_at_16.12.01.png">
  Anyone can read the products, but write require authorization
</Image>

> 🚧 Manage access for relationships
>
> When making data public, you must also give the related data public access.\
> In this case, `products`, `brands` and `categories` must all have public read access.

With the data permissions now set, we can add our screen into the [Design](doc:working-with-data) section. Click on the **Design** tab, and select the `/home` screen. Under access, select **Public** so that anyone can view the [Screen](doc:screens). 

<Image alt="Public screen access" align="center" src="https://files.readme.io/fe00aa4-Screenshot_2022-12-19_at_16.19.45.png">
  Public screen access
</Image>

Next click on `Add component` and add a [Cards block](https://docs.budibase.com/docs/blocks#cards-block). Select `products` as the datasource, and fill out the cards title, subtitle and description. Use the <Glossary>Binding</Glossary> from the dropdowns to pull data from the SQL datasource. 

<Image alt="Selecting the product name as the card title" align="center" src="https://files.readme.io/bae8846-Screenshot_2022-12-19_at_16.24.49.png">
  Selecting the product name as the card title
</Image>

Bindings also allow you to combine static text with dynamic data pulled from your SQL table. For example, we can prefix the price with a dollar sign using the following handlebars expression:

```
${{ Products Cards block.products.list_price }}
```

![](https://files.readme.io/fef6581-Screenshot_2022-12-19_at_16.29.21.png)

You can tick *paginate* and adjust the *limit* setting to determine how many products should be displayed per page.

Of course given a catalogue of products, users would like to be able to filter. You can easily add a *Search column* via the dropdown in the cards block.

<Image alt="Adding search columns" align="center" src="https://files.readme.io/966d7e4-Screenshot_2022-12-19_at_17.23.51.png">
  Adding search columns
</Image>

For example, you may want to allow users to search by product name, brand name, or model year.

![](https://files.readme.io/7531e12-Screenshot_2022-12-19_at_17.25.11.png)

It would also be nice to add in some tags for the brand and category of the product. To do this let's [eject the block](https://docs.budibase.com/docs/blocks#ejecting-blocks). This will give us a more granular component tree like so:

<Image alt="Ejected cards block" align="center" src="https://files.readme.io/a1304b1-Screenshot_2022-12-19_at_17.26.11.png">
  Ejected cards block
</Image>

With access to the [Repeater](doc:repeater), we can now add a couple of [Tag](doc:tag) components below the *Spectrumcard*; one each for the brand and category.

Use the following binding for the tag text: `{{ Repeater.products.brands.0.primaryDisplay }}`

To explain, *brands* is the name of the relationship field. The `.0` is required as relationship fields are always considered to be an array, however in this case we know that it will only ever be one element. Finally the `primaryDisplay` corresponds to the [table display column](https://docs.budibase.com/docs/budibasedb#selecting-the-display-column).

Using [Containers](doc:container) and a bit of styling, you can create something like this:

![](https://files.readme.io/6dce82d-Screenshot_2022-12-19_at_17.29.15.png)

Finally click the `Preview` button in the top-right corner of the screen to test the app so far.

Select `View as public user` to make sure unauthenticated users can view the data. 

![](https://files.readme.io/d51c1c2-Screenshot_2023-02-03_at_11.57.14.png)

## Managing sales data

Whilst we want the public to be able to view the available products, the sales data should be managed by authenticated users. 

After setting up your relationships, as outlined earlier in the tutorial, go to the **Design** section and click `Add screen`. Next click on `Autogenerated screens`.

This will prompt you to select the table to create the [Autogenerated screen](https://docs.budibase.com/docs/table-block#autogenerated-screen) for. Select the `orders` table and `Confirm`.

![](https://files.readme.io/214415d-7dc103f-Screenshot_2022-12-19_at_17.44.01.png)

Next you will be prompted to select an access level. By default **Basic** will be selected, which requires an authenticated user of the app. Click `Done`.

This will add full CRUD functionality for the `orders` table. If you want to customise this screen, look at the [Table block](doc:table-block) page for more info.

<Image alt="Basic logged in user can view and edit orders" align="center" src="https://files.readme.io/1b862bb-Screenshot_2022-12-19_at_17.51.42.png">
  Basic logged in user can view and edit orders
</Image>

Whilst public users will be denied access to the *Orders* screen, it would be better to not show them the [Navigation](doc:navigation) link so as to avoid confusion. 

Click on the navigation panel, and click `Configure links`. Next beside `/orders` select a *Minimum role* - in this case **Basic**. Click `Save`.

![](https://files.readme.io/11c6448-Screenshot_2022-12-19_at_18.04.07.png)

This will ensure that public users do not see the *Owners* link.

<Image alt="Unauthenticated user only sees the Home link" align="center" src="https://files.readme.io/932dad0-Screenshot_2022-12-19_at_18.05.35.png">
  Unauthenticated user only sees the Home link
</Image>

Auto-generated screens can be created for the other **sales** tables, but different [access levels](https://docs.budibase.com/docs/user-roles#app-specific-roles) could be used.
