import { BrowserRouter, Routes, Route} from "react-router-dom";
import Users from "./pages/user/Users";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import User from "./pages/user/User"
import Trainer from "./pages/Trainer";
import Trainers from "./pages/Trainers";
import CreateUser from "./pages/user/CreateUser";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Trainers />} />

                    <Route path="/admin/user" element={<Users />} />
                    <Route path="/admin/user/:userId" element={<User />} />
                    <Route path="/admin/create" element={<CreateUser/>} />

                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />

                    <Route path="trainer/:username" element={<Trainer/>} />

                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;