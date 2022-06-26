import React, { useContext, useEffect } from 'react'
import { TransactionContext } from '../context/TransactionContext'


const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
    />
  );

export default function Seller() {
  
    const {handleChange,connectWallet,sendTransaction,formData} = useContext(TransactionContext)
    
      const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;
        console.log('Came here !')
        e.preventDefault();
    
        if (!addressTo || !amount) return;
        
        console.log('Calling Send Transaction ! !')
        sendTransaction();
      };
    // useEffect(()=>{
    //     connectWallet()
    //     console.log('Wallet Connected !')
    // },[])
    
    return (
    <div>
      <button onClick={connectWallet}>
        Connect Wallet 
      </button>
      <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
      <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
      {/* <input        
                    onChange={handleChange}
                    type="text"
                    className='manufacturerAddress2'
                    name='addressTo'
                    placeholder="Enter Manufacturer Address"
                />
                <input
                    onChange={handleChange}
                    name='amount'
                    type="text"
                    className='noofproducts'
                    placeholder="Enter Number of Products"
                
                /> */}
                <button className="submitButton" type="submit" onClick={handleSubmit}>
                    Submit
                </button>
        {/* Add Input 2 Input Fields, Manufacturer Address , Number of Products */}
        {/* Add a button */}
    </div>
  )
}
