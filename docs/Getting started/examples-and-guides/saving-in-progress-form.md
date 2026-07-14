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

Assume you already have a *Create* [Form](doc:forms) with fields spread across multiple [Form steps](doc:form-steps), plus *back* and *next* buttons for navigation.

If <Glossary>End User</Glossary>s close the page and return later, they should resume where they left off. Save both the field values and the active step.

This recipe uses the [Spectrum meter](https://docs.budibase.com/docs/form-steps#spectrum-meter) as a step counter and [App state](doc:app-state) to cache progress.

<HTMLBlock>{`
<u><b style="font-size: 14px;">Challenge: </b></u><br />
<span style="position: relative; font-size: 24px; color: currentColor;">★☆☆☆☆</span>
`}</HTMLBlock>

***

## Steps

1. For each **Back Button**, click the *On click* button in the <Glossary>Settings Panel</Glossary> and add an **Update State** action.
   1. Set `FormStep` to `{{ subtract New Employee Form.Current Step 1 }}`
   2. Tick *Persist this value*

<Image align="center" src="https://files.readme.io/f5332964c1af16e0a1f56945a21295d55cf0ffe012fe376bfa8f71dd55657a18-Screenshot_2024-09-11_at_16.14.14.png" />

2. Add another **Update State** action.
   1. Set `FormValueStep1` to `{{ literal New Employee Form.Value }}`
   2. Tick *Persist this value*
   3. Click `Save`.
      > 📘 FormValue state
      >
      > Each form step needs its own *FormValue* state, so step two should be called `FormValueStep2`, and so on.
      >
      > The **literal** helper keeps the form value as an object rather than converting it to a string.

<Image align="center" src="https://files.readme.io/cf566470d922d4404ab9d5d51670dc9aaa4637f44c24c3a368eb584f78ccbe14-Screenshot_2024-09-11_at_16.14.49.png" />

3. Repeat the same setup for each **Next Button**, but set `FormStep` to `{{ add New Employee Form.Current Step 1 }}`.

> 📘 When to save form progress
>
> This approach will save the form value upon form step navigation, however you could do this [On Change](https://docs.budibase.com/docs/text-inputs#on-change) for more frequent saving, making sure to use the `{{ Field Value }}` binding.

4. When the form is submitted, clear the in-progress state. Select your **Submit Button** and add an **Update State** action.
   1. Set `FormStep` to `1`
   2. Tick *Persist this value*
5. Add another **Update State** action for the saved form values.
   1. Set `FormValueStep1` to *blank*
   2. Tick *Persist this value*
   3. Click `Save`.

<Image align="center" src="https://files.readme.io/0180a0e68468e42046dfc43a510d121bae03be6aaddbe731a22406a6fe7b889a-untitled_4.png" />

6. Click the **Form** component and set *Initial form step* to `{{ State.FormStep }}`.

<Image align="center" src="https://files.readme.io/9e3f46edd8913e63989ba39f71f5f1c28496a4cce68cb38ff19d8afc91120e00-Screenshot_2025-08-15_at_14.28.32.png" />

7. For each form field, set the <Glossary>Default Value</Glossary> to `{{ State.FormValueStep1.[Field Name] }}`.
   1. The state binding depends on the active step.

<Image align="center" src="https://files.readme.io/418fabd28dee34e126499b17207e6a4037ebbf4844e64cc380dea7477a31a296-Screenshot_2025-08-15_at_14.29.00.png" />

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
