import React, {useEffect} from 'react';
import {usePaging} from "../hooks/PagingHook";
import {MoviePage} from "../models/model";
import MovieCard from "./MovieSlot";

const Movies: React.FunctionComponent = () => {
    const paging = usePaging<MoviePage>('/movie/page', 12, 0);
    useEffect(() => {
        console.log(paging.response)
    }, [paging])

    return (
        <div>
            {!paging.isFetching && !paging.isLoading && paging.response !== undefined && paging.response.content !== undefined &&
                paging.response.content.map((moviePage) => {
                    return <MovieCard user={moviePage.uploadedBy.username} title={moviePage.title}
                                      creationDate={moviePage.creationDate} description={moviePage.description}
                                      hates={moviePage.hates} likes={moviePage.likes}/>
                })
            }
        </div>
    )
};

export default Movies;