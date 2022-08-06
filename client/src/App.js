import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import LoginPage from "./pages/LoginPage";
import Pilotes from './pages/Pilotes';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
};

export default App;