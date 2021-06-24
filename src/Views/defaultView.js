import fallbackIMG from './logo192.png'
import { useStoreActions, useStoreState } from 'easy-peasy';
import { rating, genres, schedule } from '../helper';

function DefaultView () {
  const { saveFavs } = useStoreActions(actions => ({
    saveFavs: actions.saveFavs
  }))
  const { titles, favourites } = useStoreState(state => ({
    titles: state.titles,
    favourites: state.favourites
  }))
  function setCOLOR (id) {
    return !favourites.find(element => element.show.id === id) ? 'text-white' : 'text-danger'
  }

  return <>
    <div className="card-group">
      { titles.map(item => <div className="card p-md-5 p-3 bg-dark border-0" key={ item.show.id } style={{ minWidth: '320px', maxWidth: '384px' }}>
        { item.show && <a onClick={() => saveFavs(item)} className={ `btn ${ setCOLOR(item.show.id) }` } href="#notifications" role="button">
          <i className="bi bi-pin text-white"></i>
        </a> }
        <div className="row g-0 mb-3">
          <div className="col-4">
            { item.show.image ? <img src={ item.show.image.original } className="img-thumbnail" alt="..." width="64"></img> : <img src={ fallbackIMG } className="img-thumbnail" alt="..." width="64"></img> }
          </div>
          <div className="col-8">
            { item.show.name && <p className="card-title fs-2 text-muted">{ item.show.name }</p> }
          </div>
        </div>
        <div>
          { genres(item.show.genres) }
          <span className="badge bg-secondary rounded-pill m-1">
          { item.show.network && <small>{ item.show.network.name }</small> }
          </span>
          <span className="badge bg-secondary rounded-pill m-1">
            { item.show.language && <small>{ item.show.language }</small> }
          </span>
          <span className="badge bg-secondary rounded-pill m-1">
          { item.show.schedule.time && <small>{ item.show.schedule.time }</small> }
          </span>
          { schedule(item.show.schedule.days) }
          <div>
            <span className="badge bg-dark rounded-pill m-1">
            { item.show.premiered && <small>Released on <b>{ item.show.premiered }</b></small> }
            </span>
          </div>
          { item.show.rating && <div className="m-1 text-white">{ rating(item.show.rating.average) } / 10</div> }
        </div>
      </div>) }
    </div>
  </>

  // return <>
  //     <Row>
  //         <Col>
  //             <Alert variant='info'>Type in the Search box the movie you're thinking of</Alert>
  //         </Col>
  //     </Row>
  //     <Row>
  //         <Col>
  //             {views === 'list' ? <MyMainlist titles={titles}></MyMainlist> : <MyCardlist titles={titles}></MyCardlist>}
  //         </Col>
  //     </Row>
  // </>
}

export default DefaultView;