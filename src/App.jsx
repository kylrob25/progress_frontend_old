import { BrowserRouter, Routes, Route} from "react-router-dom";
import Users from "./pages/Users";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User from "./pages/User"
import Trainer from "./pages/Trainer";
import Trainers from "./pages/Trainers";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="/admin/user" element={<Users />} />
                    <Route path="/admin/user/:userId" element={<User />} />

                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />

                    <Route path="trainer" element={<Trainers/>} />
                    <Route path="trainer/:username" element={<Trainer/>} />

                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;