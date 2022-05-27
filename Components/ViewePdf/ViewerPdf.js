import React from 'react'


// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ViewerPdf = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js'>
        <Viewer
        className='w-50'
        fileUrl='/dummies.pdf'
        plugins={[defaultLayoutPluginInstance]}
        />
    </Worker>
  )
}

export default ViewerPdf