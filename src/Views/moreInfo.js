// import React, { useState } from 'react';

import { useStoreState, useStoreActions } from 'easy-peasy';

import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// import MyToast from '../Components/toastee';

function MoreInfo({ show, close, title }) {
    const { setFAVE } = useStoreActions(actions => ({
        setFAVE: actions.setFAVE,
    }));

    const { favourites } = useStoreState(state => ({
        favourites: state.favourites
    }));

    // const [toast, setToast] = useState(false);

    const uniqueFavsOnly = fav => {
        setFAVE(fav);
        close();
    }
    
    return <>
        <Modal show={show} onHide={close} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
            <Modal.Body>
                <Row>
                    <Col>
                        <Image src={title.poster} thumbnail />
                    </Col>
                    <Col>
                        <Card border="light">
                            <Card.Body>
                                <Card.Title>{title.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{title.imdb_rating}/10 • {title.runtime} • {title.genre} • {title.release_date}</Card.Subtitle>
                                <Card.Text>{title.description}</Card.Text>
                                <small className="text-muted">Director: {title.director}</small>
                                <small className="text-muted">Stars: {title.stars}</small>
                                <br/><br/>
                                <Button variant="secondary" size="sm" onClick={close}>Close</Button>{' '}
                                {favourites.some(element => title.imdb_id === element.imdb_id) ? <></> : <Button variant="primary" size="sm" onClick={() => uniqueFavsOnly(title)}>+ Add to favourites</Button>}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>

        {/* <MyToast show={toast} setToast={setToast}></MyToast> */}
    </>
}
export default MoreInfo;