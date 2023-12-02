import React from 'react';
import Header from "../Header";
import Movies from "../Movies";

function MoviesPage() {


    return (
        <div className="App">
            <Header/>
            <div>
                <Movies/>
            </div>
        </div>
    );
}

export default MoviesPage;
