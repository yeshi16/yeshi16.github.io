
import React from "react";
import Articles from './Articles'
import Search from './Search';
import Footer from "./Footer";

function Main() {
    
    return (
        <div>
            <p className="fs-1 text-center">Top Headlines</p>
            <Search />
            <Articles />
            <Footer />
        </div>
       
    )
}

export default Main