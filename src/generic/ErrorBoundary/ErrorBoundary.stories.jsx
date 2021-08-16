import React from 'react'
import ErrorBoundary from './ErrorBoundary'
export default {
    title: "ErrorBoundary",
    component: ErrorBoundary
}

const ComponentWithOutError = () => <h1>Sin Error</h1>

const prop = undefined
const ComponentWithError = () => <h1>{prop.hola}</h1>
export const ErrorBoundaryWhitError = () => (
    <ErrorBoundary>
        <ComponentWithError/>
    </ErrorBoundary>
)

export const ErrorBoundaryWhitOutError = () => (
    <ErrorBoundary >
            <ComponentWithOutError/>
    </ErrorBoundary>
)