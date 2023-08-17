import './App.css';
import Create from './components/Create';
import Home from './components/Home';
import Update from './components/Update';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h2>Customer Data Management {`(CRUD)`}</h2>
      <h6>This is not connected to a datebase</h6>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
