import React from 'react'
import {render,fireEvent} from '@testing-library/react'
import CityList from './CityList'
import {IconContext} from 'react-icons'

const cities = [
    {city:"Buenos Aires", country:"Argentina"},
    {city:"Bogota" , country:"Colombia"},
    {city:"Madrid", country:"ESPAÑA"},
    {city:"New York", country:"EE.UU"}
]
test("CityList renders", async () => {

        const {findAllByRole}=render(<CityList cities={cities}/>)

        const items = await findAllByRole("button")

        expect(items).toHaveLength(4)
})

test("CityList click on item", async () => {

    const fnClickOnItem = jest.fn();

    const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)

    const items = await findAllByRole("button")

    fireEvent.click(items[0])

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)

})