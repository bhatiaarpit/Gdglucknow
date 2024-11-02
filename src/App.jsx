import "./app.css";
import React from 'react';
import SimpleNavbar from './Components/NavBar';
import { HeroSection } from './Components/HeroSection';
import { CarouselCustomNavigation } from './Components/HeroCrousel';
import { Footer } from './Components/Footer';
import AboutGdg from './Components/AboutGdg';
import UpcomingEvents from './Components/UpcomingEvents'; // Import the UpcomingEvents component
import PastEvents from './Components/PastEvents'; // Import the UpcomingEvents component
import Organizers from "./Components/Organizers";
import CommunityPartners from "./Components/CommunityPartners";
import { ImageGallery } from "./Components/ImageGallery";

function App() {
  return (
    <div>
      <SimpleNavbar/> 
      <CarouselCustomNavigation /> 
      <HeroSection/>
      <AboutGdg/>
      <UpcomingEvents/> 
      <PastEvents/>  
      <Organizers/>
      <CommunityPartners/>
      <ImageGallery/>
      <Footer/>
    </div>
  );
}

export default App;
