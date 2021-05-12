# Assignment for the web developer position at Hyperboliq

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Application spec description

Create a small responsive React web application that searches for movies using Rapid API IMDB "by search" API and lists search results in a selectable list that can be toggled to a card layout with a more information display from the IMDB "By ID or Title" API on selection and a favourites list.

## Resources used

React Bootstrap components [https://react-bootstrap.github.io/]
RapidAPI for IMDB, specifically: 
- [ ]  Movies/TVShows Data (IMDB) (movies-tvshows-data-imdb.p.rapidapi.com) to get an ID from a title query
- [ ]  Movie Database (IMDB Alternative) API Documentation (movie-database-imdb-alternative.p.rapidapi.com) to get details of the queried show using an ID
React easy-peasy for state management and storing favourites in localStorage. [https://easy-peasy.vercel.app/]

## App layout

App loads with a search bar and a view favourites button. The favourites button opens a list of favourites.
If the user selects a movie, a modal shows containing "more information" from the "By ID or Title API" and an "add to favourites" button.

Only React functional components and hooks are used, also, the Fetch API (JavaScript) is used for all API calls

## Challenges

LocalStorage is possible with state management (easy-peasy in particular) according to easy-peasy API documentation, and requires further study. So far I have had situations where the dictionary was not created, data was lost, data was unretrievable: this could be due to any number of limitations (not excluding understanding).
In hindsight, maybe producing a completely asynchonous application (save the localStorage calls, because they block the main thread) might have been a better solution. I imagine this approach could be cumbersome and error prone. 
- Until this line is removed, assume favourites cannot be ammended.
Although, saving the different views doesn't present any problems. Leaving me to think the problem could be converting the favourites array to a string and vice versa

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
