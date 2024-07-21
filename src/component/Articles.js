import { useState, useEffect } from 'react';
import DisplayArticles from '../pages/DisplayArticles';

function Articles() {

    const [articles, setArticles] = useState([])
   

 const getArticles = async  () => {
       
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
        <div>
            <h1 className='title'>Article</h1>
            
                <div className='container'>
                    { 
                        articles.map( (article, i) =>( <DisplayArticles key={i} article={article} />))
                    }
                   
                </div>
            

        </div>

    )

}

export default Articles