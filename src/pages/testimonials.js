import React, {useState, useEffect} from 'react'; 
import { Link } from 'gatsby';
import './styles/App.scss';
import theSun from '../images/sunTransparent.png'
import theMoon from '../images/moon.png'
import { props } from 'gatsbypropshandler'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Testimonials = () => {
    const [ mode, setMode ] = useState("contentDiv")
    const [ imageSelection, setImageSelection ] = useState(theMoon)
    const [ boxColor, setBoxColor ] = useState('commentBox')
    const [ boxColorTwo, setBoxColorTwo ] = useState('commentBoxTwo')
    const [ emphasis, setEmphasis ] = useState('testimonialEmphasis')

    const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      imageTwo: file(relativePath: { eq: "ginishkaPic.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }`)

    useEffect ( () => {
      let myVar = props('modeToggle')
      if (myVar) {
        setMode(myVar)
        if (myVar === 'contentDiv') {
            setImageSelection(theMoon)
            setBoxColor('commentBox')
            setBoxColorTwo('commentBoxTwo')
            setEmphasis('testimonialEmphasis')
          } else {
            setImageSelection(theSun)
            setBoxColor('commentBoxDark')
            setBoxColorTwo('commentBoxDarkTwo')
            setEmphasis('testimonialEmphasisDark')
          }
      }
    }, [])

    const toggleMode = (e) => {
        if (mode === 'contentDiv') {
          setMode('contentDivDark')
          props({
            modeToggle: 'contentDivDark'
          })
          setImageSelection(theSun)
          setBoxColor('commentBoxDark')
          setBoxColorTwo('commentBoxDarkTwo')
          setEmphasis('testimonialEmphasisDark')
        } else {
          setMode('contentDiv')
          props({
            modeToggle: 'contentDiv'
          })
          setImageSelection(theMoon)
          setBoxColor('commentBox')
          setBoxColorTwo('commentBoxTwo')
          setEmphasis('testimonialEmphasis')
        }
      }

    return (
        <div className='mainContainer'>
            <div className='navContainer'>
                <div><Link to='/about/' className='nav'>Home</Link></div>{' | '}
                <div><Link to='/recruitment/' className='nav'>Recruitment</Link></div>{' | '}
                <div><Link to='/testimonials/' className='nav'>Testimonials</Link></div>{' | '}
                <div><Link to='/policies/' className='nav'>Policies</Link></div>{' | '}
                <div><Link to='/contact/'className='nav'>Contact</Link></div>
            </div>
            <div className='modeToggle'>
                <div className='imageContainer'>
                    <img src={imageSelection} title='toggle dark and light modes' className='sunImage' onClick={toggleMode}/>
                </div>
            </div>
            <div className={mode}>
              <h1 className='centerTitle'>Hear what people are saying about us!</h1>
              <div className={boxColor}>
                <div className='testimonialPics'>
                  <Img fluid={data.imageOne.childImageSharp.fluid} className='testimonialPic'/>
                </div>
                <div className='testimonialText'>
                  "I have worked with this company and their founders and I have found them to be <span className={emphasis}>excellent both logistically and socially.</span> Working with them is a real treat because they are able to simulatenously do a great job at running the business, and treat all of their clients and employees fairly and with a great attitude!"< br />
                   - Nick Shankland< br />
                   {' | '}<span>Website Developer</span>{' | '}<br />
                   {' | '}<span>Client</span>{' | '}
                </div>
              </div>

              {/* Comment Two */}
              <div className={boxColorTwo}>
                <div className='testimonialTextRight'>
                  "I worked with this company for a long period of time, and I can say the experience was absolutely fantastic. I was able to really help them logistically whilst also learning tons about the Amazon pipeline. The other managers and owners were really easy to get along with and provided me with a really competetive salary."<br /> <span className={emphasis}>"10/10 Would Recommend!"</span>< br />
                   - Gini Ilieva< br />
                   {' | '}<span>Logistical Operations Manager</span>{' | '}<br />
                   {' | '}<span>Employee</span>{' | '}
                </div>
                <div className='testimonialPicsRight'>
                  <Img fluid={data.imageTwo.childImageSharp.fluid} className='testimonialPicRight'/>
                </div>
              </div>
            </div>                
        </div>
    )
}


export default Testimonials;