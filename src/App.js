import logo from './logo.svg';
import Home from './page/Home';
import Property from './page/Property';
import Salary from './page/Salary';
import { BrowserRouter as Router, Route, Routes , Navigate  } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/salary" element={<Salary />} />
        {/*<Route path="/knowledge" element={<KnowledgeBase />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
