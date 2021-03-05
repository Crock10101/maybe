import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "../components/styles/Button"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import Header from "../components/header"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Footer from "./Footer"


const Careers = () => {
  const data = useStaticQuery(graphql`
    query PeopleAndcareerJson {
      logo: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      logo1: file(relativePath: { eq: "logo-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      people1: file(relativePath: { eq: "people1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      people2: file(relativePath: { eq: "people2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <body>
      <GlobalStyle/>
      <Header/>
      <TestimonialsContainer>
        <TopLine>Testys</TopLine>
        <Description>what</Description>
        <ContentWrapper>
          <ColumnOne>
            <Testimonial>
              <IoMdCheckmarkCircleOutline />
              <h3>Garden</h3>
              <p>
                aslkdjfalskdjflaskdjflaskdfjlaskdjflsakfjlksadfjasklfdvnsaknfbaifblhjdfka
                kljfnieuohmwrxweiudn vmjhs sda iuvhmsidhfnahmv oubayueafivb
                uadncuxnmaudwbc nasidncijscn
                s
              </p>
            </Testimonial>
            <Testimonial>
              <FaRegLightbulb />
              <h3>Not Garden</h3>
              <p>
                aslkdjfalskdjflaskdjflaskdfjlaskdjflsakfjlksadfjasklfdvnsaknfbaifblhjdfka
                kljfnieuohmwrxweiudn vmjhs sda iuvhmsidhfnahmv oubayueafivb
                uadncuxnmaudwbc nasidncijscn
              </p>
            </Testimonial>
          </ColumnOne>
          <ColumnTwo>
            <Images fluid={data.people1.childImageSharp.fluid} />
            <Images fluid={data.people2.childImageSharp.fluid} />
          </ColumnTwo>
        </ContentWrapper>
      </TestimonialsContainer>
      <PositionContainer>
        <PositionHeading>a</PositionHeading>
        <PositionWrapper>
          <CareerCard>
            <CImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
            <CareerInfo>
              <TextWrap>
                <CareerTitle>Account Coordinator</CareerTitle>
              </TextWrap>
              <Button
                primary="true"
                round="true"
                css={"position: absoulte; top: 420px; font-size: 14px"}
              >
                See More details and Apply
              </Button>
            </CareerInfo>
          </CareerCard>
          <CareerCard>
            <CImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
            <CareerInfo>
              <TextWrap>
                <CareerTitle>Sales Associate</CareerTitle>
              </TextWrap>
              <Button
                primary="true"
                round="true"
                css={"position: absoulte; top: 420px; font-size: 14px"}
              >
                See More details and Apply
              </Button>
            </CareerInfo>
          </CareerCard>
          <CareerCard>
            <CImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
            
            <CareerInfo>
              <TextWrap>
                <CareerTitle>It Support</CareerTitle>
                <Button
                primary="true"
                round="true"
                css={"position: absoulte; top: 420px; font-size: 14px"}
              >
                See More details and Apply
              </Button>
              </TextWrap>
              
            </CareerInfo>
          </CareerCard>
          <CareerCard>
            <CImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
            <CareerInfo>
              <TextWrap>
                <CareerTitle>HR/Recruiter</CareerTitle>
              </TextWrap>
              <Button
                primary="true"
                round="true"
                css={"position: absoulte; top: 420px; font-size: 14px"}
              >
                See More details and Apply
              </Button>
            </CareerInfo>
          </CareerCard>
        </PositionWrapper>
      </PositionContainer>
      
      <Footer/>
    </body>
  )
}

export default Careers

const PositionContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  margin-bottom: 5rem;
  background: white;
  color: black;
`

const PositionHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: black;
`

const PositionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr, 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`
const CareerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const CareerCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 250px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`

const CImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(80%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const CareerTitle = styled.div`
  font-weight: 400px;
  font-size: 1rem;
  margin-left: 0.5rem;
`

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  height: 100%;
`

const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 786px) {
    grid-template-colums: 1fr;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  p {
    color: #3b3b3b;
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 100px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
  width: 100%;
`

