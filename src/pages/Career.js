import React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  FaPiggyBank,
  FaMedkit,
  FaUmbrellaBeach,
  FaMoneyBillWave,
  FaHandshake,
  FaLaughBeam,
} from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "../components/header.js"
import { Button } from "../components/styles/Button"
import Footer from "./Footer"
import { GlobalStyle } from "../components/styles/GlobalStyles.js"

const ServiceIcon = [
  {
    icon: <FaMedkit />,
    title: "Health/Dental/Vision Insurance",
  },
  {
    icon: <FaPiggyBank />,
    title: "Employee 401k with Match  ",
  },
  {
    icon: <FaUmbrellaBeach />,
    title: "PTO ",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Profit Sharing ",
  },
  {
    icon: <FaLaughBeam />,
    title: "Energetic Office",
  },
  {
    icon: <FaHandshake />,
    title: "Celebrations and recognition ",
  },
]
const Services = () => {
  const data = useStaticQuery(graphql`
    query People {
      people1: file(relativePath: { eq: "meet-bbi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      building: file(relativePath: { eq: "building.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      cbus1: file(relativePath: { eq: "cbus1.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
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
    <Container>
      <GlobalStyle/>
      <Header />
      <HeaderContainer>
        <HeaderBg>
          <HImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
        </HeaderBg>
        <HeaderText>
          <HeaderContent>
            <HeaderH1>Meet BBI Logistics</HeaderH1>
            <HeaderP>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </HeaderP>
            <Button primary="true" round="true" css={"width: 180px; text-shadow: 0px 0px 0px; font-weight: normal;"}>
              View Openings
            </Button>
          </HeaderContent>
        </HeaderText>
      </HeaderContainer>
      <MeetContainer>
        <MeetWrapper>
          <MeetStyle>
            <Card>
              <CImg fluid={data.people2.childImageSharp.fluid} alt="Logo" />
            </Card>
          </MeetStyle>
          <MeetStyle>
            <Card>
              <CImg fluid={data.people2.childImageSharp.fluid} alt="Logo" />
            </Card>
          </MeetStyle>
          <MeetStyle>
            <Card>
              <CImg fluid={data.people2.childImageSharp.fluid} alt="Logo" />
            </Card>
          </MeetStyle>
          <MeetStyle>
            <Card>
              <CImg fluid={data.people2.childImageSharp.fluid} alt="Logo" />
            </Card>
          </MeetStyle>
          <MeetStyle>
            <Card>
              <CImg fluid={data.people2.childImageSharp.fluid} alt="Logo" />
            </Card>
          </MeetStyle>
          <MeetStyle>
            <Card>
              <CImg fluid={data.people2.childImageSharp.fluid} alt="Logo" />
            </Card>
          </MeetStyle>
        </MeetWrapper>
      </MeetContainer>
      <LocationContainer>
        <HeaderH2>Located in Cbus</HeaderH2>
        <ColumnTwo>
          <CImg fluid={data.building.childImageSharp.fluid} alt="Logo" />
          <CImg fluid={data.cbus1.childImageSharp.fluid} alt="Logo" />
        </ColumnTwo>
      </LocationContainer>
      <HeaderH2>Jobs Postitions</HeaderH2>
      <CardContainer>
        <CardStyle>
          <Card>
            <Card.Body>
              <Card.Title>Account Coordinator</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button primary="true" round="true">
                See more details or Apply Now
              </Button>
            </Card.Body>
          </Card>
        </CardStyle>
        <CardStyle>
          <Card>
            <Card.Body>
              <Card.Title>Sales Account Specialist</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button primary="true" round="true">
                See more details or Apply Now
              </Button>
            </Card.Body>
          </Card>
        </CardStyle>
        <CardStyle>
          <Card>
            <Card.Body>
              <Card.Title>Accounting Coordinator</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button primary="true" round="true">
                See more details or Apply Now
              </Button>
            </Card.Body>
          </Card>
        </CardStyle>
        <CardStyle>
          <Card>
            <Card.Body>
              <Card.Title>Recruiter</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button primary="true" round="true">
                See more details or Apply Now
              </Button>
            </Card.Body>
          </Card>
        </CardStyle>
        <CardStyle>
          <Card>
            <Card.Body>
              <Card.Title>H/R</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button primary="true" round="true">
                See more details or Apply Now
              </Button>
            </Card.Body>
          </Card>
        </CardStyle>
        <CardStyle>
          <Card>
            <Card.Body>
              <Card.Title>Entry IT</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button primary="true" round="true">
                See more details or Apply Now
              </Button>
            </Card.Body>
          </Card>
        </CardStyle>
      </CardContainer>
      <ServicesContainer>
        <HeaderH2>Why Choose Us?</HeaderH2>
        <Wrapper>
          {ServiceIcon.map((item, index) => {
            return (
              <ServicesBox key={index}>
                <Icon css={"color: #8c1657"}>{item.icon}</Icon>
                <Title css={"color: black"}>{item.title}</Title>
                <Description>{item.desc}</Description>
              </ServicesBox>
            )
          })}
        </Wrapper>
      </ServicesContainer>
      <Footer />
    </Container>
  )
}

export default Services

const Container = styled.div`
font-family: 'Titillium Web' !important;
`

const HImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95vh;
  padding: 0;
  position: relative;
  color: White;
`

const HeaderBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const HeaderP = styled.div`
  max-width: 550px;
  padding-bottom: 1rem;
  @media screen and (max-width: 420px) {
    
  }
`

const HeaderPlay = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  filter: brightness(50%);
`

const HeaderText = styled.div`
  z-index: 3;
  max-height: 100%;
`

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 1200px;
  max-width: 100%;
  line-height: 1.5;
  font-weight: bold;
  text-shadow: 0px 0px 20px black;

  

  @media screen and (max-width: 1250px) {
    max-width: 500px;
    display: flex;
    align-items: center;
    text-align: left;
    padding: 100px 20px;
  }

  @media screen and (max-width: 400px) {
    
    display: flex;
    align-items: center;
    text-align: left;
    padding: 0px 0px;
  }

`

const HeaderH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0.1rem;
`

const HeaderH2 = styled.h2`
  white-space: nowrap;
  text-align: center;
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 2rem;
  justify-content: center;
`

const ServicesContainer = styled.div`
  width: 100%;
  background: #fff;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
`

const Heading = styled.div`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 1rem;
`

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-grid-template-columns: 1fr;
  }
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
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`
const CardStyle = styled.div`
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 6px;
  box-shadow: 0 10px 14px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  font-size: 17px;
  max-width: 600px;
`

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 30px;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 800px) {
    display: flex;
    grid-template-columns: 300px 300px;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    display: flex;
    grid-template-columns: 1fr;
    align-items: center;
  }
`
const LocationContainer = styled.div`
  background: whitesmoke;
  padding-bottom: 1.5rem;
`
const CImg = styled(Img)`
  background: whitesmoke;
  border-radius: 10px;
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 600px 600px;
  justify-content: center;
  
  grid-gap: 2rem;

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

const MeetContainer = styled.div`
  @media screen and (max-width: 700px) {
  }
`
const MeetWrapper = styled.div`
  display: grid;
  border-radius: 0;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    padding: 0px;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    padding-left: 50px;

    overflow: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }

    .gatsby-image-wrapper {
      width: calc(100vw - 60px);
      max-width: 330px;
      box-sizing: inherit;
    }
  }
`
const MeetStyle = styled.div`
  padding: 20px;
`
const Description = styled.div``
