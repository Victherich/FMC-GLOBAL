
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
import SalvationExperience from './components/SalvationExperience';
import Hero2 from './components/Hero2';
import ContactSection from './components/ContactUs';
import ContactCTA from './components/ContactUsCTA';
import SermonsPage from './components/SermonsPage';
import EventsPage from './components/EventsPage';
import InspirationalPage from './components/InspirationalPage';
import TestimoniesPage from './components/TestimoniesPage';
import DonationsPage from './components/DonationsPage';
import wp from './Images/whatsapplogo.png'
import logo from './Images/p19.jpeg'
import AppUpdate from './components/AppUpdate';
import HostingExpiryGuard from './components/HostingExpiryGuard';


function App() {
  return (
 <BrowserRouter>
 <HostingExpiryGuard/>
 <AppUpdate/>
   <AutoAudioPlayer src={worshipMusic}/>
 <Header/>
 <ScrollToTop/>
 <Snowfall/>
 <Routes>
  <Route path='/' element={<LandingPage/>}/>
<Route path='/ministries' element={<MinistriesPage/>}/>
<Route path='/about' element={<AboutPage/>}/>
<Route path='/contact' element={<ContactSection/>}/>
<Route path='/sermons' element={<SermonsPage/>}/>
<Route path='/events' element={<EventsPage/>}/>
<Route path='/inspirationals' element={<InspirationalPage/>}/>
<Route path='/testimonies' element={<TestimoniesPage/>}/>
<Route path='/donations' element={<DonationsPage/>}/>



  <Route path='/signup' element={<UserSignup/>}/>
  <Route path='/login' element={<UserLogin/>}/>
  <Route path='/dashboard' element={<UserDashboard/>}/>
 </Routes>

 <WordFromPastor/>
 <SalvationExperience/>
  <ContactCTA/>
   <a><img src={wp} alt="logo" className="WhatsAppIcon" onClick={() => window.open("https://wa.me/2347036434618", "_blank")} /></a> 
    <a><img src={logo} alt="logo" className="WhatsAppIcon2" /></a> 
  
 <Hero2/>
 
  <Footer/>
 </BrowserRouter>
  );
}

export default App;
