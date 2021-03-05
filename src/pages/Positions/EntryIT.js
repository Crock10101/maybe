import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { GlobalStyle } from "../../components/styles/GlobalStyles"
import { Button } from "../../components/styles/Button"
import Header from "../../components/header"
import Footer from "../Footer.js"

const AccountCord = () => {
  const data = useStaticQuery(graphql`
    query EntryIt {
      bg: file(relativePath: { eq: "comb.png" }) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
        people1: file(relativePath: { eq: "meet-bbi.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3080, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
    }

  `)
  return (
    <Container>
      <JobContainer>
        <GlobalStyle />
        <Header />

        <HImg fluid={data.bg.childImageSharp.fluid} alt="Logo" />
        <JobWrapper>
          <DetailsContainer>
            <h1>Account Coordinator</h1>

            <br></br>
            <div>
              <h5>Position Overview</h5>
              <br></br>
              <p>
                As a Sales Account Specialist at BBI Logistics, you will focus
                on the fast-paced brokerage aspect of our business, helping
                customers move inventory in the most cost-effective way by
                identifying and providing logistics solutions. You will create
                and manage your individual portfolio of accounts through
                constant communication with carriers. You will need to be able
                to determine carrier availability, negotiate rates based on
                market trends, and identify and resolve issues. There is an
                unlimited amount of growth in this role as you build your book
                of business.
              </p>
            </div>
            <div>
              <br></br>
              <h5>Responsibilities</h5>
              <br></br>
              <span> • Build, maintain, and manage account relationships.</span>
              <span>
                • Market, service, and promote BBI Logistics transportation
                products and services.
              </span>
              <span>
                • Establish and maintain a book of regular business by
                developing leads and cold calling.
              </span>
            </div>
            <div>
              <br></br>
              <h5>Potential Customers</h5>
              <br></br>
              <span> • Build freight volume from existing customers.</span>
              <br></br>
              <span> • Maintain monthly freight profit/loss reports.</span>
              <span>
                • Establish strong relationships with clients, carriers, and
                internal team members.
              </span>
              <span>
                • Effectively use systems and strategies for client prospecting
                and pipeline management.
              </span>
              <span>
                • Ensure customer satisfaction and adequate service levels where
                freight is picked up and <br></br> delivered using safe and
                reliable carriers.
              </span>
              <span>
                • Manage and resolve daily carrier service issues, failures, and
                delays.
              </span>
              <span>
                • Present the value of BBI Logistics services to prospecting and
                existing clients.
              </span>
            </div>
            <div>
              <br></br>
              <h5>Job Skills & Qualifications</h5>
              <br></br>
              <span>
                {" "}
                • Strong work ethic, self-motivation, and sales drive.
              </span>
              <br></br>
              <span> • Must be proficient in excel.</span>
              <br></br>
              <span>
                • Possess strong organizational and time management skills.
              </span>
              <br></br>
              <span> • Strong attention to detail.</span>
              <span>
                • Must have flexibility in schedule to work after normal
                business hours and weekends.
              </span>
              <span> • Confident decision-making abilities.</span>
              <br></br>
              <span> • Strong ability to sell and negotiate.</span>
              <br></br>
              <span> • Customer Service or Sales experience preferred.</span>
              <br></br>
              <span> • Bachelor’s degree preferred.</span>
              <br></br>
              <br></br>
              <ButtonContainer>
                <h5>Let's Connect</h5>
                <p>
                  Did a full 180, crazy Thinking 'bout the way I was Did the
                  heartbreak change me? Maybe But look at where I ended up I'm
                  all good already So moved on, it's scary I'm not where you
                  left me at all, so
                </p>
                <Button primary="true" round="true">
                  Apply Now
                </Button>

                <br></br>
                <span>
                  {" "}
                  BBI Logistics, LLC is an Equal Opportunity employer
                </span>
                <br></br>
                <br></br>
              </ButtonContainer>
            </div>
          </DetailsContainer>
          <PositionContainer>
          <PositionWrapper>
            
          <CareerCard>
            <CImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
            
          </CareerCard>
          <CareerCard>
            <CImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
            
          </CareerCard>
          <CareerCard>
            <CImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
            
          </CareerCard>
          <CareerCard>
            <CImg fluid={data.people1.childImageSharp.fluid} alt="Logo" />
            
          </CareerCard>
          </PositionWrapper>
          </PositionContainer>
        </JobWrapper>
      </JobContainer>
      <Footer />
    </Container>
  )
}

export default AccountCord

const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 800px;
  line-height: 1.8;
  font-size: 20px;

  content: "•";
  line-height: 2.3em;

  h1 {
    color: white;
    font-weight: bold;
    text-align: left;
    z-index: 1;
    position: absolute;
    top: 33%;

    @media screen and (max-width: 500px) {
      top: 25%;
    }
    @media screen and (max-width: 270px) {
      top: 20%;
    }
  }

  h5 {
    font-weight: bold;
    font-size: 25px;
  }

  span {
    display: inline-block;
    white-space: nowrap;

    @media screen and (max-width: 1200px) {
      white-space: pre-wrap;
    }

    @media screen and (max-width: 400px) {
      white-space: pre-wrap;
    }
  }
`

const HImg = styled(Img)`
  height: 35vh;
  max-width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: -100;
  background: #314e7c;
  position: absolute;
`

const JobContainer = styled.div``

const Container = styled.div``

const ButtonContainer = styled.div`
  
  text-align: center;
  line-height: 2;

  font-size: 20px;

  h5 {
    font-weight: bold;
    font-size: 35px;
  }

p{
  @media screen and (max-width: 1200px) {
    width: 550;
    white-space: pre-wrap;
  }

  @media screen and (max-width: 610px) {
    width: 400;
    white-space: pre-wrap;
  }
}
`

const JobWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 1200px) {
    width: 550;
    white-space: pre-wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 610px) {
    width: 400;
    white-space: pre-wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
  
  
`

const PositionWrapper = styled.div`
 display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const PositionContainer = styled.div`
  
  
  margin-bottom: 5rem;
  background: white;
  color: black;
`

