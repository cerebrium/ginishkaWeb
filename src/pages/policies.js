import React, { useState, useEffect } from 'react'; 
import { Link } from 'gatsby';
import './styles/App.scss';
import theSun from '../images/sunTransparent.png'
import { props } from 'gatsbypropshandler'

const Policies = () => {
    const [ mode, setMode ] = useState("contentDiv")

    useEffect ( () => {
      let myVar = props('modeToggle')
      if (myVar) {
        setMode(myVar)
      }
      console.log(myVar)
    }, [])

    const toggleMode = (e) => {
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
                <h1 className='centerTitle'>Policies</h1>
                    <ul>
                        <li>
                            No drinking or doing any type of illicit material whilst driving or preparing to drive
                        </li>
                        <br />
                        <li>
                            No speeding or breaking the traffic rules in any way
                        </li>
                        <br />
                        <li>
                            If you are taking a break do so after delivering the packages required for that hour
                        </li>
                        <br />
                        <li>
                            If any issues are to arrise, notify managment... do not attempt to solve the issues yourself
                        </li>
                        <br />
                        <li>
                            Unless there are mitigating circumstances... achieve the deliveries that you are assigned on the day
                        </li>
                        <br />
                        <li>
                            Manage your own taxes, they will not be witheld 
                        </li>
                        <br />
                        <li>
                            You are contracting and will therefore be responsible for your actions by yourself, we claim no responsibility for our drivers actions
                        </li>
                        <br />
                        <li>
                            Follow all amazon rules and regulations for drivers found <a href='https://flex.amazon.com/faqs' target="_blank">here</a>
                        </li>
                        <br />
                    </ul>   
            </div>
        </div> 
    )
}

export default Policies;