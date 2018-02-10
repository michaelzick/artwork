import * as actions from "../actions/artworksActions"

export const initialState = {
  items: [], // Fetch Data
  search: "", // Search Input
  favorites: {}, // ID's of Products
  isLoading: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH.START:
      fetch('../../../api/data.json').then(response => {
        console.log(response)
        state.items.push(response)
      });
      break;
    default:
      return state
  }
}
