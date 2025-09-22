---
title: Azure app service
excerpt: Install Budibase as an app on Azure
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Users have had limited success using Azure App Service. For persistent storage we recommend using [ACI on Azure](https://docs.budibase.com/docs/azure-container-instances).

The Budibase docker repo has a docker image specific for Azure app service with some customizations for data storage and SSH access.

### Create new app service

In the [Azure Portal](https://portal.azure.com/), choose** App Services**, then **Create**:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/4c41aac-image.png",
        null,
        ""
      ],
      "sizing": "400px"
    }
  ]
}
[/block]



When creating the service choose values that meet your app requirements such as redundancy, resource group and SKU size, but set the following fields to these values:

- Publish: Choose **Docker Container**
- Operating System: **Linux**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/15efcf4-image.png",
        null,
        ""
      ],
      "sizing": "400px"
    }
  ]
}
[/block]



[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d1624ee-image.png",
        null,
        ""
      ],
      "sizing": "400px"
    }
  ]
}
[/block]



### Docker settings

Choose to pull the image from the Docker Hub were it has been published by Budibase under the tag: `budibase-aas`

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cc7da2f-image.png",
        null,
        ""
      ],
      "sizing": "400px"
    }
  ]
}
[/block]



### Networking and Monitoring

Proceed through the Networking, Monitoring and Tags sections accepting the defaults or amending to suit your requirements.

### Review and Create

On the Review tab choose the **Create** button.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c71f56d-image.png",
        null,
        ""
      ],
      "sizing": "400px"
    }
  ]
}
[/block]



The deployment will take some minutes to complete.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/306d218-image.png",
        null,
        ""
      ],
      "sizing": "400px"
    }
  ]
}
[/block]



Choose the **Go to Resource** button to get information about your deployment including the web address. Visit the website address you opted for during creation e.g. 

e.g. <https://mybudibase.azurewebsites.com>

### Troubleshooting

#### SSH into Container

Click into the deployed resource as shown below:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/1a41735-image.png",
        null,
        ""
      ],
      "sizing": "400px"
    }
  ]
}
[/block]



Then from the left menu choose SSH:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/dff8c7d-image.png",
        null,
        ""
      ],
      "sizing": "400px"
    }
  ]
}
[/block]



Alternatively go to the web address directly:

`https://<app-name>.scm.azurewebsites.net/webssh/host`

This will only work if:

- SSH is listening on port 2222
- root user password is set to `Docker!`
- SSH config matches MS requirements

These settings are configured in the Budibase single image build for AAS so SSH should work if using our image.

#### Using the AZ CLI to connect via SSH to a container

```
az webapp create-remote-connection  
    --subscription 26r3d4ct3d-1111-c3p0-r2d2-1999f9787  
    --resource-group dev  
    -n budibase-aas &
```



You will then be prompted to login as the root user e.g.:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6f3b563-image.png",
        null,
        ""
      ],
      "sizing": "400px"
    }
  ]
}
[/block]



#### Logs

Logs should be available from the Azure Portal as shown below:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ac9c2d4-image.png",
        null,
        ""
      ],
      "sizing": "400px"
    }
  ]
}
[/block]