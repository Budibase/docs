---
title: Snippets 🔒
excerpt: >-
  This feature is available for premium tier and above customers. Efficiently
  reuse JavaScript code via snippets.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
This premium feature empowers you to craft reusable JavaScript code that can be seamlessly referenced throughout your apps. These snippets are workspace-specific and can be utilised wherever JavaScript selection is available.

## Accessing snippets

To access this feature, navigate to any drawer opened by clicking on a lightning bolt icon. Within this drawer, you will initially be presented with text (Handlebars syntax) by default. To utilise JavaScript snippets, select the JavaScript option provided. Clicking on Snippets in the list of bindings will enable you to view and start creating your JavaScript snippets. The GIF below will demonstrate where to find and access these snippets.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6333b8bc17c6cab3107bd3e21b37ef473a08fa05313e979b786aa0141aeeded6-Screen_Recording_2025-08-13_at_07.21.28-optimised2.gif",
        "",
        "A gif showcasing how to access Javascript snippets"
      ],
      "align": "center"
    }
  ]
}
[/block]


## Creating a snippet

At the outset, you have two options since you don't have any snippets yet. You can either click the prominent `Create snippet` button or the `+` icon located in the top-right corner of the drawer. Both options will enable you to start creating your first snippet.

After clicking either of the above methods, the snippet drawer will now be open. An image illustrating this can be found below.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b53c938-Screenshot_2024-03-28_at_13.30.55.png",
        "",
        "Snippet drawer image"
      ],
      "align": "center"
    }
  ]
}
[/block]


Within this drawer, several key elements are worth noting. Firstly, there's the `Name` field. Utilise this field to assign a descriptive name to your snippet, such as `oddOrEven` for a function that checks if a value is odd or even.

Additionally, below this field is where you would write your JavaScript function that you wish to reuse throughout the apps in your workspace. Below is a simple function example that checks whether a passed-in value is odd or even, returning this information in text format as the output.

```javascript Javascript
return function(n) {
    if (n % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
```

After you have finished entering your snippet's code, click the 'Save' button. This action will redirect you back to the previous screen, displaying the new snippet that you have created.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bd2f072-Screenshot_2024-04-02_at_09.41.40.png",
        "",
        "How snippets appear in the ui after being added."
      ],
      "align": "center"
    }
  ]
}
[/block]


## Using a snippet

Now that you have set up a snippet, you can use it similarly to how [helpers](doc:helpers) functions are used. Simply click on a snippet within the list, and it will be inputted to your drawer. The only additional step you'll need to do is provide it with an argument. Using the previous example of `oddOrEven`, it would look something like this: `snippets.oddOrEven(argument)`. This will pass whatever value is set into the snippet function, execute it, and return a result based on the outcome of the value passed in. Within Budibase you should be able to use a binding and pass a value into the snippet function.

A simple example image of this can be found below.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b0df33a6e5eae1e40c994a82ee7b016df1d95f7f847a2817e63331d623872687-SCR-20250813-hmkz.png",
        "",
        "Showcasing how to use a simple snippet with a binding."
      ],
      "align": "center"
    }
  ]
}
[/block]