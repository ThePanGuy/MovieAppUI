import React from 'react';
import {usePaging} from "../hooks/PagingHook";

const Movies:React.FunctionComponent = () => {
    const paging = usePaging('/movie/page', 12, 0);

    return (
        <div>

        </div>
    )
};

export default Movies;