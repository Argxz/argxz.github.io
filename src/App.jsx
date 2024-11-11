import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='App'>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
