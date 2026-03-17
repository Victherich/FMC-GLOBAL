
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import UserLogin from './components/Login';
import UserSignup from './components/Signup';
import UserDashboard from './components/Dashboard';
import Snowfall from './components/snowFall';
import MinistriesPage from './components/MinistriesPage';
import AboutPage from './components/AboutPage';
import ScrollToTop from './components/ScrollToTop';
import AutoAudioPlayer from './components/AutoAudioPlayer'
import worshipMusic from "./Images/holy.mp3";
import WordFromPastor from './components/WordFromPastor';


function App() {
  return (
 <BrowserRouter>
   <AutoAudioPlayer src={worshipMusic}/>
 <Header/>
 <ScrollToTop/>
 <Snowfall/>
 <Routes>
  <Route path='/' element={<LandingPage/>}/>
<Route path='/ministries' element={<MinistriesPage/>}/>
<Route path='/about' element={<AboutPage/>}/>


  <Route path='/signup' element={<UserSignup/>}/>
  <Route path='/login' element={<UserLogin/>}/>
  <Route path='/dashboard' element={<UserDashboard/>}/>
 </Routes>

 <WordFromPastor/>
  <Footer/>
 </BrowserRouter>
  );
}

export default App;
