---
title: REST example
excerpt: A tutorial on using rest to create an application with budibase
deprecated: false
hidden: false
metadata:
  robots: index
---
This tutorial builds a simple users app backed by a REST API with read/create/update flows.

## Target architecture

* One REST connection (`Users API`)
* Four queries (`getUsers`, `getUser`, `createUser`, `updateUser`)
* One table view + two side-panel forms

## Part 1: Prepare sample API

1. Create a sample endpoint (for example MockAPI)
2. Add fields:
   * `id`
   * `name`
   * `address`
   * `createdAt`
3. Copy the base URL

## Part 2: Create connection

1. Open **Settings > Connections > APIs**
2. Click **Add connection > Create custom**
3. Set display name to `Users API`
4. In **Credentials**, set **Base URL**
5. Save
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
3. Configure body for write queries
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

1. Add edit side panel with form (`name`, `address`)
2. Set default values from selected-row state
3. Add **Update** button
4. Button actions:
   * Execute query `updateUser`
   * Map `id`, `name`, `address`
   * Refresh table
   * Show success notification
   * Close side panel

## Part 6: Create new user

1. Add **Add new user** button
2. Open create side panel with required fields
3. Add **Save** button
4. Button actions:
   * Execute query `createUser`
   * Refresh table
   * Clear form
   * Show success notification
   * Close side panel

## Validation checklist

* Query tests return expected response codes
* Table loads initial data
* Edit flow updates row and refreshes UI
* Create flow inserts row and refreshes UI
* Error responses surface user-visible notifications

## Common improvements

* Add delete query/action (`DELETE /users/{{id}}`)
* Add client-side search/filter
* Add form validation rules before execute-query actions

## Related guides

* [REST API](doc:rest)
* [REST queries](doc:rest-queries)
* [REST bindings (tutorial)](doc:rest-bindings)
* [REST variables](doc:rest-variables)
