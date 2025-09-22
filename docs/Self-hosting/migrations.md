---
title: Migrations
excerpt: Information about self hosted migrations
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Occasionally as part of a Budibase update we will need to make an update to the infrastructure which is used by the platform - in self host this can impact you.

Budibase will warn you that your installation is not up to date/is missing components of the infrastructure, this warning will look like:

<Image alt="Your installation requires an upgrade" align="center" src="https://files.readme.io/ab77c2a-image.png">
  Your installation requires an upgrade
</Image>

Below is a list of migrations which may be needed for your installation.

## Budibase DB SQL Support

If you have reached this page then you have been alerted to an issue with your self host installation; As of **VERSION** of Budibase requires access to a service called Structured Query Server ([SQS](https://neighbourhood.ie/products-and-services/structured-query-server)) as part of its CouchDB install.

If you are using any of the [single image/docker install methods](/docs/docker) then you will not need to make any changes, the updates to CouchDB are included in the image. If you are using Kubernetes or docker-compose then you may be impacted.

Docker-compose installations are likely to be affected, to update to this version you will need to update your docker-compose installation - the quickest way to do this is using the [Budibase CLI](/docs/updating-budibase#budibase-cli-docker-compose). If you wish to do this manually then you will need to make sure your CouchDB installation is using the latest version of the `budibase/couchdb` image instead of whatever it is currently using, if you are using an old IBM image you can simply swap the image for this. You will also need to make sure that your app and worker services contain the environment variable:\
 `COUCH_DB_SQL_URL: http://couchdb-service:4984`

If you have updated your CouchDB image to `budibase/couchdb`, made sure you have the latest version of it downloaded and updated the server/worker services to have the new environment variable then the migration is complete.

Kubernetes installations may also be impacted, you should make sure you are using the latest helm chart version and that your CouchDB pods are using the latest `budibase/couchdb` version. Make sure all images are up to date and the migration should complete.

If you are still having issues and have confirmed that your installation is running the latest `budibase/couchdb` image for your CouchDB service then please reach out to Budibase support for further help, in the meantime you can downgrade to the previously used version safely.
