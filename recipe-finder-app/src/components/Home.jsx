/* eslint-disable react/prop-types */
import React from 'react';
import Herosection from './subcomponents/Herosection';
import Recipes from './subcomponents/Recipes';

const Home = ({ recipes }) => {
  return (
    <div>
      <Herosection />
      <Recipes recipes={recipes}/>
    </div>
  );
}

export default Home;
