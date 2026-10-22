---
title: Reverse Proxy
excerpt: How to configure a reverse proxy for Budibase
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hkxu
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
Use a reverse proxy to expose Budibase behind a domain name and enable HTTPS.

This page shows the key configuration points for `Caddy` and `NGINX`.

## Before you start

Make sure you have:

* Budibase running on the target host
* A domain name you control
* A reverse proxy installed or available to install

## Caddy

Caddy is the quickest option if you want automatic HTTPS.

1. Install Caddy.
2. Create a `Caddyfile` for your domain.
3. Add a reverse proxy rule that points to the Budibase service.
4. Start or restart Caddy.

Example:

```text
yourdomain.com

reverse_proxy localhost:10000
```

Use this when you want a simple path to HTTPS without managing certificates manually.

## NGINX

NGINX is the better fit when Budibase is one service behind a larger proxy setup.

Use a server block that:

* Listens on the desired domain or subdomain
* Proxies requests to the Budibase host
* Passes through the forwarded headers Budibase needs
* Sets an appropriate `client_max_body_size`

Example:

```nginx
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

## Common adjustments

If the proxy sits on another host, replace `localhost` with the correct upstream address.

If you want Budibase on a path rather than a whole domain, change the `location` block accordingly.

If you enable TLS through NGINX, either add certificates manually or use a certificate tool such as Certbot.

## Proxy buffer issues

If you see `502 Bad Gateway openresty` with external authentication, increase the proxy buffer sizes.

Example:

```nginx
server {
 proxy_busy_buffers_size   512k;
 proxy_buffers   4 512k;
 proxy_buffer_size   256k;
 # rest of nginx config #
}
```

## Referrer policy

Budibase can rely on the `Referer` header when matching a workspace app to a request path.

If your proxy strips or rewrites that header, Budibase may fail to find the correct workspace app.

Keep the header available for the Budibase domain and use a conservative referrer policy that still preserves matching.

## Related guides

* [Accessing CouchDB](doc:accessing-couchdb)
* [Accessing MinIO](doc:accessing-minio)
* [Hosting methods](doc:hosting-methods)
