import { useEffect, useState } from 'react'
import Yelp from '../api/Yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchApi = (searchTerm) => {
        Yelp.get('/search', {
            params: {
                location: 'salt lake city',
                limit: 50,
                term: searchTerm // Since term is the param we need we can use es6 to do term instead of term: term
            } // Automatically appended to our query string
        }).then(res => {
            setResults(res.data.businesses)
        }).catch(err => {
            setErrorMessage("Something went wrong..")
            console.log(err)
        })
    }

    useEffect(() => { // Get initial data
        searchApi("pizza");
    }, [])

    return [searchApi, results, errorMessage]
}