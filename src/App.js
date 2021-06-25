import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import MyDefaultView from './Views/defaultView'
import MyFavourites from './Views/favView'
import MyGenreView from './Views/genreView'

function App() {
  const { saveTitles } = useStoreActions(actions => ({
    saveTitles: actions.saveTitles
  }))
  const { titles } = useStoreState(state => ({
    titles: state.titles
  }))
  const [value, setValue] = useState('girls')
  const links = { 'Home': '/', 'Drama': '/genre/drama', 'Romance': '/genre/romance', 'Horror': '/genre/horror', 'Documentary': '/genre/documentary'}
  useEffect(() => {
    if (titles.constructor === Object && Object.entries(titles).length === 0) saveTitles(value)
  }, [])
  
  return (<>
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#navigation">The Search Show</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                { Object.keys(links).map(item => <li className="nav-item" key={ item }>
                  <Link to={ links[item] } activeclassname="active" className="nav-link">{ item }</Link>
                </li>) }
                <li className="nav-item">
                  <Link to="/favourites" activeclassname="active" className="nav-link"><i className="bi bi-heart-fill"></i></Link>
                </li>
              </ul>
              <span className="navbar-text text-secondary me-5">keyword <span class="badge bg-info text-dark">{ value }</span></span>
              <div className="dropdown">
                <a className="dropdown-toggle btn" href="#dropdown-search" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-search text-white"></i></a>
                <form className="dropdown-menu dropdown-menu-dark dropdown-menu-end px-2">
                  <div className="mb-3">
                    <input onChange={(e) => setValue(e.target.value)} value={value} type="email" className="form-control form-control-sm" id="exampleDropdownFormEmail1" placeholder="Type to filter..." />
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-success btn-lg" onClick={() => {
                      // clearTitles()
                      saveTitles(value)
                    }} disabled={value === ''} type="button">Search</button>
                  </div>
                </form>
              </div>
              <a className="btn text-white" href="#notifications" role="button"><i className="bi bi-bell"></i></a>
              <a className="btn text-white" href="#profile" role="button"><i className="bi bi-person-circle"></i></a>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/favourites" component={ MyFavourites } />
          <Route exact path="/" component={ MyDefaultView } />
          <Route path="/genre/:id"><MyGenreView /></Route>
          <Route render={ () => <h1 className="text-white">No page here by that name</h1>}/>
        </Switch>
      </div>
    </Router>
  </>)
}

export default App;
