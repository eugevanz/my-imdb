import CardItem from '../Components/carditem';
import { useStoreState, useStoreActions } from 'easy-peasy';

function DefaultView () {
  const { titles, heroTITLE, favourites } = useStoreState(state => ({
    titles: Object.values(state.titles),
    heroTITLE: state.heroTITLE,
    favourites: state.favourites
  }))
  const { setFAVE } = useStoreActions(actions => ({
    setFAVE: actions.setFAVE
  }))
  function btnCOLOR () { return heroTITLE.id in favourites ? 'btn-outline-danger' : 'btn-outline-primary' }
  function btnTEXT () { return heroTITLE.id in favourites ? 'Remove from list' : 'Add to my list' }
  
  return <>
    <div className="card bg-dark border-0" style={{ paddingTop: '128px', borderRadius: '0' }}>
      <div className="container" style={{ marginBottom: '128px' }}>
        <div className="row">
          <div className="col-4">
            <img src={ heroTITLE.image?.original ?? `${process.env.PUBLIC_URL}/mountains-sunset-landscape-fox-art-vector.jpg` } className="img-thumbnail" alt="..."></img>
          </div>
          <div className="col-8">
          <p className="text-white fs-1">{ heroTITLE.name ?? 'No title' }</p>
            <div style={{ maxWidth: '512px' }}>
                { <span className="text-white" dangerouslySetInnerHTML={{ __html: heroTITLE.summary }}></span> ?? <span className="text-white"><i>No further details provided</i></span> }
              </div>
            <div className="text-white" style={{ maxWidth: '288px' }}>
              <div className="m-1">{ heroTITLE.rating?.average ?? '0' }<b> / 10</b> <i className="bi bi-star-fill text-warning"></i></div>
              { Object.values(heroTITLE.genres ?? ['Genre']).map(item => <span key={ item } className="badge bg-secondary rounded-pill m-1">
                <small>{ item }</small>
              </span>) }
              <span className="badge bg-danger rounded-pill m-1">
                <small>{ heroTITLE.network?.name ?? 'No network' }</small>
              </span>
              <span className="badge bg-success rounded-pill m-1">
                <small>{ heroTITLE.language ?? 'No language' }</small>
              </span>
              <span className="badge bg-primary rounded-pill m-1">
                <small>{ heroTITLE.schedule?.time ?? '00:00' }</small>
              </span>
              { heroTITLE.schedule?.days.map(item => <span key={ item } className="badge bg-warning text-dark rounded-pill m-1">
                <small>{ item }</small>
              </span> ) ??  <span className="badge bg-warning text-dark rounded-pill m-1">
                <small>Someday</small>
              </span> }
              <div>
                <span className="badge bg-dark rounded-pill m-1">
                  <small>Released on <b>{ heroTITLE.premiered ?? 'unknown date' }</b></small>
                </span>
              </div>
            </div>
            <a onClick={() => setFAVE(heroTITLE)} href="#add-to-list" className={ `${ btnCOLOR() } btn fw-bold m-1 mt-5` }><i className="bi bi-pin"></i> { btnTEXT() }</a>
          </div>
        </div>
      </div>
    </div>
    <div className="card-group">
      { titles.map((item, index) => <CardItem key={ index } item={ item } />) ?? <p className="text-white">Loading...</p> }
    </div>
  </>
}
export default DefaultView;