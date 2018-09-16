import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.header `
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav `
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
   color: 'white'
}

const Menu = () => {
   return (
      <Header>
         <Nav>
            <ul>
               <li>
                  <Link to="/" exact activeStyle={activeLinkStyle}>
                     Inventanew
                  </Link>
                  <a
                     href="https://www.contentful.com/"
                     rel="nofollow noopener noreferrer"
                     target="_blank">
                     <img
                        src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
                        style={{
                        width: '100px'
                     }}
                        alt="Powered by Contentful"/>
                  </a>
               </li>
               <li>
                  <Link to="/about/" activeStyle={activeLinkStyle}>
                     About
                  </Link>
               </li>
               <li>
                  <Link to="/contact/" activeStyle={activeLinkStyle}>
                     Contact
                  </Link>
               </li>
            </ul>
         </Nav>
      </Header>
   )
}

export default Menu
