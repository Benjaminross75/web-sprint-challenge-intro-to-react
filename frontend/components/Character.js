import React, {useState} from 'react'



function Character({character,planetsData}) { // ❗ Add the props
const [showPlanetInfo, setPlanetInfo] = useState(false)

const togglePlanetInfo = () =>{
  setPlanetInfo(!showPlanetInfo)
}

const getPlanetName = () =>{
  const planet = planetsData.find(planet => planet.id === character.homeworld)
  if(planet) return planet.name
  else{return 'unknown'}
}
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld




  return (
   <div onClick={togglePlanetInfo} className='character-card'>
  <div className='character-name'>
    <div>{character.name}
    {
      showPlanetInfo &&
      <>
      <p className="character-planet">Planet: {getPlanetName()}</p>
      </>
    }
    </div>


  </div>

   </div>
  )
}

export default Character



// return (
//   <div className="character-card">
//     <div className="character-info">
//       <div>ID: {character.id}</div>
//       <div>Name: {character.name}</div>
//       <div>Date of Birth: {character.birthYear}</div>
//     </div>
//     <button onClick={togglePlanetInfo}>Toggle Planet Info</button>
//     {showPlanetInfo && (
//       <div className="planet-info">
//         Home World: {getPlanetName()}
//       </div>
//     )}
//   </div>
// );
