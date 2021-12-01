import React, { useState } from 'react';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';
import NavBar from '../components/NavBar';
import GalleryHeader from '../components/GalleryHeader';
import Footer from '../components/Footer';
import styled from 'styled-components';

function Projects() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Container>
      <NavBar />
      <div className="App">
        <GalleryHeader />
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
      <Footer />
    </Container>
  );
}

export default Projects;

const Container = styled.div`
    margin: 0 auto;
    max-width: 2000px;
    background-color: white;
`