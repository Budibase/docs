# Record

A record is the fundamental unit of data in Budibase. Records are stored as JSON. A record has a schema, that is defined in the app definition. The record's schema will define:

1. Fields. Every field must be declared, and will consist of
   * Name. e.g. "last\_name". This is the name of the member, as stored in JSON
   * Label. e.g. "Last Name". What the field will be labelled in the user interface
   * Type. e.g. "string". Types are listed below
   * TypeOptions. See types below
   * InitialValue. e.g. "\(unknown\)". The initial value on a new record 
   * DefaultValue. e.g. "\(not set\)". The value taken if the loaded JSON object is missing this field.
2. Validation Rules. A set of rules, written in javascript, which are run when a record is created or updated.
3. Collection Name. This defines the "key" \(and therefore URL\) of the record. e.g. "customers", may cause a record to have a key of "/**customers**/0-6shd8uu""
4. Record Node Id. Each record type will have its own unique integer. this is used to for the record's key. e.g. "/customer/**0**-6shd8uu".
5. Estimated Record Count. This is an estimation of the most amount of this type of record you would expect to be created. If the record has a parent record, then this number refers to the maximum amount of records that you would expect to be created against a single parent. This value defines how a collection of records of this type are stored. At the storage level, all records belong to a "directory". Sharding enables records to be stored across multiple folders, to aid scalability
6. Children. A record may have child records. E.g. "Invoice" may belong to "Customer". See "Heirarchy" below.
7. Indexes. Used to keep a retrievable list of the record's decendants \(children, grandchildren etc...\). See "Indexes" below.

A Budibase record will always have a "key" member. The key is used to determine the record's type, and thus its schema.

