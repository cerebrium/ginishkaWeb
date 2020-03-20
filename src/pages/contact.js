import React, { useState, useEffect} from 'react'; 
import './styles/App.scss';
import { Link } from 'gatsby';
import theSun from '../images/sunTransparent.png'
import { props } from 'gatsbypropshandler'

    const Contact = () => {
        const [ mode, setMode ] = useState("contentDiv")
        const [ status, setStatus ] = useState('')

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
                    <h1 className='centerTitle'>Contact Us!</h1>
                    <form onSubmit={submitForm} action='https://formspree.io/meqelkae' method="POST" className='myForm'>
                        <label className='labels'>Name:</label>{'  '}
                        <input type="text" name="name" className='inputBars'/><br/>
                        <label className='labels'>Email:</label>{'  '}
                        <input type="email" name="email" className='inputBars'/><br/>
                        <textarea type="textarea" rows='15' cols='16' name="message" className='myTextArea'></textarea><br/>
                        {status === "SUCCESS" ? <p>Thanks!</p> : <button className='contactButton'>Submit</button>}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </form>
                </div>
            </div>
        );
    }

    export default Contact
