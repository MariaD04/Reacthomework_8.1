import { useState, useEffect } from 'react'
import './App.css'
import List from './components/List'
import Details from './components/Details'

const apiUrl = import.meta.env.VITE_APP_API_URL

function App() {
  const [users, setUsers] = useState([])
  const [info, setInfo] = useState({ id: '', name: '' })
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
              throw new Error('Error')
          }
          return response.json()
        })
        .then(data => setUsers(data))
        .catch(error => console.error('Fetch error:', error))
        .finally(() => setLoading(false))
    }, 1000)
  }, [])

  const handleClick = (id, name) => {
    setInfo({ id: id, name: name });
  }

  return (
    <div className='container'>
      { loading ? <p>Loading...</p> : <List users={users} onClick={handleClick} /> }
      { info.id != '' && <Details {...info} /> }
    </div>
  )
}

export default App

