import React, {useEffect, useState} from 'react';
import {MovieReactions, User} from "../models/model";
import {addHate, addLike} from "../operations/operation";

interface Props {
    id?: string,
    title?: string
    uploadedBy?: User
    description?: string
    creationDate?: string
    likes?: number
    hates?: number
}

const MovieSlot: React.FunctionComponent<Props> = ({id,title, uploadedBy,
                                                       description, creationDate,
                                                       likes, hates}) => {


    const [passedDays, setPassedDays] = useState<number>(0)
    const [numberOfLikes, setNumberOfLikes] = useState(likes);
    const [numberOfHates, setNumberOfHates] = useState(hates);

    useEffect(() => {
        const currentDate = new Date();
        const uploadDate = new Date(creationDate || "");
        let differenceInTime = currentDate.getTime() - uploadDate.getTime();
        differenceInTime = Math.floor(differenceInTime / (1000 * 3600 * 24));
        setPassedDays(differenceInTime)
    }, [creationDate])

    const updateReactions = (movieReactions: MovieReactions) => {
        setNumberOfLikes(movieReactions.numberOfLikes);
        setNumberOfHates(movieReactions.numberOfHates);
    }

    const likeMovie = () => {
        if (id) {
            addLike(id)
                .then(response => {
                    debugger
                    updateReactions(response)
                })
                .catch(error => alert(error));
        }
    }

    const hateMovie = () => {
        if (id) {
            addHate(id)
                .then(response => {
                    debugger
                    updateReactions(response)
                })
                .catch(error => alert(error));
        }
    }


    return (
        <React.Fragment>
            <div className={'movie-card'}>
                <h2>{title}</h2>
                <span>Posted by {uploadedBy?.username} {passedDays} day(s) ago</span>
                <p>{description}</p>
                <p>{numberOfLikes} <a onClick={likeMovie}>likes</a> | {numberOfHates} <a onClick={hateMovie}>hates</a></p>
            </div>
        </React.Fragment>
    )

};

export default MovieSlot;