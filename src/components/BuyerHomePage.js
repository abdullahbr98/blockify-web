import React from 'react'
import TopBar from '../components/Topbar'
import Googlemaps from './Googlemaps'
import { ChakraProvider, theme } from '@chakra-ui/react'
export default function BuyerHomePage() {
    return (
        <>
        <TopBar/>
        <ChakraProvider theme={theme}>
        <Googlemaps/>
        </ChakraProvider>
        </>
    )
}
