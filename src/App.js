import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase/firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { async } from '@firebase/util';

function App() {
  const [name, setName] = useState(``)
  const [gender, setGender] = useState(``)
  const [number, setNumber] = useState(``)
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users')

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((items) => ({ ...items.data(), id: items.id })))
    }
    getUsers()
  }, [usersCollectionRef])

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: name, gender: gender, number: Number(number) })
  }
  const changeData = async (id, number) => {
    const newFields = {}
  }
  return (
    <div className="App">
      <input type="text" placeholder='Enter name' onChange={e => setName(e.target.value)} />
      <input type="text" placeholder='Enter gender' onChange={e => setGender(e.target.value)} />
      <input type="number" placeholder='Enter number' onChange={e => setNumber(e.target.value)} />
      <button onClick={createUser}>Create user</button>
      {
        users.map((user) => {
          return (
            <div key={user.id}>
              <h1>Name: {user.name}</h1>
              <h1>Gender: {user.gender}</h1>
              <h1>Number: {user.number}</h1>
              <button onClick={() => changeData(user.id, user.number)}>Edit Number</button>
            </div>
          )
        })
      }
    </div>
  );
}
export default App;
