import './styles/index.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pilotes from './pages/Pilotes';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pilotes" element={<Pilotes />} />
      </Routes>
    </div>
  )
}

export default App;
