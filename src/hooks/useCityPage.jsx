import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import 'moment/locale/es'
import { getForecastUrl } from '../utils/urls'
import getChartData from '../utils/transform/getChartData'
import getForecastItemList from './../utils/transform/getForecastItemList'
const useCityPage = () => {
    const [chartData, setChartData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)

    const { city, countryCode } = useParams()

    useEffect(() => {

        const getForecast = async () => {
            
            const url = getForecastUrl({city,countryCode})
            try {

                const { data } = await axios.get(url)

                const dataAux = getChartData(data)    
                setChartData(dataAux)
                //{hour,state,temperature,weekDay}
                const forecastItemListAux=getForecastItemList(data)
                setForecastItemList(forecastItemListAux)
            } catch (error) {
                console.log(error)
            }
        }
        getForecast()
    }, [city, countryCode])
    return {city,countryCode,chartData,forecastItemList}
}

export default useCityPage