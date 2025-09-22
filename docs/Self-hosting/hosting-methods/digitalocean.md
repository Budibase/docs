---
title: DigitalOcean
excerpt: One-click Budibase setup using DigitalOcean
deprecated: false
hidden: false
metadata:
  title: ''
  description: ''
  robots: index
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

- [Sign-up to Digital Ocean with the Budibase referral code](https://www.digitalocean.com/?refcode=0caaa6085a82&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=CopyPaste)

Once you've signed up, use our one-click offering on the DigitalOcean marketplace to deploy your Budibase server to DigitalOcean as shown below.

###  Create Droplet

In the Digital Ocean dashboard choose **Create** > **Droplet**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8f6db01-image.png",
        null,
        ""
      ],
      "sizing": "300px"
    }
  ]
}
[/block]



Select the **Marketplace** tab and search for Budibase:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b0bf116-image.png",
        null,
        ""
      ],
      "sizing": "300px"
    }
  ]
}
[/block]



Choose from the remaining options to suit your expected usage and budget.

After clicking the **Create Droplet** button 

![](https://files.readme.io/22134aa-image.png)

After launching wait a few minutes for Budibase to initialise. Take note of the IP address listed for the droplet and in a web browser visit port 10000 on the IP address e.g.

```
https://111.222.111.222:10000
```

The video below demonstrates how we can run Budibase on Digital Ocean. The video goes one step further showing how to expose the database for troubleshooting. Exposing the database is not necessary for normal operation and is only demonstrated here as an example of how to check the database. For security reasons do not leave the database port exposed during normal operation and ensure the port mapping of 5984:5984 is not in your docker-compose.yml file after troubleshooting.


[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fp3bBSf0QtrE%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dp3bBSf0QtrE&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fp3bBSf0QtrE%2Fhqdefault.jpg&key=7788cb384c9f4d5dbbdbeffd9fe4b92f&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=p3bBSf0QtrE",
  "title": "Running Budibase on Digital Ocean",
  "favicon": "https://www.google.com/favicon.ico",
  "image": "https://i.ytimg.com/vi/p3bBSf0QtrE/hqdefault.jpg",
  "provider": "youtube.com",
  "href": "https://www.youtube.com/watch?v=p3bBSf0QtrE",
  "typeOfEmbed": "youtube"
}
[/block]




- [DigitalOcean](https://cloud.digitalocean.com/login?i=09038e&onboarding_origin=marketplace)