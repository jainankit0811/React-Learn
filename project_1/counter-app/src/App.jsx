import React,{ useState} from "react";

import "./App.css";
const App = () => {
  const [value, setvalue] = useState();
  return (
    <>
    <article>
      <header>
        COUNTER APP
      </header>
      <section>
        <h1>100</h1>
        <div className="button">
          <button className="btn">-</button>
          <button className="btn">+</button>
        </div>
      </section>
      <footer>All Rights Reserved By Ankit Dhanawat</footer>
    </article>
    </>
  );
}

export default App;
