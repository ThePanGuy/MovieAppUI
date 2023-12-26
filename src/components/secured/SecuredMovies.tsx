import {SingleValueFilterItem, usePaging} from "../../hooks/PagingHook";
import {MoviePage} from "../../models/model";
import React from "react";
import RenderPaging from "../RenderPaging";
import MovieSlot from "../MovieSlot";


const SecuredMovies: React.FunctionComponent = () => {
    const paging = usePaging<MoviePage>('/secured/movie/page', 12, 0);

    const uploadedBy = (id: string) => {
        const filter: SingleValueFilterItem = {name: 'uploadedBy', value: id}
        debugger
        paging.filter(filter)
    }

    return (
        <div className={'main-content'}>
            {!paging.isFetching && !paging.isLoading && paging.response !== undefined && paging.response.content !== undefined &&
                paging.response.content.map((moviePage: MoviePage, index) => {
                    return <MovieSlot key={'movie-slot-' + index} {...moviePage} action={uploadedBy} authenticated/>
                })
            }
            <RenderPaging {...paging}/>
        </div>
    )
};

export default SecuredMovies;