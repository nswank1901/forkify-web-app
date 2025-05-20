# forkify Project

Recipe application with custom recipe uploads.

This project was part of a comprehensive JavaScript course on Udemy by Jonas Schmedtmann. The goal was to apply all of the modern ES6+ JavaScript concepts that I learned into a real-world context.

What I built:
A single-page web application that lets users search for recipes, view instructions, bookmark favorites, and upload their own recipes.

What I learned:
Modern JavaScript ES6+: Learned features like modules, async/await, and Promises to build cleaner, more readable code.

API Integration: Connected to a public recipe API using fetch, handling things like loading states and error messages.

MVC Architecture: Separated the app into Model, View, and Controller parts. The Model handled data and state, Views took care of the UI, and the Controller facilitated communication between the Model and the Views.

Publisher Subscriber Pattern: Manage communication between the UI and app logic. For example, when a user submitted a search or clicked to change pages, the corresponding View (like searchView or paginationView) published an event. The Controller subscribed to those events and responded by fetching data from the Model, then re-rendering the UI. This decoupling made the codebase cleaner and more maintainable, as each component had it's own job.

Building and Deployment: Used Parcel to bundle the app for production and deployed it to Netlify.

Improvements and Feature Ideas:
- Ability to sort search results by cooking duration or number of ingredients.
- Improve input fields for the upload form: separate in multiple fields and allow for more than 6 ingredients