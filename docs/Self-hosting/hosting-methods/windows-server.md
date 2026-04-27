---
title: Windows Server
excerpt: Deploy Budibase from a Windows Server environment
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This guide explains how to run Budibase when your infrastructure is based on Windows Server.

## Before you begin

Budibase containers are Linux images. For production, we recommend running Budibase on a Linux host.

Docker Desktop is useful on Windows 10/11 for local development, but Docker's documentation states that Docker Desktop is not supported on Windows Server.

## Option 1: Windows Server without a Linux VM

This is not a supported production path for Budibase.

Why:

1. Budibase is published as Linux container images.
2. Docker Desktop (the common way to run Linux containers on Windows) is not supported on Windows Server.

If your goal is a supported, maintainable Windows Server deployment, use a Linux VM runtime approach.

## Option 2: WSL2 + Ubuntu + Docker Desktop

This option is explicit and easy to follow for Windows hosts that support Docker Desktop with WSL2 integration.

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

If you are running in production, update the secrets in `.env` before starting.

### 8. Start Budibase

```bash
docker compose up -d
docker compose ps
```

### 9. Open Budibase in your browser

Go to:

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

* Windows Server without a Linux VM: **not supported** for Budibase production deployments.
* Windows with WSL2 + Ubuntu + Docker Desktop: practical for local or non-server Windows hosts.
* For Windows Server production environments, use a Linux VM runtime approach.
* Minimum sizing for the Budibase runtime: **2 vCPU / 4GB RAM**.
* Recommended starting point for production: **4 vCPU / 8GB RAM**, then scale based on workload and user count.

## Related links

* [Docker Desktop on Windows (Windows 10/11)](https://docs.docker.com/desktop/setup/install/windows-install/)
* [Microsoft: Prep Windows for containers](https://learn.microsoft.com/en-us/virtualization/windowscontainers/quick-start/set-up-environment)
* [Budibase Docker Compose guide](doc:docker-compose)
