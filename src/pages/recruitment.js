import React, { useState } from 'react'; 
import { Link } from 'gatsby';
import './styles/App.scss';

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
            <div className='recruitButtonOverall'>
                <button className='contactButton'><Link to='/contact' className='linkButton'>Contact Us Today!</Link></button>
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
                            Yes{'  '}<input type="checkbox" value='licenseToDrive' onClick={handleClick} />{' | '}
                            No{'  '}<input type="checkbox" value='licenseToDrive'/>
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
            <div className='contentDiv'>
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