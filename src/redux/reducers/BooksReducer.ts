import {FetchDispatchTypes, FETCH_SUCCESSFUL, FETCH_FAILED, INCREASE_AVAILABLE_QUANTITY, DECREASE_AVAILABLE_QUANTITY, FETCH_REQUEST, RESTORE_AVAILABLE_QUANTITY} from '../actions/BooksActionType';

interface DefaultStateI {
   fetching: boolean,
   results?: any
}

const defaultState: DefaultStateI = {
    fetching: false,
    results: null
}

const bookReducer = (state: DefaultStateI = defaultState, action: FetchDispatchTypes) => {
  switch (action.type) {
    case FETCH_REQUEST:
    return Object.assign({}, state, {
      fetching: true,
      results: null 
    })
    case FETCH_FAILED:
    return Object.assign({}, state, {
      fetching: false,
      results: null
    });
    case FETCH_SUCCESSFUL:
    return Object.assign({}, state, {
      fetching: false,
      results: action.response
    });
    case INCREASE_AVAILABLE_QUANTITY:{
      let oldState = state.results?.data.map( (product: Record<any, any>) => {
          if(product.id === action.data){
              Object.assign({}, state.results.data, {
                available_copies: product.available_copies += 1
              })
          }
          return product;
      })
      return {
          ...state,
          results: {
              // ...state.results,
              data: [...oldState]
          }
        }
    }
    case DECREASE_AVAILABLE_QUANTITY:{
      let oldState = state.results?.data.map( (product: Record<any, any>) => {
          if(product.id === action.data){
              Object.assign({}, state.results.data, {
                available_copies: product.available_copies -= 1
              })
          }
          return product;
      })
      return {
          ...state,
          results: {
              // ...state.results,
              data: [...oldState]
          }
        }
    }
    case RESTORE_AVAILABLE_QUANTITY:{
      let oldState = state.results?.data.map( (product: Record<any, any>) => {
          if(product.id === action.data){
              Object.assign({}, state.results.data, {
                available_copies: product.available_copies = product.available_copies + action.quantity
              })
          }
          return product;
      })
      return {
          ...state,
          results: {
              // ...state.results,
              data: [...oldState]
          }
        }
    }
    default:
      return state;
  }
}

export default bookReducer;
  