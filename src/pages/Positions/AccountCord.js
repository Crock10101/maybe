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
    query Bground {
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
              <h5>The position:</h5>
              <br></br>
              <p>
                Under the direct supervision of the Account Specialist, the
                Account Coordinator focuses on coordinating all day-to-day tasks
                involving customer and carrier relationships. This role is
                specifically built as a training role, and once completed, you
                will grow into a Sales Account Specialist. As an Account
                Coordinator, you will be facilitating daily communication
                between carrier and customers, analyzing and negotiating price
                based on market trends, and screening carriers to find reliable
                and quality drivers. You will play a critical role in executing
                business for our customers by building relationships and
                partnering with Account Specialist’s to ensure customers’ needs
                are met.
              </p>
            </div>
            <div>
              <br></br>
              <h5>What you’ll be doing.</h5>
              <br></br>
              <span>
                {" "}
                • Manage Account Specialist’s portfolio of accounts through
                constant communication with customers and carriers.
              </span>
              <span>
                • Screen carriers to find quality, reliable, and consistent
                drivers.
              </span>
              <span>
                • Handle all customer and carrier issues in a professional and
                timely manner.
              </span>
              <span>
                • Maintain and update carrier database to company’s standard
                operating procedures.
              </span>
              <span>
                • Analyze and negotiate rates based on current market price.
              </span>
              <span>
                • Handle a high volume of inbound phone calls from drivers and
                carriers looking to book loads in a timely manner.
              </span>
              <span>
                • Conduct outbound check calls to current drivers and carriers.
              </span>
              <span>
                • Manage and resolve daily carrier service issues, failures, and
                delays.
              </span>
            </div>
            <div>
              <br></br>
              <h5>What we’re looking for.</h5>
              <br></br>
              <span>
                {" "}
                • Strong work ethic, self-motivation, and sales drive.
              </span>
              <br></br>
              <span>
                {" "}
                • Possess strong organizational and time management skills.
              </span>
              <span>• Customer Service or Sales experience preferred.</span>
              <br></br>
              <span>• Bachelor’s degree preferred.</span>
            </div>
            <div>
              <br></br>
              <h5>Who we are.</h5>
              <br></br>
              <p>
                BBI Logistics offers transportation solutions including but not
                limited to truckload, intermodal, LTL, expedited, purchase order
                consolidation, route optimization, cold storage, expedited
                delivery, and natural disaster response. As a rapidly growing
                company, BBI is quickly becoming a premier transportation
                provider nationwide.
              </p>
              <br></br>
              <h5>What draws people to BBI.</h5>
              <br></br>
              <p>
                BBI’s greatest asset are the employees. The employees make the
                fast-paced and energetic culture a place people want to be. A
                place where hard work does not go unnoticed, and your impact is
                felt at every turn. Take that and couple it with endless
                earnings and growth opportunity and you have a roadmap for
                success.
              </p>
              <br></br>
              <br></br>
              <ButtonContainer>
                <h5>Find a Path For You</h5>
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
                <br></br>
                <p class="pp">
                  BBI Logistics is an Equal Opportunity Employer. All qualified
                  applicants will receive consideration for employment without
                  regard to race, color, religion, sex, sexual orientation,
                  gender identity, age, national origin, genetic information,
                  disability or protected veteran status.
                </p>
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
    font-size: 50px;

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
  .pp {
    font-weight: bold;
  }
  p {
    @media screen and (max-width: 1200px) {
      width: 550;
      white-space: pre-wrap;
    }

    @media screen and (max-width: 610px) {
      width: 400;
      white-space: pre-wrap;
    }
    span {
    }
  }
`

const JobWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
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
