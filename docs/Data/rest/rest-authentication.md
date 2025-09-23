---
title: REST authentication
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Authentication configs are specified at the datasource level and can be selected from queries within the datasource. Adding authentication to a datasource allows queries to run well-known authentication strategies and can reduce the amount of configuration needed when multiple queries share the same authentication. 

 

***

  

## Datasource Configuration

A REST datasource can contain multiple authentication configs of well known types. 

- Multiple configs of the same type can exist
- Configs must have a unique name

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1784303b1a751f1aa8dd3ed2e48419c75403426873728370325479633116ebe4-Screenshot_2024-12-12_at_12.24.32.png",
        "Screenshot 2022-01-04 at 16.25.27.png",
        null
      ],
      "align": "center"
    }
  ]
}
[/block]


[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ba8b74cfd487dafb9bb492c86c1d5472ee1ced945704caf52126c231c2d03b72-Screenshot_2024-12-12_at_12.25.12.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


The appropriate information is added to the request when authentication is selected. 

- **Basic Auth **- Adds the Base64 encoded username and password to the Authorization header
- **Bearer Token**  - Adds the token to the Authorization header as Bearer token

 

***

  

## Query Configuration

From within a query use the Auth dropdown to select the desired authentication config to be added to the query.

![](https://files.readme.io/ec515cb-Screenshot_2022-01-04_at_16.31.34.png "Screenshot 2022-01-04 at 16.31.34.png")

## Using SSO Tokens in REST Requests

> 📘 If you have not configured SSO, you can follow the guide here: <https://docs.budibase.com/docs/openid-connect>

If you have configured your budibase tenant to use SSO, you can use the SSO token as a binding in your REST API requests. The `{{ Currentuser.OAuthToken }}` binding is available anywhere you can use bindings in the REST connector, such as:

- Request Body
- Request Headers
- Request Parameters
- Request Bindings

![](https://user-images.githubusercontent.com/5913006/177118536-1b072da3-4b77-49d5-afa0-c7de678ba247.png)

> 📘 SSO Tokens Automatically Refresh!
> 
> Budibase will handle the refreshing of SSO tokens for you directly from your provider - you don't need to do it yourself.