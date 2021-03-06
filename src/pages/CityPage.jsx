import React from 'react'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import useCityPage from './../hooks/useCityPage'
import CityInfo from './../components/Cityinfo'
import Weather from './../components/Weather'
import AppFrame from './../components/AppFrame'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import useCityList from './../hooks/useCityList'
import {getCityCode} from './../utils/utils'
import {getCountryNameByCountryCode} from './../utils/serviceCities'

const CityPage = () => {

    const  {city,countryCode,chartData,forecastItemList} = useCityPage()

    const cities = React.useMemo(()=> ([{city,countryCode}]),[city,countryCode])

    const {allWeather}=useCityList(cities)

    const weather = allWeather[getCityCode(city,countryCode)]

    const country = countryCode && getCountryNameByCountryCode(countryCode)
    const state = weather && weather.state
    const temperature = weather && weather.temperature
    const wind = weather && weather.wind
    const humidity = weather && weather.humidity
    //const data = dataExample
    //const forecastItemList = forecastItemListExample
    return (
        <AppFrame>
            <Grid container justify="space-around" direction="column" spacing={2}>
                <Grid container item xs={12} justify="center" alignItems="flex-end">
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12} justify="center">
                    <Weather state={state} temperature={temperature} />
                    {
                       humidity && wind && <WeatherDetails humidity={humidity} wind={wind} />
                    }
                </Grid>
                <Grid item>
                    {   !chartData && !forecastItemList && <LinearProgress/>}
                </Grid>
                <Grid item>
                    {
                        chartData && <ForecastChart data={chartData} />
                    }
                </Grid>
                <Grid item>
                    {
                        forecastItemList && <Forecast forecastItemList={forecastItemList} />
                    }
                </Grid>
            </Grid>
        </AppFrame>
    )
}
export default CityPage
