---
title: Budibase CLI Reference
excerpt: >-
  This reference documents every command and flag available in the budibase
  command-line interface.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
The budibase CLI is an all in one toolkit for managing your budibase self hosted installation. These API docs detail all of the commands and flags available to you when using the CLI. 

> 🚧 Pre-requisite: CLI installed and ready to use
> 
> This guide assumes that you have installed and used the Budibase CLI before, if you have not then you can follow our guide on [installing the Budibase CLI](https://docs.budibase.com/docs/budibase-cli-setup).

## Budibase CLI Commands

### budi hosting

Initialise and manage a self hosted budibase installation. Currently only supports docker compose setups. 

> 📘 You must be in the same directory that you ran --init to use the budibase CLI commands
> 
> After running `budi hosting --init`, you must be in the directory where budibase was initialised to use the other `budi hosting` commands.

#### Flags

| Flag       | Purpose                                                                                                                                         |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| `--init`   | Initialise a self hosted docker compose budibase setup in current directory. Pulls images and everything required to start the budibase server. |
| `--start`  | Start the budibase services.                                                                                                                    |
| `--status` | Check the current status of all the running budibase services.                                                                                  |
| `--stop`   | Stop all the currently running budibase services                                                                                                |

#### Commands

```shell init
budi hosting --init
```
```shell start
budi hosting --start
```
```shell status
budi hosting --status
```
```shell stop
budi hosting --stop
```

### budi plugins

`budi plugins` is the CLI command used for creating, developing and managing custom coded components and datasources. You can find tutorials on how to create components and datasources below.

<https://docs.budibase.com/docs/custom-datasource>

#### Flags

| Flag      | Purpose                                                                                                                          |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `--init`  | Pull down the budibase project skeleton for a datasource or component, and initialise it in the current working directory.       |
| `--build` | Build the datasource or component in the current working directory using rollup, so it can be used inside the budibase platform. |
| `--watch` | Watch the component/datasource in the current working directory and automatically rebuild when changes are made.                 |

#### Commands

```shell init
# datasource
budi plugins --init datasource

# component
budi plugins --init component
```
```shell build
budi plugins --build
```
```shell watch
budi plugins --watch
```

### budi backups

`budi backups` is a CLI command that allows you to completely backup and restore your self hosted budibase installation.

- Save backups as `.tar.gz` files that you can store elsewhere
- Import the `.tar.gz` files to a fresh budibase system to restore to the state of your backup.

You can find a full end to end tutorial on using the `budi backups` CLI command here:

<https://docs.budibase.com/docs/backups>

> 📘 You need to provide credentials to the budi backups command
> 
> If you do not pass the `--env` fiag to `budi backups` commands, you will have to answer a set of questions in the CLI to pass the credentials required to perform import and export of backups. The required variables are:
> 
> | Title              | Description                                                                                                       |
> | :----------------- | :---------------------------------------------------------------------------------------------------------------- |
> | `COUCH_DB_URL`     | Full URL for your running CouchDB service. Must include credentials. `http://<username>:<password>@<couchdb-url>` |
> | `MINIO_ACCESS_KEY` | MinIO/S3 compatible object store access key                                                                       |
> | `MINIO_SECRET_KEY` | MinIO/S3 compatible object store secret key                                                                       |
> | `MINIO_URL`        | URL on which your MinIO/S3 compatible object store is running on.                                                 |
> | `MAIN_PORT`        | The port your budibase instance is hosted on. Defaults to 10000.                                                  |

#### Flags

| Flag       | Purpose                                                                                                                                                                                                                                               |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--export` | Export your budibase installation, apps and configuration to a `tar.gz` file that can be imported into another separate budibase installation.                                                                                                        |
| `--import` | Import a `.tar.gz` file into an existing budibase installation. If you do not pass the `--env` flag, you will need to answer some questions with database and object store passwords so budibase can import your backup to the other budibase server. |
| `--env`    | Pass a path to an `.env` file that can be used to inject environment variables for either the `--import` or `--export` commands.                                                                                                                      |

#### Commands

```shell export
budi backups --export --env /path/to/env/file
```
```shell import
budi backups --import mybackup.tar.gz --env /path/to/env/file
```
```shell env file example
COUCH_DB_URL=http://admin:admin@localhost:10000/db/
MINIO_ACCESS_KEY=mykey
MINIO_SECRET_KEY=mysecret
MINIO_URL=http://localhost:10000
MAIN_PORT=10000
```

### budi analytics

This command is for opting in/out of budibase CLI analytics.

#### Flags

| Flag       | Purpose                            |
| :--------- | :--------------------------------- |
| `--optIn`  | Opt in to budibase CLI analytics.  |
| `--optOut` | Opt out of budibase CLI analytics. |

#### Commands

```shell optIn
budi analytics --optIn
```
```shell optOut
budi analytics --optOut
```