import React, {useEffect} from 'react';
import {usePaging} from "../hooks/PagingHook";
import {MoviePage} from "../models/model";
import MovieCard from "./MovieSlot";
import RenderPaging from "./RenderPaging";

const Movies: React.FunctionComponent = () => {
    const paging = usePaging<MoviePage>('/movie/page', 12, 0);
    useEffect(() => {
        console.log(paging.response)
    }, [paging])

    return (
        <div>
            {!paging.isFetching && !paging.isLoading && paging.response !== undefined && paging.response.content !== undefined &&
                paging.response.content.map((moviePage: MoviePage, index) => {
                    return <MovieCard key={'movie-slot-' + index} {...moviePage}/>
                })
            }
            <RenderPaging {...paging}/>
        </div>
    )
};

export default Movies;