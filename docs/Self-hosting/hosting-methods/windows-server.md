---
title: Windows Server
excerpt: Deploy Budibase from a Windows Server environment
deprecated: false
hidden: false
metadata:
  title: ''
  description: kba_5hkqq
  robots: index
next:
  description: ''
---
This guide explains how to run Budibase when your infrastructure is based on Windows Server.

## Before you begin

Budibase containers are Linux images. For production, we recommend running Budibase on a Linux host.

Docker Desktop is useful on Windows 10/11 for local development, but Docker's documentation states that Docker Desktop is not supported on Windows Server.

## Option 1: Windows Server without a Linux VM

This can work, but is not our recommended production baseline.

Why:

1. Budibase is published as Linux container images
2. Docker Engine is available on Windows Server, but the native Windows Server path is centered on Windows containers
3. To run Budibase, you still need a Linux container backend/runtime layer

If your goal is a supported, maintainable Windows Server deployment, use Option 2.

## Option 2: Hyper-V + Ubuntu VM + Docker Engine (recommended for Windows Server)

This is the recommended path for Windows Server production environments.

### 1. Create a Linux VM with Hyper-V

Install and configure Hyper-V on your Windows Server host, then create an Ubuntu VM.

Minimum VM sizing:

* 2 vCPU
* 4GB RAM
* Persistent disk for `/data`

Recommended starting point:

* 4 vCPU
* 8GB RAM
* Persistent SSD-backed storage for `/data`

Use bridged/external networking so users can access Budibase over your network.

### 2. Install docker in the Ubuntu VM

Inside the Ubuntu VM:

```bash
sudo apt update
sudo apt install -y curl ca-certificates
```

Install Docker Engine and Docker Compose using Docker's Linux docs:

* [Docker Engine install](https://docs.docker.com/engine/install/)
* [Docker Compose install](https://docs.docker.com/compose/install/linux/)

### 3. Create budibase folder

```bash
mkdir -p ~/budibase
cd ~/budibase
```

### 4. Download Budibase Docker setup

```bash
curl -L https://raw.githubusercontent.com/Budibase/budibase/master/hosting/docker-compose.yaml -o docker-compose.yaml
curl -L https://raw.githubusercontent.com/Budibase/budibase/master/hosting/.env -o .env
```

If you are running in production, update the secrets in `.env` before starting.

### 5. Start Budibase

```bash
docker compose up -d
docker compose ps
```

Open Budibase:

```text
http://<server-ip>:10000
```

### 6. Open firewall/network access

Allow inbound TCP traffic to port `10000` on:

1. The Ubuntu VM firewall
2. Windows Server firewall (if applicable)
3. Any external firewall/security group

### 7. Update Budibase

```bash
docker compose pull
docker compose up -d
```

## Option 3: WSL2 + Ubuntu + Docker Desktop

This option is explicit and easy to follow for non-server Windows hosts that support Docker Desktop with WSL2 integration.

### 1. Install WSL2 + Ubuntu

Open PowerShell as Administrator:

```powershell
wsl --install -d Ubuntu
```

Restart if prompted.

Then verify:

```powershell
wsl -l -v
```

You should see Ubuntu running on version 2.

### 2. Install Docker Desktop

Install Docker Desktop:

* [Install Docker Desktop on Windows](https://docs.docker.com/desktop/setup/install/windows-install/)

During setup:

1. Enable **Use WSL 2 based engine**
2. Enable WSL integration

After install:

1. Open Docker Desktop
2. Wait until status is **Running**

### 3. Enable WSL integration (important)

In Docker Desktop:

1. Go to **Settings > Resources > WSL Integration**
2. Turn on **Ubuntu**
3. Click **Apply & Restart**

### 4. Open Ubuntu (not PowerShell)

Open Ubuntu via:

```powershell
wsl
```

You should now be in a Linux shell, for example:

```text
conor@PC:~$
```

### 5. Install dependencies in Ubuntu

```bash
sudo apt update
sudo apt install -y curl
```

### 6. Create Budibase folder

```bash
mkdir -p ~/budibase
cd ~/budibase
```

### 7. Download Budibase Docker setup

```bash
curl -L https://raw.githubusercontent.com/Budibase/budibase/master/hosting/docker-compose.yaml -o docker-compose.yaml
curl -L https://raw.githubusercontent.com/Budibase/budibase/master/hosting/.env -o .env
```

### 8. Start Budibase

```bash
docker compose up -d
docker compose ps
```

### 9. Open Budibase in your browser

```text
http://localhost:10000
```

### Daily usage (after setup)

```bash
wsl
cd ~/budibase
docker compose up -d
```

## Supported environment and sizing summary

* Windows Server without a Linux VM: can work if a Linux container backend is configured, but not the recommended baseline
* Windows Server with Hyper-V + Ubuntu VM + Docker Engine: **supported and recommended**
* Windows with WSL2 + Ubuntu + Docker Desktop: practical for local or non-server Windows hosts
* Minimum sizing for the Budibase runtime: **2 vCPU / 4GB RAM**
* Recommended starting point for production: **4 vCPU / 8GB RAM**, then scale based on workload and user count

## Related links

* [Docker Desktop on Windows (Windows 10/11)](https://docs.docker.com/desktop/setup/install/windows-install/)
* [Install Ubuntu on WSL2 on Windows](https://documentation.ubuntu.com/wsl/stable/)
* [Windows Server container runtime support policy](https://learn.microsoft.com/en-us/troubleshoot/windows-server/containers/support-for-windows-containers-docker-on-premises-scenarios)
* [Microsoft: Prep Windows for containers](https://learn.microsoft.com/en-us/virtualization/windowscontainers/quick-start/set-up-environment)
* [Budibase Docker Compose guide](doc:docker-compose)