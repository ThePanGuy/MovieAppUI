import React from 'react';
import Header from "../Header";
import SecuredMovies from "./SecuredMovies";
import Actions from "./Actions";

function MoviesPage() {


    return (
        <div className="App">
            <Header/>
            <div className={'main'}>
                <SecuredMovies />
                <Actions/>
            </div>
        </div>
    );
}

export default MoviesPage;
