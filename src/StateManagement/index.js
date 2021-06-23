import { action, thunk, debug } from 'easy-peasy';
// import http from 'https';

let model = {
    // Actions for views
    views: localStorage.getItem('view'),
    setViews: action((state, payload) => {
      state.views = payload;
      console.log(debug(state.views));
    }),
    saveViews: thunk((actions, payload) => {
      localStorage.setItem('view', payload);
      actions.setViews(localStorage.getItem('view'));
    }),
    // Actions for Favourites
    // favourites: JSON.parse(localStorage.getItem('favourites')),
    favourites: localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [],
    addFavourites: action((state, payload) => {
      state.favourites.push(payload);
      localStorage.setItem('favourites', JSON.stringify(state.favourites));
    }),
    saveFavs: thunk((actions, payload, { getState }) => {
      if (localStorage.getItem('favourites') === null) {
        localStorage.setItem('favourites', JSON.stringify([payload]));
        actions.addFavourites(payload);
      } else {
        actions.addFavourites(payload);
      }
    }),
    // Actions for searching
    titles: [],
    addTitles: action((state, payload) => {
      state.titles = payload;
    }),
    clearTitles: action((state) => {
      state.titles = [];
    }),
    saveTitles: thunk((actions, payload) => Promise.all([
      fetch(`http://api.tvmaze.com/search/shows?q=${payload}`).then(response => response.json()).then(data => data)
    ]).then(values => {
      actions.addTitles(values[0])
    }))
}
export default model;