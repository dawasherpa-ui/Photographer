import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About';
import Contact from './component/Contact';
import Works from './component/Works';

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <div className="app" id='main-item'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/About' element={<About />} />
              <Route exact path='/Works' element={<Works />} />
              <Route exact path='/Contact' element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
