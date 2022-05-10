import { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('se invoca el useEffect')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setUsers([...users]))

  }, [])

  return (
    <div className="App">
      {users.map(user =>
       {
        const { id, name, email } = user
        
        return (
          <h1 key={id}>Hola mi nombre es {name} y correo es {email} años</h1>
        )
       }
       )}
    </div>
  )
}

export default App
