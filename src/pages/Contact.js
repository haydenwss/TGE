import React from 'react'
import NavBar from '../components/NavBar';
import Form from '../components/Form';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Container>
            <NavBar />
            <Form />
        </Container>
    )
}

export default Contact

const Container = styled.div`
    margin: 0 auto;
    max-width: 2000px;
    background-color: white;
`