import { useStoreActions } from 'easy-peasy';

import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function MoreInfo({ show, close, title }) {
    const { saveFavs } = useStoreActions(actions => ({
        saveFavs: actions.saveFavs,
    }));

    const uniqueFavsOnly = fav => {
        saveFavs(fav);
        close();
    }

    return <Modal show={show} onHide={close} aria-labelledby="contained-modal-title-vcenter" size="lg" centered>
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
                            <Button variant="primary" size="sm" onClick={() => uniqueFavsOnly(title)}>+ Add to favourites</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Modal.Body>
    </Modal>
}
export default MoreInfo;