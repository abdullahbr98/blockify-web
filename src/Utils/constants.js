import balanceAbi from "./Balances.json";
import productsAbi from "./Products.json";
import transactionAbi from './Transaction.json';
import authenticateAbi from './Authenticate.json'
import transactProducts from './TransactProducts.json'
// balances deployed to: 0x99d20B87E85c56308Eab8931b11eF78473f83286
export const balanceContractABI = balanceAbi.abi;
export const balanceContractAddress = "0x6AfF29a109c98B51df956b1bcBd269054F311F10";
// authenticate deployed to: 0xc469d8178784F75FA83bB6e873D46171c96025Ab
export const authenticateContractABI = authenticateAbi.abi;
export const authenticateContractAddress = "0x3AFC183E84AF61006b75A93DEa481D9Fb77651AF";
// products deployed to: 0x8fDad2d1be1C17b9Ad521557522f798e268D82D3
export const productsContractABI = productsAbi.abi;
export const productsContractAddress = "0x31F1584c43c8F0B6ad3Ab34Fc2860541CFA362b6";
// transaction deployed to: 0xeA6Cd7561c802D5Fb775a9D07a390876Fd231128
export const transactionContractABI = transactionAbi.abi;
export const transactionContractAddress = "0x7cB64Fc36D60CAfa8D2D1cF72CD74FD4cCBd827B";
// transactProducts deployed to: 0x0264038B405922EcAC9E1d37DBC5abC45D217D3B
export const transactProductsContractABI = transactProducts.abi;
export const transactProductsContractAddress = "0xb64833f445759f9cDAafB6825Da3Bd970e1bc4f3";


