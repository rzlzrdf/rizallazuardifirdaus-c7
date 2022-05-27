import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ChartPara from '../Components/Charts/chartPara';
import Donat from '../Components/Charts/Donat';




const Chart = () => {

  return (
    <Container>
      <Row>
        <Col><h1 className='text-muted fw-light my-4'>Chart</h1></Col>
      </Row>
      <Row>
        <Col lg='6'>
          {/* ..<Bar option={options} data={BarData} /> */}
          <ChartPara />
        </Col>
        <Col lg='6'>
          <Donat />
        </Col>
      </Row>
    </Container>
  )
}

export default Chart