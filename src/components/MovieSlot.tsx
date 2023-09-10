import React, {useEffect, useState} from 'react';
import {User} from "../models/model";

interface Props {
    title?: string
    uploadedBy?: User
    description?: string
    creationDate?: string
    likes?: number
    hates?: number
}

const MovieSlot: React.FunctionComponent<Props> = ({title, uploadedBy,
                                                       description, creationDate,
                                                       likes, hates}) => {


    const [passedDays, setPassedDays] = useState<number>(0)

    useEffect(() => {
        const currentDate = new Date();
        const uploadDate = new Date(creationDate || "");
        let differenceInTime = currentDate.getTime() - uploadDate.getTime();
        differenceInTime = Math.floor(differenceInTime / (1000 * 3600 * 24));
        setPassedDays(differenceInTime)
    }, [creationDate])

    return (
        <React.Fragment>
            <div className={'movie-card'}>
                <h2>{title}</h2>
                <span>Posted by {uploadedBy?.username} {passedDays} day(s) ago</span>
                <p>{description}</p>
                <p>{likes} likes | {hates} hates</p>
            </div>
        </React.Fragment>
    )

};

export default MovieSlot;