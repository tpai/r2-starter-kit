/* global fetch */

export const GET = "app/list/GET";
export const FAILED = "app/list/FAILED";

const reducer = (state = [], action) => {
    switch (action.type) {
    case GET:
        return action.data.map(item => ({
            id: item.id,
            title: item.title,
            link: `/posts/${item.id}`,
            desc: item.body,
            img: `http://lorempixel.com/320/180?t=${item.id}`,
        }));
    case FAILED:
        return [ {
            id: 0,
            title: "Fetch Failed...",
            link: "#",
            desc: "Fetch Failed...",
            img: "http://placehold.it/320x180",
        } ];
    default:
        return state;
    }
};

export default reducer;

export function getList(cb) {
    return async (dispatch) => {
        try {
            const res = await fetch("http://jsonplaceholder.typicode.com/posts");
            const json = await res.json();
            dispatch(gotList(json));
            cb();
        } catch (err) {
            dispatch(getListFailed());
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
