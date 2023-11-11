import React from 'react';
import './App.css';
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
            </div>
        </div>
    );
}

export default App;
