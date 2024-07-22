import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import DisplayArticles from "../pages/DisplayArticles";


function Search() {
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState('')

    const ApiKey = '16747fbd0fda4a9b9ced3213a66453a0'
    const url = 'https://newsapi.org/v2/everything'

    const searchArticle = async (searchWord) => {
        try {
            if (searchWord === "") {
                alert('Enter search word')
                return
            }
            const response = await fetch(`${url}?q=${searchWord}&apiKey=${ApiKey}`)
            const data = await response.json()
            // console.log(data)
            setArticles(data.articles)

        } catch (err) {
            console.log("Fetch error")
        }
    }

    const clearSearch = () => {
        setSearch('');
        setArticles([]);
        window.scrollTo(0,0)
    };


    return (
        <>
            <div className="container mt-5">
                <div className="input-group mb-3">
                    <input
                        type='text'
                        placeholder="Search for article"
                        value={search}
                        className="form-control form-control-lg"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="btn btn-secondary" onClick={() => searchArticle(search)}>Search</button>
                </div>


                <div className='className="container mt-5'>

                    <div className="row">
                        {articles.map((article, i) => (
                            <div className="col-md-4 mb-4" key={i}>
                                <DisplayArticles article={article} />
                            </div>
                        ))}
                    </div>
                </div>


                {articles.length > 0 && (
                    <Link to='/' onClick={clearSearch}>
                        <h1>Go to Top Headlines</h1>
                    </Link>
                )}
            </div>
        </>
    )
}

export default Search