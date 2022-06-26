import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { balanceContractABI, balanceContractAddress } from "../Utils/constants";
import { productsContractABI, productsContractAddress } from "../Utils/constants";
import { authenticateContractABI, authenticateContractAddress } from "../Utils/constants";
import { transactionContractABI, transactionContractAddress } from "../Utils/constants";
import { transactProductsContractABI, transactProductsContractAddress } from "../Utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;



// We will use this to get access to our desired Contract !
// const createEthereumContract = () => {
//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const signer = provider.getSigner();
//   const balanceContract = new ethers.Contract(balanceContractAddress, balanceContractABI, signer);
//   const authenticateContract = new ethers.Contract(authenticateContractAddress, authenticateContractABI, signer);
//   const transactionContract = new ethers.Contract(transactionContractAddress, transactionContractABI, signer);
//   const transactProductsContract = new ethers.Contract(transactProductsContractAddress, transactProductsContractABI, signer);

//   return transactionsContract;
// };

const createTransactProductsContract = () =>{
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactProductsContract = new ethers.Contract(transactProductsContractAddress, transactProductsContractABI, signer);
  return transactProductsContract;
}


const createBalanceContract = () =>{
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const balanceContract = new ethers.Contract(balanceContractAddress, balanceContractABI, signer);
  return balanceContract;
}


const createProductsContract = () =>{
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const productsContract = new ethers.Contract(productsContractAddress, productsContractABI, signer);
  return productsContract;
}

const createTransactionContract = () =>{
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(transactionContractAddress, transactionContractABI, signer);

  return transactionContract;
}

const createAuthenticateContract = () =>{
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const authenticateContract = new ethers.Contract(authenticateContractAddress, authenticateContractABI, signer);

  return authenticateContract;
}


// The real deal !
export const TransactionsProvider = ({ children }) => {
  const [formData, setformData] = useState({ addressTo: "", amount: ""});
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    console.log(name," ",e.target.value)
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  // Not useful for us right now !
  // const getAllTransactions = async () => {
  //   try {
  //     if (ethereum) {
  //       const transactionsContract = createEthereumContract();

  //       const availableTransactions = await transactionsContract.getAllTransactions();

  //       const structuredTransactions = availableTransactions.map((transaction) => ({
  //         addressTo: transaction.receiver,
  //         addressFrom: transaction.sender,
  //         timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
  //         message: transaction.message,
  //         keyword: transaction.keyword,
  //         amount: parseInt(transaction.amount._hex) / (10 ** 18)
  //       }));

  //       console.log(structuredTransactions);

  //       setTransactions(structuredTransactions);
  //     } else {
  //       console.log("Ethereum is not present");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  // Useless
  
  const checkIfWalletIsConnect = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount('');
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Might be USeful !
  // const checkIfTransactionsExists = async () => {
  //   try {
  //     if (ethereum) {
  //       const transactionsContract = createEthereumContract();
  //       const currentTransactionCount = await transactionsContract.getTransactionCount();

  //       window.localStorage.setItem("transactionCount", currentTransactionCount);
  //     }
  //   } catch (error) {
  //     console.log(error);

  //     throw new Error("No ethereum object");
  //   }
  // };

  // Useless
  
  
  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_requestAccounts", });

      // Using Account 2 here 
      // Setting Account for Seller to do Transactions !!!!!!
      setCurrentAccount('0xc22666Ad6A4bB8f4D0bfD800834D5EDdA9d7967F');
      console.log('Current Account in Connect Wallet : ',currentAccount)
      // window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };


  const initialize =  async () => {
    const balance =  createBalanceContract();
    balance.setBalanceOfUser('0xE15332b48DAf85dAC60B90c981FACC57DdD39915', '100');
    // balance.setBalanceOfUser(ethers.utils.parseEther(100), balance);
    const products =  createProductsContract();
    products.setProducts('10');
  }

  // We will use functions like these in the Manufacturer and Seller Components to send trigger smart contracts and make transactions
  const sendTransaction = async () => {
    console.log('Ethereum : ',ethereum)
    try {
      if (ethereum) {
        const { addressTo, amount} = formData;
        const transactionsContract = createTransactProductsContract();
        const productContract = createProductsContract();
        const parsedAmount = amount;

        console.log('Making Request')
        console.log('AddressFrom',currentAccount)
        console.log('Address To : ',addressTo)
        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount,
          }],
        });

        console.log('Making Approve !')
        await productContract.approve('0xb64833f445759f9cDAafB6825Da3Bd970e1bc4f3', amount, {from: currentAccount});
        
        // console.log('Address To : ', addressTo)
        console.log('Doing the main Stuff !')

        const transactionHash = await transactionsContract.transferProducts(addressTo, parsedAmount);

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        const transactionsCount = await transactionsContract.getTransactionCount();

        setTransactionCount(transactionsCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, [transactionCount]);

  return (

    // Gotta modify this to only include stuff we need for our purposes !
    <TransactionContext.Provider
      value={{
        transactionCount,
        connectWallet,
        transactions,
        currentAccount,
        isLoading,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
