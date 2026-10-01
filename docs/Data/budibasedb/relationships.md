---
title: Relationships
excerpt: Link rows between Budibase DB tables
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
Use relationships to link rows between tables.

Relationships are bidirectional, so each table can reference the other.

## Create a relationship

1. Make sure both tables have a display column
2. Open one of the tables
3. Click `Create new column`
4. Choose `Relationship`
5. Select the related table
6. Set the column name in the other table
7. Save the column

## Relationship types

### One-to-many

Use one-to-many when one row can relate to many rows in another table.

### Many-to-many

Use many-to-many when both sides can relate to many rows and you have a join table.

## Notes

* Relationship columns are stored in Budibase DB, not in the display column itself
* Use nullable foreign keys in join tables for many-to-many relationships
* Budibase DB is best for simple relationship models
