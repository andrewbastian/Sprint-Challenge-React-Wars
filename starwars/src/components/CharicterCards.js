import axios from "axios"

import styled from "styled-components";

import React, {useState, useEffect} from "react";


const Cards = styled.div`
      display: flex;
      align-items: center;
      align-items: space-evenly;
      font-family: nasalization, sans-serif;
      flex-flow: column;
    }`

const Card = styled.div`
      font-family: nasalization, sans-serif;
      display: flex;
      justify-content: center;
      border-top: 2px solid #FFE5C0;
      border-bottom: 2px solid #FF3C5C;
      margin-bottom: 5px;
      width: 75%;
    }`

const Person = styled.h1`
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: space-evenly;
      text-shadow: 0 0 3px #0A0000, 0 0 5px #FF3C5C;
      color: #FFE5C0;
    }`

const Birth = styled.p`
      color: #FFA72B;
    }`

const Homeworld = styled.button`
        color:  #17A694;
        border: none;
        background: none;
        font-family: nasalization, sans-serif;
        text-decoration: none;
        font-size: 40px;
    }`

export default function CharicterCards(props) {

  const[data, setData] = useState([{}]);

  useEffect(()=>{
  axios.get("https://swapi.co/api/people")

  .then(res => {
     console.log(res.data.results);
    setData(res.data.results)

  })
},[])

return (

    <Cards>

        {data.map(person => {

            return <Card>

                <Person>

                  Name: <br/>  {person.name}

                  <Birth>  Birth Year: {person.birth_year} </Birth>

                    <Homeworld href = {person.homeworld}>
                    <br/>
                        Homeworld
                    </Homeworld>

                </Person>
                
            </Card>
        })}
    </Cards>
)
}
