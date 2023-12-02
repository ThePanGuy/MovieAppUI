import React from 'react';
import Header from "../Header";
import SecuredMovies from "./SecuredMovies";

function MoviesPage() {


    return (
        <div className="App">
            <Header/>
            <div>
                <SecuredMovies/>
            </div>
        </div>
    );
}

export default MoviesPage;
