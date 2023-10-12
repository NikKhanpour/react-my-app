import { ADD, CLEAR, DECREMENT, DELETE, INCREMENT } from "./actionTypes"

const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
}

function updateLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
}

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
            const hasProduct = state.cart.find(p => p.id === action.payload.id) ? true : false
            state.cart = hasProduct ? state.cart.map(p => p.id === action.payload.id ? { ...p, qty: p.qty + 1 } : p) : [...state.cart, { ...action.payload, qty: 1 }]
            updateLocalStorage(state.cart)
            return {
                ...state,
                cart: state.cart
            }
        case INCREMENT:
            state.cart = state.cart.map(p => p.id === action.payload ? { ...p, qty: p.qty + 1 } : p)
            updateLocalStorage(state.cart)
            return {
                ...state,
                cart: state.cart
            }
        case DECREMENT:
            state.cart = state.cart.map(p => p.id === action.payload ? (p.qty > 1 ? { ...p, qty: p.qty - 1 } : p) : p)
            updateLocalStorage(state.cart)
            return {
                ...state,
                cart: state.cart
            }
        case DELETE:
            state.cart = state.cart.filter(p => p.id !== action.payload)
            updateLocalStorage(state.cart)
            return {
                ...state,
                cart: state.cart
            }
        case CLEAR:
            updateLocalStorage([])
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state
    }
}
export default cartReducer