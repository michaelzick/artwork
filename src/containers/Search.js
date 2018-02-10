import { connect } from "react-redux"

import Search from "../components/Search"
import * as actionCreators from '../redux/actions/artworksActions';

const mapStateToProps = state => {
  return {
    search: state.artworks.search
  }
}

const mapDispatchToProps = dispatch => ({
  filterSearchItems: input => dispatch(actionCreators.filterItems(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
