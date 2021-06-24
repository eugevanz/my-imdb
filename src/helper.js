export const genres = gen => gen.map(item => <span className="badge bg-secondary rounded-pill m-1" key={ item }>
  <small>{ item }</small>
</span>)
export const schedule = sch => sch.map(item => <span className="badge bg-warning text-dark rounded-pill m-1" key={ item }>
  <small>{ item }</small>
</span>)
export const rating = rat => {
  const rating = Math.floor(rat)
  const stars = []
  if (rating > 0) {
    for (let i = 0; i < rating; i++) {
      stars.push(<i className="bi bi-star-fill text-warning m-1" key={ i }></i>)
    }
  } else stars.push(<i className="bi bi-star-fill text-warning m-1"></i>)
  
  return stars
}
