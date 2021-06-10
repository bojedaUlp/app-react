import React from 'react'
import Weather from './Weather'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {IconContext} from 'react-icons'

test("Weather render",async () =>{
    ///AAA ARRANGE ACT ASSERT
    const {findByRole}= render(<Weather temperature={10} state="sunny"/>)

    const temp= await findByRole("heading")

    expect(temp).toHaveTextContent("10")

})