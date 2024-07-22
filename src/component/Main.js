
import React from "react";
import Articles from './Articles'
import Search from './Search';

function Main() {
    
    return (
        <div>
            <p className="fs-1 text-center">Top Headlines</p>
            <Search />
            <Articles />
        </div>
    )
}

export default Main