# View

An view is the only way to retrieve collections of records, i.e. a json array of records. When a record is created, updated or deleted, a view is updated.

Views may belong to the root node, or to any record node.

A view is defined with the following properties:

* `name`. This will define the key of the view, i.e. the path used to access it. For example, "all\_invoices" view on the customer node will have a key in the format "/customers/{customer-id}/all\_invoices". Required
* `map`.  As in "map-reduce". Javascript code used to determine which fields are selected from the record, into the view. Not required. Defaults to all fields
* `filter`. a Javascript function, which should return a bool. Determines whether a record should b included in the view. Not required
* `allowedRecordNodeIds`. An array of record node IDs to include in the view. Required.

An view may be either be of type "hierarchal" or "reference".

## Hierarchal View

When a record is changed, Budibase core will search for all hierarchal views \(type='hierarchy'\) that belong to an ancestor of the record. For each found, it then applies the following rules:

1. Check if record's node ID is included in the view's allowedRecordNodeIds
2. Run the filter method
3. Determine if view should be updated:
   * If creating and filter returns true: add to view
   * If deleting and filter returns true: remove from view
   * If updating, filter returns true, filter previously returned true & mapped record has changed: update in view
   * If updating, filter returns false & filter previously returned true: remove from view
   * If updating, filter returns true & filter previously returned false: add to view

## Reference View

A reference view is used when a record has a field of type reference, i.e. when one record references another record.

If record A references record B, then record B will hold a view, which includes record A, and any other records that are referencing it.

