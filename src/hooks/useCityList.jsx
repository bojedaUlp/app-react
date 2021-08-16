import React, { useState, useEffect } from 'react'
import axios from 'axios'
import getAllWeather from './../utils/transform/getAllWeather'
import { getWeatherUrl } from '../utils/urls'
const useCityList = (cities) =>{
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)
    
    useEffect(() => {

        const setWeather = async (city, countryCode) => {
            
            const url = getWeatherUrl({city,countryCode})

            try {
                const response = await axios.get(url)
                const allWeatherAux = getAllWeather(response,city,countryCode)
                setAllWeather(allWeather => ({ ...allWeather, ...allWeatherAux}))
            } catch (error) {
                if (error.response) {
                    //const { data, status } = error.response
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.request) {
                    setError("Verifique la conexion a internet")
                } else { setError("Error al cargar los datos") }
            }
        }
        cities.forEach(({ city, countryCode }) => {
            setWeather(city, countryCode)
        });
    }, [cities])

    return {allWeather,error,setError}
}

export default useCityList