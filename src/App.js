import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { rating, schedule, genres } from './helper'
import mountains from './Views/mountains-sunset-landscape-fox-art-vector.jpg'

import MyDefaultView from './Views/defaultView';
import MyFavourites from './Views/favView';

function App() {
  const { saveTitles, saveFavs } = useStoreActions(actions => ({
    saveTitles: actions.saveTitles,
    saveFavs: actions.saveFavs
  }))
  const { titles, heroTITLE } = useStoreState(state => ({
    titles: state.titles,
    heroTITLE: state.heroTITLE
  }))
  const [value, setValue] = useState('')
  const links = { 'Home': '/', 'Drama': '/favourites', 'Romance': '/favourites', 'Horror': '/favourites', 'Documentary': '/favourites'}
  // const backgroundImage = heroTITLE.show.image !== null ? `url(${ heroTITLE.show.image.original })` : `url(${ mountains })`

  useEffect(() => {
    if (titles.constructor === Object && Object.entries(titles).length === 0) saveTitles('girls')
  });
  
  return (<>
    <Router>
      <div style={{ backgroundImage: `url(${ mountains })` }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#navigation">Navbar</a>
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
              <div className="dropdown">
                <a className="dropdown-toggle btn text-white" href="#dropdown-search" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-search"></i></a>
                <form className="dropdown-menu dropdown-menu-end px-2">
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
        { titles.length > 0 && <div className="card bg-dark border-0" style={{ paddingTop: '128px', borderRadius: '0' }}>
          <div className="container" style={{ marginBottom: '128px' }}>
            <div className="row">
              <div className="col-4">
                { heroTITLE.show.image ? <img src={ heroTITLE.show.image.original } className="img-thumbnail" alt="..."></img> : <img src={ mountains } className="img-thumbnail" alt="..."></img> }
              </div>
              <div className="col-8">
              <p className="text-white fs-1">{ heroTITLE.show.name }</p>
                <div style={{ maxWidth: '512px' }}><span className="text-white" dangerouslySetInnerHTML={{__html: heroTITLE.show.summary}}></span></div>
                <div className="text-white" style={{ maxWidth: '288px' }}>
                  <div className="m-1">{ rating(heroTITLE.show.rating.average) }<b> / 10</b></div>
                  { genres(heroTITLE.show.genres) }
                  <span className="badge bg-danger rounded-pill m-1">
                    { heroTITLE.show.network && <small>{ heroTITLE.show.network.name }</small> }
                  </span>
                  <span className="badge bg-success rounded-pill m-1">
                    <small>{ heroTITLE.show.language }</small>
                  </span>
                  <span className="badge bg-primary rounded-pill m-1">
                    <small>{ heroTITLE.show.schedule.time }</small>
                  </span>
                  { schedule(heroTITLE.show.schedule.days) }
                  <div>
                    <span className="badge bg-dark rounded-pill m-1">
                      { heroTITLE.show.premiered && <small>Released on <b>{ heroTITLE.show.premiered }</b></small> }
                    </span>
                  </div>
                </div>
                <a onClick={() => saveFavs()} href="#add-to-list" className="btn btn-outline-primary fw-bold m-1 mt-5"><i className="bi bi-pin"></i> Add to my list</a>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/favourites">
              <MyFavourites />
            </Route>
            <Route path="/">
              <MyDefaultView />
            </Route>
          </Switch>
        </div> }
      </div>
    </Router>
  </>)
}

export default App;
