import React from 'react';

//importing containers from 
import {About, Footer, Header, Skills, Work} from './container';
import {Navbar} from './components';

//importing scss file
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About />
      <Work />
      <Skills />
      {/* <Testimonials /> */}
      <Footer/>
    </div>
  );
}

export default App;