# Behaviour

Behaviors are how we write custom backend code for Budibase. A behaviour:

* Is a javascript function, that takes one argument
* Lives inside a javascript module. We refer to this module as a "Behaviour Source"
* Behaviour sources are passed into budibase-core when the library is initialised

Your behaviour source will be imported into your budibase backend.

A behaviour must always be run by an "Action".

