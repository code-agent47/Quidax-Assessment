import { Dispatch } from 'redux';
import {
  SearchDispatchTypes,
  SEARCH_SUCCESSFUL,
  SEARCH_REQUEST,
} from './SearchActionType';

export const SearchAction =
  (data: any) => async (dispatch: Dispatch<SearchDispatchTypes | any>) => {
    dispatch({ type: SEARCH_REQUEST });
    await dispatch({
      type: SEARCH_SUCCESSFUL,
      response: data,
    });
};

