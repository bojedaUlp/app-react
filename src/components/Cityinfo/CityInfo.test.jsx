import React from 'react'
import {render} from '@testing-library/react'
import CityInfo from './CityInfo'

test("CityInfo render",async () =>{

    const city="Buenos Aires"
    const country="Argentina"

    const{ findAllByRole } = render(<CityInfo city={city} country={country}/>)

    const cityAnCountryComponents = await findAllByRole("heading")

    expect(cityAnCountryComponents[0]).toHaveTextContent("Buenos Aires")
    expect(cityAnCountryComponents[1]).toHaveTextContent("Argentina")
})