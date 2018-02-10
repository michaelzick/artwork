import * as actions from "../actions/actionTypes"

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
      return {
        ...state,
        items: action.items,
        error: false
      }
    case actions.FETCH.FAILED:
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}
