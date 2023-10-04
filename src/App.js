import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import History from './Components/History';
import WordHistory from './Components/WordHistory';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/history/word/:searchTerm' element={<WordHistory />} />
      </Routes>
    </div>
  );
}

export default App;
