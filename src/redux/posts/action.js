import axios from "axios"
import { BTN_LOADING, DELETE, ERROR, LOADING, SET, UPDATE } from "./actionTypse"

export function fetchPosts() {
    return async function (dispatch) {
        if (!localStorage.getItem('posts')) {
            try {
                dispatch(setLoading(true))
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                dispatch(setLoading(false))
                dispatch(setError(null))
                dispatch(setPosts(response.data))
            } catch (error) {
                dispatch(setLoading(false))
                dispatch(setError(error.message))
            }
        }
    }
}
export function setPosts(post) {
    return {
        type: SET,
        payload: post
    }
}

export function fetchUpdatePost(post) {
    return async function (dispatch) {
        try {
            dispatch(setBtnLoading(true))
            await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, { ...post })
            dispatch(updatePost(post))
            dispatch(setBtnLoading(false))
            dispatch(setError(null))
        } catch (error) {
            console.log(error)
            dispatch(setBtnLoading(false))
            dispatch(setError(error.message))
        }
    }
}
export function updatePost(post) {
    return {
        type: UPDATE,
        payload: post
    }
}

export function fetchDeletePost(id) {
    return async function (dispatch) {
        try {
            dispatch(setBtnLoading(true))
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            dispatch(setBtnLoading(false))
            dispatch(setError(null))
            dispatch(deletePost(id))
        } catch (error) {
            dispatch(setBtnLoading(false))
            dispatch(setError(error.message))
        }
    }
}
export function deletePost(id) {
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

export function setBtnLoading(status) {
    return {
        type: BTN_LOADING,
        payload: status
    }
}

export function setError(error) {
    return {
        type: ERROR,
        payload: error
    }
}