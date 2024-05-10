import React from 'react'
import { Helmet } from 'react-helmet-async'

const Title = (props) => {

    const {title="Test Title", description="Test Description"} = props

  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
  )
}

export default Title