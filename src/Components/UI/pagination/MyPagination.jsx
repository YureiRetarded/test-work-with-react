import React from 'react';
import {getPagesArray} from "../../../utils/pages";
import cl from './MyPagintation.module.css'

const MyPagination = ({totalPages,page,changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className={cl.page__wrapper}>
            {pagesArray.map(p =>
                <span
                    key={p}
                    onClick={()=>changePage(p)}
                    className={page === p ? cl.page+' '+cl.page__current : cl.page}
                >{p}</span>
            )}
        </div>
    );
};

export default MyPagination;