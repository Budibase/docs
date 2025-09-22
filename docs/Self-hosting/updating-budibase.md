---
title: Updating Budibase
excerpt: >-
  Keep your self-hosted budibase instance up to date to take advantage of the
  newest features and bug fixes.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
There are several ways to update your budibase installation, based on your chosen setup.

## Budibase CLI (Docker compose)

If you set up budibase using the [Budibase CLI Install](doc:budibase-cli-setup), you can update your budibase installation directly by navigating to the directory where you installed budibase (with your `docker-compose.yaml`, `.env` file etc) and run the following CLI commands.

[block:tutorial-tile]
{
  "backgroundColor": "#018FF4",
  "emoji": "🎉",
  "id": "661661deebd3c30011f54d9a",
  "link": "https://docs.budibase.com/v1.0.9/recipes/update-budibase-using-cli",
  "slug": "update-budibase-using-cli",
  "title": "Update Budibase using CLI"
}
[/block]


## Standard Docker Upgrade

If you prefer, you can also just use standard docker commands to upgrade your budibase installation. 

### Upgrading a [Docker](doc:docker) Single Image Installation

First, stop and remove your container running budibase with:

```shell
docker stop <budibase-container-id>
docker rm <budibase-container-id>
```

Then run the following to get the latest version of the budibase container:

```shell
docker pull budibase/budibase
```

With the latest version of your container, you can now run the same `docker run` command that you ran to set up budibase in the first place.

> 📘 Note
> 
> Tools like <https://www.portainer.io/>  and <https://github.com/containrrr/watchtower> can be a powerful way to simplify and automate container management for you. 
> 
> Another option is to migrate your single image installation to using docker-compose, as described [here](https://docs.budibase.com/docs/docker#method-2---docker-compose). Which will let you take advantage of the next method below.

### Upgrading a [Docker Compose](doc:docker-compose) Installation

First, navigate to the directory where you set up your budibase installation with docker compose. It should contain:

- `docker-compose.yaml`
- `.env`

You can then run the following commands. (You may need to use `docker-compose` on older versions of docker)

```shell
docker compose pull 
docker compose up -d
```



### Downgrading a [Docker Compose](doc:docker-compose) Installation

To downgrade, if you are using a docker compose, you can go to each image line of the docker-compose.yaml file and type down the desired version after a colon. For example:

```yaml docker-compose.yaml
image: budibase.docker.scarf.sh/budibase/apps:2.17.6
```

Do this for all images except minio, watchtower and couchdb. The container version matches the app version.

Once you have updated your docker-compose.yaml file, you will need to bring down your containers and then start them up again.

```shell
docker compose down
docker compose up -d
```



## Kubernetes

Instructions on how to upgrade budibase running on Kubernetes can be found here - [Kubernetes](doc:kubernetes-k8s)