import React, { useState } from 'react';
import { rating, genres, schedule } from '../helper';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import MyModal from '../Views/moreInfo';

function CardItem({ title }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <>
    <div className="" style={{ maxWidth: '576px' }}>
      <p className="text-white fs-1">{ title.show.name }</p>
      <span className="text-white" dangerouslySetInnerHTML={{__html: title.show.summary}}></span>
      <div  className="text-white" style={{ maxWidth: '288px' }}>
        <div className="m-1">{ rating(title.show.rating.average) }<b> / 10</b></div>
        { genres(title.show.genres) }
        <span className="badge bg-danger rounded-pill m-1">
          <small>{ title.show.network.name }</small>
        </span>
        <span className="badge bg-success rounded-pill m-1">
          <small>{ title.show.language }</small>
        </span>
        <span className="badge bg-primary rounded-pill m-1">
          <small>{ title.show.schedule.time }</small>
        </span>
        { schedule(title.show.schedule.days) }
        <div>
          <span className="badge bg-dark rounded-pill mb-4 " style={{ width: '6rem' }}>
            <small>Released on <b>{ title.show.premiered }</b></small>
          </span>
        </div>
      </div>
      <a href="#add-to-list" className="btn btn-outline-primary fw-bold m-1"><i className="bi bi-pin"></i> Add to my list</a>
      </div>
      <Card style={{ margin: '1rem', width: '18rem' }}>
        <Card.Img variant="top" src={title.poster}/>
        <Card.Body>
          <Card.Title>{title.title}</Card.Title>
          <Card.Link onClick={handleShow}><small>More info</small></Card.Link>
        </Card.Body>
        <ListGroup variant="flush">
            <ListGroup.Item><small>Rating {title.imdb_rating}</small></ListGroup.Item>
            <ListGroup.Item><small>{title.genre}</small></ListGroup.Item>
        </ListGroup>
      </Card>

      <MyModal show={show} close={handleClose} title={title}></MyModal>
    </>
}
export default CardItem;