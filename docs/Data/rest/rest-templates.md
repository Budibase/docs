---
title: REST Templates
deprecated: false
hidden: false
metadata:
  robots: index
---
Budibase now offers REST Templates to allow you to hit the ground running with a selection of ready-made REST API request patterns. These templates provide a structured starting point for common HTTP methods, so you can connect to external APIs quickly without configuring every request from scratch

## Selecting a template

To add a new `REST` data source click:

* > API's > Add new API > choose a template

<Image align="center" border={false} width="40% " src="https://files.readme.io/c46ce811c0f4f3df2df78edaff895df9e966fa33696ea655c07359cd6a7ee91c-Screenshot_2025-11-19_at_01.05.48.png" />

<Image align="center" border={false} src="https://files.readme.io/02304664f5959c3ea05c279c9bbcfb33b1083cc179509bb92bca11de15658805-image.png" />

<br />

## Configuration

Add additional configuration to your data source in the form of queries, default headers, authentication and variables

<Image align="center" border={false} width="70% " src="https://files.readme.io/9764f80b23e9c06bbc3abf78b62fd2b4b70a848c5a832ca53840fdf3941220c1-image.png" />

## Name

By default the REST data source will have a name like REST or REST-1, you can change this to something recognisable if desired.

## Queries

A query is an individual request in the rest data source. Either create one from scratch or import an existing. For more details see: [Rest Bindings](doc:rest-bindings)

## Tutorial

In this example, we will use the templates to create an app that will list issues in a Github repo

First, we'll select Github as our template and add an action

<Image border={false} src="https://files.readme.io/8698fc1f7adf7bb389dfbfd4769595b736ff874f1bd3c706c354b1a9c3c2d8dd-image.png" />

Now we will select an option, in this case we will use the GET query 'issues/list-for-repo', if you're unsure, you can read the description for this option to make sure it is the correct one

<Image border={false} src="https://files.readme.io/e60095fd8305006d5308860f446a9855d0a2222d63de6d3b4d72fb5c6db0b230-image.png" />

We now need to set our repo and owner bindings to the repo we wish to get the issues list from, in this example, we will be using the budibase repo, to confirm the request is working, we will send it and get the expected response

Moving over to our app, we will now see how we can display this information 

<Image border={false} src="https://files.readme.io/0779a888b98078eb22a120c575b5a3a39db78eb001babbbc744b74ed97fbd844-image.png" />

Here, I've created a new PDF table, and set the datasource to be the GET request we have just created, then to organise my findings, I've set 3 columns within this table under 'title', 'body', and 'created_at'

Now, we can see the most recent issues that have been created, and the description for each issue