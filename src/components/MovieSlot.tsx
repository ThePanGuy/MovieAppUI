import React, {useEffect, useState} from 'react';
import {get} from "../utilities/fetch";

interface Props {
    title?: string
    user?: string
    description?: string
    creationDate?: string
    likes?: number
    hates?: number
}

const MovieSlot: React.FunctionComponent<Props> = ({title,user,
                                                       description, creationDate,
                                                       likes, hates}) => {


    const [passedDays, setPassedDays] = useState<number>(0)

    useEffect(() => {
        const currentDate = new Date();
        const uploadDate = new Date(creationDate || "");
        const differenceInTime = currentDate.getTime() - uploadDate.getTime();
        setPassedDays(differenceInTime / (1000 * 3600 * 24))
    }, [creationDate])

    const tryToGet = () => {
        get('/user/all');
    }

    return (
        <React.Fragment>
            <div className={'movie-card'}>
                <h2>{title}</h2>
                <span>Posted by {user} {passedDays} day(s) ago</span>
                <p>{description}</p>
                <p>{likes} likes | {hates} hates</p>
                <a onClick={tryToGet}>Let's see</a>
            </div>
        </React.Fragment>
    )

};

export default MovieSlot;