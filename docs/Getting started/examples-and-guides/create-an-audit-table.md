---
title: Create an Audit Table
excerpt: >-
  This guide explains how to implement a basic audit system in your app. The
  system tracks changes to the Patients table and logs those changes in a
  separate Patient audit table using automations.
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
> 🚧 Heavy JavaScript usage
>
> This guide uses a lot of JavaScript, which might be difficult to restructure if you have limited coding experience.

## Scenario

This guide shows you how to track updates made to patient records by creating an audit log. When a user edits a row in the Patients table, an automation compares the previous and updated data, identifies which fields changed, and writes those changes to the Patient audit table.

Use this to:

* Maintain a history of edits for compliance or review
* See which fields were changed, what the old value was, and what the new value is

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★★★★☆</span>
`}</HTMLBlock>

## Steps

1. Create the tables\
   In the Data area, create the following two tables:

   1. Patients
      1. First\_name - type text
      2. Last\_name - type text
      3. DOB - type date
      4. Phone - type text
      5. Email - type text
      6. Address - type long form text
      7. Last\_visit\_date - type date
      8. Audit\_logs - relationship (one to many)
   2. Patient audit

      1. Column\_name (field that changed) - type text
      2. Old\_value - type text
      3. New\_value - type text
      4. Action\_type (e.g. "UPDATE") - type single select
      5. Patient - type relationship (many to one)
      6. Changed\_at - type text and set the default value to `{{ now }}`

         <Image align="center" src="https://files.readme.io/3a77b364d8ca89c4b353948c21ca93916392e61ce45bf725cb75a54be2129df4-Screenshot_2025-07-09_at_08.47.37.png" />
2. Generate screens

   1. Go to the Design area
   2. Click the plus to add a new screen
   3. Select Table

      <Image align="center" src="https://files.readme.io/6898c8c7fb965f936d787df993f9202f52198eb8b429fe3c107b3a1ff5f9da00-Screenshot_2025-07-09_at_08.46.00.png" />
   4. Select Patients as the source for this new screen

      <Image align="center" src="https://files.readme.io/6fd7df2e40589bee07b10862b0477549d2d1cbe9ae4837a5cc14d646a04d814f-Screenshot_2025-07-09_at_08.46.20.png" />
   5. Then select New screen, this will generate the following;

      <Image align="center" src="https://files.readme.io/3b34e5a877cb532e780162b29edc30e816c9eb4df0645cf12e9ea98f744d8be1-Screenshot_2025-07-09_at_08.46.28.png" />

      1. A table component to view all patients with a create row button
      2. A form page were you can create new patient records
      3. A form page were you can edit existing records by clicking on a row in the table
3. Set Up Automation\
   Navigate to the Automation area and create a new automation:

   1. Click the `Updated by` trigger type for your automation

      <Image align="center" src="https://files.readme.io/82267a8cd94a78b697e4731651280d83c81476477611f14c928b1a699a305a8b-Screenshot_2025-07-09_at_08.48.55.png" />
   2. Select Patients as the source table it will watch for changes
   3. Add a new step called JavaScript

      <Image align="center" src="https://files.readme.io/61ea72ea522ea65822bcab0254c2041211d8fde36bce50f211c06551827afb99-Screenshot_2025-07-09_at_08.49.06.png" />
   4. Copy the below code into the automation step

      ```javascript
      const oldRow = $("trigger.oldRow");
      const newRow = $("trigger.row");

      const fieldsToCheck = [
        "First_name", "Last_name", "DOB",
        "Phone", "Email", "Address", "Last_visit_date"
      ];

      const changedFields = fieldsToCheck.reduce((changes, field) => {
        const oldVal = oldRow[field];
        const newVal = newRow[field];
        const normOld = normalize(oldVal);
        const normNew = normalize(newVal);

        if (!(normOld == null && normNew == null) && normOld !== normNew) {
          changes.push({
            Column_name: field,
            Old_value: oldVal == null ? "" : String(oldVal),
            New_value: newVal == null ? "" : String(newVal),
            Action_type: "UPDATE",
      			_id: $("trigger.row")._id
          });
        }
        return changes;
      }, []);

      return changedFields;

      function normalize(v) {
        if (v == null) return null;
        if (v instanceof Date) return v.toISOString();
        if (typeof v === "string") {
          const d = Date.parse(v);
          return !isNaN(d) ? new Date(d).toISOString() : v.trim();
        }
        return v;
      }

      ```

      This returns an array of changed fields in the format expected by the audit table.
   5. Add a Create row step with the source set to the Patient audit table

      <Image align="center" src="https://files.readme.io/3dae6b1a0a95be4ea62d1728fa9f54ca6c8de872c452e4dc1c263f71bfa6152a-Screenshot_2025-07-09_at_08.49.14.png" />

      1. Add looping
      2. Use the output value from the JavaScript step for the loop
      3. Add the looped outputs against each column
         1. | Columns      | Binded values                         |
            | :----------- | :------------------------------------ |
            | Column\_name | `{{  loop.currentItem.Column_name }}` |
            | Old\_value   | `{{  loop.currentItem.Old_value }}`   |
            | New\_value   | `{{ loop.currentItem.New_value }}`    |
            | Action\_type | `{{ loop.currentItem.Old_value }}`    |
            | Patient      | `{{ loop.currentItem.\_id }}`         |

## Example

**Automation Output**

<Image align="center" src="https://files.readme.io/018374bcd52440eb6fce0f36f92195b9c9818ebefc85cf88db3e1cdd771b3d61-Screenshot_2025-07-09_at_09.07.35.png" />

**Audit logs in app**

<Image align="center" src="https://files.readme.io/f6c53d21f0c5740d7d3025444e96c83ced149b3b8ebed026f48e382a4a0e3375-Screenshot_2025-07-09_at_09.08.01.png" />

## App export

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1HHuNFxrIg7b_QT5kiJIo4qtBmnh4jKbV')" style="width:100%"><i class="fa fa-download"></i> Download</button>

<style>
  /* Style buttons */
.btn {
  background-color: #3571de;
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 16px;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: #2e64c9;
}
</style>
`}</HTMLBlock>
