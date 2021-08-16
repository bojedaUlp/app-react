import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Alert from '@material-ui/lab/Alert'
import CityInfo from './../Cityinfo'
import Weather from './../Weather'
import useCityList from './../../hooks/useCityList'
import {getCityCode} from './../../utils/utils'
//rendercityandcountry func que retorna otra func

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, countryCode, country } = cityAndCountry
    //const{temperature,state}= weather
    return (
        <ListItem button
            key={getCityCode(city, countryCode)}
            onClick={() => eventOnClickCity(city, countryCode)}>
            <Grid container justify="center" alignItems="center">
                <Grid item md={9} xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>

                <Grid item md={3} xs={12}>
                    <Weather
                        temperature={weather && weather.temperature}
                        state={weather && weather.state}
                    />

                </Grid>
            </Grid>
        </ListItem>
    )
}


const CityList = ({ cities, onClickCity }) => {

    /*,country
        estructura de allWeather
        [Buenos aires - argentina]:{},
        [bogota - colombia]:{},
        [Madrid España]:{},
        Ciudad de Mexico-Mexico: {}
    */
    const {allWeather,error,setError}=useCityList(cities)
    return (
        <div>
            {
                error && <Alert severity="error">{error}</Alert>
            }
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)
                        (cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList
