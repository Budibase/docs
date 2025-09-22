---
title: Integrating with CI/CD 🔒
excerpt: How to deploy apps between 2 or more Budibase instances
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A common need among Budibase users is the ability to deploy two or more segregated Budibase environments and migrate app changes between them.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/66d936f31d37950abeadf9892a79ad6adb49e63790d5cba31446e5493b726188-Mikes_Playground_-_Frame_7_2.jpg",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


You can set up this deployment process using the following steps, using the Budibase API. Note that importing and exporting API endpoints are not available on free or open-source tiers.

1. [Export the app](https://docs.budibase.com/reference/appexport) from the development environment.
2. [Import the app](https://docs.budibase.com/reference/appimport) into the production environment.
3. (Optionally) [Publish the app](https://docs.budibase.com/reference/apppublish) in the production environment. If you don’t publish, then you have the opportunity to test the app in the production environment before manually publishing the app to your users.

We've written a bash script ([below](https://docs.budibase.com/docs/integrating-with-cicd#bash-script-for-cicd)) that automates this process. Most CI/CD platforms support bash scripting inside their pipelines. You can use this script directly in your CI/CD process.

## Using external database and APIs

If you are using an external database or API (e.g. PostgreSQL), you can use [environment variables](https://docs.budibase.com/docs/environment-variables) to enable your production environment to use different connection details to your development environment. 

The process is as follows:

1. Create the required environment variables in your Budibase development instance.
2. Create environment variables of the same name, in your production instance.
3. In your development app, create your database connection using the environment variables.

For example, we can add `pg_host` and `pg_password` variables in both instances.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3b93134b6bf44f6dd20d1b492911792f2604f2ecd059d1950e3a2e816ac68f0e-env_vars.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Now I can configure my Postgres connection to use these variables.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/81875ffe7808c5362cce45e63012450293e63d6105ecbb5f09da9f4033628bcd-pg_connection.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


<br />

The result: my development environment connects to a different database than my production environment, without needing to change this manually each time I deploy.

## Bash script for CI/CD

### Variables

The bash script below uses the following variables. You'll need to supply these variables from your CI/CD pipeline.

[block:parameters]
{
  "data": {
    "h-0": "Variable name",
    "h-1": "Description",
    "h-2": "Example",
    "0-0": "BUDIBASE_SOURCE_TENANT",
    "0-1": "Required  \n  \nThe root URL of our budibase development instance.",
    "0-2": "`https://dev_instance.budibase.app`",
    "1-0": "BUDIBASE_SOURCE_API_KEY",
    "1-1": "Required  \n  \nAPI Key of your development instance",
    "1-2": "[How to get your API key](https://docs.budibase.com/docs/public-api#how-to-get-your-api-key)",
    "2-0": "BUDIBASE_SOURCE_APP_ID",
    "2-1": "Required  \n  \nThe app ID that you would like to deploy  \n  \nYou should treat this as a secret.",
    "2-2": "`app_<uuid>` - will deploy the published verison of your app.  \n  \nOr  \n  \n`app_dev_<uuid>` - will deploy the latest, unpublish version of your app.  \n  \nE.g. `app_75907e45dbef4fdcbe6f079b3a5f0b2d`",
    "3-0": "BUDIBASE_DESTINATION_TENANT",
    "3-1": "Required  \n  \nThe root URL of our budibase production instance.",
    "3-2": "`https://prod_instance.budibase.app`",
    "4-0": "BUDIBASE_DESTINATION_API_KEY",
    "4-1": "Required  \n  \nAPI Key of your production instance.  \n  \nYou should treat this as a secret.",
    "4-2": "[How to get your API key](https://docs.budibase.com/docs/public-api#how-to-get-your-api-key) ",
    "5-0": "BUDIBASE_DESTINATION_APP_ID",
    "5-1": "Required  \n  \nThe app ID that you would like to deploy",
    "5-2": "`app_dev_<uuid>`",
    "6-0": "BUDIBASE_PUBLISH_DESTINATION_APP",
    "6-1": "Optional  \n  \nWhether you'd like to auto-publish your app in production. Defaults to `false`",
    "6-2": "`true`or`false`"
  },
  "cols": 3,
  "rows": 7,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]


<br />

### Script (requires cURL)

The script below saves the exported app to `export.tar.gz`. You may save this file as an artifact during your CI/CD process. The script could also be modified to export the existing app in your destination tenant, to store as an artifact.

```shell bash
#!/bin/bash

# 1. Set local variables from environment variables

# Check that all required variables are set (not empty)
if [[ -z "$BUDIBASE_SOURCE_TENANT" ]]; then
  echo "Error: BUDIBASE_SOURCE_TENANT is required but not set."
  exit 1
fi
if [[ -z "$BUDIBASE_DESTINATION_TENANT" ]]; then
  echo "Error: BUDIBASE_DESTINATION_TENANT is required but not set."
  exit 1
fi
if [[ -z "$BUDIBASE_SOURCE_API_KEY" ]]; then
  echo "Error: BUDIBASE_SOURCE_API_KEY is required but not set."
  exit 1
fi
if [[ -z "$BUDIBASE_DESTINATION_API_KEY" ]]; then
  echo "Error: BUDIBASE_DESTINATION_API_KEY is required but not set."
  exit 1
fi
if [[ -z "$BUDIBASE_SOURCE_APP_ID" ]]; then
  echo "Error: BUDIBASE_SOURCE_APP_ID is required but not set."
  exit 1
fi
if [[ -z "$BUDIBASE_DESTINATION_APP_ID" ]]; then
  echo "Error: BUDIBASE_DESTINATION_APP_ID is required but not set."
  exit 1
fi
if [[ -z "$BUDIBASE_PUBLISH_DESTINATION_APP" ]]; then
  BUDIBASE_PUBLISH_DESTINATION_APP="false" # Default to false if not set
fi


# 2. Check for the existence of curl
if ! command -v curl &> /dev/null; then
    echo "curl could not be found."

    # 3. If curl does not exist, download it
    echo "Installing curl..."
    # Check for sudo privileges, as installing packages usually requires them.
    if [[ $EUID -ne 0 ]]; then
       echo "This script must be run as root to install curl."
       exit 1
    fi
    apt-get update && apt-get install -y curl
else
    echo "curl is already installed."
fi

# 4. Use curl to download the app export
echo "Exporting app export from $BUDIBASE_SOURCE_TENANT and app ID: $BUDIBASE_SOURCE_APP_ID..."


echo $BUDIBASE_SOURCE_TENANT/api/public/v1/applications/$BUDIBASE_SOURCE_APP_ID/export


HTTP_STATUS_EXPORT=$(curl \
     --silent \
     --write-out "%{http_code}" \
     --request POST \
     --url $BUDIBASE_SOURCE_TENANT/api/public/v1/applications/$BUDIBASE_SOURCE_APP_ID/export \
     --header 'accept: application/gzip' \
     --header 'content-type: application/json' \
     --header "x-budibase-api-key: $BUDIBASE_SOURCE_API_KEY" \
     --data '{"excludeRows":true}' \
     --output ./export.tar.gz)


echo "Export HTTP status: $HTTP_STATUS_EXPORT"
if [[ "$HTTP_STATUS_EXPORT" -ne 200 ]]; then
    echo "Error: Failed to export app. HTTP status code: $HTTP_STATUS_EXPORT"
    exit 1
else
  echo "App export successful. HTTP status code: $HTTP_STATUS_EXPORT"
  echo "App export saved to export.tar.gz"
fi

# 5. Use curl to import the app export
echo "Importing app export into $BUDIBASE_DESTINATION_TENANT and app ID: $BUDIBASE_DESTINATION_APP_ID..."

HTTP_STATUS_IMPORT=$(curl \
     --silent \
     --output /dev/null \
     --write-out "%{http_code}" \
     --request POST \
     --url $BUDIBASE_DESTINATION_TENANT/api/public/v1/applications/$BUDIBASE_DESTINATION_APP_ID/import \
     --header 'content-type: multipart/form-data' \
     --header "x-budibase-api-key: $BUDIBASE_DESTINATION_API_KEY" \
     --form 'appExport=@export.tar.gz;type=application/gzip')


if [[ "$HTTP_STATUS_IMPORT" -ne 200 && "$HTTP_STATUS_IMPORT" -ne 204  ]]; then
    echo "Error: Failed to import app. HTTP status code: $HTTP_STATUS_IMPORT"
    exit 1
else
    echo "App import successful. HTTP status code: $HTTP_STATUS_IMPORT"
fi

#6 Optionally- publish the app in the destination environment
if [[ "$BUDIBASE_PUBLISH_DESTINATION_APP" == "true" ]]; then
  echo "Publishing destination app with ID: $BUDIBASE_DESTINATION_APP_ID..."
  HTTP_STATUS_PUBLISH=$(curl \
     --silent \
     --output /dev/null \
     --write-out "%{http_code}" \
     --request POST \
     --url $BUDIBASE_DESTINATION_TENANT/api/public/v1/applications/$BUDIBASE_DESTINATION_APP_ID/publish \
     --header 'accept: application/json' \
     --header "x-budibase-api-key: $BUDIBASE_DESTINATION_API_KEY")
  if [[ "$HTTP_STATUS_PUBLISH" -ne 200 ]]; then
      echo "Error: Failed to publish app. HTTP status code: $HTTP_STATUS_PUBLISH. Your new app exists in the destination but is not published. You can publish or revert manually via Budibase."
      exit 1
  else
      echo "Destination app published successfully."
  fi
else
  echo "Skipping publishing of destination app - please publish manually via Budibase."
fi

```