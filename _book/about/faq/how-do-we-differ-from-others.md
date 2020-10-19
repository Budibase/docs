# How does Budibase differ from other low/no-code platforms?

As far as I can tell \(without much research into them\), they are frontend builders. Their output if HTML, CSS and JS.

Budibase is more like Framer + Firebase + API Calls to Firebase + Data binding in the frontend.

The Budibase builder is a full stack app builder. You build:

* A Backend
  * "Records", with "Fields" that are typed
  * "Indexes" - which are collections of records, modified using map/reduce
  * "Validation Rules" - written in javascript which are run against records
  * "Access Levels" - define user levels, and what database operations they have access to
  * Plugins - the ability to write custom javascript to run on the backend
* A Frontend
  * Import Budibase component libraries from NPM, or write your own
  * Import styleshees, e.g. Bootstrap
  * Setup event handlers \(e.g. onClick, onLoad..\) - from a predefined list of handler, which are mostly API calls \(e.g. "Save Record"\)
  * Using the Builder \(visually\) create "inherited" components. For example, using the Budibase "Button" component, create a "Primary Button" with styles applied to the button
  * Combine components to make more complex components, e.g. "Customer Record"

Once you've built your app, you get:

* An HTTP API
  * With CRUD endpoints for your records and indexes
  * Validation rules applied to records when saved
  * Authorisation rules applied based on configured access levels
  * Authentication
* A Single Page Application
  * Validation rules applied to records before they are POSTed to the API
  * Components are data-bound to client side state \(which is loaded from the backend\)
  * Authorisation rules applied to components \(e.g. Greyed out buttons\)
* An App management platform
  * Create new "Instances" \(databases\)
  * Add/remove/disable users on instances \(also possible from inside the app itself of course\)
  * Instance versioning. e.g. Customer "ACME inc" is on Version 1 of your app, but "MadProducts Inc." is on Version 2

