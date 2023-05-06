import React from 'react';
import './App.css';
import MovieSlot from "./components/MovieSlot";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header>
          <Header/>
      </header>
      <div>
        <MovieSlot/>
      </div>
    </div>
  );
}

export default App;
