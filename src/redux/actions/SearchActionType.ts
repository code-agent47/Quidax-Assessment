export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_FAILED = 'SEARCH_FAILED';
export const SEARCH_SUCCESSFUL = 'SEARCH_SUCCESSFUL';

export interface SearchRequst {
    type: typeof SEARCH_REQUEST
}

export interface SearchFailed {
    type: typeof SEARCH_FAILED
}

export interface SearchSuccessful {
    type: typeof SEARCH_SUCCESSFUL,
    response: {
        data: any
    }
}

export type SearchDispatchTypes = SearchRequst | SearchFailed | SearchSuccessful 