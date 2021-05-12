import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import MyModal from '../Views/moreInfo';

function CardItem({ title }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <>
        <Card style={{ margin: '1rem' }}>
        <Card.Img variant="top" src={title.poster} style={{ height: '18rem' }}/>
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