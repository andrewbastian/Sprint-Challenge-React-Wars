  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

import axios from "axios"

import React, {useState, useEffect} from 'react';
import './App.css';
import CharicterCards from "./components/CharicterCards.js"

// function App() {
//   const [data, setData] = useState([])
//   const grab = () => {
//     axios.get('https://swapi.co/api/people/?format=json')
//       .then(response =>{
//       setData(response.data.results)
//       })
//       .catch(error => {console.log("Error: Please try again later")}
//     )
// }

// useEffect(grab, [])
// console.log(data)
function App() {
  const[data, setData] = useState({});
  useEffect(()=>{
  axios.get('https://swapi.co/api/people')

  .then(res => {
     console.log(res.data.results);
    setData(res.data.results)

  })
},[])

return (
  <div className="App">
    <h1 className="Header">React Wars</h1>
    <div>
      // {data.map((item, index) => {
      //
      //   return <CharicterCards key = {index} name = {item.name}
      //   birth_year = {item.birth_year}
      //   hair_color = {item.hair_color}
      //   height = {item.height}
      //   eye_color = {item.eye_color}
      //   gender = {item.gender} />
      //
      // })
      // }
      </div>
  </div>
  )
}

export default App;
