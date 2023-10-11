import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {puppyList} from './data'

function App() {
  //const [count, setCount] = useState(0)
  
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppies)

  function handleClick(puppy){
    //setPuppies(puppy.id)
    console.log("puppy id: ", puppy.id)
    //setFeatPupId(puppy.id)
  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  return (
    <>
      <div className="App">
      </div>
        {
        featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>setFeatPupId(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
      
    </>
  )
}

export default App
