import React from 'react'

export const DetailsImage = ({ src, alt }) => {
  return (
    <div className='image'>
        <img src={src} alt={alt} />
    </div>
  )
}

export default DetailsImage