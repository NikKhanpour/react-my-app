import axios from "axios";
import { CREATE, DELETE, ERROR, LOADING, SET_TASKS, UPDATE } from "./actionTypes";

export function fetchTasks() {
    return async function (dispatch) {
        try {
            dispatch(setLoading(true))
            const tasks = await axios.get('https://jsonplaceholder.typicode.com/todos')
            dispatch(setLoading(false))
            dispatch(setTasks(tasks.data))
        } catch (error) {

        }
    }
}

export function setTasks(tasks) {
    return {
        type: SET_TASKS,
        payload: tasks
    }
}

export function setError(error) {
    return {
        type: ERROR,
        payload: error
    }
}

export function updateTask(task) {
    return {
        type: UPDATE,
        payload: task
    }
}

export function deleteTask(id) {
    return {
        type: DELETE,
        payload: id
    }
}

export function setLoading(status) {
    return {
        type: LOADING,
        payload: status
    }
}

export function create(task) {
    return {
        type: CREATE,
        payload: task
    }
}