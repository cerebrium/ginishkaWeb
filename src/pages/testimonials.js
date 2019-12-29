import React from 'react'; 
import { Link } from 'gatsby';
import './styles/App.css';

class Testimonials extends React.Component {
    render () {
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
                        <div className='contentCentering contentStyle'>
                            <h1>What people are saying about our company!</h1>
                            <div className='commentContainer'>
                                <p className='commentStyle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, debitis non. Laborum asperiores illum sed sint veniam quia veritatis ullam praesentium eaque illo? Vero minus quidem cupiditate, alias sit consectetur!</p>
                            </div>
                            <div className='commentContainer'>
                                <p className='commentStyle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, debitis non. Laborum asperiores illum sed sint veniam quia veritatis ullam praesentium eaque illo? Vero minus quidem cupiditate, alias sit consectetur!</p>
                            </div>
                            <div className='commentContainer'>
                                <p className='commentStyle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, debitis non. Laborum asperiores illum sed sint veniam quia veritatis ullam praesentium eaque illo? Vero minus quidem cupiditate, alias sit consectetur!</p>
                            </div>
                            <div className='commentContainer'>
                                <p className='commentStyle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, debitis non. Laborum asperiores illum sed sint veniam quia veritatis ullam praesentium eaque illo? Vero minus quidem cupiditate, alias sit consectetur!</p>
                            </div>
                            <div className='commentContainer'>
                                <p className='commentStyle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, debitis non. Laborum asperiores illum sed sint veniam quia veritatis ullam praesentium eaque illo? Vero minus quidem cupiditate, alias sit consectetur!</p>
                            </div>
                            <div className='commentContainer'>
                                <p className='commentStyle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, debitis non. Laborum asperiores illum sed sint veniam quia veritatis ullam praesentium eaque illo? Vero minus quidem cupiditate, alias sit consectetur!</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </>
        )
    }
}

export default Testimonials;