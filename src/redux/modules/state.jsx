export const LOADING = 'app/post/LOADING';
export const IDLE = 'app/post/IDLE';
export const FAILURE = 'app/post/FAILURE';

const reducer = (state = 'idle', action) => {
    switch (action.type) {
    case LOADING:
        return 'loading';
    case IDLE:
        return 'idle';
    case FAILURE:
        return 'failure';
    default:
        return state;
    }
};

export default reducer;

export function stateLoading() {
    return {
        type: LOADING
    };
}

export function stateIdle() {
    return {
        type: IDLE
    };
}

export function stateFailure() {
    return {
        type: FAILURE
    };
}
