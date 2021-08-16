import React from 'react'
import Forecast from './Forecast'
import {render} from '@testing-library/react'

const forecastItemList=[{hour:18,state:"clear",temperature:17, weekDay: "Jueves"},
                        {hour:19,state:"clouds",temperature:17, weekDay: "viernes"},
                        {hour:20,state:"drizzle",temperature:17, weekDay: "sabado"},
                        {hour:21,state:"rain",temperature:17, weekDay: "domingo"}]

test("Forecast render",async() =>{

    const{findAllByTestId}=render(
            <Forecast forecastItemList={forecastItemList}/>)
    
    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(4)

})