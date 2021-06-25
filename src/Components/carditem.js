import { useStoreActions, useStoreState } from 'easy-peasy';

function CardItem({ item }) {
  const { setFAVE } = useStoreActions(actions => ({
    setFAVE: actions.setFAVE
  }))
  const { favourites } = useStoreState(state => ({
    favourites: state.favourites
  }))
  function btnCOLOR (id) { return id in favourites ? 'text-danger' : 'text-white' }

  return <div className="card p-md-5 p-3 bg-dark border-0" style={{ minWidth: '320px', maxWidth: '384px' }}>
    { <a onClick={() => setFAVE(item)} className="btn" href="#notifications" role="button" style={{ width: '64px' }}>
      <i className={ `bi bi-pin-fill ${ btnCOLOR(item.id) }` }></i>
    </a> ?? <a className="btn" href="#notifications" role="button" style={{ width: '64px' }}>
      <i className="bi bi-pin-fill text-muted"></i>
    </a> }
    <div className="row g-0 mb-3">
      <div className="col-4">
        <img src={ item.image?.original ?? `${process.env.PUBLIC_URL}/mountains-sunset-landscape-fox-art-vector.jpg` } className="img-thumbnail" alt="..." width="64"></img>
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
      <div className="m-1 text-white">{ Math.floor(item.rating?.average) ?? '0' }<b> / 10</b> <i className="bi bi-star-fill text-warning"></i></div>
      <div>
        <span className="badge bg-dark rounded-pill m-1">
          <small>Released on <b>{ item.premiered ?? 'unknown date' }</b></small>
        </span>
      </div>
      <div className="dropup">
        <a href="#three-dots" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="bi bi-three-dots text-white fs-2"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-dark px-3" aria-labelledby="dropdownMenuButton1">
          <h6 className="dropdown-header">Summary</h6>
          { <span className="text-white" dangerouslySetInnerHTML={{ __html: item.summary }}></span> ?? <span className="text-white"><i>No further details provided</i></span> }
        </div>
      </div>
    </div>
  </div>
}
export default CardItem;