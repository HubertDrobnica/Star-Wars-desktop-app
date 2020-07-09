import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <Container>
        <h1>Star Wars</h1>
        <Navigation>
         <Link to='/' style={item}><li>People</li></Link> 
         <Link to='/planets' style={item}><li>Planets</li></Link>
         <Link to='/starships' style={item}><li>Starships</li></Link>
        </Navigation>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex; 
  justify-content: space-between;
  margin: 0px 0 50px 40px;
`

const Navigation = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  width: 50%;
  padding: 13px;
  font-size: 20px;
`

const item = {
  margin: '0 0 0 15px',
  textDecoration: 'none',
  color: '#fff'
}

export default Header

