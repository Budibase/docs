---
title: PostgreSQL
excerpt: Using a Postgres Database Server as a datasource for Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 👍 SQL Databases
>
> Budibase is designed to integrate with any core SQL database. 
>
> Read more about [SQL Datasources](doc:sql-datasource).

# Video tutorial

<Embed url="https://www.youtube.com/watch?v=X6LgF15NqY0" title="How to build a simple CRUD app on top of PostgreSQL in just a few minutes | Budibase | PostgreSQL" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/X6LgF15NqY0/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=X6LgF15NqY0" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FX6LgF15NqY0%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DX6LgF15NqY0%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252FX6LgF15NqY0%252Fhqdefault.jpg%26key%3D7788cb384c9f4d5dbbdbeffd9fe4b92f%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

<br />

***

# Tutorial: Inventory management

In this tutorial we will look at using the [DVD Sample Database](https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/) within Budibase. A link to **pgadmin** import instructions are included in that article, but it is worth noting that if you are not on Windows, you will want to extract the zip folder, and restore from *Directory* instead.

![](https://files.readme.io/0c9bb3a-Screenshot_2023-02-07_at_15.39.23.png)

This sample database includes a complete system of film details through to payments and customer details. To keep the tutorial to a modest size, we shall focus on the film details and inventory management.

<br />

## Datasource setup

Assuming you have setup the example database on a running Postgres instance, we can start pulling data into Budibase. 

First create an app - no sample data needed.

![](https://files.readme.io/c2a0ca2-Screenshot_2023-02-07_at_15.47.10.png)

Click `Add source`, select `PostgreSQL` and press `Continue`. 

![](https://files.readme.io/f70dc3d-1_postgres.png)

You will then be presented with a connection configuration modal. Fill in the correct connection details but press **Skip table fetch**. We want to manually fetch tables later so we can choose the tables we want to use in our Budibase app. 

> 📘
>
> Note that if you are connecting to a database on `localhost`, your host should be set to `host.docker.internal`, or `172.17.0.1` if running on Linux.

![](https://files.readme.io/3227724-Screenshot_2023-02-07_at_16.09.03.png)

Now we have the Postgres <Glossary>Datasource</Glossary> added, and the configuration page should be displayed. 

Under the **Tables** section press `Fetch tables`. Tick `Fetch listed tables only` and provide the following table names:

```
category
film_category
film
language
film_actor
inventory
actor
store
address
city
country
```

<Image alt="Fetch the listed tables" align="center" src="https://files.readme.io/8fd4eef-Screenshot_2023-02-07_at_16.16.42.png">
  Fetch the listed tables
</Image>

<br />

## Defining relationships

With our tables fetched, we can now define relationships within Budibase. 

We will need to setup the relationships as presented in the [DVD Rental ER Model](https://www.postgresqltutorial.com/postgresql-getting-started/postgresql-sample-database/), excluding the tables we did not fetch.

Click the `Define relationship` button below the **Table** section.

Setup a *Many->Many* relationship between the **category** and **film** tables. Notice the error received below:

<Image alt="film_category is not a valid Budibase join table" align="center" src="https://files.readme.io/73692ad-Screenshot_2023-02-07_at_16.30.52.png">
  film\_category is not a valid Budibase join table
</Image>

This error is caused by the *Not NULL* constraint on the **last\_update** column. This is easily resolved by setting this column to *nullable* in **pgadmin**. 

<Image alt="Setting last_update to nullable" align="center" src="https://files.readme.io/a139ff6-Screenshot_2023-02-07_at_16.34.22.png">
  Setting last\_update to nullable
</Image>

**Do the same for the*last\_update* column in the *film\_actor* table.**

In addition, the **inventory** table is a through table that will need adjusted like so:

![](https://files.readme.io/9d0ebd6-Screenshot_2023-02-08_at_10.25.43.png)

> 📘
>
> Make sure to re-fetch the tables to pull down the new schema information!

You should now be able to create this *Many->Many* relationship. 

<Image alt="Many to Many relationship between category and film" align="center" src="https://files.readme.io/6718461-Screenshot_2023-02-07_at_16.39.00.png">
  Many to Many relationship between category and film
</Image>

When all relationships have been defined, you should see something like so:

![](https://files.readme.io/cd9e620-Screenshot_2023-02-08_at_10.26.55.png)

<br />

## Stores screen

Add an [autogenerated screen](https://docs.budibase.com/docs/screens#autogenerated-screen) for the **store** table. Change the *Title* to 'Stores'. 

Next `Configure columns`, click `Add all columns`, and then remove columns with the `x` so that only the address is displayed. 

### Adding a flag icon

We will also add a flag image within the table to indicate the country of the store. It would be possible to write insert statements to add image URLs for the two stores, but for the sake of demonstration we will use the country name from the **store address** relationship.

[Eject](https://docs.budibase.com/docs/blocks#ejecting-blocks) the table block. As there are only two stores, uncheck the pagination of the Data provider. 

#### Naive approach: using multiple repeaters

Select the [Table](doc:table) and click `Add component` to nest a [Repeater block](https://docs.budibase.com/docs/blocks#repeater-block). Select the address relationship as the datasource.

<Image alt="Using the address relationship as a datasource" align="center" src="https://files.readme.io/e1dd99e-Screenshot_2023-02-08_at_10.53.17.png">
  Using the address relationship as a datasource
</Image>

We then have to nest another repeater block under the first one to hop from the **city** table to the **country** table!

Select the city relationship as the datasource.

<Image alt="City relationship of the address table" align="center" src="https://files.readme.io/ad8eb62-Screenshot_2023-02-08_at_11.29.31.png">
  City relationship of the address table
</Image>

Finally we can nest an [Image](doc:image) component within the City repeater block. Provide the following [JavaScript](doc:javascript) binding:

```javascript
const countryName = $("City Repeater block.city.country")[0].primaryDisplay.toLowerCase();

return `https://images.mapsofworld.com/${countryName}/${countryName}-flag.gif`;
```

The *primaryDisplay* property works here because the country name is the [table display column](https://docs.budibase.com/docs/budibasedb#selecting-the-display-column).

![](https://files.readme.io/23377d6-Screenshot_2023-02-08_at_11.36.21.png)

#### Better approach: using a custom query

Adding two nested repeater blocks is not ideal for performance, and is also not very maintainable. Considering that we are looking to get specific data from the relationships, using [custom SQL queries](https://docs.budibase.com/docs/sql-datasource#add-query) is better for this scenario.

In the **Data** section add a query to your PostgreSQL datasource. Give it the name 'Get Country Names', give it a <Glossary>Binding</Glossary> or the **address\_id** with the query:

```sql
SELECT LOWER(country) as country_name FROM address a
JOIN city on a.city_id = city.city_id
JOIN country c ON c.country_id = city.country_id
WHERE a.address_id = {{ address_id }}
```

![](https://files.readme.io/941232a-Screenshot_2023-02-08_at_12.23.28.png)

Make sure to click `Run Query` followed by `Save Query`!

Now back to the **Design** section, the two existing repeater blocks can be replaced with a single new repeater block, using our new query as the datasource. Click the cog icon to open the binding drawer. Assign the **address\_id**.

<Image alt="Image repeater block" align="center" src="https://files.readme.io/2d852cc-Screenshot_2023-02-08_at_12.20.15.png">
  Image repeater block
</Image>

![](https://files.readme.io/04bb90e-Screenshot_2023-02-08_at_12.24.13.png)

Finally the image URL can be set to the following Handlebars expression: 

```
https://images.mapsofworld.com/{{ Image Repeater block.Get Country Names.country_name }}/{{ Image Repeater block.Get Country Names.country_name }}-flag.gif
```

<Image alt="Custom query reduces the number of repeater blocks needed" align="center" src="https://files.readme.io/c9cebc1-Screenshot_2023-02-08_at_12.26.19.png">
  Custom query reduces the number of repeater blocks needed
</Image>

### Adding a store map location

First we need to make a [REST API](doc:rest) call to get the longitude/latitude from our address. Go to the **Data** section, and add a REST datasource.

I used the [OpenCage API](https://opencagedata.com/api), which you can sign up to and receive an API key to use.

Select the `GET` method and paste in the URL: 

```
https://api.opencagedata.com/geocode/v1/json
```

Add a binding called 'location' and give it a default value. Next add two params. One for your API **key**, and another for the **q** (query string). Click the lightning bolt icon to select the *location* binding.

![](https://files.readme.io/5eb3911-Screenshot_2023-02-08_at_12.51.51.png)

![](https://files.readme.io/4acac32-Screenshot_2023-02-08_at_12.53.23.png)

<Table align={["left","left"]}>
  <thead>
    <tr>
      <th>
        <img src="https://files.readme.io/5a240d0-Screenshot_2023-02-08_at_12.56.59.png" />
      </th>

      <th>
        <img src="https://files.readme.io/4d8783b-Screenshot_2023-02-08_at_12.55.54.png" />
      </th>
    </tr>
  </thead>

  <tbody />
</Table>

To make sure we're pulling the co-ordinates of the first result, add the following to your [Transformer](doc:transformers):

```javascript Transformer
return data.results[0]?.geometry
```

After clicking the `Send` button, your <Glossary>Schema</Glossary> should include the latitude and longitude. Make sure to also click the `Save` button!

![](https://files.readme.io/f049f53-Screenshot_2023-02-08_at_13.24.05.png)

We will need to pull the **city** name and **country** name for a given **address\_id** in order to make use of this API. As before, a custom SQL query is the most efficient way to do this. In fact we can update our existing *Get Country Name* query without breaking the current usage for the flag image.

Click on the *Get Country Names* query under the PostgreSQL datasource. Update the query to pull back the city name as follows:

```sql
SELECT LOWER(country) as country_name, city FROM address a
JOIN city on a.city_id = city.city_id
JOIN country c ON c.country_id = city.country_id
WHERE a.address_id = {{ address_id }}
```

The schema should now have two fields: one for the country, and one for the city. Make sure to run and save the query.

![](https://files.readme.io/7194b73-Screenshot_2023-02-08_at_13.36.17.png)

With the REST query set up, go back to the **Design** section. Within the *Details side panel*, eject the *Details form block*. This will give us access to the **store** entry data. Click on the Repeater and add a repeater block with the name 'Location Repeater Block', which will be nested below. Set the *Get Country Names* as the datasource, and click the cog icon to pass in the binding `{{ Repeater.store.address_id }}`. Drag the Form into the new *Location Repeater Block*. 

Currently the heading is displaying the ID value of the store. This isn't very nice, so let's replace it with the store location. Replace the [Heading](https://docs.budibase.com/docs/displaying-text#headline) *Text* handlebars with the following: 

```
{{ Location Repeater block.Get Country Names.city }}
```

You can use the bindings helper on the left hand panel to insert this value. It is also unlikely that you would want *\_id* fields in the form, so go ahead and delete those.

Next nest a [Data provider](doc:data-provider) under the Location repeater block, below the form. Set the datasource to REST query we added earlier, and click the cog icon to pass in the following binding for the query string param:

```
{{ Location Repeater block.Get Country Names.city }}, {{ Location Repeater block.Get Country Names.country_name }}
```

Finally nest an [Embedded Map](doc:map) underneath the REST query data provider. Choose it as the *Provider* and select the *lat* and *lng* keys.

![](https://files.readme.io/920e662-Screenshot_2023-02-08_at_14.12.18.png)

<br />

## Viewing available films in store

Create a new screen with the route: `/film/:storeid`.

Add a [Row Explorer block](https://docs.budibase.com/docs/blocks#row-explorer-block) for the **film** table. Set the *Height* to `800px` and set the *Search Field* to `title`. Assign the *Title*, *Subtitle*, and *Description* to some appropriate bindings, e.g.

* `{{ Film Explorer Block.film.title }}`
* `{{ Film Explorer Block.film.release_year }}`
* `{{ Film Explorer Block.film.description }}`

<Image alt="Selecting the film description from the binding dropdown" align="center" src="https://files.readme.io/ab8a72b-Screenshot_2023-02-09_at_13.40.36.png">
  Selecting the film description from the binding dropdown
</Image>

As we want to filter the list of films by the *store\_id* that we [pass via the URL](doc:url-parameters) go ahead and eject the Row Explorer block, and `Define filters` for the now exposed Data provider.

Click `Add filter` to add an additional filter for the *store\_id* column. 

![](https://files.readme.io/5c86a2d-Screenshot_2023-02-09_at_13.48.13.png)

Back to the `/store` screen, click on the table and add a new [Link](doc:link) component. Give it the name 'View films' and the URL binding: `/film/{{ Table.store.store_id }}`.

![](https://files.readme.io/f64dd4f-Screenshot_2023-02-09_at_14.09.00.png)

### Adding the film rating image

At the moment the row explorer presents the film information in a basic form. This is fine, but let's make it look a little nicer. 

First remove the **rating** field, and any of the fields that you do not wish to be displayed or edited from the [Form block](doc:form-block). Next eject the form block so that the data provider can be used.

<Image alt="Selecting the form block fields" align="center" src="https://files.readme.io/db4d3f4-Screenshot_2023-02-09_at_14.20.14.png">
  Selecting the form block fields
</Image>

Above the recently exposed form, add an image component. Give it the following JavaScript *URL* binding:

```javascript JavaScript
let baseUrl = "https://www.motionpictures.org/wp-content/uploads/2018/03";
const rating = $("Repeater.film.rating");

if (rating === 'G') {
	return `${baseUrl}/general_audiences_badge.svg`;
}
else if (rating === 'PG') {
	return `${baseUrl}/parental_guidance_badge.svg`
}
else if (rating === 'PG-13') {
	return `${baseUrl}/parens_strongly_cautioned_badge.svg`

}
else if (rating === 'R') {
	return `${baseUrl}/restricted_badge.svg`
}

return `${baseUrl}/no_17_and_under_badge.svg`
```

As these images are white, you'll also want to edit the [Custom CSS](doc:custom-css) and give it a black background: `background-color: black;`. Also set a *width* and *height*, e.g. 256px \* 96px.

![](https://files.readme.io/6757f5a-Screenshot_2023-02-09_at_14.39.34.png)

![](https://files.readme.io/4773739-Screenshot_2023-02-09_at_14.41.01.png)

### Displaying inventory count

Within the film view, it would also be useful to show the user what the current stock is for the selected film. 

In the **Data** section add another custom SQL query.

```sql
select COUNT(*) from inventory
WHERE film_id = {{ film_id }} and store_id = {{ store_id }}
GROUP BY film_id
```

![](https://files.readme.io/dfabd7a-Screenshot_2023-02-09_at_14.50.30.png)

As always, be sure to `Run Query` and `Save Query`.

Back in the **Design** section, add a new Repeater block above the row explorer detail heading. Select the inventory count query as the datasource. Click the cog icon to pass in the binding values:

![](https://files.readme.io/d0185d5-Screenshot_2023-02-09_at_15.02.53.png)

Nest the Heading component under the Stock Repeater block and give it the binding *Text* value: `Stock: {{ Stock Repeater block.Get Inventory Count.count }}`.

![](https://files.readme.io/5aa907d-Screenshot_2023-02-09_at_15.56.40.png)

***

# Using query bindings in more complex queries

For the most part <Glossary>Binding</Glossary>s in PostgreSQL queries will behave much in the same way as other [Custom queries](https://docs.budibase.com/docs/data-sources#custom-queries) and as shown in the tutorial above.

It is worth understanding however, that SQL queries will be [parameterized](https://www.postgresql.org/docs/current/sql-prepare.html) under the hood. This is mainly done to improve security and performance. 

This enhanced security does have a small drawback in reducing the flexibility of your queries. For example, bindings cannot be used as a direct inline replacement of text in your queries, and therefore cannot be used to dynamically set table or column names, dynamically set operators, or inject SQL snippets. Ideally your Budibase bindings should be used in the same way that you might use **$** parameters in your Postgres queries.

##  Example: Using a binding with INTERVAL

Let's say you have the following query:

```sql
select * from public."ServiceLog" where "ServiceDate" > NOW() - INTERVAL '2 years'
```

And you want to add bindings to make the `INTERVAL` adjustable. This can be done like so:

<Image alt="Query an interval of 'n' years" align="center" src="https://files.readme.io/bc29e2f-Screenshot_2024-02-29_at_10.52.05.png">
  Query an interval of 'n' years
</Image>

Alternatively, if we wanted to provide an INTERVAL string, then we need to use Postgres typecasting in our query like so:

<Image alt="Text binding input must be cast to Postgres interval" align="center" src="https://files.readme.io/a594965-Screenshot_2024-02-29_at_10.57.51.png">
  Text binding input must be cast to Postgres interval
</Image>
