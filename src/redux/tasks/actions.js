import axios from "axios";
import { CREATE, DELETE, ERROR, ID, LOADING, SET, UPDATE } from "./actionTypse";

export function fetchTasks() {
    return async function (dispatch) {
        if (!localStorage.getItem('tasks')) {
            try {
                dispatch(setLoading(true))
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                dispatch(setLoading(false))
                dispatch(setError(null))
                dispatch(setTasks(response.data))
            } catch (error) {
                dispatch(setLoading(false))
                dispatch(setError(error.message))
            }
        }
    }
}
export function setTasks(tasks) {
    return {
        type: SET,
        payload: tasks
    }
}

export function fetchCreateTask(task) {
    return async function (dispatch) {
        try {
            await axios.post('https://jsonplaceholder.typicode.com/todos', { ...task })
            dispatch(createTask(task))
        } catch (error) {
            dispatch(setError(error.message))
        }
    }
}
export function createTask(task) {
    return {
        type: CREATE,
        payload: task
    }
}

export function fetchUpdateTask(task) {
    return async function (dispatch) {
        try {
            await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`)
            dispatch(setError(null))
            dispatch(updateTask(task))
        } catch (error) {
            // dispatch(setError(error.message))
            dispatch(updateTask(task))
        }
    }
}
export function updateTask(task) {
    return {
        type: UPDATE,
        payload: task
    }
}

export function fetchDeleteTask(id) {
    return async function (dispatch) {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            dispatch(setError(null))
            dispatch(deleteTask(id))
        } catch (error) {
            // dispatch(setError(null))
            dispatch(deleteTask(id))
        }
    }
}
export function deleteTask(id) {
    return {
        type: DELETE,
        payload: id
    }
}

export function setId() {
    return {
        type: ID
    }
}

export function setLoading(status) {
    return {
        type: LOADING,
        payload: status
    }
}

export function setError(error) {
    return {
        type: ERROR,
        payload: error
    }
}