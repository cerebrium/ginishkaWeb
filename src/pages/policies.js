import React from 'react'; 
import { Link } from 'gatsby';
import './styles/App.css';

class Policies extends React.Component {
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
                        <div className='contentCentering pictureBackground'>
                            <br />
                            <h1>Policies</h1><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae, autem iste aut architecto laborum accusamus similique excepturi sunt voluptates doloribus dignissimos recusandae beatae cupiditate, culpa, incidunt ut dolorem consectetur.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae, autem iste aut architecto laborum accusamus similique excepturi sunt voluptates doloribus dignissimos recusandae beatae cupiditate, culpa, incidunt ut dolorem consectetur.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae, autem iste aut architecto laborum accusamus similique excepturi sunt voluptates doloribus dignissimos recusandae beatae cupiditate, culpa, incidunt ut dolorem consectetur.</p>
                            <br /><br /><br /><br />
                            <div className='nonCommentSection'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae, autem iste aut architecto laborum accusamus similique excepturi sunt voluptates doloribus dignissimos recusandae beatae cupiditate, culpa, incidunt ut dolorem consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae, autem iste aut architecto laborum accusamus similique excepturi sunt voluptates doloribus dignissimos recusandae beatae cupiditate, culpa, incidunt ut dolorem consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae, autem iste aut architecto laborum accusamus similique excepturi sunt voluptates doloribus dignissimos recusandae beatae cupiditate, culpa, incidunt ut dolorem consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quae, autem iste aut architecto laborum accusamus similique excepturi sunt voluptates doloribus dignissimos recusandae beatae cupiditate, culpa, incidunt ut dolorem consectetur.</p>
                            </div>
                        </div>
                    </div> 
                </div>  
            </>
        )
    }
}

export default Policies;