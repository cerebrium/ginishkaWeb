import React, {useState, useEffect} from 'react'; 
import { Link } from 'gatsby';
import './styles/App.scss';
import theSun from '../images/sunTransparent.png'
import { props } from 'gatsbypropshandler'


const Testimonials = () => {
    const [ mode, setMode ] = useState("contentDiv")

    useEffect ( () => {
      let myVar = props('modeToggle')
      if (myVar) {
        setMode(myVar)
      }
      console.log(myVar)
    }, [])

    const toggleMode = (e) => {
        console.log('sun clicked')
        if (mode === 'contentDiv') {
          setMode('contentDivDark')
          props({
            modeToggle: 'contentDivDark'
          })
          console.log(props('modeToggle'))
        } else {
          setMode('contentDiv')
          props({
            modeToggle: 'contentDiv'
          })
          console.log(props('modeToggle'))
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
                    <img src={theSun} className='sunImage' onClick={toggleMode}/>
                </div>
            </div>
            <div className={mode}>

            </div>                
        </div>
    )
}


export default Testimonials;