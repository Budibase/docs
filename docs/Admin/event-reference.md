---
title: Event reference
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Budibase produces a number of events when operations of interest occur within the application. For example when a new app is created an `app:created` event is created, when the app is published an `app:published` event is created. Events are used for a number of purposes, such as audit logging and analytics that help Budibase create a better product for our users. 

## Identities

Every event has an associated identity to indicate who or what triggered the event. 

**User**

An event triggered within the context of an authenticated user.

Example: An API request

A user has attached metadata:

```json
{
   "accountHolder": false,
   "admin": false,
   "builder": true,
   "environment": "docker-compose",
   "hosting": "self",
   "id": "us_2d714b1745b1-40d7b36f539e214d8170",
   "type": "user",
   "installationId": "2d714b1745b1-40d7b36f539e214d8170",
   "tenantId": "2d714b1745b1-40d7b36f539e214d8170_default",
   "verified": true
}
```

**Tenant**

An event triggered as a result of a background process, within the scope of a single tenant.

Example: An Automation

A tenant has attached metadata:

```json
{
   "id": "acmecorp",
   "type": "tenant",
   "hosting": "cloud",
   "environment": "kubernetes",
   "installationId": "2d714b1745b1-40d7b36f539e214d8170",
   // Cloud Only
   "profession": "software_engineer", 
   "companySize": "1+" 
}
```

**Installation**

An event triggered as a result of a background process, outside the scope of any one tenant. 

Example: Version updated.

An installation has attached metadata:

```json
{
   "id": "2d714b1745b1-40d7b36f539e214d8170",
   "type": "installation",
   "hosting": "cloud",
   "environment": "kubernetes",
   "version": "1.0.203"
}
```

## Event properties

There are some properties that are included in every event:

**version**

The software version at the time of sending the event. 

Example: `1.0.201`

**service**

The service that sent the event. 

Example: `app-service`

**environment**

The environment of the budibase instance.

Example: `docker-compose`

**appId (optional)**

The current App ID relating to the event.

Example: `app_2d714b1745b1-40d7b36f539e214d8170`

**installationId**

The globally unique Installation ID.

Example: `2d714b1745b1-40d7b36f539e214d8170`

**tenantId**

The globally unique Tenant ID.

Example: `2d714b1745b1-40d7b36f539e214d8170_default`

**hosting**

Indicator of the hosting type. The value can be either `self` for self hosted installs or `cloud` for the budibase cloud environment. 

## Types of events

All events that are currently produced are listed below. In addition to the common event properties from above each event may also contain additional properties. 

### User

* `user:created`

```json
{
   "userId": "string"
}
```

* `user:updated`

```json
{
   "userId": "string"
}
```

* `user:deleted`

```json
{
   "userId": "string"
}
```

* `user:admin:assigned`

```json
{
   "userId": "string"
}
```

* `user:admin:removed`

```json
{
   "userId": "string"
}
```

* `user:builder:assigned`

```json
{
   "userId": "string"
}
```

* `user:builder:removed`

```json
{
   "userId": "string"
}
```

* `user:invited`
* `user:invite:accepted`

```json
{
   "userId": "string"
}
```

* `user:password:force:reset`

```json
{
   "userId": "string"
}
```

* `user:password:updated`

```json
{
   "userId": "string"
}
```

* `user:password:reset:requested`

```json
{
   "userId": "string"
}
```

* `user:password:reset`

```json
{
   "userId": "string"
}
```

### Email

* `email:smtp:created`
* `email:smtp:updated`

### Auth

* `auth:sso:created`

```json
{
   "type": "string" // "oidc", "google"
}
```

* `auth:sso:updated`

```json
{
   "type": "string" // "oidc", "google"
}
```

* `auth:sso:activated`

```json
{
   "type": "string" // "oidc", "google"
}
```

* `auth:sso:deactivated`

```json
{
   "type": "string" // "oidc", "google"
}
```

* `auth:login`

```json
{
   "userId": "string",
   "source": "string", // "local", "google", "oidc", "google-internal"
}
```

* `auth:logout`

```json
{
   "userId": "string"
}
```

### Org

* `org:info:name:updated`
* `org:info:logo:updated`
* `org:platformurl:updated`

### Installation

* `installation:version:checked`

```json
{
   "currentVersion": "string"
}
```

* `installation:version:upgraded`

```json
{
   "from": "string",
   "to": "string",   
}
```

* `installation:version:downgraded`

```json
{
   "from": "string",
   "to": "string",   
}
```

* `installation:firstStartup`

### App

* `app:created`
* `app:updated`
* `app:deleted`
* `app:published`
* `app:unpublished`
* `app:template:imported`

```json
{
   "templateKey": "string"
}
```

* `app:file:imported`

```json
{
   "appId": "string"
}
```

* `app:version:updated`

```json
{
   "currentVersion": "string",
   "updatedToVersion": "string"
}
```

* `app:version:reverted`

```json
{
   "currentVersion": "string",
   "revertedToVersion": "string"
}
```

* `app:reverted`
* `app:exported`

### Role

* `role:created`

```json
{
   "roleId": "string",
   "permssionId": "string",
   "inherits": "string"
}
```

* `role:updated`

```json
{
   "roleId": "string",
   "permssionId": "string",
   "inherits": "string"
}
```

* `role:deleted`

```json
{
   "roleId": "string",
   "permssionId": "string",
   "inherits": "string"
}
```

* `role:assigned`

```json
{
   "userId": "string",
   "roleId": "string"
}
```

* `role:unassigned`

```json
{
   "userId": "string",
   "roleId": "string"
}
```

### Serve

* `served:builder`
* `served:app`

```json
{
   "appVersion": "string"
}
```

* `served:app:preview`

```json
{
   "appVersion": "string"
}
```

### Datasource

* `datasource:created`

```json
{
   "datasourceId": "string",
   "source": "string" // e.g. "REST", "POSTGRES"
}
```

* `datasource:updated`

```json
{
   "datasourceId": "string",
   "source": "string" // e.g. "REST", "POSTGRES"
}
```

* `datasource:deleted`

```json
{
   "datasourceId": "string",
   "source": "string" // e.g. "REST", "POSTGRES"
}
```

### Query

* `query:created`

```json
{
   "queryId": "string",
   "datasourceId": "string",   
   "source": "string", // e.g. "REST", "POSTGRES"
   "queryVerb": "string" // "create", "read", "update", "delete"
}
```

* `query:updated`

```json
{
   "queryId": "string",
   "datasourceId": "string",   
   "source": "string", // e.g. "REST", "POSTGRES"
   "queryVerb": "string" // "create", "read", "update", "delete"
}
```

* `query:deleted`

```json
{
   "queryId": "string",
   "datasourceId": "string",   
   "source": "string", // e.g. "REST", "POSTGRES"
   "queryVerb": "string" // "create", "read", "update", "delete"
}
```

* `query:import`

```json
{
   "datasourceId": "string",   
   "source": "string", // "REST"
   "count": "number",
   "importSource": "string" // "curl", "openapi2.0", "openapi3.0"
}
```

* `queries:run`

```json
{
   "count": "number"   
}
```

* `query:previewed`

```json
{
   "queryId": "string",
   "datasourceId": "string",   
   "source": "string", // e.g. "REST", "POSTGRES"
   "queryVerb": // "create", "read", "update", "delete"
}
```

### Table

* `table:created`

```json
{
   "tableId": "string"
}
```

* `table:updated`

```json
{
   "tableId": "string"
}
```

* `table:deleted`

```json
{
   "tableId": "string"
}
```

* `table:exported`

```json
{
   "tableId": "string",
   "format": "string" // "json", "csv"
}
```

* `table:imported`

```json
{
   "tableId": "string",
   "format": "string" // "csv"
}
```

### View

* `view:created`

```json
{
   "tableId": "string"
}
```

* `view:updated`

```json
{
   "tableId": "string"
}
```

* `view:deleted`

```json
{
   "tableId": "string"
}
```

* `view:exported`

```json
{
   "tableId": "string",
   "format": "string" // "json", "csv"
}
```

* `view:filter:created`

```json
{
   "tableId": "string"
}
```

* `view:filter:updated`

```json
{
   "tableId": "string"
}
```

* `view:filter:deleted`

```json
{
   "tableId": "string"
}
```

* `view:calculation:created`

```json
{
   "tableId": "string",
   "calculation": "string" // "sum", "count", "stats"
}
```

* `view:calculation:updated`

```json
{
   "tableId": "string",
   "calculation": "string" // "sum", "count", "stats"
}
```

* `view:calculation:deleted`

```json
{
   "tableId": "string",
   "calculation": "string" // "sum", "count", "stats"
}
```

### Rows

* `rows:created`

```json
{
   "count": "number"
}
```

* `rows:imported`

```json
{
   "tableId": "string",
   "format": "string", // "csv"
   "count": "number"
}
```

### Component

* `component:created`

```json
{
   "name": "string" // "@budibase/standard-components/cardsblock"
}
```

* `component:deleted`

```json
{
   "name": "string" // "@budibase/standard-components/cardsblock"
}
```

### Screen

* `screen:created`

```json
{
   "screenId": "string",
   "layoutId": "string",
   "roleId": "string"
}
```

* `screen:deleted`

```json
{
   "screenId": "string",
   "layoutId": "string",
   "roleId": "string"
}
```

### Layout

* `layout:created`

```json
{
   "layoutId" "string"
}
```

* `layout:deleted`

```json
{
   "layoutId" "string"
}
```

### Automation

* `automation:created`

```json
{
   "automationId": "string",
}
```

`automation:deleted`

```json
{
   "automationId": "string",
}
```

`automation:tested`

```json
{
   "automationId": "string",
   "triggerId": "string",
   "triggerType": "string" // "APP", "CRON", "WEBHOOK", "ROW_UPDATED", "ROW_DELETED", "ROW_SAVED"
}
```

`automations:run`

```json
{
   "count": "number"
}
```

`automation:step:created`

```json
{
   "automationId": "string",
   "triggerId": "string",
   "triggerType": "string", // "APP", "CRON", "WEBHOOK", "ROW_UPDATED", "ROW_DELETED", "ROW_SAVED"
   "stepId": "string",
   "stepType": "string", // e.g. "SEND_EMAIL_SMTP"
}
```

`automation:step:deleted`

```json
{
   "automationId": "string",
   "triggerId": "string",
   "triggerType": "string", // "APP", "CRON", "WEBHOOK", "ROW_UPDATED", "ROW_DELETED", "ROW_SAVED"
   "stepId": "string",
   "stepType": "string", // e.g. "SEND_EMAIL_SMTP"
}
```

### Account

* `account:created`

```json
{
   "registrationStep": "string"
}
```

* `account:deleted`
* `account:verified`
