import { useStoreActions } from 'easy-peasy';

import Button from 'react-bootstrap/Button';

import MyCard from './carditem';

function CardList({ titles }) {
    const { saveViews } = useStoreActions(actions => ({
        saveViews: actions.saveViews,
    }));

    return <>
        <Button variant="link" onClick={() => saveViews('list')}><small>View as list</small></Button>/
        <Button variant="link" onClick={() => saveViews('card')}><small>View as cards</small></Button>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'flex-start' }}>
            {titles.map((title, index) => <MyCard key={index} title={title}></MyCard>)}
        </div>
    </>
}
export default CardList;