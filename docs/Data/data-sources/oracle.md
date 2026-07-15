---
title: Oracle
excerpt: Connecting Budibase to an existing Oracle database
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

# Tutorial: Building a Departments Portal

In this tutorial we will be building an app to allow executive staff to view and manage department and employee details.

To get started, follow the instructions from the [Database Star sample database](https://github.com/bbrumm/databasestar/tree/main/sample_databases/oracle_hr) repo, running the setup scripts against your Oracle instance.

You may also find this video tutorial helpful for getting started: [How to Set Up the Oracle HR Schema](https://www.youtube.com/watch?v=x8C8w4JM3AU\&ab_channel=DatabaseStar).

Budibase supports Oracle `12.1+` in Thin mode and `11.2+` in Thick mode.

## Adding the datasource

With your Oracle instance running, and the sample database installed, we can begin pulling that data into Budibase.

First create an app - no sample data needed.

Once the new app has been created, click `Add source` and select `Oracle`.

Once finished you should see a list of your defined relationships:

It is also worth changing the [display column](https://docs.budibase.com/docs/budibasedb#selecting-the-display-column) on some of the tables so that the links are more human readable. For example edit the **REGION\_NAME** column of the **REGIONS** table and toggle on `Use as table display column`.

<br />

## Region map screen

Our **REGION** table includes four regions. To start of with, let's present the user with a world map from which they can select a region and further drill down into country > location > department > employees. 

Click on the **Design** tab along the top. Next add the [Background image](https://docs.budibase.com/docs/image#background-image) component, with a URL to a [World Map image](https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-desktop-world-map-wallpapers-HD.jpg). Set the *Height* and *Width* to `100%`.

Next add a [Section](doc:using-sections) and set the type to `Three columns` and [Custom CSS](doc:custom-css) to set the height:

```css
height: 100%;
```

Next add three [Containers](doc:container). Within each container add a [Headline](https://docs.budibase.com/docs/displaying-text#headline) for each of the Regions: *Americas*, *Europe*, *Middle East and Africa*, and *Asia*. Add margin and adjust the container layouts as desired.

<br />

## Country screen

With our region map setup, we can add a country screen that will list the countries of the selected region.

Click `Add screen` and select `List view`. 

Click `Continue`, select the **COUNTRIES** table, and then `Confirm`. 

You will now see your new screen with a pre-populated countries [Table block](doc:table-block). Click `Configure columns` in the <Glossary>Settings Panel</Glossary>, `Add all columns`, and then click the `X` to remove the ID columns and the *REGIONS*. 

You can see the locations are showing an ID field value, which isn't ideal. We can improve this by changing the [display column](https://docs.budibase.com/docs/budibasedb#selecting-the-display-column). Navigate to the **LOCATIONS** in the **Data** section and set the *City* column to the display column.

We can further improve the user experience by adding country flag images to each row, and allow users to search the columns.

Untick the setting `Show button above table`. All the countries have already been added, and we don't want the user to be able to enter new records.

### Search fields

Adding searchable fields is straightforward. Within the settings panel, select the *COUNTRY\_NAME* and *LOCATIONS.CITY* options under the **Search Fields** property.

The search fields will allow users to performa a "Starts with" search to find countries by name or city.

### Row flag icons

As a nice visual cue, we can also add [Image](doc:image) components to each row of our table. To do this we must first [Eject](https://docs.budibase.com/docs/blocks#ejecting-blocks) the table block. Next select the [Table](doc:table) component, and click the `Add component` button.

Select the image component, and set the *Width* and *Height* to `64px` and `36px`. 

Finally, for the *URL* property, click the lightning icon to provide the following JavaScript <Glossary>Binding</Glossary>:

```javascript
const country = $("Table.COUNTRIES.COUNTRY_NAME")?.toLowerCase()?.replaceAll(" ", "-");

if (country === "united-states-of-america") {
	return "https://www.rankflags.com/wp-content/uploads/2015/04/National-Flag-Of-United-States.jpg"
}

if (country === "israel") {
	return "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg"
}

return `https://images.mapsofworld.com/${country}/${country}-flag.gif`
```

### Filter out countries with no locations

We don't want to display countries if they have no departments. Click on the [Data provider](doc:data-provider) and `Define filters`. Add another filter to check if the locations relationship if empty.

<br />

## Linking the region to the country screen

While the countries screen is setup, we still need to filter the countries by region and link the screen to the chosen region.

First click on the *Screens* icon button on the left hand panel. In the *Settings Panel* on the right, edit the route to include a [URL variable](doc:url-parameters) for the **region\_name**.

Next in the components view, click on the [Data provider](doc:data-provider) and `Define filters`. Click `Add filter`, selecting *REGION\_ID* equals binding: `{{ URL.region_name }}`.

Next navigate to the `/home` screen. For each of the headline containers, click `Define actions` for the *On Click* property.

Add the **Navigate To** action, and select the countries screen. Then replace `:region_id` with the particular ID (1-4) for the selected region.

### Adding the region name to the country screen

Above the 'COUNTRIES' heading, add a [Repeater block](https://docs.budibase.com/docs/blocks#repeater-block) component, and nest the headline under it. Select the **REGIONS** table as the data source, and `Define filters`. Match the region ID against the ID passed in the URL. We can use the *default* handlebars helper to provide a title while in the builder.

For the heading value, select the *REGION\_NAME* binding from the dropdown:

<br />

## Displaying a list of departments

The next level of data to drill into is the list of departments for the selected country.

In the `/countries/:region_id` screen, delete the **Details form block**. The countries should be static and not editable by the user - we only want to display the list of departments here. 

Now in the empty **Details side panel**, add a Repeater block, and nest a Headline component. The Repeater block should have **COUNTRIES** set as the data source, with a filter on the **\_id** column against the *State ID*. This state binding represents the ID of the clicked row. 

> 🚧 Filtering on '\_id'
>
> The **\_id** field represents a URL-safe encoded id string.\
> As relationship links in Budibase are stored in this format, this field must be used when filtering on side panel state IDs.

The headline value should bind to the *COUNTRY\_NAME* of the repeater block:

Below the country name headline, add a [Divider](doc:divider) as well as another Repeater block. This will be for the **LOCATIONS** pulled from the relationship of the **COUNTRIES** datasource.

Now within the Locations Repeater block, nest a [Cards block](https://docs.budibase.com/docs/blocks#cards-block) for the **DEPARTMENTS** relationship:

The *Title* of the Cards block should bind to the \_City\_of the location, which can be selected from the drop-down. 

Scroll further down the right hand settings panel to get to the *Cards* section. Remove the *Subtitle* and *Description*, but add the following binding for the individual card *Title*: `{{ Departments Cards block.DEPARTMENTS.DEPARTMENT_NAME }}`. This can be selected from the dropdown.

### Hiding locations that have no departments

Currently if a location has no departments, we will see the *No rows found* message.

Ideally we should not display Stretford at all in this case. Click on the *Departments Cards block* and click on `Configure conditions`. Add a [Condition](doc:conditions) to hide the component if **LOCATIONS.DEPARTMENTS** is empty.

#### Result

<br />

## Employees screen

The last screen we want is for displaying all the employees of a selected department. Click `Add screen` and add a `List view` screen for the **EMPLOYEES** table.

Change the *Route* to `/employees/:department_id`. Then in the components view, click on the Table block and `Define filters`. Add a filter to match `{{ URL.department_id }}` against `DEPARTMENT.DEPARTMENT_ID`.

You can also eject the table block so that you can deselect some of the employee form fields, such as the ID and the department fields.

Back to the `/countries` screen, click on the *Departments Cards block*. Find the setting called `Link card title` and tick the checkbox. Under *Link screen* select the `/employees/:department_id` screen. There is no need to replace the **:department\_id** in this instance, as Budibase knows to replace this with the **\_id** of the repeater.

<br />

## Removing navigation links

As both the employees screen and the countries screen require an ID in the URL, we do not want to show the nav link for these screens.

Click the [Configure links](https://docs.budibase.com/docs/navigation#configure-links) button and click the `X` to remove the link for employees and countries, and click `Save`.

<br />

## Managing departments

Currently the departments listed for a location are read-only. It may be the case that you want *Admin* users to be able to add new or update existing departments.

Create a new auto-generated List view screen for the **DEPARTMENTS** table, but in this case select *Admin* access level.

You will also want to make sure that the navigation link for the department screens only displays for admin users.

Click on the [Navigation](doc:navigation) icon on the left hand pane, and `Configure links`. Beside the `/departments` link, click the dropdown and select *Admin*, then click `Save`.

To verify the permissions, click `Preview` in the upper right hand corner of the **Design** view. You can toggle the user permissions in the blue bar along the top to test.
