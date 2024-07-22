import { useState, useEffect } from 'react';
import DisplayArticles from '../pages/DisplayArticles';
import 'bootstrap/dist/css/bootstrap.min.css';


function Articles() {

    const [articles, setArticles] = useState([])

    const getArticles = async () => {

        try {
            const ApiKey = '16747fbd0fda4a9b9ced3213a66453a0'
            //https://newsapi.org/v2/everything?apiKey=ApiKey
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${ApiKey}`)
            const data = await response.json()
            console.log(data.articles)
            setArticles(data.articles)

        } catch (e) {
            console.log('fetch err')
        }

    }

    useEffect(() => {
        getArticles()
    }, [])




    return (

        <div className='container mt-5'>

            <div className="row">
                {articles.map((article, i) => (
                    <div className="col-md-4 mb-4" key={i}>
                        <DisplayArticles article={article} />
                    </div>
                ))}
            </div>
        </div>

    )

}

export default Articles