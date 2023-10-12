import { ERROR, LOADING, SET } from "./actionTypes"

const initialState = {
    posts: [],
    loading: false,
    error: null
}

function postsReducer(state = initialState, action) {
    switch (action.type) {
        case SET:
            return {
                ...state,
                posts: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
export default postsReducer