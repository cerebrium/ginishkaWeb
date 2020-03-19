import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import './styles/App.scss';


const IndexPage = () => (
  <>
    <SEO title="Home" />
      <div className='mainContainerTitle'>
        <div className='navContainer'>
          <div><Link to='/about/' className='nav'>Home</Link></div>{' | '}
          <div><Link to='/recruitment/' className='nav'>Recruitment</Link></div>{' | '}
          <div><Link to='/testimonials/' className='nav'>Testimonials</Link></div>{' | '}
          <div><Link to='/policies/' className='nav'>Policies</Link></div>{' | '}
          <div><Link to='/contact/'className='nav'>Contact</Link></div>
        </div>
        <div className='titlePage'>
          <h1>Welcome to Amazon Recruitment Services</h1>
          <h3>A delivery service that fully embraces a client-first approach</h3>
        </div>
      </div>
  </>
)

export default IndexPage
