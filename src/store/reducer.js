

import { SET_KEY, GET_KEY } from './actions';

const initialState = {
    keyword: ``
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_KEY:
            return {
                ...state,
                [action.payload.key]: action.payload.value
            };

        case GET_KEY:
            return {
                ...state
            };

        default:
			return state;
    }
}

export default reducer;