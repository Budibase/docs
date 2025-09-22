---
title: Custom plugins
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
Budibase allows no-code users to build apps quickly, with more functionality available with a little bit of inline code. Despite this, not every conceivable scenario can be covered by default - but that's where custom plugins come in! 

Developers can write their own plugins for where custom datasources and components are needed. Some software development experience is required, however, the process for building plugins is designed to be streamlined and sleekly integrated into the Budibase platform.

## Importing plugins

An admin user can see a list of your plugins under the _Manage_ section of the Budibase [Portal](https://docs.budibase.com/docs/portal).

You can search for plugins by name and filter by category.

![](https://files.readme.io/125c021-Screenshot_2022-09-15_at_13.47.24.png)

You can import a plugin by pressing the `Add plugin` button. This will display a dialog box from which you choose a _Source_.

[block:parameters]
{
  "data": {
    "h-0": "Source name",
    "h-1": "Expected input",
    "0-0": "URL",
    "0-1": "A URL path to a tarball, e.g. `.tar.gz` file.  \n  \n_Allows authentication headers to be added if needed._",
    "1-0": "NPM",
    "1-1": "The URL of an NPM package of a Budibase plugin",
    "2-0": "Github",
    "2-1": "The URL of a Github repository, that has a tarball asset in the latest release.  \n  \n_Allows a Github Token to be added for accessing private repositories._",
    "3-0": "File Upload",
    "3-1": "Allows an admin user to directly upload a plugin tarball."
  },
  "cols": 2,
  "rows": 4,
  "align": [
    "left",
    "left"
  ]
}
[/block]

![](https://files.readme.io/a88f22c-Screenshot_2022-09-14_at_10.45.31.png)

Once your plugin has been imported, you will now be able to make use of it within all of your apps!

In the case of a **custom datasource**, it will appear as a new datasource at the bottom of the _Add datasource_ dialog and can be used just like any other [custom query](https://docs.budibase.com/docs/custom-queries).

![](https://files.readme.io/95bd6fb-Screenshot_2022-09-16_at_09.51.03.png)

In the case of a **custom component**, it will appear in the builder components list under the _Plugins_ section.

![](https://files.readme.io/319ff8c-Screenshot_2022-09-14_at_11.05.02.png)

> 🚧 Cloud hosting
> 
> While custom components can also be imported in the cloud environment, custom datasources can only be used in a self-hosted environment, for security reasons.

<br />

### Hot reloading (developers only)

You must provide a path to your plugins folder so that Budibase knows where to import the plugins that you update while developing. 

There are three main approaches to this, with the handiest being to run Budibase via the [CLI](https://docs.budibase.com/docs/budibase-cli-setup). Alternatively, you can run Budibase via [Docker compose](🔗) or a local repository. 

#### Budibase CLI

Make sure you have installed the latest [Budibase CLI](https://docs.budibase.com/docs/budibase-cli-setup), and initialize Budibase.

If Budibase is already running, stop the service using the command:

`budi hosting --stop`

Add the plugins directory path using the command:

`budi hosting --watch-plugin-dir /path-to-your-plugins-directory`

Finally, run `budi hosting --start` and then do a `yarn watch` within your plugin repo.

#### Docker compose

Make sure you have installed the latest [Budibase CLI](https://docs.budibase.com/docs/budibase-cli-setup), and initialize Budibase.

Add the plugins directory path (**case sensitive!**) to the **app-service** volumes of your docker compose file:

```yaml Yaml
services:
  app-service:
    volumes:
      - /Users/<username>/Documents/MyBudibasePlugins:/MyBudibasePlugins
```



Next, update your `.env` file to include the relative plugins directory, e.g. `PLUGINS_DIR=/MyBudibasePlugins`

> 📘 
> 
> The `.env` file will be hidden within the same folder as your `docker-compose.yaml`.  
> Showing hidden files on [Windows](https://support.microsoft.com/en-gb/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2).  
> On macOS, press `Cmd+Shift+.` within the folder.

Finally, run `budi hosting --start` and then do a `yarn watch` within your plugin repo.

#### Budibase repo

Assuming you have cloned the [Budibase repo](https://github.com/Budibase/budibase) and have it running locally, navigate to `packages/server/.env` and add the following variable:

`PLUGINS_DIR=/Users/<username>/Documents/MyBudibasePlugins`

Naturally, you should replace the value with the path to your plugins folder.

If your server is already running, you will need to stop it and then start it with another `yarn dev` so that the new environment variable is loaded.

You will also need to make sure you have run `yarn watch` in your plugin repo. See the custom component and datasource pages for more information on development.

<br />

### Maximum number of plugins

On the free plan you can add a maximum of 10 plugins. Upgrade to unlock _unlimited_ plugins. 

A full list of pricing plans can be seen here: <https://budibase.com/pricing/>

<br />

## Updating a plugin

To update an existing plugin, simply import a plugin with a matching name. 

Currently, the versioning must be handled manually, where you can have multiple folders for each version of your plugin.

<br />

## Deleting a plugin

Click on one of the plugins from the plugins list. This will pop up a dialog from which you can press `Delete`

![](https://files.readme.io/8e68de2-Screenshot_2022-09-15_at_13.49.07.png)