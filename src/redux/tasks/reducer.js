import { CREATE, DELETE, ERROR, LOADING, SET, UPDATE } from "./actionTypse"

const initialState = {
    tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [],
    loading: false,
    error: null
}

function updateLocalStorage(state) {
    localStorage.setItem('tasks', JSON.stringify(state))
}

function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case SET:
            updateLocalStorage(action.payload)
            return {
                ...state,
                tasks: action.payload
            }
        case CREATE:
            state.tasks = [action.payload, ...state.tasks]
            updateLocalStorage(state.tasks)
            return {
                ...state,
                tasks: state.tasks
            }
        case UPDATE:
            state.tasks = state.tasks.map(t => t.id === action.payload.id ? action.payload : t)
            updateLocalStorage(state.tasks)
            return {
                ...state,
                tasks: state.tasks
            }
        case DELETE:
            state.tasks = state.tasks.filter(t => t.id !== action.payload)
            updateLocalStorage(state.tasks)
            return {
                ...state,
                tasks: state.tasks
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

export default tasksReducer