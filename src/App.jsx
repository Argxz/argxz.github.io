import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import Education from './pages/Education';
import Experiences from './pages/Experiences';
import Skills from './pages/Skills';
import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  return (
    <div className='App'>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experiences" element={<Experiences />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
