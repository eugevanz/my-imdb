import { useStoreState } from 'easy-peasy'
import CardItem from '../Components/carditem'
import { withRouter } from 'react-router-dom'

function GenreView({ match }) {
  const { titles } = useStoreState(state => ({
    titles: Object.values(state.titles)
  }))
  function genreFILTER () {
    return titles.filter(item => {
      if (item.genres[0]) {
        const firstGENRE = item.genres[0]
        console.log(firstGENRE)
        return firstGENRE.toLowerCase() === match.params.id
      }
    })
  }
  return <div className="card-group">
    { genreFILTER().map((item, index) => <CardItem key={ index } item={ item } />) ?? <p className="text-white">Loading...</p> }
  </div>
}
export default withRouter(GenreView);