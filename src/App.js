import React from 'react';
import { NavBar } from './components/navbar/NavBar';
import { Banner } from './components/banner/Banner';
import { Business } from './components/business/Business';
import { Community } from './components/community/Community';
import { Games } from './components/games/Games';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Vision } from './components/vision/Vision';
import { Timeline } from './components/timeline/Timeline';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Business />
      <Vision />
      <Community />
      <Timeline />
      {/* <Games /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
