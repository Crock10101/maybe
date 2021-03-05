import React from "react"
import Footer from "./Footer"
import styled from "styled-components"
import Header from "../components/header"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import { Button } from "../components/styles/Button"
import {
  FaUserFriends,
  FaTruck,
  FaUmbrellaBeach,
  FaQuoteRight,
} from "react-icons/fa"

const contact = () => {
  const ServiceIcon = [
    {
      icon: <FaUserFriends />,
      title: "Careers",
      btn: "Job Openings",
      desc: "FInd the right path for you.",
    },
    {
      icon: <FaTruck />,
      title: "Services",
      btn: "View Services",
      desc: "Find the full list of services BBI can offer you. ",
    },
    {
      icon: <FaUmbrellaBeach />,
      title: "Benefits",
      btn: "View Benefits",
      desc: "Find our ",
    },
    {
      icon: <FaQuoteRight />,
      title: "Quotes",
      btn: "Get a quote",
      desc: "Looking for a quote? We have you covered!",
    },
  ]

  return (
    <body>
      <GlobalStyle />
      <Header />
      <ContactContainer>
      <HeaderContainer>
        <HeaderWrapper>
          <h1>Let's Connect</h1>
          <p>We'd love to hear from you</p>
        </HeaderWrapper>
      </HeaderContainer>
      <FaqContainer>
        <FaqWrapper>
          <h3>Check out FAQ</h3>
          <p>Find answers to the meaning of frieght and maybe even life</p>
          <Button primary="true" round="true" css={"width: 180px"}>
            View FAQ
          </Button>
        </FaqWrapper>
      </FaqContainer>
      <LostContainer>
          <ServicesContainer>
          <h3 css={"padding: 2rem"}>Looking for something else?</h3>
            <LostWrapper>
              {ServiceIcon.map((item, index) => {
                return (
                  <ServicesBox key={index}>
                    <Icon css={"color: black"}>{item.icon}</Icon>
                    <Title css={"color: black"}>{item.title}</Title>
                    <Description css={"color: gray"}>{item.desc}</Description>
                    <Button primary="true" round="true" css={"width: 180px", "margin-bottom: 1rem"}>{item.btn}</Button>
                  </ServicesBox>
                )
              })}
            </LostWrapper>
          </ServicesContainer>
      </LostContainer>
      </ContactContainer>
      <Footer />
    </body>
  )
}

export default contact

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 35vh;
  text-align: center;
  justify-content: center;

  h1 {
    font-weight: 600;
    font-size: 65px;
  }
`
const HeaderWrapper = styled.div``

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  text-align: center;
  justify-content: center;
  background: whitesmoke;
`
const FaqWrapper = styled.div``

const LostContainer = styled.div`
  display: flex;

  text-align: center;
  justify-content: center;
`
const LostWrapper = styled.div`
display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-grid-template-columns: 1fr;
  }`

const ServicesContainer = styled.div`
  width: 75%;
  background: #fff;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
`

const ServicesBox = styled.div`
  height: 100%;
  
  width: 100%;
  padding: 2rem;
  border-left: 1px solid;
  border-bottom: 1px solid;
  overflow: hidden;
  margin-left: -3px;
  margin-top: 3px;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Title = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`
const Description = styled.div`
font-size: 1rem;
margin-bottom: 2rem;`

const ContactContainer = styled.div`

h3 {
  
}

p{
  padding: 1rem;
}

`


