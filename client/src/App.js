import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import Pilotes from './pages/Pilotes';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default App;