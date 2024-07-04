import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
class ErrorFetching extends Error {}


export const useFetch = (url:stringqweqwe) => {
    const [data,setData] = useState<any>(null);
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string | null>(null);

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                setLoading(true)
                const response = await axios.get(url);
               
                if(!response){
                    throw new ErrorFetching("Error Fetching the data please contact")
                }
                return setData(response.data);
            } catch (error:any) {
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    },[url])
    return {data,loading,error}
    
    
}
