import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from '../actions/SessionActions'

const initialState = {
  user: null,
  errorMessage: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          name: action.payload.name,
        },
        errorMessage: '',
      }
    case LOG_OUT:
      return {
        ...state,
        user: null,
        errorMessage: '',
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    default:
      return state
  }
}
