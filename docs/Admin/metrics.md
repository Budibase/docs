---
title: Metrics
excerpt: How to check usage metrics of a Budibase installation
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
A metrics endpoint has been added to the public API to enable monitoring of a Budibase self-hosted installation or your usage within the Budibase Cloud.

The metrics are returned in OpenMetrics format suitable for Prometheus and other monitoring tools that support this format.

## Endpoint

The metrics endpoint is not at the traditional `/metrics` address so the endpoint can be protected via an API key and to support each tenant in our Cloud offering. For this reason some adjustment may need to be made to your scraping path.

`https://myaccount.budibase.app/api/public/v1/metrics`

Changing the `myaccount` to match the address you specified when registering with Budibase. For self-hosted installations `myaccount.budibase.app` should be changed to match your server or IP address.

For illustraiton purposes an example `curl` to the endpoint is shown below for the local loopback address and a specific port number:

```
curl --request GET \
  --url http://127.0.0.1:10000/api/public/v1/metrics \
  --header 'x-budibase-api-key: 123456YourApiKeyHere'
```

##  Prometheus Scrape Config

The example below provides some guidance for configuring the scraping of Budibase metrics from Prometheus.

```
scrape_configs:
  - job_name: Budibase
    scrape_interval: 30s
    scheme: https
    metrics_path: api/public/v1/metrics
    static_configs:
      - targets: ['mybudibase.mydomain.com']
    basic_auth:
      username: "x-budibase-api-key"
      password: "NDIzNjRlN2NkYjU2EXAMPLEZDE3ZjdiZmYK"
```

Your [API key can be obtained](https://docs.budibase.com/docs/public-api) from the Budibase user interface. 

##  Notes

Some metrics can be 'unlimited', for example if you are self-hosting you can create an unlimited number of apps. Rather than returning `-1` for a quota limit we return the number `3000000`. This has been done to make it easier to evaluate thresholds for alerts. So if the current number of apps is `10` then an alert will not be triggered as this number is less than `3000000`. If we were to evaluate if `10` is less than `-1` alerts would be less convenient to manage. This threshold value does not limit any usage of Budibase and can be increased to meet your use-case.

##  Grafana Dashboard

TODO

##  Example Output

```
# HELP budibase_os_uptime Time in seconds that the host operating system has been up.
# TYPE budibase_os_uptime counter
budibase_os_uptime 14474.22
# HELP budibase_os_free_mem Bytes of memory free for usage on the host operating system.
# TYPE budibase_os_free_mem gauge
budibase_os_free_mem 4614631424
# HELP budibase_os_total_mem Total bytes of memory on the host operating system.
# TYPE budibase_os_total_mem gauge
budibase_os_total_mem 16663404544
# HELP budibase_os_used_mem Total bytes of memory in use on the host operating system.
# TYPE budibase_os_used_mem gauge
budibase_os_used_mem 12048773120
# HELP budibase_os_load1 Host operating system load average.
# TYPE budibase_os_load1 gauge
budibase_os_load1 2.28
# HELP budibase_os_load5 Host operating system load average.
# TYPE budibase_os_load5 gauge
budibase_os_load5 2.1
# HELP budibase_os_load15 Host operating system load average.
# TYPE budibase_os_load15 gauge
budibase_os_load15 1.94
# HELP budibase_tenant_user_count The number of users created.
# TYPE budibase_tenant_user_count gauge
budibase_tenant_user_count 1
# HELP budibase_tenant_app_count The number of apps created by a user.
# TYPE budibase_tenant_app_count gauge
budibase_tenant_app_count 1
# HELP budibase_tenant_production_app_count The number of apps a user has published.
# TYPE budibase_tenant_production_app_count gauge
budibase_tenant_production_app_count 0
# HELP budibase_tenant_dev_app_count The number of apps a user has unpublished in development.
# TYPE budibase_tenant_dev_app_count gauge
budibase_tenant_dev_app_count 1
# HELP budibase_tenant_db_count The number of couchdb databases including global tables such as _users.
# TYPE budibase_tenant_db_count gauge
budibase_tenant_db_count 5
# HELP budibase_quota_usage_apps The number of apps created.
# TYPE budibase_quota_usage_apps gauge
budibase_quota_usage_apps 1
# HELP budibase_quota_limit_apps The limit on the number of apps that can be created.
# TYPE budibase_quota_limit_apps gauge
budibase_quota_limit_apps 3000000
# HELP budibase_quota_usage_rows The number of database rows used from the quota.
# TYPE budibase_quota_usage_rows gauge
budibase_quota_usage_rows 0
# HELP budibase_quota_limit_rows The limit on the number of rows that can be created.
# TYPE budibase_quota_limit_rows gauge
budibase_quota_limit_rows 3000000
# HELP budibase_quota_usage_plugins The number of plugins in use.
# TYPE budibase_quota_usage_plugins gauge
budibase_quota_usage_plugins 0
# HELP budibase_quota_limit_plugins The limit on the number of plugins that can be created.
# TYPE budibase_quota_limit_plugins gauge
budibase_quota_limit_plugins 10
# HELP budibase_quota_usage_user_groups The number of user groups created.
# TYPE budibase_quota_usage_user_groups gauge
budibase_quota_usage_user_groups 0
# HELP budibase_quota_limit_user_groups The limit on the number of user groups that can be created.
# TYPE budibase_quota_limit_user_groups gauge
budibase_quota_limit_user_groups 0
# HELP budibase_quota_usage_queries The number of queries used in the current month.
# TYPE budibase_quota_usage_queries gauge
budibase_quota_usage_queries 1
# HELP budibase_quota_limit_queries The limit on the number of queries for the current month.
# TYPE budibase_quota_limit_queries gauge
budibase_quota_limit_queries 3000000
# HELP budibase_quota_usage_automations The number of automations used in the current month.
# TYPE budibase_quota_usage_automations gauge
budibase_quota_usage_automations 0
# HELP budibase_quota_limit_automations The limit on the number of automations that can be created.
# TYPE budibase_quota_limit_automations gauge
budibase_quota_limit_automations 3000000
```
