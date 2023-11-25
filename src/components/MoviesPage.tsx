import React from 'react';
import '../App.css';
import Header from "./Header";
import Movies from "./Movies";

function MoviesPage() {
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

export default MoviesPage;
