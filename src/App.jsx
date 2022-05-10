import { useState, useEffect } from 'react'
import './App.css'

import SearchBox from './components/search-box/search-box'
import CardList from './components/card-list/card-list'

const App = () => {
  const [users, setUsers] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    console.log('se invoca el useEffect')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setUsers([...users]))

  }, [])

  const filteredUsers = users.filter(user => {
    return user.name.toLowerCase().includes(searchField.toLocaleLowerCase())
  })

  const onSearchChangeHandler = (event) => {
    console.log('invocando onchange desde el componente searchbox')
    setSearchField(event.target.value)
  }

  return (
    <div className="App">
      <SearchBox onSearchChange={onSearchChangeHandler} />
      <CardList users={filteredUsers} />
    </div>
  )
}

export default App
