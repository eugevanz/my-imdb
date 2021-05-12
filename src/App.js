import { useStoreActions } from 'easy-peasy';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import MyDefaultView from './Views/defaultView';
import MyFavourites from './Views/favView';

function App() {
  const { saveTitles, clearTitles } = useStoreActions(actions => ({
    saveTitles: actions.saveTitles,
    clearTitles: actions.clearTitles,
  }));
  
  const [value, setValue] = useState('');
  
  return (<>
    <Router>
      <Navbar bg="dark" expand="lg" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand href="#">React-IMDB</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/favourites">
              <Nav.Link href="#">Favourites</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setValue(e.target.value)} value={value}/>
            <Button variant="outline-light" onClick={() => {
              clearTitles();
              saveTitles(value);
            }} disabled={value === ''}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      
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
    
    // <div>
    //   <section>
    //     <input onChange={(e) => setValue(e.target.value)} value={value} />
    //     {value !== '' ? <button onClick={() => saveTitles(value)}>Add title</button> : <></>}
    //   </section>

    //   {titles ? <section>
    //     <button onClick={() => saveViews('card')}>Card view</button>
    //     <button onClick={() => saveViews('list')}>List view</button>
        
    //     {views === 'list' ? <ul>
    //       {titles.map(title => <li key={title.imdb_id}>
    //         <button onClick={() => uniqueFavsOnly(title)}>{title.title}</button>
    //       </li>)}
    //     </ul> : <ol>
    //       {titles.map(title => <li key={title.imdb_id}>
    //         <button onClick={() => uniqueFavsOnly(title)}>{title.title}</button>
    //       </li>)}
    //     </ol>}
    //   </section> : <></>}

    //   {typeof favourites === Array ? <section>
    //     <ul>
    //       {favourites.map(fav => <li key={fav.imdb_id}>{fav.title}</li>)}
    //     </ul>
    //   </section> : <section>
    //     <ul>
    //       {(JSON.parse(localStorage.getItem('favourites'))).map(fav => <li key={fav.imdb_id}>{fav.title}</li>)}
    //     </ul>
    //   </section>}
    // </div>
  );
}

export default App;
