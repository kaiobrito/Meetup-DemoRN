
// Actions
const prefix = 'GH'

export const types = {
  FETCH: `${prefix}/FETCH`,
  FETCH_USERS_SUCCESS: `${prefix}/FETCH_SUCCESS`,
  FETCH_USERS_FAILURE: `${prefix}/FETCH_FAILURE`,

  UPDATE_TERM: `${prefix}/UPDATE_TERM`
}

export const actionCreators = {
  onChangeTerm: term => {
    return {
      type: types.UPDATE_TERM,
      payload: { term }
    }
  },
  fetchUsers: term => {
    return {
      type: types.FETCH,
      payload: { term }
    }
  },
  fetchUsersSuccess: items => {
    return {
      type: types.FETCH_USERS_SUCCESS,
      payload: { items }
    }
  },
  fetchUsersFailure: error => {
    return {
      type: types.FETCH_USERS_FAILURE,
      payload: { error }
    }
  },
}

// Reducer

const INITIAL_STATE = {
  term: '',
  refreshing: false,
  error: false,
  items: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH:
      return {...state, refreshing: true, error: false, items: []}
    case types.UPDATE_TERM:
      return {...state, term: action.payload.term};
    case types.FETCH_USERS_SUCCESS:
      return {...state, refreshing: false, items: action.payload.items};
    case types.FETCH_USERS_FAILURE:
      return {...state, refreshing: false, error: true};
    default:
      return state;
  }
}
