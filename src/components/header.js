import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import {FaBars} from 'react-icons/Fa'
import { Button } from "./styles/Button"
import { GlobalStyle } from "./styles/GlobalStyles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
  query Logo {
    Logo: file(relativePath: { eq: "LongLogo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
    <Nav>
      <GlobalStyle/>
      <NavLinkImg to ="/"><LImg fluid={data.Logo.childImageSharp.fluid} /></NavLinkImg>
      <Bars />
      <NavMenu>
      <NavLink to='/About' >
            About
          </NavLink>
          <NavLink to='/Service' >
            Services
          </NavLink>
          <NavLink to='/Career' >
            Careers
          </NavLink>
          <NavLink to='/contact'>
            Contact Us
          </NavLink>
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/about" css={"height: auto; width: auto; align-items: center"}>Get a quote</Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: white;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 2400px) / 2);
  z-index: 100;
  position: relative;
  box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
`

const NavLink = styled(Link)`
  color: black;
  display:flex;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-radius: 20px;
  
  

  &:hover {
    
    color: black;
    text-decoration: none;
    background-color: white;
    box-shadow: 0 0 1.5px 1.5px #ff1053;;
    
    }
`
const NavLinkImg = styled(Link)`
  color: black;
  display:flex;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-radius: 20px;
  border-width: 5px;
`
const Bars = styled(FaBars)`
display: none;
color: black;
align-items:center;
 @media screen and (max-width: 768px){
   display: block;
   position: absolute;
    top: -10px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    
 }
 `

 const NavMenu = styled.div`
 display: flex;
 align-items: center;
 margin-right: 0px;

 @media screen and (max-width: 786px){
   display:none;
 }
 
 .NavLink {
 
 }

 `

 const NavBtn = styled.div`
 display:flex;
 align-items:center;
 margin-right: 24px;
 
 @media screen and (max-width: 768px) {
  display:none;
 }
 `

 const LImg = styled(Img)`
 z-index: 101;
 display: flex;
 width: 145px;
 border-radius: 0px;


 `