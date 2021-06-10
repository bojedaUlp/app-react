import React from 'react'
import {findByLabelText, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ForecastItem from './../ForecastItem'

test("ForecastItem render",async ()=>{
    const {findByText}=render(<ForecastItem weekDay="Lunes" hour={17} state="sunny" temperature={23}/>)
    const hour=await findByText(/17/)
    const temperature=await findByText(/23/)
    const weekDay=await findByText("Lunes")
    expect(hour).toHaveTextContent("17")
    expect(weekDay).toHaveTextContent("Lunes")
    expect(temperature).toHaveTextContent("23")
})