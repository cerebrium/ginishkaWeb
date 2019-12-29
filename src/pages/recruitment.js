import React, { useState } from 'react'; 
import { Link } from 'gatsby';
import './styles/App.css';

const Recruitment = () => {

    const [ checkedBoxes, setCheckedBoxes ] = useState([])


    const handleClick = (event) => {
        let myArray = [...checkedBoxes]
        myArray.push(true)
        setCheckedBoxes(myArray)
    }

    var reRoute;
    if (checkedBoxes.length >= 4) {
        reRoute = (
            <button><Link to='/contact' className='linkButton'>Contact Us Today!</Link></button>
        )
    } else {
        reRoute = (
            ''
        )
    }

    return (
      <>
          <div className='navContainer'>
            <div><Link to='/about/' className='nav'>Home</Link></div>{' | '}
            <div><Link to='/recruitment/' className='nav'>Recruitment</Link></div>{' | '}
            <div><Link to='/testimonials/' className='nav'>Testimonials</Link></div>{' | '}
            <div><Link to='/policies/' className='nav'>Policies</Link></div>{' | '}
            <div><Link to='/contact/'className='nav'>Contact</Link></div>
          </div>
        <div className='mainContainer'>
          <div className='rowCentering'>
            <div className='contentCentering pictureBackground'>
                <br />
                <h1>Recruitment</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae, autem iste aut architecto laborum accusamus similique excepturi sunt voluptates doloribus dignissimos recusandae beatae cupiditate, culpa, incidunt ut dolorem consectetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae, autem iste aut architecto laborum accusamus similique excepturi sunt voluptates doloribus dignissimos recusandae beatae cupiditate, culpa, incidunt ut dolorem consectetur.</p>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae, autem iste aut architecto laborum accusamus similique excepturi sunt voluptates doloribus dignissimos recusandae beatae cupiditate, culpa, incidunt ut dolorem consectetur.</p> */}
            </div>
          </div>    
            <div className='rowCentering'>
                <div className='contentCentering'>
                    <h3>Apply Now</h3>
                        <form action="" method='GET'>
                            <p>Have you held a full and valid UK or EU driving licence for at least one year?</p>
                            <input type="checkbox" value='licenseToDrive' onClick={handleClick} /><p>yes</p> 
                            <input type="checkbox" value='licenseToDrive'/><p>no</p>
                            <p>Do you have 6 or fewer penalty points on your licence?</p>
                            <input type="checkbox" value='licenseToDrive' onClick={handleClick} /><p>yes</p> 
                            <input type="checkbox" value='licenseToDrive'/><p>no</p>
                            <p>Are you eligible to work in the UK?</p>
                            <input type="checkbox" value='licenseToDrive' onClick={handleClick} /><p>yes</p> 
                            <input type="checkbox" value='licenseToDrive'/><p>no</p>
                            <p>Do you have any criminal convictions?</p>
                            <input type="checkbox" value='licenseToDrive' onClick={handleClick} /><p>yes</p> 
                            <input type="checkbox" value='licenseToDrive'/><p>no</p>
                        </form>
                    {reRoute}    
                </div>
            </div>
        </div> 
      </>   
    )
}

export default Recruitment;