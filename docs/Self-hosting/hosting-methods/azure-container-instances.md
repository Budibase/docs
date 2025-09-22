---
title: Azure Container Instances
excerpt: Run Budibase on Azure with persistent storage on CIFS file share
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
---
Azure supports several container runtimes including AAS, ACA and ACI. In this guide we will run Budibase on the ACI service persisting data to an Azure Storage Account File Share. The File Share will be a CIFS file share as NFS file shares are not yet supported on Azure. 

Set some environment variables:

```
ACI_RESOURCE_GROUP="dev"  
ACI_STORAGE_ACCOUNT_NAME="budibasedev"  
ACI_LOCATION="westeurope"  
ACI_SHARE_NAME="mybudibase"
```



You may already have a storage account that you can use but if not, you can create a storage account with:

```
az storage account create  
    --resource-group $ACI_RESOURCE_GROUP  
    --name $ACI_STORAGE_ACCOUNT_NAME  
    --location $ACI_LOCATION  
    --sku Standard_LRS
```



Create a file share:

```
az storage share create  
    --name $ACI_SHARE_NAME  
    --account-name $ACI_STORAGE_ACCOUNT_NAME
```



Get the storage key:

```
ACI_SHARE_KEY=$(az storage account keys list  
    --resource-group $ACI_RESOURCE_GROUP  
    --account-name $ACI_STORAGE_ACCOUNT_NAME  
    --query "[0].value"  
    --output tsv)
```



Create the container:

```
az container create  
--resource-group $ACI_RESOURCE_GROUP  
--name mybudibase  
--image registry.hub.docker.com/budibase/budibase-aas:latest  
--ip-address public  
--dns-name-label mybudibase  
--cpu 2  
--memory 4  
--port 80  
--azure-file-volume-account-name $ACI_STORAGE_ACCOUNT_NAME  
--azure-file-volume-account-key $ACI_SHARE_KEY  
--azure-file-volume-share-name $ACI_SHARE_NAME  
--azure-file-volume-mount-path "/home"
```

If you receive any errors you may want to try substituting the forward slash for a backslash i.e. `/home` becomes `\home`


[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F40EzlgftPo0%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D40EzlgftPo0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F40EzlgftPo0%2Fhqdefault.jpg&key=7788cb384c9f4d5dbbdbeffd9fe4b92f&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=40EzlgftPo0",
  "title": "Running Budibase on Digital Ocean",
  "favicon": "https://www.google.com/favicon.ico",
  "image": "https://i.ytimg.com/vi/40EzlgftPo0/hqdefault.jpg",
  "provider": "youtube.com",
  "href": "https://www.youtube.com/watch?v=40EzlgftPo0",
  "typeOfEmbed": "youtube"
}
[/block]





[block:embed]
{
  "url": "https://www.youtube.com/watch?v=40EzlgftPo0",
  "provider": "youtube.com",
  "href": "https://www.youtube.com/watch?v=40EzlgftPo0",
  "typeOfEmbed": "youtube"
}
[/block]