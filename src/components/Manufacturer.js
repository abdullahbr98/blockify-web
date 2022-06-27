import React, { useContext, useEffect } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { button } from 'react-bootstrap'
import './seller.css'
import TopBar from './Topbar'


const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
    />
);

export default function Manufacturer() {

    const { handleChange, connectWallet, sendTransaction, formData } = useContext(TransactionContext)

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
        console.log('Came here !')
        e.preventDefault();

        if (!addressTo || !amount) return;

        console.log('Calling Send Transaction ! !')
        sendTransaction();
    };

    return (
        <div className='sellerDiv'>
            <TopBar />
            <div className="row">
                <div className="col-12 mt-5 text-center">
                    <h1 className='headingTransaction'>Manufacturer Page</h1>
                </div>
                <div className="col-12 text-center">
                    <h4 className='mt-4 descriptionHeading'>Transaction with Seller</h4>
                </div>
                <div className="col-12 text-center">
                    <button className="btn btn-secondary connectMetamask" onClick={connectWallet}>
                        Connect Metamask Wallet
                    </button>
                </div>

            </div>

            <div className="row text-center">
                <div className="col-4">
                    <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} className="text-field" />
                </div>
                <div className="col-4">
                    <Input placeholder="Number Of Products" name="amount" type="number" handleChange={handleChange} className="text-field" />
                </div>
                <div className="col-2 pt-1">
                    <button className="btn btn-primary transButton" type="submit" onClick={handleSubmit}>
                        Run Transaction
                    </button>
                </div>

            </div>
        </div>
    )
}

