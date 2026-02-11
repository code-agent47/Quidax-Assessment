import { Dispatch } from 'redux';
import {
  FetchDispatchTypes,
  FETCH_SUCCESSFUL,
  FETCH_REQUEST,
  INCREASE_AVAILABLE_QUANTITY,
  DECREASE_AVAILABLE_QUANTITY,
  RESTORE_AVAILABLE_QUANTITY
} from './BooksActionType';
import data from '../../data.json';

export const BooksAction =
  () => async (dispatch: Dispatch<FetchDispatchTypes | any>) => {
    dispatch({ type: FETCH_REQUEST });
    dispatch({
      type: FETCH_SUCCESSFUL,
      response: data,
    });
};

export const increaseAvailableQuantity = (data: object) => {
  return (dispatch: Dispatch<FetchDispatchTypes | any>) => {
      dispatch({ 
          type: INCREASE_AVAILABLE_QUANTITY,
          data
      });
  };
};

export const decreaseAvailableQuantity = (data: object) => {
  return (dispatch: Dispatch<FetchDispatchTypes | any>) => {
      dispatch({ 
          type: DECREASE_AVAILABLE_QUANTITY,
          data
      });
  };
};

export const restoreAvailableQuantity = (data: object, quantity: number) => {
  return (dispatch: Dispatch<FetchDispatchTypes | any>) => {
      dispatch({ 
          type: RESTORE_AVAILABLE_QUANTITY,
          data,
          quantity
      });
  };
};


