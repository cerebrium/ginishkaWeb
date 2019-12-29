import React from 'react'; 
import './styles/App.css';
import { Link } from 'gatsby';

    export default class Contact extends React.Component {

        constructor(props) {
            super(props);
            this.submitForm = this.submitForm.bind(this);
            this.state = {
            status: ""
            };
        }
        
        submitForm = (ev) => {
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
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
            };
            xhr.send(data);
        }

        render() {
            const { status } = this.state;
            return (
                <>
                    <div className='mainContainer'>
                        <div className='navContainer'>
                        <div><Link to='/about/' className='nav'>Home</Link></div>{' | '}
                        <div><Link to='/recruitment/' className='nav'>Recruitment</Link></div>{' | '}
                        <div><Link to='/testimonials/' className='nav'>Testimonials</Link></div>{' | '}
                        <div><Link to='/policies/' className='nav'>Policies</Link></div>{' | '}
                        <div><Link to='/contact/'className='nav'>Contact</Link></div>
                        </div>
                    </div>
                    <div className='contactPageMain'>
                        <h1>Contact Us!</h1>
                        <form onSubmit={this.submitForm} action='https://formspree.io/meqelkae' method="POST" className='myForm'>
                            <label >Name:</label>{'  '}
                            <input type="text" name="name"/><br/>
                            <label>Email:</label>{'  '}
                            <input type="email" name="email" /><br/>
                            <textarea type="textarea" rows='15' cols='16' name="message" className='myTextArea'></textarea><br/>
                            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </form>
                    </div>
                </>
            );
        }
    }
