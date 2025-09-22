---
title: Accessing MinIO
excerpt: How to access MinIO
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 📘
>
> The following content applies to self-hosted deployments only

Budibase uses a MinIO object store, to store:

* Web front-end files
* Attachments

You have full access to MinIO, via the official client. Before you access the MinIO client, follow these steps:

1. Enable MinIO browsing. Your **docker-compose.yaml** should contain a setting called **MINIO\_BROWSER** - make sure its value is **on**.
2. If you made a change to your **docker-compose.yaml**, you will need to save the file and restart your cluster.
3. Now, find your access key and secret. Your **.env** file should contain these values: **MINIO\_ACCESS\_KEY**, and **MINIO\_SECRET\_KEY**.
4. You will also need to port forward. Your **.env** file should contain the value: **MINIO\_PORT**.

### Example config

```yaml yaml
minio-service:
	ports:
  		- "${MINIO_PORT}:9000"
  		- "9001:9001"
	environment:
  		MINIO_ROOT_USER: ${MINIO_ACCESS_KEY}
    	MINIO_ROOT_PASSWORD: ${MINIO_SECRET_KEY}
    	MINIO_BROWSER: "on"
```

Now you should be able to access MinIO via the URL:

```
your-budibase-host/minio
```

### Custom MinIO installation

This functionality is exclusively available on specific self-hosted installations, such as those utilising docker-compose and Kubernetes, it is not applicable to single-image installations.

To configure Budibase to utilise your custom MinIO installation, you must update all references to the **MINIO\_URL** within the compose script to point to the location of your custom MinIO installation. Additionally, the **MINIO\_ACCESS\_KEY** and **MINIO\_SECRET\_KEY** for all services must be updated to match those of the external MinIO service. After these changes, you can proceed to remove the MinIO service from the same script. You can find the **MINIO\_URL** variable discussed above in the compose script [here](https://github.com/Budibase/budibase/blob/89502accb255564bdffa93866d078c4249f27729/hosting/docker-compose.yaml#L14).
