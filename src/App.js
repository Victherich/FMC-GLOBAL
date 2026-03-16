
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import UserLogin from './components/Login';
import UserSignup from './components/Signup';
import UserDashboard from './components/Dashboard';
import Snowfall from './components/snowFall';


function App() {
  return (
 <BrowserRouter>
 <Header/>
 <Snowfall/>
 <Routes>
  <Route path='/' element={<LandingPage/>}/>
  <Route path='/signup' element={<UserSignup/>}/>
  <Route path='/login' element={<UserLogin/>}/>
  <Route path='/dashboard' element={<UserDashboard/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
  );
}

export default App;
