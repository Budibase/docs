# Web Server Architecture

In a few statements...

* A single Budibase web server can host multiple Budibase applications
* A Budibase application can support multiple concurrent versions 
* A Budibase application will have multiple, physically separated instances \(databases\)
* At a single point in time, an instance will be of a particular version of an application
* Each instance will have one or more users attached
* The Budibase admin application \(a single instance\), will store data about all applications, versions, users and sessions

![Budibase web server architecture](../.gitbook/assets/architecture.jpg)

