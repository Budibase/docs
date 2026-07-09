---
title: Relationships
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: custom-datasource
      title: Datasource
---
This section covers relationships between rows. Relationships are bi-directional, so when one is created, each row can reference the other. A row can also relate to many rows, which lets you create many-to-many relationships.

## Creating a relationship column

1. Select two tables that the relationship should be formed between. 
2. Make sure that in both tables there is a column defined that can be used for display purposes. When creating this column make sure to set it with the *Display column* toggle.\
   ![Showing the display column toggle.](https://files.readme.io/43d1a74-small-Screenshot_2023-05-15_at_12.46.57.png)
3. Click the *Create new column* button in either of the two tables and select the *Relationship* data type from the dropdown.\
   ![Relationship creation column option.](https://files.readme.io/5bc1f6c-small-Screenshot_2023-05-15_at_12.49.37.png)
4. Here you will need to select two options, the tables to which this column relates, and the name of the relationship column in the other table as well.\
   ![Full example of relationship creation.](https://files.readme.io/be8bbca-Screenshot_2024-01-17_at_08.09.48.png)
5. At this point, you will now have a relationship formed between the two tables. If you create a row in one of the tables, then go to the other table and create a row you should see the first row that was created as an option in the relationship multi-select.\
   ![Showcasing a new relationship and how it works on Budibase.](https://files.readme.io/0dbf6a3-showcasing_relationships.gif)

<br />

## Example

In this example, you will build a school app that tracks students, teachers, parking spots, and classes, and how they relate to each other.

The example covers the three relationship types you can model with Budibase.

### One-to-many

![](https://files.readme.io/28d7cbb-one-to-many.png "one-to-many.png")

The second relationship type is one-to-many. Here, a class can only be taught by a single teacher, but a teacher can teach many classes.

### Many-to-many

![](https://files.readme.io/57e6b3d-many-to-many.png "many-to-many.png")

The last relationship type is many-to-many. Here, students can take many classes and each class can have many students.

### Building it in Budibase

To create this in Budibase:

1. Create the four tables, students, classes, teachers, and parking spots. In each of these, we will initially create a display text column and mark these as the *Display column -* for example, N*ame* or *Subject*.
2. First, we will create the teacher to parking spot relationship, starting in the teacher table we create a relationship type column, call it `ParkingSpot` and set the table to parking spots - then name the column in the other table `Teacher`.
3. Second, we create the teacher to classes relationship, hopefully, at this point, it should be clear how this is done. Simply create a relationship from the teacher table to the class table, name the column `Classes` and in the other table call the column `Teacher`.
4. Lastly, we create the students to classes relationship, the same as before but set the relationship table to classes, call the column in the students table `Classes` and call the column in the other table `Students`.

By creating three relationship columns, you can model a fairly complex set of relationships that is easy to manage when creating or updating rows.

## Considerations

Budibase DB is a NoSQL database, so it has limits for larger, more complex relational models. It is better suited to simpler relationship structures.
