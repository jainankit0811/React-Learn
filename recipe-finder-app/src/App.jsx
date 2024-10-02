import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import RecipeDetails from './components/RecipeDetails';
import Recipe from './components/subcomponents/Recipes';
import data from "./resipes.json";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(data);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home recipes={recipes} />} />
          <Route path='/about' element={<About />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/recipe/:id' element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
