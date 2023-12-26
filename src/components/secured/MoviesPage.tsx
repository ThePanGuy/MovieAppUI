import React from 'react';
import Header from "../Header";
import SecuredMovies from "./SecuredMovies";
import Actions from "./Actions";
import Sorting from "./Sorting";

function MoviesPage() {


    return (
        <div className="App">
            <Header/>
            <div className={'main'}>
                <Sorting/>
                <div className={"flex-container"}>
                    <SecuredMovies/>
                    <Actions/>
                </div>
            </div>
        </div>
    );
}

export default MoviesPage;
