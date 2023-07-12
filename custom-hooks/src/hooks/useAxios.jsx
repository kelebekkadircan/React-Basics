import { useEffect, useState } from "react"
// https://restcountries.com/v3.1/all
import axios from 'axios'



const useAxios = (config) => {
    const [results, setResults] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    axios.defaults.baseURL = "https://restcountries.com/v3.1"

    useEffect(() => {
        const fetchData = async () => {
            await axios.request(config)
                .then(res => setResults(res))
                .catch(err => setError(err))
                .finally(() => setLoading(false))
        }
        fetchData()
    }, [])

    return [results, error, loading]

}

export default useAxios 