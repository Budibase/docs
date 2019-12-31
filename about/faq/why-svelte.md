# Why did we pick Svelte?

One goal of Budibase's front end is to be framework agnostic. We want people to be able to write their own components, however they please, when there are not pre-built options for them.

Svelte compiles down to vanilla javascript at build time - the Svelte library is not actually included in your build. This makes it perfect for us to build our standard components and librarys with. Components built with svelte have no dependencies, therefore there can be no version clashes.

Technically, we did not have to build the Budibase builder in Svelte - as the builder itself does not get packaged with a Budibase app. However, I felt it was wise to use Svelte anyway, for consistency and to build that experience.

Having used Svelte to build Budibase, whilst simultaneously using React in my day job \(consistently for about 2 years\), I can honestly say that I prefer Svelte and would have no problem choosing it again for future projects. The ecosystem is nowhere near as large as React, and the tooling not as mature - but i still prefer to develop with Svelte. A longer story, for another post!

