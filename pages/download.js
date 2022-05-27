import React from 'react'
import { Container, Col, Row, } from 'react-bootstrap'

// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';




const download = () => {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Container >
      <Row>
        <Col>
          <h1 className='text-muted fw-light my-4'>Download</h1>
        </Col>
      </Row>
      <Row>
        <Col lg='6'>
        <Worker workerUrl='https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js'>
          <Viewer
            className='w-50'
            fileUrl='/dummies.pdf'
            plugins={[defaultLayoutPluginInstance]}
            />
          </Worker>
        </Col>
        <Col lg='6'>
          <h3>Download this PDF</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
      </Row>
    </Container>
    
  )
}

export default download