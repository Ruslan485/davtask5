import { useEffect, useState } from "react"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("https://dummyjson.com/users")
      .then(response => response.json())
      .then(json => setUsers(json))
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <div className="App">
          <h1 align="center" > Давлетбаев Руслан - тестовое задание </h1>
          <table className="Table">
            <tr>
              <th>ФИО</th>
              <th>Возраст (лет)</th>
              <th>Пол</th>
              <th>Номер телефона</th>
              <th>Адрес</th>
            </tr>
            {users?.users?.map(user => (
              <tr key={user.id}>
                <td>{user.lastName} {user.firstName} {user.maidenName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.phone}</td>
                <td>{user.address.city} {user.address.address}</td>
              </tr>
            ))}
          </table>
    </div>
  )
}

export default App