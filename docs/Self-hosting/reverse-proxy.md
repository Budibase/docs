---
title: Reverse Proxy
excerpt: How to configure a reverse proxy for Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
  pages:
    - type: basic
      slug: accessing-couchdb
      title: Accessing CouchDB
    - type: basic
      slug: accessing-minio
      title: Accessing MinIO
---
One of the main things you will want to set up before putting your Budibase platform into production use is a proxy, which can control access to the cluster via a domain (removing the need for a port number and so on) as well as allow the use of HTTPS for a domain that you own. In this section, we will provide some configuration options to get this up and running easily with [NGINX](https://www.nginx.com/) or [Caddy](https://caddyserver.com/docs/automatic-https).

[block:html]
{
  "html": "<div style=\"padding:56.25% 0 0 0;position:relative;\"><iframe src=\"https://player.vimeo.com/video/719112466?h=aac2c63c18&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" frameborder=\"0\" allow=\"autoplay; fullscreen; picture-in-picture\" allowfullscreen style=\"position:absolute;top:0;left:0;width:100%;height:100%;\" title=\"Reverse proxy\"></iframe></div><script src=\"https://player.vimeo.com/api/player.js\"></script>"
}
[/block]



***



## Caddy

Caddy is an open-source web server with automatic HTTPS written in Go. If you want to get HTTPS up and running on your Budibase instance as quickly as possible with caddy, go through the following steps.

### Install Caddy

Follow the [Caddy installation instructions](https://caddyserver.com/docs/install).  
Once you have done this, you should be able to check that you have Caddy available on your machine, using the following command.

```
caddy version
```



Next, [create a Caddyfile](https://caddyserver.com/docs/quick-starts/caddyfile) with your domain in it - basically, create a text file named Caddyfile (no extension), then add your domain to the file.

```
yourdomain.com

reverse_proxy localhost:10000
```



To set up HTTPS on your domain, you can simply restart the caddy server:

```
caddy stop
caddy start
```



That's it! Full HTTPS and reverse proxy setup with Caddy and Budibase. Visit your domain and you will see your newly secured budibase instance with a custom domain.

***



## NGINX

Please note, this section assumes some knowledge of NGINX installation, setup, and configuration. Information about NGINX can be found here: 

- [installation](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/)
- [setup](https://docs.nginx.com/nginx/admin-guide/basic-functionality/runtime-control/)
- [configuration](https://docs.nginx.com/nginx/admin-guide/basic-functionality/managing-configuration-files/)

Our recommendation for running Budibase is a "many app one server" approach, where many different apps can be deployed to the same self-hosted Budibase platform.  Below we have detailed a basic method for getting Budibase up and running behind a reverse proxy, which you can then update to add into an existing configuration or add SSL information.

Here is a basic reverse proxy configuration that will simply pass all requests from a domain/sub-domain/path to your Budibase platform.

```
# Budibase

server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_http_version 1.1;
        proxy_pass http://localhost:10000;
    }
    
    client_max_body_size 50m;
}
```



In this configuration, all that needs to be updated for this to work is where the Budibase platform has been hosted. If it is hosted on a different machince, replace **localhost** with the correct address.

There are a few ways this can be extended/altered:

1. This is just a basic version which will proxy on any requests to your domain/sub-domain to the Budibase platform, you can change the **server_name** to suit your needs.
2. Where **location /** has been set you can change the slash to a pathname if you desire to have your Budibase app server running on a specific path rather than the whole domain or a sub-domain.
3. Lastly if you want to make use of HTTPS/TLS you can either configure this basic configuration to re-direct traffic to HTTPS and then add your certificate, or you can use [certbot-auto](https://certbot.eff.org/) to automatically generate and look after the certificates for your domain!



## Proxy Buffer Settings

Some users have reported problems when using a reverse proxy such as Nginx Proxy Manager and external authentication (e.g. OpenID). Users may see the error  `502 Bad Gateway openresty`

In this case amending the proxy buffer size may be helpful. Example config is shown below for Nginx:

```
server {
 proxy_busy_buffers_size   512k;
 proxy_buffers   4 512k;
 proxy_buffer_size   256k;
 # rest of nginx config #
}
```