import fetch from 'isomorphic-fetch';

import {
    stateLoading,
    stateIdle,
    stateFailure
} from 'redux/modules/state';

export const GET = 'app/list/GET';
export const FAILED = 'app/list/FAILED';

const reducer = (state = [], action) => {
    switch (action.type) {
    case GET:
        return action.data.map(item => ({
            id: item.id,
            title: item.title,
            link: `/article/${item.id}`,
            desc: item.body,
            img: `https://picsum.photos/320/180?image=${item.id}`,
        }));
    case FAILED:
        return [];
    default:
        return state;
    }
};

export default reducer;

export function getList(cb = () => {}) {
    return async dispatch => {
        dispatch(stateLoading());
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await res.json();
            dispatch(gotList(json.slice(0, 20)));
            dispatch(stateIdle());
            cb();
        } catch (err) {
            dispatch(getListFailed());
            dispatch(stateFailure());
            cb();
        }
    };
}

export function gotList(json) {
    return {
        type: GET,
        data: json,
    };
}

export function getListFailed() {
    return {
        type: FAILED,
    };
}
