import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayArticles({ article }) {

    const placeholderStyle = {
        width: '100%',
        height: '180px',
        backgroundColor: 'Lightgray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    };

    return (
        // <div>
        //     <h2>{article.title}</h2>
        //     <img src={article.urlToImage} />
        //     <p>{article.description}</p>
        //     <p>By: {article.source.name}</p>
        //     <a href={article.url}>Go to source</a>
        //     <hr />
        // </div>
        
        <div className="card" style={{width: 25 + 'rem'}}>
            {article.urlToImage ? (
                <img src={article.urlToImage} className="card-img-top" alt="img" />
            ) : (
            <div style={placeholderStyle}>
                No Image Available
            </div>
            )}
            
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary">Go to {article.author}</a>
            </div>
        </div>
    )
}

export default DisplayArticles