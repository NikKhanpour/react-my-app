import axios from "axios";
import { ERROR, LOADING, SET } from "./actionTypes";

export function fetchPosts() {
    return async function (dispatch) {
        try {
            dispatch(setLoading(true))
            const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch(setLoading(false))
            dispatch(setPosts(posts.data))
        } catch (error) {
            dispatch(setError(error.message))
            dispatch(setLoading(false))
        }
    }
}

export function setPosts(posts) {
    return {
        type: SET,
        payload: posts
    }
}

export function setError(error) {
    return {
        type: ERROR,
        payload: error
    }
}

export function setLoading(status) {
    return {
        type: LOADING,
        payload: status
    }
}