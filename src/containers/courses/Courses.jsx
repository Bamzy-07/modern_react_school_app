import React from 'react';
import './courses.css';

import {Cards, CutOuts} from '../../components';
import student from '../../assets/hero01.png';
import {maths, science, social, ict, language,creative} from './imports';


const Courses = () => {
  return (
    <div className='courses section__padding'>
      <div className='courses__content'>
        <h1>Upgrade Your Skills, <br />Upgrade your life</h1>
        <Cards number='01' title='Join a Club' info='Join our vibrant clubs and delve into diverse interests like art, music, debate, robotics, and environmental protection.Unleash your creativity, hone your leadership skills, and make lifelong friends who share your passions.' />
        <Cards number='02' title='Play a sport' info='Cultivate essential life skills like communication, collaboration, and perseverance through various sports like basketball, soccer, volleyball, and track & field. Learn the true meaning of teamwork and sportsmanship in a supportive and encouraging environment.' />
        <Cards number='03' title='Diverse Courses' info=' Develop critical thinking skills, analytical abilities, and problem-solving strategies through engaging lessons and interactive activities. Learn to think outside the box, question assumptions, and approach challenges with creative solutions.'/>
        <div className='courses__subjects'>
          <CutOuts icon={maths} name='Mathematics' />
          <CutOuts icon={science} name='General Science' />
          <CutOuts icon={creative} name='Creative Arts' />
          <CutOuts icon={social} name='Social Studies' />
          <CutOuts icon={language} name='French' />
          <CutOuts icon={ict} name='Technology' />
          
        </div>
      </div>
      <div className='courses__container'>
        <p className='p__poppins'>The following are some of the subjects that students will study when they enter our school. <br />
         Our subjects are also adapted online</p>
         <img src={student} alt="students studying" />
      </div>

    </div>
  )
}

export default Courses