import axios from 'axios'
import React, {useRef} from 'react'
import {useDropzone} from 'react-dropzone'

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
    const submittedData = {
      firstname: inputFirstname.current.value,
      lastname: inputLastname.current.value,
      location: inputLocation.current.value
    }

    // console.log(inputPhoto.current.files)
    
    const formData = new FormData()

    formData.append('data', JSON.stringify(submittedData) )
    acceptedFiles.forEach(file => {
      formData.append('files.photo', file, file.path)
    })

    const res = await axios.post('https://fejs-c7-api.herokuapp.com/api/students/', formData)
    console.log(res.data)
  }

  return (
    <>
      <h1>Input Page</h1>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor=''>First Name</label>
          <input type={'text'} name={'firstname'} id={'firstname'} ref={inputFirstname} />
        </div>
        <div>
          <label htmlFor=''>Last Name</label>
          <input type={'text'} name={'lastname'} id={'lastname'} ref={inputLastname} />
        </div>
        <div>
          <label htmlFor=''>Location</label>
          <input type={'text'} name={'location'} id={'location'} ref={inputLocation} />
        </div>
        <div>
          <label htmlFor=''>Photo</label>
          <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </div>
        <ul>{files}</ul>
        <div>
          <input type={'submit'} value={'SUBMIT FORM'} />
        </div>
      </form>
    </>
  )
}

export default Input