import React from 'react';
import {Brand,CTA,Navbar } from './components';
import {Footer,Feature,Header,Possibility,WhatGPT3,Blog } from './container';
import './App.css';

function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Feature/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App
