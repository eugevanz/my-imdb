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
    saveFavs: thunk((actions, payload, { getStoreState }) => {
      if (localStorage.getItem('favourites') === null) {
        localStorage.setItem('favourites', JSON.stringify([payload]));
        actions.addFavourites(payload);
      } else {
        const fav = getStoreState().favourites
        fav.forEach(obj => {
          if (!fav.find(item => item.show.id === payload.show.id)) {
            actions.addFavourites(payload)
          }
        });
      }
    }),
    // Actions for searching
    titles: {},
    heroTITLE: {},
    addTitles: action((state, payload) => {
      state.titles[payload.show.id] = payload
      state.heroTITLE = state.titles[payload.show.id]
    }),
    clearTitles: action((state) => {
      state.titles = [];
    }),
    saveTitles: thunk((actions, payload) => Promise.all([
      fetch(`http://api.tvmaze.com/search/shows?q=${payload}`).then(response => response.json()).then(data => data)
    ]).then(values => {
      for (const key in values[0]) {
        if (Object.hasOwnProperty.call(values[0], key)) actions.addTitles(values[0][key])
      }
    }).catch(err => console.log(err)))
}
export default model;