import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Container, Col, Row } from 'react-bootstrap'


const index = () => {

  const [students, setStudents] = useState([])
  useEffect(()=>{
    axios.get('https://fejs-c7-api.herokuapp.com/api/students/?populate=*')
    .then( (res) => {
      console.log(res)
      setStudents([...res.data.data])
    }    
  )
  },[])

  return (
    <Container>
      <Row>
        <h1 className='fw-light text-muted ml-3 my-4'>Home Page</h1>
      </Row>
      <Row>
        {students.map((student) => {
          return(
          <div key={student.id}>
            {student.attributes.photo.data !== null &&
              <Zoom>
                <img src={student.attributes.photo.data.attributes.url} width='200' alt=''/>
              </Zoom>
            }
            <ul>
              <li>First Name : {student.attributes.firstname}</li>
              <li>Last Name : {student.attributes.lastname}</li>
              <li>Location : {student.attributes.location}</li>
            </ul>
          </div>
          )
        })}
      </Row>
    </Container>
  )
}

export default index