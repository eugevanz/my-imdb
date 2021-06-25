import { action, thunk, debug } from 'easy-peasy'

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
    favourites: JSON.parse(localStorage.getItem('favourites')) ?? {},
    addFAVE: action((state, payload) => {
      if (payload.id in state.favourites) {
        delete state.favourites[payload.id]
      } else { state.favourites[payload.id] = payload }
      localStorage.setItem('favourites', JSON.stringify(state.favourites))
    }),
    setFAVE: thunk((actions, payload) => {
      actions.addFAVE(payload)
    }),
    // Actions for searching
    titles: {},
    heroTITLE: {},
    addTitles: action((state, payload) => {
      state.titles[payload.id] = payload
    }),
    clearTITLES: action((state) => { state.titles = {} }),
    addHERO: action((state, payload) => {
      state.heroTITLE = payload
    }),
    saveTitles: thunk((actions, payload) => {
      actions.clearTITLES()
      Promise.all([
        fetch(`http://api.tvmaze.com/search/shows?q=${payload}`).then(response => response.json()).then(data => data)
      ]).then(values => {
        for (const key in values[0]) {
          const item = values[0][key]
          if (Object.hasOwnProperty.call(values[0], key)) {
            actions.addTitles(item.show)
            actions.addHERO(item.show)
          }
        }
      }).catch(err => console.log(err))
    })
}
export default model;