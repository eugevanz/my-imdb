import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import MyModal from '../Views/moreInfo';

function ListItem({ title }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <>
        <tr>
            <td><Image src={title.poster} thumbnail style={{height: 44}} /></td>
            <td>{title.title}<br/><Button variant="link" size="sm" onClick={handleShow}>More info</Button></td>
            <td>{title.imdb_rating}</td>
            <td>{title.genre}</td>
        </tr>

        <MyModal show={show} close={handleClose} title={title}></MyModal>
    </>
}
export default ListItem;