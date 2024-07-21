import React, { useState } from "react";
import DisplayArticles from "../pages/DisplayArticles";

function Search() {
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useState('')

    const ApiKey = '16747fbd0fda4a9b9ced3213a66453a0'
    const url = 'https://newsapi.org/v2/everything'

    const searchArticle = async (searchWord) => {
        try {
            if(searchWord === ""){
                alert('Enter search word')
                return
            }
            const response = await fetch(`${url}?q=${searchWord}&apiKey=${ApiKey}`)
            const data = await response.json()
            console.log(data)
            setArticles(data.articles)

        } catch (err) {
            console.log("Fetch error")
        }
    }
    return (
        <>
            <div>
                <input
                    placeholder="Search for article"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={() => searchArticle(search)}>Search</button>
            </div>

            <div className="container">
                {articles.map((article, i) => (
                    <DisplayArticles key={i} article={article} />
                ))}

            </div>

        </>
    )
}

export default Search