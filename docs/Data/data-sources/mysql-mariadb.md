---
title: MySQL / MariaDB
excerpt: Using a MySQL Database Server as a datasource for Budibase
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

<Embed url="https://www.youtube.com/watch?v=IyMmw6jENeo" title="Build Your Own MySQL Admin Panel - Here's How!" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/IyMmw6jENeo/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=IyMmw6jENeo" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252FIyMmw6jENeo%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253DIyMmw6jENeo%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252FIyMmw6jENeo%252Fhqdefault.jpg%26key%3D7788cb384c9f4d5dbbdbeffd9fe4b92f%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

<br />

***

# Tutorial: Building a HR portal

In this tutorial we will look at building a Budibase app from scratch using a MySQL employees sample database.

The full dataset and installation instructions can be found on [GitHub: datacharmer/test\_db](https://github.com/datacharmer/test_db).

<br />

## Adding the datasource

When you have a MySQL or MariaDB Server instance running, with the sample database installed, we can begin pulling that data into Budibase.

First create a new <Glossary>Workspace</Glossary>. We will set up our MySQL datasource and app here.

For the relationship between **departments** and **employees**, there are joining tables, e.g. **dept\_emp**. Usually we would setup a [many-to-many relationship](https://docs.budibase.com/docs/sql-datasource#many-to-many) using the joining table as the *Through* table. Unfortunately in this case, the joining tables do not meet the requirements outlined by Budibase:

Luckily, this is an easy fix. Within MySQL Workbench, or through an alter SQL statement, make the **from\_date** and **to\_date** fields *nullable* for both joining tables. 

```sql
ALTER TABLE `employees`.`dept_emp` 
CHANGE COLUMN `from_date` `from_date` DATE NULL ,
CHANGE COLUMN `to_date` `to_date` DATE NULL ;
```

Adding the Many -> Many relationships for **dept\_emp** should now work. 

> 📘
>
> Make sure to re-fetch the tables to pull down the new schema information!

An additional Many -> Many relationship cannot be added for two tables that already have a Many -> Many relationship established, but for this tutorial we do not need the **dept\_manager** table.

Because the Many -> Many relationship between **departments** and **employees** will pull down a huge amount of information, we will also create a Custom SQL query called *Get Departments Only* to simply get the departments without any employee data when needed.

When you're done, the relationships list should include the links for titles, salaries, and departments.

By default the display name for the relationships will be the ID. Set the employee table display column so relationship values show a name instead.

The employee relationship in the related tables, such as **titles**, is now more human readable. You can also use [Formula](doc:formula) columns to combine the first and last names of the employee into a single display column.

Create a new formula column in the employees table called 'full\_name' with the following binding expression: `{{ first_name }} {{ last_name }}`. Set this column as the table display column.

<br />

## Org chart screen

Now that we have the data pulled into Budibase, let's create a screen that allows HR to see the various departments and the org structure for each.

### Step 1 - Adding the row explorer

On the home screen, click `Add component` and select the *Row Explorer Block*. For the table select **departments**, and remove the height - we will display all nine departments at once without the need for scroll.

Next in the *Cards* section, set the *Title* to match the **dept\_name**, and remove the *Subtitle* and *Description*.

#### (Optional) Adding icons for each department

To add a little bit of flavour to the row explorer, we can provide an *Image URL* for each department. One way to do this would be to host the images in a public repository and name the files to match the department names. Another approach is to create a column in your table to store a URL icon path, which is what we'll do in this example.

1. Within Budibase, click on the **departments** table, and click `Create column`.
2. Add a [Text](doc:text) column called **icon\_url**.
3. For each department row, add a URL path to an appropriate icon. I have found [svgrepo.com](https://www.svgrepo.com/) to be a good resource for free SVG icons. For your convenience, I have provided SQL update statements:

```mysql
UPDATE departments SET icon_url = 'https://www.svgrepo.com/show/428772/marketing-market-social.svg' WHERE dept_no = 'd001';
UPDATE departments SET icon_url = 'https://www.svgrepo.com/show/381027/finance-bank-piggy-business-money.svg' WHERE dept_no = 'd002';
UPDATE departments SET icon_url = 'https://www.svgrepo.com/show/218257/human-resources-search.svg' WHERE dept_no = 'd003';
UPDATE departments SET icon_url = 'https://www.svgrepo.com/show/430190/production-industrial-automation.svg' WHERE dept_no = 'd004';
UPDATE departments SET icon_url = 'https://www.svgrepo.com/show/428736/development-cognitive-progress.svg' WHERE dept_no = 'd005';
UPDATE departments SET icon_url = 'https://www.svgrepo.com/show/422994/quality-premium-certificate.svg' WHERE dept_no = 'd006';
UPDATE departments SET icon_url = 'https://www.svgrepo.com/show/430192/sales-shop-analytics.svg' WHERE dept_no = 'd007';
UPDATE departments SET icon_url = 'https://www.svgrepo.com/show/119008/research.svg' WHERE dept_no = 'd008';
UPDATE departments SET icon_url = 'https://www.svgrepo.com/show/429955/customer-service-hotel.svg' WHERE dept_no = 'd009';
```

4. In the Design section, click on the Row Explorer block and set the Image URL to the **icon\_url** field.

5. The image icons are not in the correct aspect ratio or a consistent size, but you can use the following [Global styling](https://docs.budibase.com/docs/custom-css#global-styling) to format the background image as needed:

```html
<style>
.spectrum-Card-coverPhoto {
  background-size: 64px 64px;
  background-repeat: no-repeat;
}
</style>
```

6. We also do not need the search, so we should [Eject](https://docs.budibase.com/docs/blocks#ejecting-blocks) the block and delete the form. After that, only the department cards should remain.

### Step 2 - Adding the manager and employee cards

After ejecting the row explorer block, we need to change the Data provider source to the *Get Departments Only* as we do not want the relational employee data in this simple list of departments.

In addition, the auto-generated click action of the `Spectrumcard` will need to be updated. Click `Define actions` and change the state value to the *dept\_no* from the query:

When you preview the app, clicking a department should update the selected department state. Instead of the default form, we want to display a card for the department managerial team and their employees.

First delete the [Form block](doc:form-block) and button components from the container. Next we want to make sure the clicked department name is available in the explorer panel. To do this, we will push the clicked row department name into [App state](doc:app-state). 

Click on the `Spectrumcard` component and within the <Glossary>Settings Panel</Glossary>    click `Define actions`. Then click `Add Action` -> `Update State` and set a variable called *DepartmentName* as follows:

Be sure to click the `Save` button! 

Whilst we could use multiple nested repeaters to pull in all of the department detail we want to display, it is much more efficient to use a [Custom SQL query](doc:custom-queries). Use the following SQL:

```sql
SELECT * FROM departments d
JOIN dept_manager dm on d.dept_no = dm.dept_no
JOIN employees e on dm.emp_no = e.emp_no
JOIN titles t on t.emp_no = e.emp_no
WHERE d.dept_name = {{ dept_name }} AND (e.emp_no, t.from_date) in (select t.emp_no, max(t.from_date) from titles t group by emp_no)
```

Also add a binding for the **dept\_name**, and give the query the name *Get Managers by Department Name*. Make sure to save!

Back to the Design section, add a [Cards Block](https://docs.budibase.com/docs/blocks#cards-block) for the managers using the SQL query datasource just added, passing in the binding: `{{ State.DepartmentName }}`. This will replace the form block we removed. 

Within the *Cards* section set the *Title* to `{{ Managers.Get Managers by Department Name.first_name }} {{ Managers.Get Managers by Department Name.last_name }}`. 

For the *Description*, we want to display the managers current (most recent) job title: `{{ Managers.Get Managers by Department Name.title }}`

With the card block setup, it is also worth adding a headline component to indicate which department has been selected. Above the cards block, add the headline component with the title `{{ State.DepartmentName }}`. Add some styling such as margin bottom and *Extra Large* size.

At this point the selected department heading and manager card should be visible.

<br />

## Employees screen

As this data set has thousands of employees per department, cards are not an ideal way to display the data. Instead we can display this data in a paginated [Table block](doc:table-block) filtered on an encoded department ID passed via [URL variables](doc:url-parameters).

To get started, click `Add screen` and select `Autogenerated screens`. Tick the **employees** table and confirm.

Next we want to be able to pass through the **emp\_no** and **dept\_name** from the home screen. To support this, configure the screen route as follows:

Use the route variable in the *Title* of the table block so the current department is visible. 

With so many records, search will be very important. Under *Search Fields* select some searchable fields.

Now let's make use of the `{{ URL.id }}` binding to filter our employees by department. `Define filters` of the table block. The **dept\_no** will be available via the **dept\_emp** relationship, and we can match that against the ID in the URL as follows:

Also set the *Scroll Limit* of the table block to 50.

We will also want to `Configure columns`. Click on `Add all columns` and then press the `x` beside the **departments** column. We don't want to display the relationship because it will be the same for all rows.

### Linking from the home screen

The employee screen is ready to go, but we still need to link it to the home screen. 

Add a [Link](doc:link) component underneath the *Managers* card block. Add some margin top for some space. Give the URL the following binding: `/employees/{{ State.cAF3fs8fNJ }}/{{ State.DepartmentName }}`. The ID state will be different in your case.

<br />

## Salary history

The **salaries** table holds a historic record of each employees salary at a particular time. This time series can be displayed in a chart.

Eject the Table block in the *employees* screen. 

Within the newly exposed *Details side panel*, select the *Details form block* and deselect **departments** and **salaries** from the *Fields* dropdown. We already know the department from the table heading, and we will be displaying the salaries in a chart instead of the [Multi-select picker](doc:multi-select-picker).

We also want to make sure that we pass the correct ID through to state when clicking on a row. Click on the Table underneath the Data provider, and click `Define actions` under the *On Row Click* section of the <Glossary>Settings Panel</Glossary>.

By default you will see the value binding of `{{ Clicked row._id }}` for the **Update State** action. Replace this with `{{ Clicked row.emp_no }}` as we want to use the actual primary key and not the URL-safe encoded link.

### Adding the chart

Under the *Details form block* add a [Chart block](https://docs.budibase.com/docs/blocks#chart-block). Choose a *Chart Type* of 'Line' and the **salaries** table as the datasource. Set the title to 'Salary History'. 

Next `Define filters` to add a filter on the employee number as follows:

> 📘
>
> The State ID will only be set when a row is clicked, thus the chart display in the builder may display differently than the previewed/published app.

Finally select the **from\_date** column as the *Label Col.* and the **salary** column as the *Data Col.*. A *Stepline* curve is the ideal way to display this data.
