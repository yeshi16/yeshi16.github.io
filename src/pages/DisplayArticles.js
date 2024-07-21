import React from "react";

function DisplayArticles({ article }) {

    return (
        <div>
            <h2>{article.title}</h2>
            <img src={article.urlToImage} />
            <p>{article.description}</p>
            <p>By: {article.source.name}</p>
            <a href={article.url}>Go to source</a>
        </div>
    )
}

export default DisplayArticles