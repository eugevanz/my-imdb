import { action, thunk, debug } from 'easy-peasy';
// import http from 'https';

let model = {
    // Actions for toast
    toast: false,
    showToast: action((state, payload) => {
        state.toast = payload;
    }),

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
    favourites: [],
    addFavourites: action((state, payload) => {
        console.log(debug(state.favourites));
        if (typeof state.favourites !== Array) {
            localStorage.setItem('favourites', JSON.stringify([]));
            state.favourites = JSON.parse(localStorage.getItem('favourites'));
            state.favourites.push(payload);
        } else {
            state.favourites.push(payload);
        }
    }),
    saveFavs: thunk((actions, payload, { getState }) => {
        actions.addFavourites(payload);
        localStorage.setItem('favourites', JSON.stringify(getState().favourites));
    }),

    // Actions for searching
    titles: [],
    addTitles: action((state, payload) => {
        state.titles.push(payload);
    }),
    clearTitles: action((state) => {
        state.titles = [];
    }),
    saveTitles: thunk((actions, payload) => {
        fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-by-title&title=${payload}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '5579b18909msh9f8108f3877c023p1d645bjsnc2fcc4ddf0c6',
                'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
                'useQueryString': true
            },
        }).then(response => response.json()).then(titles => {
            (titles.movie_results).forEach(element => {
                fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${element.imdb_id}&r=json`, {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': '5579b18909msh9f8108f3877c023p1d645bjsnc2fcc4ddf0c6',
                        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
                        'useQueryString': true
                    },
                }).then(response => response.json()).then(details => {
                    actions.addTitles({imdb_id: details.imdbID, description: details.Plot, genre: details.Genre, imdb_rating: details.imdbRating, release_date: details.Released, runtime: details.Runtime, stars: details.Actors, title: details.Title, director: details.Director, poster: details.Poster});
                }).catch((error) => {
                    console.error('Error:', error);
                });
            });
        }).catch((error) => {
            console.error('Error:', error);
        });
    }),
};

// function getFullDetails(imdb_id) {
//     let fulldetails = {};

//     fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${imdb_id}&r=json`, {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '5579b18909msh9f8108f3877c023p1d645bjsnc2fcc4ddf0c6',
//             'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
//             'useQueryString': true
//         },
//     }).then(response => response.json()).then(details => {
//         fulldetails = {imdb_id, description: details.Plot, genre: details.Genre, imdb_rating: details.imdbRating, release_date: details.Released, runtime: details.Runtime, stars: details.Actors, title: details.Title, director: details.Director, poster: details.Poster};
//         console.log(fulldetails);
//     }).catch((error) => {
//         console.error('Error:', error);
//     });

//     return fulldetails;
// }

export default model;