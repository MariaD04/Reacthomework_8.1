import React, { useState } from 'react';

const List = ({ users, onClick }) => {
    
    const [selected, setSelected] = useState()

    const handleItemClick = (id, name) => {
        setSelected(id)
        onClick(id, name)
    }

    return (
        <div className='list-container'>
        <ul className='users-list'>
            {users.map(user => (
            <li className='users-list_item' key={user.id} id={user.id} onClick={() => handleItemClick(user.id, user.name)} style={{ backgroundColor: user.id === selected ? '#0F7FFA' : 'white' }} >
                <a className='users-name' href="#" style={{ color: user.id === selected ? 'white' : 'black' }} >
                    {user.name}
                </a>
            </li>
            ))}
        </ul> 
        </div>
    )
}

export default List