import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"
import Users from "./pages/users/Users"
import { Provider } from "react-redux";
import store from "./redux/store"
import PostsRoutes from "./pages/posts/Routes";
import Students from "./pages/students/Students";
import Tasks from "./pages/tasks/Tasks";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />

                    <Route path="/posts/*" element={<PostsRoutes />} />

                    <Route path="/students" element={<Students />} />

                    <Route path="/tasks" element={<Tasks />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;