import React from 'react';
import { NavBar } from './components/navbar/NavBar';
import { Banner } from './components/banner/Banner';
import { Business } from './components/business/Business';
import { Community } from './components/community/Community';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Vision } from './components/vision/Vision';
import { Timeline } from './components/timeline/Timeline';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log(`
   ________  ___  ___  __   _____  __
  / __/ __ \\/ _ \\/ _ \\/ /  / _ \\/ / /
 / _// /_/ / , _/ ___/ /__/ __ |\\  / 
/_/  \\____/_/|_/_/  /____/_/ |_|/_/  
`);
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Business />
      <Vision />
      <Community />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
