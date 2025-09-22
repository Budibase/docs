---
title: Azure App Service
excerpt: Run Budibase as an Azure App Service
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
The Budibase Docker repository includes a Docker image specifically designed for Azure App Service, featuring customizations for data storage that enable MinIO, one of our storage backends, to function with Azure Blob Storage.

### Create New App Service

In the [Azure Portal](https://portal.azure.com/), choose **App Services**, then **Create**:

![](https://files.readme.io/8c95e83d821132620c3c3baf71e23dd9e9ec723fa5eeacba4bc895eb98e644b3-image.png)

When creating the service choose values that meet your app requirements such as redundancy, resource group and SKU size, but set the following fields to these values:

* Publish: Choose **Docker Container**
* Operating System: **Linux**

![](https://files.readme.io/4b0edd35ecebaa7eea812c5222bbe09ebe766ca8e78eab6f976b83ae29fd78ca-image.png)

### Docker Settings

Choose to pull the image from Docker Hub, where Budibase has published it under the tag `budibase-aas`. We maintain versioned tags corresponding to the Budibase versions in our open-source repository, as well as `latest` and `experimental` tags. The `latest` tag reflects the most recently published version, while the `experimental` tag is updated periodically to incorporate performance, stability, or feature enhancements that may not yet (or may never) be included in the regular release pipeline. The `experimental`tag is not intended for production use and may be broken at any point.

![](https://files.readme.io/fb2432607f14c88e30d7c3a475bd7ac43837e23ed3adea267fd12c75b15d04c3-image.png)

### Networking and Monitoring

Proceed through the Networking, Monitoring and Tags sections accepting the defaults or amending to suit your requirements.

### Review and Create

On the Review tab choose the **Create** button.

![](https://files.readme.io/8859fb982edfc67ddca34359ab0af3585d81e219f7e594399540d3da27b0d10b-image.png)

The deployment will take some minutes to complete.

![](https://files.readme.io/b45d7739bed297894a0f38472c44a10e7b7c46616f8e5343ce568c390b019260-image.png)

<br />

Choose the **Go to Resource** button to get information about your deployment including the web address 

Visit the website address chosen in. For example, **Budibase**.

### Creating a Storage Service Account

Navigate to **Storage Accounts** and hit the plus icon in the top left corner, to create a new storage service account. If you already have a storage account that you’re willing to use for your Budibase deployment, feel free to skip the creation step and jump to the next section.

![](https://files.readme.io/21a7450d7111b666847277cadf33a11b5edc0b33d6cf55e065a67d87aecbf8c1-image.png)

Fill in the required details, and **note down the name of the storage account**. You will need it later.

![](https://files.readme.io/6aedb9bab053d011dd908da1217c5fc6927cff4b2f75923ae9cd66957fb33911-image.png)

After successfully creating the Storage Service Account, navigate to its dashboard and find the **Security + Networking** section in the drawer. Under it, you will find the **Access keys** tab.

![](https://files.readme.io/435bddb3dffc59d20d0524c4f1fa722baf199a92be46e93ac13074ee7e66d629-image.png)

Grab **key1** or **key2** value and keep it someplace since you will need it later on.

### Setting the environment variables

There are four required environment variables for the app to be able to launch and run, as well as, make sure that data persistence is achieved.

* `AZURE_STORAGE_ACCOUNT`
* `AZURE_STORAGE_KEY`
* `MINIO_ACCESS_KEY`
* `MINIO_SECRET_KEY`

For `AZURE_STORAGE_ACCOUNT` and `MINIO_ACCESS_KEY` use the name of the Storage account you just created, or reuse one of the existing ones in your account.

The `AZURE_STORAGE_KEY` and `MINIO_SECRET_KEY` must be set to the **key1** or **key2** value of the Storage account.

To set these variables, navigate to the App Service’s app panel and find the **Settings** tab in the drawer. Under it, there should be **Environment variables**.

![](https://files.readme.io/b18851e05cc79726739aab2193b37ac28ac6a7c190dea66fa20edfb0a7946b58-image.png)

At the very minimum, the following are the environment variables required to run Budibase in the App Service. The rest you see in the table below are managed and set by the App Service itself. For a complete list of supported environment variables refer to our [official documentation](https://docs.budibase.com/docs/hosting-settings).

![](https://files.readme.io/c970eae61b066ceaba871aa71053df7d62480ea968b97e3fb8b9945526a88296-image.png)

### Troubleshooting

#### Logs

Ensure that in the **Monitoring** section, under **App Service Logs**, the **Application Logging** toggle is set to **File System**. Otherwise, the **Log Stream** console will be unable to stream logs from the container.

![](https://files.readme.io/9f613090750f694cf91a84ac6c8a441adacebecfcdad41a206d17cc941265572-image.png)

After that, you can use the explorer, under **Log stream**.

![](https://files.readme.io/1d081cacdbdafcb3e6fd6f1152d8f1692a4cdf239f76662da5b40f829596f51d-image.png)
