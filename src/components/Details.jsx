import React, { useEffect, useState } from 'react';
import DetailsImage from './DetailsImage';
import DetailsList from './DetailsList';

const apiUrl = import.meta.env.VITE_APP_DETAILS_URL;

export const Details = ({ id, name }) => {

    const initialState = {
        id: '',
        name: '',
        avatar: '',
        details: {}
    }
    const [content, setContent] = useState(initialState)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setContent(initialState)
        setLoading(true)

        fetch(`${apiUrl}${id}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error')
                }
                return response.json()
            })
            .then(data => setContent(data))
            .catch(error => {
                console.error('Fetch error:', error)
            })
            .finally(() => setLoading(false))
    }, [id])

    return (
        <div id={id} className='details-container'>
            {loading && <p>Loading...</p>}
            <DetailsImage src={content.avatar} alt={name} />
            <h5 className='title'>{name}</h5>
            <DetailsList details={content.details} />
        </div>
    )
}

export default Details
