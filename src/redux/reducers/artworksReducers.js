import * as actions from "../actions/actionTypes"

export const initialState = {
  items: [], // Fetch Data
  search: "", // Search Input
  favorites: {}, // ID's of Products
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {

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

    case actions.UPDATE_SEARCH:
      return {
        ...state,
        search: action.search
      }

    case actions.TOGGLE_FAV:
      const storage = action.storageAndId[0],
            itemId = action.storageAndId[1]

      let newFavsStorage = {}

      // Add/remove favs from localStorage
      if (storage.getItem(itemId)) {
        storage.removeItem(itemId)
      } else {
        storage.setItem(itemId, itemId)
      }

      for (let fav of Object.keys(storage)) {
        newFavsStorage[fav] = fav
      }

      return {
        ...state,
        favorites: newFavsStorage
      }

    default:
      return state
  }
}
