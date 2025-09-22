---
title: Saving in progress form
excerpt: Allow your end users to pick up where they left off
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---
## Try it out!

> 👍
>
> Refresh the page to see the saved form progress.

<HTMLBlock>{`
<iframe width="800" height="600" frameborder="0" allow="clipboard-write;camera;geolocation;fullscreen" src="https://cprem.budibase.app/embed/guide-save-in-progress-form"></iframe>
`}</HTMLBlock>

## Scenario

This recipe will assume you have a *Create* [Form](doc:forms) with a number of fields added across multiple [Form steps](doc:form-steps), with *back* and *next* buttons configured to navigate between the steps.

If <Glossary>End User</Glossary>s close the page, and come back at a later point, you want them to be be able to pick up were they left off. Any field entries should be saved, as well as the active form step. 

This recipe will make use of the [Spectrum meter](https://docs.budibase.com/docs/form-steps#spectrum-meter) to act as a step counter, as well as [App state](doc:app-state) to cache the form progress.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: #000000;">★☆☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. For each of your **Back Buttons**, click on the *On click* button in the <Glossary>Settings Panel</Glossary>. `Add Action`: **Update State**
   1. Set value 'FormStep' `{{ subtract New Employee Form.Current Step 1 }}`
   2. Tick *Persist this value*

<Image align="center" src="https://files.readme.io/3a9d39f-Screenshot_2023-08-17_at_16.04.56.png" />

2. Add another **Update State** action
   1. Set value 'FormValueStep1' `{{ literal New Employee Form.Value }}`
   2. Tick *Persist this value*
   3. Click `Save`
      > 📘 FormValue state
      >
      > Each form step will need its own *FormValue* state, so form step two should be called 'FormValueStep2', etc.
      >
      > Also note the use of the **literal** helper. This tells Budibase that the form value should be treated as an object, and not a string. When using JavaScript bindings, original types are kept.

<Image align="center" src="https://files.readme.io/a4721ab-Screenshot_2023-08-17_at_16.52.49.png" />

3. Do the same for each of your **Next Buttons**, but the 'FormStep' binding in that case would be: `{{ add New Employee Form.Current Step 1 }}`

> 📘 When to save form progress
>
> This approach will save the form value upon form step navigation, however you could do this [On Change](https://docs.budibase.com/docs/text-inputs#on-change) for more frequent saving, making sure to use the `{{ Field Value }}` binding.

4. When the form is submitted, you will need to clear the in-progress state. Select your **Submit Button**, and click the actions button in the <Glossary>Settings Panel</Glossary>. `Add Action`: **Update State**
   1. Set value 'FormStep' to 1
   2. Tick *Persist this value*
5. Add another **Update State** action for the number of form steps
   1. Set value 'FormValueStep1' to *blank*
   2. Tick *Persist this value*
   3. Click `Save`

<Image align="center" src="https://files.readme.io/45fed60-Screenshot_2023-08-17_at_16.40.38.png" />

6. Click on the **Form** component, and in the <Glossary>Settings Panel</Glossary> set *Initial form step* to `{{ State.FormStep }}`

<Image align="center" src="https://files.readme.io/f67c8e9-Screenshot_2023-08-17_at_16.23.57.png" />

7. For each of your form fields, set the <Glossary>Default Value</Glossary> to `{{ State.FormValueStep1.[Field Name] }}`.
   1. Note that the state binding will depend on the active step

<Image align="center" src="https://files.readme.io/cecbb05-Screenshot_2023-08-17_at_17.08.41.png" />

<br />

***

## App export

<HTMLBlock>{`
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Full width -->
<button class="btn" onclick="window.open('https://drive.google.com/uc?export=download&id=1kTtNhwEj6zMBv-HJ1ELEyPA7_bXMeySU')" style="width:100%"><i class="fa fa-download"></i> Download</button>

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
