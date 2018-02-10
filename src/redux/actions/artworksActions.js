import * as actionTypes from './actionTypes';

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
    fetch('../../../api/data.json').then(resp => {
      return resp.json().then(resp => {
        console.log(resp)
        dispatch(fetchSuccess(resp))
      })
    }).catch(error => {
      dispatch(fetchFailed())
    })
  }
}
