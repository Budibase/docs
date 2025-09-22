---
title: Best Practise
excerpt: >-
  This is a page dedicated to best practises whenever building out your
  applications.
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
### Design Area

### Data Providers

When building out your screens, it's easy to start adding multiple data providers. However, each additional data provider sends another request to the server. The more data providers you add to a page, the slower it will eventually become. With the introduction of Global Bindings, it’s likely that you no longer need multiple data providers. Instead, you can have a main data provider as the source of truth and use it to support additional elements, such as repeaters.

**Example**: In a ticketing system, you might have a data provider that fetches all tickets. Instead of having separate data providers for ticket details, comments, and attachments, use a single data provider for the tickets and bind the necessary information to the relevant elements. This reduces the number of server requests and improves performance.

### Repeaters & Repeater Blocks

Nesting repeaters and data providers inside each other can also cause issues, as can nesting multiple repeater blocks. Repeaters are used to loop through arrays of data or objects. Performance can vary when nesting data providers inside these components. It is advisable to avoid nesting these components as much as possible. Nesting a data provider inside a repeater can cause significant performance drops because the data provider requests data from the server each time it is looped through. For example, if a repeater is looping through 1,000 records with a data provider inside, a request to the server will be sent on each loop iteration. In extreme cases, this may even crash your browser.

**Example**: In a risk assessment app, you might have a list of risks displayed using a repeater. If each risk item in the repeater includes a data provider to fetch additional details, the performance can degrade significantly. Instead, fetch all the risk details in one go using a single data provider and bind the data to the repeater. This way, you avoid multiple server requests and enhance the app's performance.

## Best Practices

You can likely avoid these performance issues by taking a step back, considering your end goal, and using Global Bindings with additional filtering. This approach can help you achieve the same goal in a more performant way.

### General Tips:

- **Consolidate Data Providers**: Use a single data provider where possible and filter or manipulate data locally.  
  Minimise Nesting: Avoid nesting repeaters and data providers within each other. Instead, fetch all necessary data upfront and then bind it to the UI components.
- **Optimise Data Requests**: Limit the amount of data requested by using filters and pagination to handle large datasets efficiently.

By implementing these best practices, you can significantly improve the performance of your applications, providing a smoother and more responsive user experience.