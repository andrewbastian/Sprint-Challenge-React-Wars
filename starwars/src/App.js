import axios from "axios"

import React, {useState, useEffect} from "react";

import styled from "styled-components";

import "./App.css";

import CharicterCards from "./components/CharicterCards.js"

const Header = styled.h1 `

        `

const CardConts = styled.div `
            text-align:center;
        `

const AppStyle = styled.h1 `
            display: flex;
            justify-content: center;
            align-items: space-evenly;
            font-family: nasalization, sans-serif;
            flex-flow: column;
            text-align: center;

        `

function App() {

    return (

      <AppStyle>

        <Header> React Wars </Header>

          <CardConts>

                <CharicterCards/>

    })
}

          </CardConts>

</AppStyle>

)
}

export default App;
