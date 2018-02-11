import * as actionTypes from './actionTypes';

export const fetchItems = storage => {
  return dispatch => {
    // Kick off the loading cycle,
    // passing in localStorage
    dispatch(fetchStart(storage))

    fetch('../../../api/data.json').then(resp => {
      return resp.json().then(resp => {
        // Dispatch success when api call is done
        dispatch(fetchSuccess(resp))
      })
    }).catch(error => {
      // Put error handling here
    })
  }
}

export const fetchStart = storage => {
  return {
    type: actionTypes.FETCH.START,
    storage: storage
  }
}

export const fetchSuccess = items => {
  return {
    type: actionTypes.FETCH.SUCCESS,
    items: items
  }
}

export const searchItems = input => {
  const searchVal = input.target.value.toLowerCase()

  return {
    type: actionTypes.UPDATE_SEARCH,
    search: searchVal
  }
}

export const toggleFav = (storageIdArray) => {
  return {
    type: actionTypes.TOGGLE_FAV,
    storageAndId: storageIdArray // an array of localStorage and clicked item id
  }
}
