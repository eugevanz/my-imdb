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

## State Management

easy-peasy handles retreiving the Views and Favourites values from localStorage. It is also responsible for setting these values to localStorage, and making them available to the rest of the app via a stored state.
The same also stores temporarily the search results from the APIs.
The state model is made available app-wide with a provider in the app's index file.

## Outstanding challenges

A toast component is available for displaying messages when an "+ Add to favourites" process is triggered, but has not been implemented
### Work around
Within the modal component, the current show/movie ID is compared to the IDs within the Favourites database: if the ID exists therein, the "+ Add to favourites" button is removed.

Current there is no implementation to clear the favourites list.

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
