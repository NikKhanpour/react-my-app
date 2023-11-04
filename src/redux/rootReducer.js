import { combineReducers } from "redux";
import postsReducer from "./posts/reducer";
import tasksReducer from "./tasks/reducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    tasks: tasksReducer
})

export default rootReducer