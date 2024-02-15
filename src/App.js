import { BrowserRouter, Routes, Route} from "react-router-dom";
import ViewClients from "./pages/ViewClients";
import NoPage from "./pages/NoPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="/clients" element={<ViewClients />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;