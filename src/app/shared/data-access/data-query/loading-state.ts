export interface LoadingState<Data> {
    data: Data[];
    loading: boolean;
}

export const initialLoadingState = {
    data: [],
    loading: false
}