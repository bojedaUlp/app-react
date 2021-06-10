import React from 'react'
import AppFrame from './AppFrame'
import {BrowserRouter as Router} from 'react-router-dom'
export default {
    title:"AppFrame",
    component:AppFrame
}

export const AppFrameExample = ()=>(
            <Router>
                <AppFrame>
                    loren*20loren*20
                    loren*20loren*20loren*20loren*20loren*20loren*20loren*20loren*20loren*20loren*20loren*20
                </AppFrame>
            </Router>
)