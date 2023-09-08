import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Character from './Character'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'


function App() {
const [charactersData, setCharactersData] =  useState([])
const [planetsData, setPlanetsData] = useState([])
useEffect(()=>{
  axios.get(urlPeople)
  .then(res =>{
     setCharactersData(res.data)
  }).catch(err=> console.error(err))

  axios.get(urlPlanets)
  .then(res =>{
     setPlanetsData(res.data)
  }).catch(err=>console.error(err))
},[])


  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
   if(!charactersData) return 'I am working on this'
  return (
    <div>

      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {
        charactersData.map(character =>{
       return   <Character
          key={character.id}
          character={character}
          planetsData={planetsData}
          />
        })
      }
     </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
