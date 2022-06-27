import React from 'react'
import blockifyLogo from '../../src/assets/Blockify-full.png'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import googleIcon from '../assets/google.png'
import facebookIcon from '../assets/facebook.png'
import './register.css'
export default function Register() {
    return (
        <div className="hero row" style={{ backgroundColor: "#FAFAFA" }}>
            <div className="col-6 pt-5 img-fluid text-center"><img src={blockifyLogo} alt="" srcset="" height={400} width={400} />
                <h1 className='my-3 logoDesc'>Become a verified seller now</h1>
                <h5 className='my-3 px-5 logoDesc'>Sell your profucts that are verified by authentic manufacturers via blockchain</h5>
            </div>
            <div className="col-6 formPosition text-center">
                <h1 className='my-2 headingSignUp'> Create new Account</h1>
                <p className='mb-3 signUpDesc'> please fill in the form to continue</p>
                <Form className='formSignUp'>
                    <Form.Group className="mb-3 text-field" controlId="formBasicUsername">
                        <Form.Control type="text" placeholder="User Name" className='text-input' />
                    </Form.Group>
                    <Form.Group className="mb-3 text-field" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email Address" className='text-input' />
                    </Form.Group>
                    <Form.Group className="mb-3 text-field" controlId="formBasicNumber">
                        <Form.Control type="text" placeholder="Phone Number" className='text-input' />
                    </Form.Group>
                    <Form.Group className="mb-3 text-field" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" className='text-input' />
                    </Form.Group>
                    <DropdownButton id="dropdown-basic-button" title="Select User Type" className='buttonDropdown' variant="secondary">
                        <Dropdown.Item href="#">Manufacturer</Dropdown.Item>
                        <Dropdown.Item href="#">Buyer</Dropdown.Item>
                        <Dropdown.Item href="#">Seller</Dropdown.Item>
                    </DropdownButton>
                    <div className="col buttonsGroup">
                        <div className="row">
                            <Button variant="primary" type="submit" className='SignUpButtonGoogle mt-2'>
                                <img src={googleIcon} alt="" srcset="" height={22} width={22} />
                                {' '}Sign Up With Google
                            </Button>
                        </div>
                        <div className="row">
                            <Button variant="primary" className='SignUpButtonFacebook mt-2'>
                                <img src={facebookIcon} alt="" srcset="" height={22} width={22} />
                                {' '}Sign Up With Facebook
                            </Button>
                        </div>
                        <div className="row">
                            <Button variant="primary" className='SignUpButton mt-2' href='/'>
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
