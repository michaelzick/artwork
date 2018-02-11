import * as actions from "../actions/actionTypes"
import storageToFavs from "../../utility/storageToFavs"

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
        isLoading: true,
        favorites: storageToFavs(action.storage) // Questionable strategy!
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

      // Very questionable strategy!
      // Reducers should be pure and here I am
      // mutating the localStorage passed thru.
      // Really I should be implementing this:
      // https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
      // or this: https://github.com/rt2zz/redux-persist

      // Add/remove favs from localStorage
      if (storage.getItem(itemId)) {
        storage.removeItem(itemId)
      } else {
        storage.setItem(itemId, itemId)
      }

      return {
        ...state,
        favorites: storageToFavs(storage)
      }

    default:
      return state
  }
}
