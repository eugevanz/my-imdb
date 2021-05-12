import { useStoreState } from 'easy-peasy';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import MyMainlist from '../Components/mainlist';
import MyCardlist from '../Components/cardlist';

function Favourites() {
    const { favourites, views } = useStoreState(state => ({
        favourites: state.favourites,
        views: state.views,
    }));

    return <>
        <Row>
            <Col>
                <Alert variant='primary'>Showing my favourites</Alert>
            </Col>
        </Row>
        {typeof favourites === Array ? <Row>
            <Col>
                {views === 'list' ? <MyMainlist titles={favourites}></MyMainlist> : <MyCardlist titles={favourites}></MyCardlist>}
            </Col>
        </Row> : <Row>
            <Col>
                {views === 'list' ? <MyMainlist titles={JSON.parse(localStorage.getItem('favourites'))}></MyMainlist> : <MyCardlist titles={JSON.parse(localStorage.getItem('favourites'))}></MyCardlist>}
            </Col>
        </Row>}
    </>
}
export default Favourites;