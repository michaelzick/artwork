import * as actions from "../actions/actionTypes"

export const initialState = {
  items: [], // Fetch Data
  search: "", // Search Input
  favorites: {}, // ID's of Products
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_SEARCH:
      return {
        ...state,
        search: action.search
      }
    case actions.FETCH.START:
      return {
        ...state,
        isLoading: true
      }
    case actions.FETCH.SUCCESS:
      return {
        ...state,
        items: action.items,
        error: false,
        isLoading: false
      }
    case actions.TOGGLE_FAV:
      const storage = action.storageAndId[0],
            itemId = action.storageAndId[1]

      if (storage.getItem(itemId)) {
        storage.removeItem(itemId)
      } else {
        storage.setItem(itemId, itemId)
      }

      return {
        ...state,
        favorites: storage
      }
    default:
      return state
  }
}
