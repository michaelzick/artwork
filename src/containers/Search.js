import { connect } from "react-redux"

import Search from "../components/Search"
import * as actionCreators from '../redux/actions/artworksActions';

const mapStateToProps = state => {
  return {
    items: state.artworks.items,
    isLoading: state.artworks.isLoading,
    error: state.artworks.error
  }
}

const mapDispatchToProps = dispatch => ({
  filterSearchItems: input => dispatch(actionCreators.filterItems(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
