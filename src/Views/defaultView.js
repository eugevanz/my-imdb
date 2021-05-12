import { useStoreState } from 'easy-peasy';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import MyMainlist from '../Components/mainlist';
import MyCardlist from '../Components/cardlist';

function DefaultView() {
    const { views, titles } = useStoreState(state => ({
        views: state.views,
        titles: state.titles,
    }));

    return <>
        <Row>
            <Col>
                <Alert variant='info'>Type in the Search box the movie you're thinking of</Alert>
            </Col>
        </Row>
        <Row>
            <Col>
                {views === 'list' ? <MyMainlist titles={titles}></MyMainlist> : <MyCardlist titles={titles}></MyCardlist>}
            </Col>
        </Row>
    </>
}
export default DefaultView;