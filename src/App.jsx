import { BrowserRouter, Routes, Route} from "react-router-dom";
import ViewClients from "./pages/ViewClients";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/clients" element={<ViewClients />} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;