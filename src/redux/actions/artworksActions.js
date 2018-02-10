import * as actionTypes from './actionTypes';

export const fetchItems = () => {
  return dispatch => {
    dispatch(fetchStart())

    fetch('../../../api/data.json').then(resp => {
      return resp.json().then(resp => {
        dispatch(fetchSuccess(resp))
      })
    }).catch(error => {
      // Put error handling here
    })
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

export const filterItems = input => {
  return dispatch => {
    const searchVal = input.target.value.toLowerCase();
    dispatch(searchItems(searchVal))
  }
}

export const searchItems = searchVal => {
  return {
    type: actionTypes.UPDATE_SEARCH,
    search: searchVal
  }
}
