import './App.css';
import Home from './containers/home/Home';
import CartPage from './user/cartPage/CartPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
