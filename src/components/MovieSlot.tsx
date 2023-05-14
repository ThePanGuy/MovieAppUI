import React, {useEffect, useState} from 'react';

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
        let differenceInTime = currentDate.getTime() - uploadDate.getTime();
        differenceInTime = Math.floor(differenceInTime / (1000 * 3600 * 24));
        setPassedDays(differenceInTime)
    }, [creationDate])

    return (
        <React.Fragment>
            <div className={'movie-card'}>
                <h2>{title}</h2>
                <span>Posted by {user} {passedDays} day(s) ago</span>
                <p>{description}</p>
                <p>{likes} likes | {hates} hates</p>
            </div>
        </React.Fragment>
    )

};

export default MovieSlot;