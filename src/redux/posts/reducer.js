import { BTN_LOADING, DELETE, ERROR, LOADING, SET, UPDATE } from "./actionTypse"

const initialState = {
    posts: localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [],
    loading: false,
    btnLoading: false,
    error: null
}

function updateLocalstorage(state) {
    localStorage.setItem('posts', JSON.stringify(state))
}

function postsReducer(state = initialState, action) {
    switch (action.type) {
        case SET:
            updateLocalstorage(action.payload)
            return {
                ...state,
                posts: action.payload
            }
        case UPDATE:
            state.posts = state.posts.map(p => p.id === action.payload.id ? action.payload : p)
            updateLocalstorage(state.posts)
            return {
                ...state,
                posts: state.posts
            }
        case DELETE:
            state.posts = state.posts.filter(p => p.id !== action.payload)
            updateLocalstorage(state.posts)
            return {
                ...state,
                posts: state.posts
            }
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case BTN_LOADING:
            return {
                ...state,
                btnLoading: action.payload
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