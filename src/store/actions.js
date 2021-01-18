export const SET_KEY = "SET_KEY";
export const GET_KEY = "GET_KEY";

export function setKey(key, value) {
    return {
        type: SET_KEY,
        payload: {
            key: key,
            value: value
        }
    }
}

export function getKey(key) {
    return {
        type: GET_KEY,
        payload: key
    }
}