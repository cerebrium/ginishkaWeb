import React from 'react';
import { Link } from 'gatsby';
import './styles/App.scss';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
    const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "bannon-morrissy-homeOne.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imageTwo: file(relativePath: {eq: "ahmed-carter-homeTwo.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300, quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
      }
    }
  `)

    return (
        <div className='mainContainer'>
            <div className='navContainer'>
                <div><Link to='/about/' className='nav'>Home</Link></div>{' | '}
                <div><Link to='/recruitment/' className='nav'>Recruitment</Link></div>{' | '}
                <div><Link to='/testimonials/' className='nav'>Testimonials</Link></div>{' | '}
                <div><Link to='/policies/' className='nav'>Policies</Link></div>{' | '}
                <div><Link to='/contact/'className='nav'>Contact</Link></div>
            </div>
            <div className="contentDiv">
                <h1 className='centerTitle'>Amazon Delivery Service</h1>
                <div className='homeContent'>
                    <p>
                        We are a company that allows for drivers to be linked up with work at Amazon. Through workig with us you can expect constant pay and reliable support. We strive to provide the best environment for new and experienced drivers. If you are intersted view the contact page to send us your information.
                    </p>  
                    <div className='homeImages'>
                        <div className='imagesDiv'>
                            <Img fluid={data.imageOne.childImageSharp.fluid} />
                        </div>
                        <div className='imagesDiv'>
                            <Img fluid={data.imageTwo.childImageSharp.fluid} />
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default About;