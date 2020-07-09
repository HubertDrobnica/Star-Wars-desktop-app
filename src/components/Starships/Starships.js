import React, { Component } from 'react'
import styled from 'styled-components'
import Aside from './Aside.js'

export class Starships extends Component {
  componentDidMount = () => {
    fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(data => this.setState({starships: data.results, displayStarships: data.results}))
  }

  state = {
    starships: [],
    displayStarships: []
  }

  starshipClicked = (name) => {
    const { starships, displayStarships } = this.state
    let popUpStarship = displayStarships.find(starship => starship.name === name)
    this.setState({ starships: [popUpStarship] })
  }

  returnAllStarships = () => {
    const { starships, displayStarships } = this.state
    this.setState({ starships: displayStarships })
  }

  render() {
    const { starships } = this.state
    return (
      <div style={main}>
        <Aside  starshipClicked={this.starshipClicked} returnAllStarships={this.returnAllStarships}/>
        <Container>
          {starships.map( (starship, index) =>
            <CharacterElement key={index} name={starship.name} >
              <h2>{starship.name}</h2>
              <p>Length: {starship.length}</p>
              <p>passengers: {starship.passengers}</p>
              <p>consumables: {starship.consumables}</p>
            </CharacterElement>
          )}
        </Container>
      </div>
    )
  }
}

const main = {
  display: 'flex',
  justifyContent: 'space-between',
}

const Container = styled.div`
  display: grid;
  grid-row-gap: 1em;
  grid-column-gap: 1rem;
  grid-template-columns: 50% 50%;
  width: 70%;
  margin-left: 45px;
`

const CharacterElement = styled.div`
  background-color: #0d141c;
  padding: 10px 35px;
  border-radius: 5px;
  border: 1px solid #101010;
  box-shadow: 0px 0px 16px -3px rgba(0,0,0,0.75);
`

export default Starships
