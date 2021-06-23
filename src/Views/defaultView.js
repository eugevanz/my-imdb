import { useStoreActions, useStoreState } from 'easy-peasy';
import { rating, genres, schedule } from '../helper';

function DefaultView() {
  const { views, titles } = useStoreState(state => ({
    views: state.views,
    titles: state.titles,
  }))

  return <>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'flex-start' }}>
      { titles.map((title, index) => <div key={ index } style={{ maxWidth: '576px' }}>
        { title.show.name && <p className="text-white fs-1">{ title.show.name }</p> }
        <span className="text-white" dangerouslySetInnerHTML={{__html: title.show.summary}}></span>
        <div className="text-white" style={{ maxWidth: '288px' }}>
          <div className="m-1">{ rating(title.show.rating.average) }<b> / 10</b></div>
          { genres(title.show.genres) }
          { title.show.network.name && <span className="badge bg-danger rounded-pill m-1">
            <small>{ title.show.network.name }</small>
          </span> }
          <span className="badge bg-success rounded-pill m-1">
            <small>{ title.show.language }</small>
          </span>
          <span className="badge bg-primary rounded-pill m-1">
            <small>{ title.show.schedule.time }</small>
          </span>
          { schedule(title.show.schedule.days) }
          <div>
            <span className="badge bg-dark rounded-pill mb-4 " style={{ width: '6rem' }}>
              <small>Released on <b>{ title.show.premiered }</b></small>
            </span>
          </div>
        </div>
        <a href="#add-to-list" className="btn btn-outline-primary fw-bold m-1"><i className="bi bi-pin"></i> Add to my list</a>
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