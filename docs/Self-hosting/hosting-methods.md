---
title: Install methods
excerpt: Use Budibase Cloud or run Budibase on your own self-hosted environment
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: >-
    What's next? Either dive into creating your first app in the Quickstart, or
    self-hosting instructions on the page relevant to your stack!
  pages:
    - type: basic
      slug: budibase-cli-setup
      title: Budibase CLI setup
    - type: basic
      slug: quickstart
      title: Quickstart
    - type: basic
      slug: digitalocean
      title: DigitalOcean
    - type: basic
      slug: docker-compose
      title: Docker
    - type: basic
      slug: kubernetes-k8s
      title: Kubernetes
---
When getting started with Budibase, you have two options:

1. Use Budibase Cloud - we host your apps. This is the easier, faster option. No docs are required to get started.
2. Self-host Budibase - you host your apps. You can find further instructions below.

## Host with Budibase Cloud

The onboarding process is simple, minimal, and takes seconds.  No docs are required, simply click the link below:

- [Get started with Budibase Cloud](https://account.budibase.app/register)

## Self-host Budibase

You can self-host Budibase in under 5 minutes. We understand a lot of users need to host their apps on their own systems. This is why we've put a lot of effort into simplifying the self-hosting process. You only have to set up your Budibase instance **once**. Once your instance is up and running, other members of your team can build and interact with Budibase simply by accessing the URL that you have hosted your Budibase instance on.

> 🚧 Self-hosting is not for everyone
> 
> When diving into the world of self-hosting, be sure to know what you're doing. Self-hosting means you have to understand how servers work, implement security, maintain the servers, and figure out what's wrong when something goes wrong. If you do not understand this or don't have the time to dive into understanding all of this, we highly recommend the <a href="https://account.budibase.app/register" target="_blank">cloud-hosted solution</a>.

To read more about self-hosting, check the [Docker](doc:docker-compose), [Kubernetes](doc:kubernetes-k8s) and [DigitalOcean](doc:digitalocean) pages.

## Unsupported Install Methods

While Budibase offers a fair bit of flexibility with deployment options, there are some methods that are currently unsupported. 

### AWS App Runner

AWS App Runner is a fully managed container application service offered by Amazon Web Services (AWS). 

At the time of writing, we  **do not** recommend using AWS App Runner to host Budibase. Budibase requires storage for the backend database and object store. Without persistent storage your data will be lost after each restart.

When Amazon introduce Elastic File System (EFS) support for AWS App Runner we will test and update this documentation.

For more information, please refer to the following resources:

1. [AWS App Runner NFS support Question](https://repost.aws/questions/QUc63tZ3CtR1OE4nrafYIP5A/do-app-runner-support-nfs)
2. [AWS App Runner Roadmap - EFS support](https://github.com/aws/apprunner-roadmap/issues/14)

## Running Budibase as a developer

Information about running Budibase from our source code can be found in our [contributing guide](https://github.com/Budibase/budibase/blob/HEAD/docs/CONTRIBUTING.md).