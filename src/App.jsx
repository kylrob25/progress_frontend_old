import { BrowserRouter, Routes, Route} from "react-router-dom";
import ViewUsers from "./pages/user/ViewUsers";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ViewUser from "./pages/user/ViewUser"
import Trainer from "./pages/trainer/ViewTrainer";
import ViewTrainers from "./pages/trainer/ViewTrainers";
import CreateUser from "./pages/user/CreateUser";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ViewTrainers />} />

                    <Route path="/admin/user" element={<ViewUsers />} />
                    <Route path="/admin/user/:userId" element={<ViewUser />} />
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