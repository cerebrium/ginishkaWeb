import React, { useState, useEffect } from 'react'; 
import { Link } from 'gatsby';
import './styles/App.scss';
import theSun from '../images/sunTransparent.png'
import theMoon from '../images/moon.png'
import { props } from 'gatsbypropshandler'

const Recruitment = () => {

    const [ checkedBoxes, setCheckedBoxes ] = useState([])
    const [ status, setStatus ] = useState('')
    const [ mode, setMode ] = useState("contentDiv")
    const [ imageSelection, setImageSelection ] = useState(theMoon)

    useEffect ( () => {
      let myVar = props('modeToggle')
      if (myVar !== undefined) {
        setMode(myVar)
        if (myVar === 'contentDiv') {
            setImageSelection(theMoon)
          } else {
            setImageSelection(theSun)
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
        } else {
          setMode('contentDiv')
          props({
            modeToggle: 'contentDiv'
          })
          setImageSelection(theMoon)
        }
      }

    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            form.reset();
            setStatus("SUCCESS") 
        } else {
            setStatus("ERROR")
        }
        };
        xhr.send(data);
    }

    const handleClick = (event) => {
        let myArray = [...checkedBoxes]
        myArray.push(true)
        setCheckedBoxes(myArray)
    }

    var reRoute;
    if (checkedBoxes.length >= 4) {
        reRoute = (
            <div className='contentDivRecruit'>
                <h1 className='centerTitle'>Contact Us!</h1>
                <form onSubmit={submitForm} action='https://formspree.io/meqelkae' method="POST" className='myForm'>
                    <label className='labels'>Name:</label>{'  '}
                    <input type="text" name="name" className='inputBars'/><br/>
                    <label className='labels'>Email:</label>{'  '}
                    <input type="email" name="email" className='inputBars'/><br/>
                    <textarea type="textarea" rows='15' cols='16' name="message" className='myTextAreaRecruitment'></textarea><br/>
                    {status === "SUCCESS" ? <p>Thanks!</p> : <button className='contactButton'>Submit</button>}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                </form>
            </div>
        )
    } else {
        reRoute = (
            <div className='recruitmentForm'>
                <div className='padThis'>
                    <h3 className='centerTitle'>Apply Now</h3>
                    <form action="" method='GET'>
                        <p>Have you held a full and valid UK or EU driving licence for at least one year?</p>
                        <p>
                            Yes{'  '}<input type="checkbox" value='licenseToDrive' onClick={handleClick} />{' | '}
                            No{'  '}<input type="checkbox" value='licenseToDrive'/>
                        </p>
                        <p>Do you have 6 or fewer penalty points on your licence?</p>
                        <p>
                            Yes{'  '}<input type="checkbox" value='licenseToDrive' onClick={handleClick} />{' | '}
                            No{'  '}<input type="checkbox" value='licenseToDrive'/>
                        </p>
                        <p>Are you eligible to work in the UK?</p>
                        <p>
                            Yes{'  '}<input type="checkbox" value='licenseToDrive' onClick={handleClick} />{' | '}
                            No{'  '}<input type="checkbox" value='licenseToDrive'/>
                        </p>
                        <p>Do you have any criminal convictions?</p>
                        <p>
                            Yes{'  '}<input type="checkbox" value='licenseToDrive'/>{' | '}
                            No{'  '}<input type="checkbox" value='licenseToDrive' onClick={handleClick} />
                        </p>
                    </form>
                </div>
            </div>
        )
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
                <label class='switch'>
                    <input type='checkbox' onClick={toggleMode}/>
                    <span class='slider round'></span>
                </label>
              </div>
            </div>
            <div className={mode}>
                <div className='recruitmentOverall'>
                    <div  className='pictureRecruitment'>
                        <div className='boxMe'>
                            <h1 className='recruitText'>
                                Would you like to be part of the <span className='team'>TEAM</span>
                            </h1>
                        </div>
                    </div> 
                        {reRoute}    
                </div>
            </div>
        </div> 
    )
}

export default Recruitment;