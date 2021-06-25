import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
// import { rating, schedule } from './helper'
import mountains from './Views/mountains-sunset-landscape-fox-art-vector.jpg'

import MyDefaultView from './Views/defaultView';
import MyFavourites from './Views/favView';

function App() {
  const { saveTitles, setFAVE } = useStoreActions(actions => ({
    saveTitles: actions.saveTitles,
    setFAVE: actions.setFAVE
  }))
  const { titles, heroTITLE, favourites } = useStoreState(state => ({
    titles: state.titles,
    heroTITLE: state.heroTITLE,
    favourites: state.favourites
  }))
  const [value, setValue] = useState('')
  const links = { 'Home': '/', 'Drama': '/favourites', 'Romance': '/favourites', 'Horror': '/favourites', 'Documentary': '/favourites'}
  function btnCOLOR () { return heroTITLE.id in favourites ? 'btn-outline-danger' : 'btn-outline-primary' }
  function btnTEXT () { return heroTITLE.id in favourites ? 'Remove from list' : 'Add to my list' }

  useEffect(() => {
    if (titles.constructor === Object && Object.entries(titles).length === 0) saveTitles('girls')
  }, [titles, saveTitles])
  
  return (<>
    <Router>
      <div>
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
        { <div className="card bg-dark border-0" style={{ paddingTop: '128px', borderRadius: '0' }}>
          <div className="container" style={{ marginBottom: '128px' }}>
            <div className="row">
              <div className="col-4">
                <img src={ heroTITLE.image?.original ?? mountains } className="img-thumbnail" alt="..."></img>
              </div>
              <div className="col-8">
              <p className="text-white fs-1">{ heroTITLE.name ?? 'No title' }</p>
                <div style={{ maxWidth: '512px' }}>
                    { <span className="text-white" dangerouslySetInnerHTML={{ __html: heroTITLE.summary }}></span> ?? <span className="text-white"><i>No further details provided</i></span> }
                  </div>
                <div className="text-white" style={{ maxWidth: '288px' }}>
                  <div className="m-1">{ heroTITLE.rating?.average ?? '0' }<b> / 10</b></div>
                  { Object.values(heroTITLE.genres ?? ['Genre']).map(item => <span key={ item } className="badge bg-secondary rounded-pill m-1">
                    <small>{ item }</small>
                  </span>) }
                  <span className="badge bg-danger rounded-pill m-1">
                    <small>{ heroTITLE.network?.name ?? 'No network' }</small>
                  </span>
                  <span className="badge bg-success rounded-pill m-1">
                    <small>{ heroTITLE.language ?? 'No language' }</small>
                  </span>
                  <span className="badge bg-primary rounded-pill m-1">
                    <small>{ heroTITLE.schedule?.time ?? '00:00' }</small>
                  </span>
                  { heroTITLE.schedule?.days.map(item => <span key={ item } className="badge bg-warning text-dark rounded-pill m-1">
                    <small>{ item }</small>
                  </span> ) ??  <span className="badge bg-warning text-dark rounded-pill m-1">
                    <small>Someday</small>
                  </span> }
                  <div>
                    <span className="badge bg-dark rounded-pill m-1">
                      <small>Released on <b>{ heroTITLE.premiered ?? 'unknown date' }</b></small>
                    </span>
                  </div>
                </div>
                <a onClick={() => setFAVE(heroTITLE)} href="#add-to-list" className={ `${ btnCOLOR() } btn fw-bold m-1 mt-5` }><i className="bi bi-pin"></i> { btnTEXT() }</a>
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
        </div> ?? <p>Loading...</p> }
      </div>
    </Router>
  </>)
}

export default App;
