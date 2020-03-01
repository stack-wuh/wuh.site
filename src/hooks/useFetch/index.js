import { useState, useEffect, useReducer } from 'react'
import request from '../../utils/request'
import qs from 'querystring'

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT': return { ...state, isLoading: true, isError: false };
        case 'FETCH_SUCCESS': return { ...state, isLoading: false, isError: false, data: action.payload };
        case 'FETCH_FAIL': return { ...state, isLoading: false, isError: true };
        default: throw new Error('no match reduce')
    }
}

const getUrl = url => {
    const [method, _url] = url.split(' ')
    const [_, query] = _url.split('?')
    return {method, _url, query: qs.parse(query)}
}

const useFetch = (initOps, options = {}) => {
    const {_url, query} = getUrl(initOps)
    const [url, setUrl] = useState(_url)
    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: []
    })
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' })
            try {
                const response = await request({ url: url, params: { ...query, ...options} })
                setTimeout(() => {
                    dispatch({ type: 'FETCH_SUCCESS', payload: response.data})
                }, 800)
            } catch (err) {
                dispatch({type: 'FETCH_FAIL'})
            }
        }
        fetchData()
    }, [url])
    return {...state, setUrl, url}
}

export default useFetch