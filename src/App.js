import './App.css';
import Header from './components/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import FoodMenu from './components/FoodMenu/FoodMenu';
import Location from './components/Location/Location'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Novelties from './components/Novelties/Novelties';
import LiquorStore from './components/LiquorStore/LiquorStore';
import About from './components/About/About'
import Job from './components/Job/Job'
import Login from './components/Auth/LogIn/Login'
import Forgotpassword from './components/Auth/ForgotPassword/Forgotpassword';
import Singup from './components/Auth/SignUp/Singup'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodmenu" element={<FoodMenu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/novelties" element={<Novelties />} />
          <Route path="/liquorstore" element={<LiquorStore />} />
          <Route path="/about" element={<About />} />
          <Route path="/job" element={<Job />} />
          <Route path="/login" element={<Login /> } />
          <Route path="/forgot" element={<Forgotpassword />} />
          <Route path="/singup" element={<Singup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
