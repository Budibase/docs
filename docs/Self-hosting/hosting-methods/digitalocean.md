---
title: DigitalOcean
excerpt: One-click Budibase setup using DigitalOcean
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: noindex
next:
  description: ''
  pages:
    - type: basic
      slug: hosting-settings
      title: Hosting settings
    - type: basic
      slug: reverse-proxy
      title: Reverse proxy
---
The simplest way to self-host Budibase is to use DigitalOcean. If you don't have an account, you can use our referral code to get $100 of free DigitalOcean credit!

* [Sign-up to Digital Ocean with the Budibase referral code](https://www.digitalocean.com/?refcode=0caaa6085a82\&utm_campaign=Referral_Invite\&utm_medium=Referral_Program\&utm_source=CopyPaste)

Once you've signed up, use our one-click offering on the DigitalOcean marketplace to deploy your Budibase server to DigitalOcean as shown below.

###  Create Droplet

In the Digital Ocean dashboard choose **Create** > **Droplet**

<Image width="300px" src="https://files.readme.io/8f6db01-image.png" />

Select the **Marketplace** tab and search for Budibase:

<Image width="300px" src="https://files.readme.io/b0bf116-image.png" />

Choose from the remaining options to suit your expected usage and budget.

After clicking the **Create Droplet** button 

![](https://files.readme.io/22134aa-image.png)

After launching wait a few minutes for Budibase to initialise. Take note of the IP address listed for the droplet and in a web browser visit port 10000 on the IP address e.g.

```
https://111.222.111.222:10000
```

The video below demonstrates how we can run Budibase on Digital Ocean. The video goes one step further showing how to expose the database for troubleshooting. Exposing the database is not necessary for normal operation and is only demonstrated here as an example of how to check the database. For security reasons do not leave the database port exposed during normal operation and ensure the port mapping of 5984:5984 is not in your docker-compose.yml file after troubleshooting.

<Embed url="https://www.youtube.com/watch?v=p3bBSf0QtrE" title="Running Budibase on Digital Ocean" favicon="https://www.google.com/favicon.ico" image="https://i.ytimg.com/vi/p3bBSf0QtrE/hqdefault.jpg" provider="youtube.com" href="https://www.youtube.com/watch?v=p3bBSf0QtrE" typeOfEmbed="youtube" html="%3Ciframe%20class%3D%22embedly-embed%22%20src%3D%22%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Fsrc%3Dhttps%253A%252F%252Fwww.youtube.com%252Fembed%252Fp3bBSf0QtrE%253Ffeature%253Doembed%26display_name%3DYouTube%26url%3Dhttps%253A%252F%252Fwww.youtube.com%252Fwatch%253Fv%253Dp3bBSf0QtrE%26image%3Dhttps%253A%252F%252Fi.ytimg.com%252Fvi%252Fp3bBSf0QtrE%252Fhqdefault.jpg%26key%3D7788cb384c9f4d5dbbdbeffd9fe4b92f%26type%3Dtext%252Fhtml%26schema%3Dyoutube%22%20width%3D%22854%22%20height%3D%22480%22%20scrolling%3D%22no%22%20title%3D%22YouTube%20embed%22%20frameborder%3D%220%22%20allow%3D%22autoplay%3B%20fullscreen%22%20allowfullscreen%3D%22true%22%3E%3C%2Fiframe%3E" />

* [DigitalOcean](https://cloud.digitalocean.com/login?i=09038e\&onboarding_origin=marketplace)
