import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)`
background: ${({primary}) => (primary ? '#ff1053' : '#671332')};
white-space:nowrap;
padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
color: white;
font-size: ${({big}) => (big ? '20px' : '16px')};
outline:none;
border:none;
min-width:100px;

cursor: pointer;
text-decoration: none;
transition: 0.3s !important;
border-radius: ${({round }) => (round ? '20px' : 'none')};
justify-content: center;

&:hover {
  transition: 0.5s ease-out;
  color: black;
    text-decoration: none;
    background-color: white;
    box-shadow: 0 0 3px 3px #ff1053;;
}

`
