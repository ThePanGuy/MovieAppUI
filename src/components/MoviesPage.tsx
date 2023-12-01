import React from 'react';
import Header from "./Header";
import Movies from "./Movies";

//todo deprecated, remove
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
