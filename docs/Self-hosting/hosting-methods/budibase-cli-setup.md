---
title: Budibase CLI Install
excerpt: >-
  The budi CLI tool can be used to create a new docker-based installation and
  manage existing installs.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: backups
      title: Backups
---
The Budibase CLI tool can be used to create a new Budibase installation, to manage an existing installation, make backups or update a Budibase installation to a new version. The video below summarises the tool with further instructions below.

[block:html]
{
  "html": "<div style=\"padding:65% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/712761948?h=e662bd81f5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"cli-tool.mp4\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]


## Install Budibase CLI

### Prerequisites

You should ensure you have Node and Docker installed on your system. An example is shown below for Linux (Debian/Ubuntu). On MacOSX consider using [brew](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x) and on Windows consider using [chocolatey](https://vocon-it.com/2019/11/19/install-npm-using-chocolatey-on-windows/).

```
# These commands can be used to install the Budibase CLI on a debian/ubuntu distribution
sudo apt install docker.io
curl -sL https://deb.nodesource.com/setup_18.x | sudo bash -
npm install -g @budibase/cli
budi --version
```

### Install Budibase CLI with NPM

If you already have NodeJS version 20+ on your system you can install the Budibase CLI tool with NPM as shown below. A `yarn` alternative is shown for those who prefer to use `yarn`:

```Text npm
npm install -g @budibase/cli
```
```Text yarn
yarn global add @budibase/cli
```

## Budibase CLI Usage

Regardless of the installation method you used above you should now be able to run the `budi` command as shown below. If not you should go over the installation instructions again.

```
budi help
```

You should see output similar to this:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f7e8a5c-image.png",
        null,
        ""
      ],
      "align": "center",
      "sizing": "400px"
    }
  ]
}
[/block]


### Install Budibase using the Budibase CLI

Use the following command to generate a `.env` file containing the secrets to be used when you start your budibase installation:

```
budi hosting --init
```

The commands below can be viewed in this recipe if desired:

[block:tutorial-tile]
{
  "backgroundColor": "#018FF4",
  "emoji": "🤖",
  "id": "6728a74f5918b50036c61842",
  "link": "https://docs.budibase.com/v1.0.9/recipes/budibase-cli-setup-npm",
  "slug": "budibase-cli-setup-npm",
  "title": "Budibase CLI setup [NPM]"
}
[/block]


You can view, copy or backup your `.env` file at this point:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/74b2b8f-image.png",
        null,
        ""
      ],
      "align": "center",
      "sizing": "400px"
    }
  ]
}
[/block]


You can now start the Budibase services with the following command:

```
budi hosting --start
```

After a little time you will be able to view the running docker containers with:

```
docker ps
docker-compose ps
```

And you should be able to access Budibase over HTTP on the port number you chose during initialisation e.g. <http://127.0.0.1:10000>

### Update Budibase Version using the Budibase CLI

To update the services with the latest docker images, use the following comman

```
budi hosting --update
```

### Backing Up Data using the Budibase CLI

This command can be run from within the same directory as your Budibase `.env` file:

```
budi backups --export --env .env
```

For more see the [Backups](backups)<https://docs.budibase.com/docs/backups> section.