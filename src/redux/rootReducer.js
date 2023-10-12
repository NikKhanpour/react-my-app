import { combineReducers } from "redux";
import postsReducer from "./posts/reducer";
import tasksReducer from "./tasks/reducer";
import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    tasks: tasksReducer,
    products: productsReducer,
    cart: cartReducer
})
export default rootReducer