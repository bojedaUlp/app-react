import React, { Component } from 'react'
import Forecast from './Forecast'

export default{
    title:"Forecast",
    component: Forecast
}
const forecastItemList=[{hour:18,state:"clear",temperature:17, weekDay: "Jueves"},
                        {hour:18,state:"clouds",temperature:17, weekDay: "viernes"},
                        {hour:18,state:"drizzle",temperature:17, weekDay: "sabado"},
                        {hour:18,state:"rain",temperature:17, weekDay: "Domingo"}]

export const exampleForecast= () => (<Forecast forecastItemList={forecastItemList}></Forecast>)