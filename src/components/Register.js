import React from 'react'
import blockifyLogo from '../../src/assets/Blockify-full.png'
import Button from 'react-bootstrap/Button';
export default function Register() {
    return (
        <div className="hero row" style={{backgroundColor:"#FAFAFA"}}>
            <div className="col-6 pt-5 img-fluid"><img src={blockifyLogo} alt="" srcset="" height={400} width={400} />
            <h1 className='my-3 logoDesc'>Become a verified seller now</h1>
            <h5 className='my-3 px-5 logoDesc'>Sell your profucts that are verified by authentic manufacturers via blockchain</h5>
            </div>
            <div className="col-6 buttons">
                <div className="row">
                    <div className="col-4">
                        <Button variant="primary mr-6 col-6 registerButton">Register</Button>
                    </div>
                    <div className="col-4">
                        <Button variant="outline-dark col-6 signInButton">Sign In</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
