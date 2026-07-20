---
title: REST example
excerpt: A tutorial on using rest to create an application with budibase
deprecated: false
hidden: false
metadata:
  robots: index
---
This tutorial builds a simple users app backed by a REST API.

## Target architecture

* One REST connection (`Users API`)
* Four queries (`getUsers`, `getUser`, `createUser`, `updateUser`)
* One table view and two side-panel forms

## Part 1: Prepare sample API

1. Create a sample endpoint, such as MockAPI
2. Add fields:
   * `id`
   * `name`
   * `address`
   * `createdAt`
3. Copy the base URL

## Part 2: Create connection

1. Open **Settings > Connections > APIs**
2. Click **Add connection** and choose **Create custom**
3. Set the display name to `Users API`
4. In **Credentials**, set the base URL
5. Save the connection
6. Click **Open in API Editor**

## Part 3: Create CRUD queries

Create these queries:

1. `getUsers`: `GET /users`
2. `getUser`: `GET /users/{{id}}`
3. `createUser`: `POST /users`
4. `updateUser`: `PUT /users/{{id}}`

For each query:

1. Set method and path
2. Configure bindings
3. Configure the body for write queries
4. Click **Send**
5. Save query

### Suggested request body for create/update

```json
{
  "name": "{{ name }}",
  "address": "{{ address }}"
}
```

## Part 4: Build list screen

1. Create a screen
2. Add a table
3. Set table data source to `getUsers`
4. Add row-click actions:
   * Update selected-row state
   * Open edit side panel

## Part 5: Edit existing user

1. Add an edit side panel with a form for `name` and `address`
2. Set default values from selected-row state
3. Add an **Update** button
4. Button actions:
   * Execute query `updateUser`
   * Map `id`, `name`, `address`
   * Refresh table
   * Show success notification
   * Close side panel

## Part 6: Create new user

1. Add an **Add new user** button
2. Open a create side panel with the required fields
3. Add a **Save** button
4. Button actions:
   * Execute query `createUser`
   * Refresh table
   * Clear form
   * Show success notification
   * Close side panel

## Validation checklist

* Query tests return expected response codes
* The table loads initial data
* The edit flow updates the row and refreshes the UI
* The create flow inserts the row and refreshes the UI
* Error responses surface user-visible notifications

## Common improvements

* Add a delete query and action (`DELETE /users/{{id}}`)
* Add client-side search and filtering
* Add form validation rules before execute-query actions

## Related guides

* [REST API](doc:rest)
* [REST queries](doc:rest-queries)
* [REST bindings (tutorial)](doc:rest-bindings)
* [REST variables](doc:rest-variables)
