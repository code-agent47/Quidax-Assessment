

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_FAILED = 'FETCH_FAILED';
export const INCREASE_AVAILABLE_QUANTITY = 'INCREASE_AVAILABLE_QUANTITY';
export const DECREASE_AVAILABLE_QUANTITY = 'DECREASE_AVAILABLE_QUANTITY';
export const RESTORE_AVAILABLE_QUANTITY = 'RESTORE_AVAILABLE_QUANTITY';
export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';

export interface FetchRequst {
    type: typeof FETCH_REQUEST
}

export interface FetchFailed {
    type: typeof FETCH_FAILED
}

export interface UpdateQuantity {
    type: typeof INCREASE_AVAILABLE_QUANTITY
    data: any
}

export interface DecreaseQuantity {
    type: typeof DECREASE_AVAILABLE_QUANTITY
    data: any
}

export interface RestoreQuantity {
    type: typeof RESTORE_AVAILABLE_QUANTITY
    data: any
    quantity: any
}

export interface FetchSuccessful {
    type: typeof FETCH_SUCCESSFUL,
    response: {
        data: any
    }
}

export type FetchDispatchTypes = FetchRequst | FetchFailed | UpdateQuantity | DecreaseQuantity | RestoreQuantity | FetchSuccessful 