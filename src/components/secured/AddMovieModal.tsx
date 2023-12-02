import React from 'react';
import MovieForm from "./MovieForm";

interface Props {
    isOpen: boolean
    onClose: any
}

const AddMovieModal: React.FC<Props> = ({isOpen, onClose}) => {


    return (
        <div className={'modal' + (isOpen ? ' is-active' : '')}>
            <div className={'modal-background'}/>
            <div className={'modal-card'}>
                <header className={'modal-card-head'}>
                    <p className={'modal-card-title'}>Add Movie</p>
                </header>
                <section className={'modal-card-body'}>
                    <MovieForm/>
                </section>
                <footer className={'modal-card-foot'}>
                    <div>
                        <button onClick={onClose}>Close</button>
                    </div>
                </footer>


            </div>
        </div>
    );
};

export default AddMovieModal;