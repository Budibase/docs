---
title: Linode
excerpt: Install Budibase on a Linode server
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hkle
  image: https://files.readme.io/63931f3-1-Linode-Marketplace.jpg
  robots: index
next:
  description: ''
---
### Launch Marketplace App

After logging in to your Linode account, choose [Marketplace](https://cloud.linode.com/linodes/create?type=One-Click) from the menu and select the Budibase app.

Set the Budibase app options:

* **Budibase Port**: The default port is 80 but you can choose another port number if you plan to add a load balancer or proxy in front of your installation
* **Select an Image**: The base operating system you would like Budibase installed on. Choose from Debian 11 or Ubuntu 22.04
* **Region**: Choose to launch the app in a region close to your intended audience

Choose a plan to match your requirements and budget:
Provide a **Linode Label** such as the domain name you plan to use, set a **Root Password**, and add your public **SSH Key** if you want SSH access.

The remaining choices are optional. Consider enabling **Backups** if you do not have another backup strategy.

When the options are set, click **Create Linode**.

You will see a summary of the server and a status showing that it is provisioning. Wait for provisioning to complete.

Note that the summary shows:

* **IP Addresses** of your server. Use this IP address in a browser to access Budibase. If you already have a domain name, add a DNS A record that points to this IP address.
* **SSH Access** command you can use from a terminal to connect to the server.

When the status is **Running**, wait a few more minutes for the Budibase installation to complete.

Then open the IP address or domain in a browser to create the initial admin user.

Sign in as the admin user to start creating Budibase applications.

### Further Configuration

If you want to inspect the installation, SSH to the server using the IP address and SSH key you provided during setup. Running `docker ps` shows the Budibase containers.

You may wish to examine the files under `/opt/budibase`.

* `docker-compose.yml` Use this file for future management or customisation of your Budibase install.
* `.env` The `.env` file contains the passwords used to access various Budibase components.

### SMTP

By default, Linode blocks connections to external SMTP ports. Open a support ticket with Linode if you need SMTP access.

### Backups

Backing up your data is beyond the scope of this introduction, but you should store regular copies of your Docker volumes under `/var/lib/docker/volumes`.

### Security

Server security is beyond the scope of this introduction, but you should regularly apply operating system updates with `apt update && apt upgrade`. You should also add a firewall and intrusion prevention tools such as fail2ban.

### HTTPS

Although beyond the scope of this introduction, there are several ways to add HTTPS, including Linode NodeBalancer, Cloudflare, or Let’s Encrypt with an NGINX proxy on port 443.
