import React from 'react'

export const DetailsList = ({ details }) => {
    if (!details || Object.keys(details).length === 0) {
        return <p>No details available</p>
      }
    
      return (
        <ul className='list'>
          {Object.entries(details).map(([key, value], index) => (
            <li key={index} className='list-item'>
              <div className='list-item_text'>
                {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
              </div>
            </li>
          ))}
        </ul>
      )
}

export default DetailsList