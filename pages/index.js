import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


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
    <>
      <h1>Home Page</h1>
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
    </>
  )
}

export default index