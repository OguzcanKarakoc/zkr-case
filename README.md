# Project Zkr Case

## Instructions

To build the project, run:

```bash
npm run build
```

To preview the project, run:

```bash
npm run preview
```

## What I've Done

I've implemented all APIs, placing the API calls in the apis folder. This also makes it easier to test the APIs individually. Unfortunately, I didn't have time to write unit tests for them. Initially, I struggled a bit with Vuetify. The framework doesn't provide good insight into what's happening behind the scenes, which often leads to undesirable results. In contrast to libraries like shadcn ui, where components are added to your project via CLI.

The project uses Pinia as the state management library. I use this to globally invoke the snackbar functionality. Pinia is also the recommended state management library for Vue.js (formerly Vuex). Additionally, I've placed the forms in a separate folder so that rerenders on the @change event only update the form and not the entire card. Events are listened to, and the cards contain the visual parts. Pinia is also used for caching the countries API.

I also stored the keys inside the .env file. While normally you wouldn't push this to the repo, I believe in this instance it doesn't really matter.

## Things I Would Have Liked to Do

I could have stored the IP address in a store (like with the countries API), which would have prevented me from making the request again when navigating back. Of course, it would still fetch them again upon browser refresh.

One of the main challenges I encountered was working with the Vuetify framework, given that I had only three days to familiarize myself with it. Most of my time was spent getting acquainted with the framework's intricacies. One frustrating aspect was the lack of clear guidance on how to customize default styles for components. For instance, when attempting to modify the default button styling, I resorted to using SCSS to target the v-btn class, although I expected this to be achievable through the Vuetify config file. Additionally, the framework occasionally introduced unexpected elements in the HTML, such as hidden divs. The Vuetify documentation initially felt somewhat vague, but it improved over time. It functioned more as a reference point rather than a comprehensive guide, which meant that I spent a significant amount of time navigating through it to understand the framework's construction.

I opted to utilize the fetch API rather than incorporating a third-party library due to the straightforward nature of the APIs (no authentication was needed). Additionally, it's worth noting that the styles across three different URLs for ZKR differ slightly. While analyzing the main ZKR.nl website, I also examined the app.zkr.nl page to observe how buttons were styled. Interestingly, it appears that the auth.zkr.nl page utilizes Bootstrap, while the main ZKR.nl site does not employ Vuetify.

## New Things I Learned

As previously mentioned, I dedicated three days to familiarizing myself with the Vuetify framework, which proved to be a significant learning curve. In my opinion, the case itself is rather straightforward and could have been completed within a short timeframe. However, the main challenge arose from grappling with Vuetify's intricacies. Due to receiving an email on Monday, I was compelled to share the project in its current state. Alternatively, you can also view it on Vercel.

## Notes

Things that can technically be removed. The router now auto generates the routes and it makes use of layouts. This obviously is not necessary for such a small application.
