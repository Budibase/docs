# Datastore

The datastore is a Budibase abstraction, describing a set of methods used to read and write data to the end storage mechanism.

The actual implementation of the datastore is passed to the Budibase Core, from whatever is using the library. In general, the budibase datastore is a key-value store. Any store of data that allows for a "key" \(id\) and a "value" \(json data\) can have a Budibase datastore written. In Budibase Core the "key" is referred to as "key", and the "value" is referred to as either:

* "File": When data \(e.g. a record or index\) is being stored
* "Folder": Used to keep a list of files in this namespace \(i.e. just like a folder or directory in a file system\).

Some examples of potential datastore implementations:

* In Memory. The Budibase Core test suite uses a a JSON object as it's datastore. Each member of the JSON object represents the key and value.
* File system. File/Folder path = key, File/Folder contents  = value
* Redis. Is a key value store
* MongoDb. Keys and Documents
* Dropbox. Same as filesystem

