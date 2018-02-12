import { connect } from "react-redux"

import ArtworksList from "../components/ArtworksList"
import * as actionCreators from '../redux/actions/artworksActions';

const mapStateToProps = state => {
  return {
    items: state.artworks.items,
    search: state.artworks.search,
    isLoading: state.artworks.isLoading,
    favorites: state.artworks.favorites
  }
}

const mapDispatchToProps = dispatch => ({
  getItemsOnLoad: () => dispatch(actionCreators.fetchItems(localStorage)),
  toggleFavorite: id => dispatch(actionCreators.toggleFav(id, localStorage))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArtworksList)
