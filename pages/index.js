import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Col, Row } from 'react-bootstrap'
import CardStudent from '../Components/Card/CardStudent'


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
        <CardStudent />
      </Row>
    </Container>
  )
}

export default index