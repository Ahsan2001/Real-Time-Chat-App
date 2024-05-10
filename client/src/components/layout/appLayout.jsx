import React from 'react'
import Header from './header'
import Title from '../shared/title'

const AppLayout = () => (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Title />
                <Header />
                <WrappedComponent  {...props} />
            </>
        )
    }
}

export default AppLayout