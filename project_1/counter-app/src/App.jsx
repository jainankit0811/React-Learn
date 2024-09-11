import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const[value, setvalue] = useState(0);
  return (
    <div>
      <article>
        <header>Counter App</header>
        <section>
          <h1>{value}</h1>
            <div className="button">
              <button className='btn'>-</button>
              <button className='btn'>+</button>
            </div>
          
        </section>
    <footer>All Right Reserved By CodeWithZeeshu</footer>
      </article>
    </div>
  );
}

export default App;
