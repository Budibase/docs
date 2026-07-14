---
title: Branching
excerpt: >-
  With the release of V3 of Budibase you now can branch your automations. This
  allows you to create more complicated automations, removing the linear
  limitation in previous versions.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
Branching lets you split an automation into multiple conditional paths instead of running every step in a single line.

Create a branch from an existing step by clicking the branching icon to the left of the `+` symbol. This starts with two paths, and you can add more with **Add Additional Branch**.

## Key features

1. **Multiple conditional paths**: Split one automation into two or more paths based on specific conditions.
2. **Add more branches**: Use **Add Additional Branch** to handle more than two outcomes.
3. **Configurable conditions**: Click **Add Condition** to open a [dynamic filtering](doc:dynamic-filter) form and define when a branch should run. If a branch has no condition, it always evaluates to true.
4. **Execution order**: Use the arrows in the branching step to change which branch is checked first.
5. **Delete branches**: Remove branches you no longer need. Only the first matching branch runs.

## Branching benefits

Branching is useful when different inputs need different actions. Instead of building long linear flows, you can route each case through its own path and keep the automation easier to maintain.

It also works well for more complex workflows. You can route customer requests by type, trigger different actions by product, or segment workflows by user attributes without duplicating the full automation.

## Branching Tutorial

In this tutorial, you will create a customer support ticketing system. Use branching to route tickets based on **type**, **urgency**, and **customer priority level**. This tutorial uses the internal Budibase data source.

1. Create a table called Support\_tickets
2. Create 5 fields

   1. Title - text field
   2. Ticket\_type - Single select
      1. Bug - default value
      2. Feature request
      3. Enquiry
      4. Other
   3. Urgency - Single select
      1. Low - default value
      2. Medium
      3. High
   4. Customer\_priority\_level - Single select
      1. Low - default value
      2. Medium
      3. High
   5. Notes - long text field

     The table setup screen should show the five fields listed above.
3. Click the **Automations** button shown in the table setup screen
4. Click **Generate automation**
   The automation picker opens.
5. Click **Row is created**
   Select the row-created trigger for the table.
6. You should now be redirected to the automations area with the correct automation type.
7. Set up the conditional branches

   1. Click the branching icon beside the + symbol
   2. Add an extra branch. You start with 2 by default.
   3. Click the Add condition button to add conditions

     1. The first will cover bugs that are medium or high where the customer level is high
         Use conditions for bug tickets where urgency is medium or high and customer priority is high.
      2. The second will be where any other bugs go through that don't match the above criteria
         Use a fallback branch for other bug tickets that do not match the first condition.
      3. The last will handle any non bug related ticket submissions
         Use a final branch for all non-bug tickets.
   4. Give each branch a descriptive name.
8. For this tutorial, output a different backend log for each branch. You can add any step here, such as sending email, updating a row, or triggering another automation.
   1. Add different text to each backend log.
9. Return to your data area and click screens in your table
10. Click **Generate app screen**
11. Click Generate on your selected table
12. Select the side panel layout, then click Done
13. This opens the generated app screen.
14. Click Publish in the top right, then click Publish again in the dialog.
15. Open the published app and create 3 different records
    1. The first is a high-priority bug for a high-priority customer. This should output the first branch's backend log.
    2. Create a bug that is high but for a medium-priority customer. This should output the second branch's backend log.
    3. Create a `support_type` value that is anything other than a bug. This should output the last branch's backend log.

### End result

The finished automation should route each ticket type to the correct branch and log a different backend message for each path.
