import React, { Component } from 'react'
import styled from 'styled-components'


class Aside extends Component {

  componentDidMount = () => {
    fetch('https://swapi.dev/api/planets')
      .then(response => response.json())
      .then(data => this.setState({planets: data.results}))
  }

  state = {
    planets: [],
  }

  render() {
    const { planets } = this.state
    const { planetClicked, returnAllPlanets } = this.props
    return (
      <Set>
        {planets.map((planet, index) => <Item key={index} onClick={planetClicked.bind(this, planet.name)}>{planet.name}</Item>)}
        <Btn onClick={returnAllPlanets.bind(this)}>back</Btn>
      </Set>
    )
  }
}

const Set = styled.ul`
  padding: 24px 30px 30px 30px;
  background-color: #0d141c;
  list-style-type: none;
  text-align: center;
  font-size: 12px;
  width: 160px;
  max-height: 380px;
  border-radius: 5px; 
  border: 1px solid #101010;
  box-shadow: 0px 0px 16px -3px rgba(0,0,0,0.75);
`

const Item = styled.li`
  background-color: #121b27;
  margin: 6px 0 0 0;
  padding: 6px;
  cursor: pointer;
`

const Btn = styled.button`
  cursor: pointer;
  padding: 5px 15px;
  margin: 15px 0 0 0;
  border: none;
  border-radius: 5px;
  background-color: #ccc;

`

export default Aside