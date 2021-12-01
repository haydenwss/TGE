import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ServiceSquares from '../components/ServiceSquares'
import Footer from '../components/Footer';
import styled from 'styled-components';


const Home = () => {

    return (
        <Container>
            <NavBar />
            <Hero />
            <ServiceSquares />
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.div`
    margin: 0 auto;
    max-width: 2000px;
    background-color: white;
`