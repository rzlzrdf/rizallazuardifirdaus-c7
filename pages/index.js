import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Container, Col, Row } from 'react-bootstrap'
import style from '../styles/homepage.module.css'


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
        <div className={style.cardContainer}>
          {students.map((student) => {
            return(
            <div key={student.id} className={'card shadow-sm  '+style.card_}>
              <div className={style.imgContainer}>
                {student.attributes.photo.data !== null &&
                  <Zoom>
                    <img src={student.attributes.photo.data.attributes.url} className={'card-img '+style.cardImage} alt=''/>
                  </Zoom>
                }
              </div>
                <div className={'card-body ' + style.cardBody}>
                  <ul>
                    <li><strong>First Name : </strong>{student.attributes.firstname}</li>
                    <li><strong>Last Name : </strong>{student.attributes.lastname}</li>
                    <li><strong>Location : </strong>{student.attributes.location}</li>
                  </ul>
                </div>
              
            </div>
            )
          })}
        </div>
        
      </Row>
    </Container>
  )
}

export default index