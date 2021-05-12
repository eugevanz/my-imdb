import { useStoreActions } from 'easy-peasy';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import MyTableRow from './listitem';

function MainList({ titles }) {
    const { saveViews } = useStoreActions(actions => ({
        saveViews: actions.saveViews,
    }));
    
    return <>
        {titles ? <> 
            <Button variant="link" onClick={() => saveViews('list')}><small>View as list</small></Button>/
            <Button variant="link" onClick={() => saveViews('card')}><small>View as cards</small></Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {titles.map((title, index) => <MyTableRow key={index} title={title}></MyTableRow>)}
                </tbody>
            </Table>
        </> : <>
        </>}
    </>
}
export default MainList;