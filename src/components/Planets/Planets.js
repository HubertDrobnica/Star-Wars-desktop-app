import React, { Component } from 'react'
import styled from 'styled-components'
import Aside from './Aside.js'

export class Planets extends Component {
  componentDidMount = () => {
    fetch('https://swapi.dev/api/planets')
      .then(response => response.json())
      .then(data => this.setState({planets: data.results, displayPlanets: data.results}))
  }

  state = {
    planets: [],
    displayPlanets: []
  }

  planetClicked = (name) => {
    const { planets, displayPlanets } = this.state
    let popUpPlanet = displayPlanets.find(planet => planet.name === name)
    this.setState({ planets: [popUpPlanet] })
  }

  returnAllPlanets = () => {
    const { planets, displayPlanets } = this.state
    this.setState({ planets: displayPlanets })
  }

  render() {
    const { planets } = this.state
    return (
      <div style={main}>
        <Aside  planetClicked={this.planetClicked} returnAllPlanets={this.returnAllPlanets}/>
        <Container>
          {planets.map( (planet, index) =>
            <CharacterElement key={index} name={planet.name} >
              <h2>{planet.name}</h2>
              <p>Climate {planet.climate}</p>
              <p>Gravity: {planet.gravity}</p>
              <p>Terrain: {planet.terrain}</p>
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

export default Planets
