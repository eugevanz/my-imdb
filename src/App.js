import { useStoreActions } from 'easy-peasy';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap'

import MyDefaultView from './Views/defaultView';
import MyFavourites from './Views/favView';

function App() {
  const { saveTitles, clearTitles } = useStoreActions(actions => ({
    saveTitles: actions.saveTitles,
    clearTitles: actions.clearTitles,
  }));
  
  const [value, setValue] = useState('')
  
  return (<>
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#navigation">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/favourites" activeclassname="active" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/favourites" activeclassname="active" className="nav-link">TV Shows</Link>
              </li>
              <li className="nav-item">
                <Link to="/favourites" activeclassname="active" className="nav-link">Movies</Link>
              </li>
              <li className="nav-item">
                <Link to="/favourites" activeclassname="active" className="nav-link">Recently Added</Link>
              </li>
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
                    clearTitles()
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
      <div className="text-white bg-dark">
        <div className="" style={{ padding: '128px' }}>
          <p className="fs-1">Card title</p>
          <p className="">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#add-to-list" className="btn btn-primary fw-bold">Add to my list</a>
        </div>
      </div>
      
      <Container>
        <br/>
        <Switch>
          <Route path="/favourites">
            <MyFavourites />
          </Route>
          <Route path="/">
            <MyDefaultView />
          </Route>
        </Switch>
        <br/>
      </Container>
    </Router>
  </>
  );
}

export default App;
