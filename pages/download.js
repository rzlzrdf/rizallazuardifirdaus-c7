import React from 'react'
import { Container, Col, Row, } from 'react-bootstrap'

// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import ViewerPdf from '../Components/ViewePdf/ViewerPdf';
import DownloadsPara from '../Components/ViewePdf/DownloadsPara';




const download = () => {

 

  return (
    <Container >
      <Row>
        <Col>
          <h1 className='text-muted fw-light my-4'>Download</h1>
        </Col>
      </Row>
      <Row>
        <Col lg='6'>
          <ViewerPdf />
        </Col>
        <Col lg='6'>
          <DownloadsPara />
        </Col>
      </Row>
    </Container>
    
  )
}

export default download