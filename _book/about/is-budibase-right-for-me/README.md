# Is Budibase right for me?

The output of the Budibase builder is:

* A single page web application \(SPA\). This can also be a Progessive Web Application \(PWA\), which is on the roadmap for the near future.
* An HTTP Rest API, used to save your data objects and run your custom backend code.

On the backend, data is physically separated into "Instances". An "Instance" is an individual dataset.

Each of your "Customers" would normally have one instance, holding their data. One or more users would then be created against that instance.

You could also use instances for your "Environments", e.g. Dev, Test and Pre-prod instances.

If your application uses a "Shared database" model - where all of your users share one dataset - it may be a less appropriate fit for Budibase. An example of this might be a forum, or marketplace, where all users are accessing the same dataset. Budibase can still integrate with shared databases however.

The following sections give a few examples of how Budibase can be used in different scenarios.

