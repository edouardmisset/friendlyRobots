import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from './constants'

const initialSearchState = {
  searchField: '',
}

export const searchRobots = (state = initialSearchState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload }
    default:
      return state
  }
}

const initialRobotState = {
  isPending: false,
  robots: [],
  error: '',
}

export const requestRobots = (state = initialRobotState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true }
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false }
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false }
    default:
      return state
  }
}
