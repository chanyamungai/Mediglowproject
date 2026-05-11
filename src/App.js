import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Consult from './components/Consult';
import Tips from './components/Tips';
import SkinHealthChecker from './components/SkinHealthChecker';

function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <nav className="nav-links">

            <div className="nav-left">
              <Link to="/" className="nav-btn">Mediglow</Link>
              <Link to="/addproducts" className="nav-btn">Products</Link>
              <Link to="/consult" className="nav-btn">Consult</Link>
              <Link to="/tips" className="nav-btn">Tips</Link>
              <Link to="/skinhealthchecker" className="nav-btn">Checker</Link>
            </div>

            <div className="nav-right">
              <Link to="/signin" className="nav-btn">Signin</Link>
              <Link to="/signup" className="nav-btn">Signup</Link>
            </div>

          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Getproducts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addproducts" element={<Addproducts />} />
          <Route path="/makepayment" element={<Makepayment />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/skinhealthchecker" element={<SkinHealthChecker />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;