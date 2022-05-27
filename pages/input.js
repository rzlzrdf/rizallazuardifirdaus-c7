import axios from 'axios'
import React, {useRef} from 'react'
import {useDropzone} from 'react-dropzone'
import { Form, Container, Row, Col, Button, Alert } from 'react-bootstrap'
import Dropfile from '../Components/Dropfile/Dropfile'
import {FcOpenedFolder} from 'react-icons/fc'

import styles from '../styles/input.module.css'

const Input = () => {
  

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const inputFirstname = useRef()
  const inputLastname = useRef()
  const inputLocation = useRef()
  const inputPhoto = useRef()

  const formSubmitHandler = async (event) => {
    event.preventDefault()

    let formIsCompleted = false

    //valudasi & sanitasi
    if(inputFirstname.current.value !== '' && inputLastname.current.value !== '' &&
     inputLocation.current.value !== '' && acceptedFiles.length > 0 ) {
      formIsCompleted = true
    }

    if(formIsCompleted) {
    //data setup
      const submittedData = {
        firstname: inputFirstname.current.value,
        lastname: inputLastname.current.value,
        location: inputLocation.current.value
      }

      // console.log(inputPhoto.current.files)
      //buat object form data
      const formData = new FormData()

      //mengisi form data
      formData.append('data', JSON.stringify(submittedData) )

      //memasukkan foto ke form data
      acceptedFiles.forEach(file => {
        formData.append('files.photo', file, file.path)
      })

      // post ke API
      const res = await axios.post('https://fejs-c7-api.herokuapp.com/api/students/', formData)
      console.log(res.data)

      
    } else {
      console.error('Form tidak lengkap')
    }
  }

  return (
    <Container>
      <Row>
        <Col lg='6'>
          <h1 className={styles.headingText + ' fw-light text-muted my-4'}>Add Student</h1>
          <Form onSubmit={formSubmitHandler}>
            <Form.Group  className='my-4'>
              <Form.Label htmlFor='firstname'>First Name</Form.Label>
              <Form.Control type={'text'} name={'firstname'} id={'firstname'} ref={inputFirstname} placeholder='Enter First Name' required/>
            </Form.Group>
            <Form.Group className='my-4'>
              <Form.Label htmlFor='lastname'>Last Name</Form.Label>
              <Form.Control type={'text'} name={'lastname'} id={'lastname'} ref={inputLastname} placeholder='Enter Last Name' required />
            </Form.Group>
            <Form.Group className='my-4'>
              <Form.Label htmlFor='location'>Location</Form.Label>
              <Form.Control type={'text'} name={'location'} id={'location'} ref={inputLocation} placeholder='Enter Location' required />
            </Form.Group>
           <Form.Group>
              <Button type={'submit'} value={'SUBMIT FORM'} variant='outline-warning' className='text-center'>Submit Form</Button>
           </Form.Group>
          </Form>
        </Col>

        <Col className={styles.dropfile}>
        <div className="container">
          <div {...getRootProps({})}>
            <input {...getInputProps()} />
            
            <p><FcOpenedFolder className={''} /> Drag 'n' drop a student photo here, or click to select files</p>
          </div>
          <div>
            <ul className={styles.tag}>{files}</ul>
          </div>
        </div>
        </Col>
      </Row>
      
        
    </Container>

    
  )
}

export default Input