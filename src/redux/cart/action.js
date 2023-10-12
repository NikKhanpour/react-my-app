import { ADD, CLEAR, DECREMENT, DELETE, INCREMENT } from "./actionTypes";

export function addToCart(item) {
    return {
        type: ADD,
        payload: item
    }
}

export function increment(id) {
    return {
        type: INCREMENT,
        payload: id
    }
}

export function decrement(id) {
    return {
        type: DECREMENT,
        payload: id
    }
}

export function deleteItem(id) {
    return {
        type: DELETE,
        payload: id
    }
}

export function clear() {
    return {
        type: CLEAR,
        payload: []
    }
}