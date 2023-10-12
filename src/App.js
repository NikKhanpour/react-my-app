import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UserRoutes from "./pages/users/Routes";
import PostsRoutes from "./pages/posts/Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import TasksRoutes from "./pages/tasks/Routes";
import Products from "./pages/ProductsPage";
import Cart from "./pages/Cart";

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products" element={<Products />} />

                    <Route path="/users/*" element={<UserRoutes />} />
                    <Route path="/posts/*" element={<PostsRoutes />} />
                    <Route path="/tasks/*" element={<TasksRoutes />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}

export default App;