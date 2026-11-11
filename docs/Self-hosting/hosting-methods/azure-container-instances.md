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
Azure supports several container runtimes, including AAS, ACA, and ACI. This guide runs Budibase on ACI and stores data on an Azure Storage Account file share. Azure does not yet support NFS file shares here, so this example uses CIFS.

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
