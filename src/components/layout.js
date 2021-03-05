
import React from "react"
import Header from "../components/header.js"
import { GlobalStyle } from "./styles/GlobalStyles"
import Home from "../pages/home"

//import Careers from "../pages/Service.js"
//import Services from "../pages/Career.js"
//import Footer from "../pages/footer.js"




const Layout = () => {

  return (
    <>
    <GlobalStyle/>
      <Header/>
        <Home/>
        
    </>
  )
}

export default Layout
