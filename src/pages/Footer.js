import React from 'react'
import styled from 'styled-components'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>

                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/about">About</FooterLink>
                    <FooterLink to="/Services">Services</FooterLink>
                    <FooterLink to="/careers">Careers</FooterLink>
                    <FooterLink to="/contact">Contact</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to="/about">Insta</FooterLink>
                    <FooterLink to="/Services">Face</FooterLink>
                    <FooterLink to="/careers">Twit</FooterLink>
                    <FooterLink to="/contact">Linked</FooterLink>
            </FooterLinkItems>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
padding: 5rem calc((100vw - 1100px)/2);
display: grid;
grid-template-columns: repeat(2,1fr);
color: #000;
background: #fafafafb;

`
const FooterDesc = styled.div`
padding: 0 2rem;

h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
}

@media screen and (max-width: 400px) {
    padding: 1rem;
}
`

const FooterLinksWrapper = styled.div`
display: grid;
grid-template-columns:repeat(2,1fr);


@media screen and (max-width: 400px) {
    padding: 1fr;
}

`
const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;

@media screen and (max-width: 400px) {
    padding: 1rem;
}
`
const FooterLink = styled.div`
text-decoration: none;
margin-bottom: 0.5rem;
font-size:14px;
color: #3d3d4e;

&:hover {
    color: red;
    transition: 0.3s ease-out;
}
`

const FooterLinkTitle = styled.div`
font-size: 14px;
margin-bottom: 16px;
`