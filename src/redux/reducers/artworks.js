import * as actions from "../actions/artworks"

export const initialState = {
  items: [], // Fetch Data
  search: "", // Search Input
  favorites: {}, // ID's of Products
  isLoading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.STORE_DATA:
      fetch('../../../api/data.json').then(response => {
        console.log(response)
      });
      break;
    default:
      return state
  }
}
