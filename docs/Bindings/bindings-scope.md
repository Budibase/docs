---
title: Bindings scope
excerpt: ''
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
When searching for bindings in the builder, you will notice that they are generally scoped at the global level. 

### Component bindings

If a component exposes a context, it will be available to bind anywhere in your application. All component bindings are prefixed with the components name, followed by the context and any specific name for the binding itself.  
e.g. `{{ MyFormBlock.Fields.FirstName }}`

#### Component contexts

- Rows (Schema)  
  Internal data source bindings like `Rows`, `Extra Info`, `Rows Length`, `Schema`, `Page Number`  
  `{{ Table Block.Rows }}` - returns all rows in the current page.
- Fields (Form)  
  An explicit value present in your form field  
  `{{ Multi-step Form Block.Fields.City }}`
- Static  
  Some components expose internal state data. For example, if you wanted to know which step your Multi-step Form Block was on, you can use the following.  
  `{{ Multi-step Form Block.Current Step }}`

### App bindings

- [URL Parameters](https://docs.budibase.com/docs/url-parameters),  
  Extract url parameter and integrate them into your application.
- [State](https://docs.budibase.com/docs/app-state),  
  Localstorage backed store with app-wide reach.
- Current User,  
  Details of the currently authenticated user in the application.
- Device,  
  Screen and app theme details.
- Role,  
  Available user roles in the system
- [Helpers](https://docs.budibase.com/docs/helpers)  
  Util functions for enhancing your bindings

#### Local bindings

One exception to the global binding rule is the [Repeater](https://docs.budibase.com/docs/repeater) component. The Row bindings provided within Repeater component are scoped locally against as specific row.

For example `{{ My Repeater.Employees.City }}` refers specifically to the current row being iterated over in the `Employees` table. The `City` field name will resolve only the explicit value for `City` on that row.

### Scope in action

Below is an example of global bindings in action. The data configured in the `Table Block` is referenced directly by the `Stat Card` in the `Details side panel` without any need to rely on component nesting. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7a6fe3f-Screenshot_2024-01-29_at_14.25.40.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


The JS binding used within the `Stat card` references the `{{Table Block.Rows}}` binding directly. Any available bindings should appear in the bindings drawer or autocomplete menu.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/533c07b-Screenshot_2024-01-29_at_14.44.48.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Here's the snippet:

```javascript
const data = $("Table Block.Rows") || [];
const sum = data.reduce((acc, current) => {
  acc += current.Cost
  return acc;
}, 0);

return ($("Details form block.Fields.Cost") / sum * 100).toFixed(1) + "%"

```

> 📘 Reusing datasources via global bindings
> 
> Ideally you should try to minimise the number of data providers on your screen for performance reasons, particularly for the same datasource query/table.
> 
> Reusing datasources via global bindings is a good way to optimise your applications!