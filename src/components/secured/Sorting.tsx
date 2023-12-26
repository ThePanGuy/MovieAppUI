import React from 'react';
import {PagingHandler} from "../../hooks/PagingHook";

interface Props {
    paging: PagingHandler<any>
}

const Sorting: React.FC = () =>  {
    return (
        <div className={"sort"}>
            <p style={{display: "flex"}}>Sort by: Likes | Hates | Date</p>
        </div>
    );
}

export default Sorting;