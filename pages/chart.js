import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import sytle from '../styles/chart.module.css'


ChartJS.register(ArcElement, Tooltip, Legend);

const DonatData = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};


const Chart = () => {

  return (
    <Container>
      <Row>
        <Col><h1 className='text-muted fw-light my-4'>Chart</h1></Col>
      </Row>
      <Row>
        <Col lg='6'>
          {/* ..<Bar option={options} data={BarData} /> */}
        </Col>
        <Col lg='6'>
          <Doughnut  data={DonatData} className={sytle.doughnat} />
        </Col>
      </Row>
    </Container>
  )
}

export default Chart