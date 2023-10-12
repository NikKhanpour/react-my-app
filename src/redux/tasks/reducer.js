import { CREATE, DELETE, ERROR, LOADING, SET_TASKS, UPDATE } from "./actionTypes"

const initialState = {
    tasks: [],
    loading: false,
    error: null
}

function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case CREATE:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
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
        case DELETE:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case UPDATE:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? { ...task, completed: !task.completed } : task)
            }
        default:
            return state
    }
}
export default tasksReducer