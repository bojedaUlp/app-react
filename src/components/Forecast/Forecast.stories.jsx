import React, { Component } from 'react'
import Forecast from './Forecast'

export default{
    title:"Forecast",
    component: Forecast
}
const forecastItemList=[{hour:18,state:"sunny",temperature:17, weekDay: "Jueves"},
                        {hour:18,state:"cloud",temperature:17, weekDay: "viernes"},
                        {hour:18,state:"sunny",temperature:17, weekDay: "sabado"},
                        {hour:18,state:"cloudy",temperature:17, weekDay: "Domingo"}]

export const exampleForecast= () => (<Forecast forecastItemList={forecastItemList}></Forecast>)