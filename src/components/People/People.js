import React, { Component } from 'react'
import styled from 'styled-components'
import Aside from './Aside.js'

class People extends Component {
  componentDidMount = () => {
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(data => this.setState({characters: data.results, displayCharacter: data.results}))
  }

  state = {
    characters: [],
    displayCharacter: []
  }

  characterClicked = (name) => {
    const { characters, displayCharacter } = this.state
    let popUpCharacter = displayCharacter.find(character => character.name === name)
    this.setState({ characters: [popUpCharacter] })
  }

  returnAllCharacters = () => {
    const { characters, displayCharacter } = this.state
    this.setState({ characters: displayCharacter })
  }

  render() {
    const { characters } = this.state
    return (
      <div style={main}>
        <Aside  characterClicked={this.characterClicked} returnAllCharacters={this.returnAllCharacters}/>
        <Container>
          {characters.map( (character, index) =>
            <CharacterElement key={index} name={character.name} >
              <h2>{character.name}</h2>
              <p>Birth year: {character.birth_year}</p>
              <p>height: {character.height} cm</p>
              <p>Mass: {character.mass} kg</p>
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

export default People;