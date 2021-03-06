import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppFrame from './../components/AppFrame'
import CityList from './../components/CityList'
import {getCities} from './../utils/serviceCities'

const MainPage = () => {
    //history.push permite alterar la url por programacion
    const history = useHistory()

    const onClickHandler = (city, countryCode) => {
        history.push(`/city/${countryCode}/${city}`)
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={getCities()}
                    onClickCity={onClickHandler}
                />
            </Paper>
        </AppFrame>
    )
}


export default MainPage
