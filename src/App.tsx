import React from 'react';
import './App.css';
import MovieSlot from "./components/MovieSlot";
import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <div>
                <Movies/>
                <MovieSlot/>
            </div>
        </div>
    );
}

export default App;
