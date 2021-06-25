import { useStoreState } from 'easy-peasy'
import CardItem from '../Components/carditem'

function Favourites() {
  const { favourites } = useStoreState(state => ({
    favourites: Object.values(state.favourites)
  }))

  return <div className="card-group">
    { favourites.map((item, index) => <CardItem key={ index } item={ item } />) ?? <p className="text-white">Loading...</p> }
  </div>
}
export default Favourites;