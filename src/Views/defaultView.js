import fallbackIMG from './mountains-sunset-landscape-fox-art-vector.jpg'
import { useStoreActions, useStoreState } from 'easy-peasy';
// import { rating, genres, schedule } from '../helper';

function DefaultView () {
  const { setFAVE } = useStoreActions(actions => ({
    setFAVE: actions.setFAVE
  }))
  const { titles, favourites } = useStoreState(state => ({
    titles: Object.values(state.titles),
    favourites: state.favourites
  }))
  function btnCOLOR (id) { return id in favourites ? 'text-danger' : 'text-white' }
  return <>
    <div className="card-group">
      { titles.map(item => <div className="card p-md-5 p-3 bg-dark border-0" key={ item.id } style={{ minWidth: '320px', maxWidth: '384px' }}>
        { <a onClick={() => setFAVE(item)} className="btn" href="#notifications" role="button" style={{ width: '64px' }}>
          <i className={ `bi bi-pin-fill ${ btnCOLOR(item.id) }` }></i>
        </a> ?? <a className="btn" href="#notifications" role="button" style={{ width: '64px' }}>
          <i className="bi bi-pin-fill text-muted"></i>
        </a> }
        <div className="row g-0 mb-3">
          <div className="col-4">
            <img src={ item.image?.original ?? fallbackIMG } className="img-thumbnail" alt="..." width="64"></img>
          </div>
          <div className="col-8">
            <p className="card-title fs-2 text-muted">{ item.name ?? 'No title' }</p>
          </div>
        </div>
        <div>
          { Object.values(item.genres ?? ['Genre']).map(genre => <span key={ genre } className="badge bg-secondary rounded-pill m-1">
            <small>{ genre }</small>
          </span>) }
          <span className="badge bg-secondary rounded-pill m-1">
            <small>{ item.network?.name ?? 'No network' }</small>
          </span>
          <span className="badge bg-secondary rounded-pill m-1">
            <small>{ item.language ?? 'No language' }</small>
          </span>
          <span className="badge bg-secondary rounded-pill m-1">
            <small>{ item.schedule?.time ?? '00:00' }</small>
          </span>
          { item.schedule?.days.map(day => <span key={ day } className="badge bg-warning text-dark rounded-pill m-1">
            <small>{ day }</small>
          </span>) ?? <span className="badge bg-warning text-dark rounded-pill m-1">
            <small>Someday</small>
          </span> }
          <div>
            <span className="badge bg-dark rounded-pill m-1">
              <small>Released on <b>{ item.premiered ?? 'unknown date' }</b></small>
            </span>
          </div>
          <div className="m-1 text-white">{ Math.floor(item.rating?.average) ?? '0' }<b> / 10</b> <i className="bi bi-star-fill text-warning"></i></div>
        </div>
      </div>) ?? <p>Loading...</p> }
    </div>
  </>
}

export default DefaultView;