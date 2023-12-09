import {usePaging} from "../../hooks/PagingHook";
import {MoviePage} from "../../models/model";
import React from "react";
import RenderPaging from "../RenderPaging";
import MovieSlot from "../MovieSlot";


const SecuredMovies: React.FunctionComponent = () => {
    const paging = usePaging<MoviePage>('/secured/movie/page', 12, 0);

    return (
        <div className={'main-content'}>
            {!paging.isFetching && !paging.isLoading && paging.response !== undefined && paging.response.content !== undefined &&
                paging.response.content.map((moviePage: MoviePage, index) => {
                    return <MovieSlot key={'movie-slot-' + index} {...moviePage} authenticated/>
                })
            }
            <RenderPaging {...paging}/>
        </div>
    )
};

export default SecuredMovies;