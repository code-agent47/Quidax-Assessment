import {SearchDispatchTypes, SEARCH_SUCCESSFUL, SEARCH_FAILED, SEARCH_REQUEST} from '../actions/SearchActionType';

interface DefaultStateI {
   searching: boolean,
   results?: any
}

const defaultState: DefaultStateI = {
    searching: false,
    results: null
}

const bookReducer = (state: DefaultStateI = defaultState, action: SearchDispatchTypes) => {
  switch (action.type) {
    case SEARCH_REQUEST:
    return Object.assign({}, state, {
      searching: true,
      results: null 
    })
    case SEARCH_FAILED:
    return Object.assign({}, state, {
      searching: false,
      results: null
    });
    case SEARCH_SUCCESSFUL:
    return Object.assign({}, state, {
      searching: false,
      results: action.response
    });
    default:
      return state;
  }
}

export default bookReducer;
  