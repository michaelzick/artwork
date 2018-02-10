import * as actionTypes from './actionTypes';

export const searchItems = () => {
  return {
    type: actionTypes.UPDATE_SEARCH
  }
}

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH.START
  }
}

export const fetchSuccess = items => {
  return {
    type: actionTypes.FETCH.SUCCESS,
    items: items
  }
}

export const fetchFailed = () => {
  return {
    type: actionTypes.FETCH.FAILED
  }
}

export const fetchItems = () => {
  return dispatch => {
    dispatch(fetchStart())

    fetch('../../../api/data.json').then(resp => {
      return resp.json().then(resp => {
        dispatch(fetchSuccess(resp))
      })
    }).catch(error => {
      dispatch(fetchFailed())
    })
  }
}
