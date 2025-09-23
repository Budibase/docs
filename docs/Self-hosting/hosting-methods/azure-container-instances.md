---
title: Azure Container Instances
excerpt: Run Budibase on Azure with persistent storage on CIFS file share
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
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

<Embed url="https://www.youtube.com/watch?v=40EzlgftPo0" title="Running Budibase on Digital Ocean" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/40EzlgftPo0/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=40EzlgftPo0" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252F40EzlgftPo0%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253D40EzlgftPo0%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252F40EzlgftPo0%252Fhqdefault.jpg%26key%3D7788cb384c9f4d5dbbdbeffd9fe4b92f%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

<Embed url="https://www.youtube.com/watch?v=40EzlgftPo0" provider="youtube.com" href="https://www.youtube.com/watch?v=40EzlgftPo0" typeOfEmbed="youtube" title="undefined" />
