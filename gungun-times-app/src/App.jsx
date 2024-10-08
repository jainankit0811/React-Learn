/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  const [news,setnews]= useState([]);

  const filterNews = async(category)=>{
    let link = "";
    if(category && category !== "everything"){
      link = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=3001696eb2aa436098fb7e3e471116a8`
    } else{
      link = "https://newsapi.org/v2/everything?q=keyword&apiKey=3001696eb2aa436098fb7e3e471116a8"
    }

    const {data} = await axios.get(link)
  }
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
