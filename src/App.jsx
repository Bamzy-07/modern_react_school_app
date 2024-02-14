import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';

import {Home, Images,Profile, Contact} from './pages';
import {Navbar} from './components';
import { Footer} from './containers';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/gallery' element={<Images />} />
        <Route path='/JoinUs' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App