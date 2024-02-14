import React from 'react';

import {Header,Brand, Hero, Courses,Gallery,Review,Cta,Blog} from '../../containers';

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Brand />
      <Hero />
      <Courses />
      <Gallery />
      <Review />
      <Cta />
      <Blog />
    </div>
  )
}

export default Home