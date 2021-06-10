import React from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/Cityinfo'
import Weather from './../components/Weather'
import AppFrame from './../components/AppFrame'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import ForecastItem from '../components/ForecastItem'


const dataExample = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
]
const forecastItemListExample = [{ hour: 18, state: "sunny", temperature: 17, weekDay: "Jueves" },
{ hour: 18, state: "cloud", temperature: 16, weekDay: "viernes" },
{ hour: 19, state: "sunny", temperature: 15, weekDay: "sabado" },
{ hour: 20, state: "sunny", temperature: 14, weekDay: "martes" },
{ hour: 21, state: "cloud", temperature: 118, weekDay: "lunes" },
{ hour: 22, state: "cloudy", temperature: 17, weekDay: "Domingo" }]

const CityPage = () => {

    const city = "Buenos Aires"
    const country = "Argentina"
    const state = "cloudy"
    const temperature = 20
    const wind = 5
    const humidity = 80
    const data = dataExample
    const forecastItemList = forecastItemListExample
    return (
        <AppFrame>
            <Grid container justify="space-around" direction="column" spacing={2}>
                <Grid container item xs={12} justify="center" alignItems="flex-end">
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12} justify="center">
                    <Weather state={state} temperature={temperature} />
                    <WeatherDetails humidity={humidity} wind={wind} />
                </Grid>
                <Grid item>
                    <ForecastChart data={data} />
                </Grid>
                <Grid item>
                    <Forecast forecastItemList={forecastItemList} />
                </Grid>
            </Grid>
        </AppFrame>

    )
}

export default CityPage
