import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='mainContainer'>
      <div className='navContainer'>
        <div><Link to='/' className='nav'>Home</Link></div>{' | '}
        <div><Link to='/about/' className='nav'>About</Link></div>{' | '}
        <div><Link to='/recruitment/' className='nav'>Recruitment</Link></div>{' | '}
        <div><Link to='/testimonials/' className='nav'>Testimonials</Link></div>{' | '}
        <div><Link to='/policies/' className='nav'>Policies</Link></div>{' | '}
        <div><Link to='/contact/'className='nav'>Contact</Link></div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
