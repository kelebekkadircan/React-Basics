import React from "react";
import CounterActions from "./components/CounterActions";
import Counter from "./components/Counter";
import './index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import { routes } from "./Routes";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  const { dark } = useSelector(state => state.site)

  console.log(routes);

  return (
    < >
      <Router>
        <div className='counter'>
          <div className={dark ? 'dark' : 'light'}>
            <h1>
              <Header />
              <Counter />
              <CounterActions />

              <Footer />
            </h1>

          </div>

        </div>
      </Router>
    </>

  );
}

export default App;
