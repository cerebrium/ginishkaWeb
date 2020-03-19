import React from 'react'; 
import { Link } from 'gatsby';
import './styles/App.scss';

class Testimonials extends React.Component {
    render () {
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

                </div>                
            </div>
        )
    }
}

export default Testimonials;