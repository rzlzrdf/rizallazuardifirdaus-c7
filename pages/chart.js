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
          <h3>Chart Dataset</h3>
          <p className={sytle.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet imperdiet tortor nec scelerisque. Etiam nec orci in tortor gravida iaculis sit amet id ante. Pellentesque vel malesuada nisl. Pellentesque a urna imperdiet, rutrum orci scelerisque, pretium orci. Sed quam ipsum, ornare non maximus a, finibus convallis libero. Mauris consectetur lectus metus, et imperdiet velit dignissim sed. Integer quis cursus tortor. Vestibulum egestas fermentum tortor, sit amet dictum tortor posuere at. Aliquam viverra semper pharetra. Nam sed euismod risus. Aenean pulvinar velit sed nisl ultrices, id blandit justo sodales. Nunc vestibulum aliquet aliquam. Vivamus ut interdum odio. Integer nec placerat metus, maximus iaculis orci. Mauris eu fermentum lacus, et porttitor dolor. Nam auctor fermentum felis sed luctus.

          Nunc id accumsan lorem, a venenatis mi. Etiam ac metus ut velit tristique vestibulum eget non nunc. Morbi pulvinar velit massa, nec mollis sem dictum a. Suspendisse vehicula rutrum ipsum ut tempus. Fusce id sapien ultrices, rutrum mauris a, tempus ante. Duis et vehicula lectus. Morbi bibendum vitae neque non finibus. Nunc et accumsan risus. Nulla a accumsan leo.

          Mauris vitae orci nulla. Quisque ipsum est, iaculis quis tincidunt et, venenatis efficitur nibh. Aliquam ut dapibus tortor. Ut pellentesque quis neque a suscipit. Phasellus tincidunt tempor magna, in porttitor dui dapibus eu. Integer tempor aliquet sapien, et tincidunt magna sagittis euismod. Suspendisse et volutpat dolor, a sollicitudin nisl. Duis fermentum urna odio, ac sagittis augue facilisis vel. Pellentesque luctus, felis eget porta dignissim, sapien mi dignissim ipsum, non consequat tellus metus vel lectus. Nam a nibh dui. In vitae tortor porta, pretium lacus at, sollicitudin erat. Morbi tellus dolor, aliquet in ultricies ut, sodales quis enim. Ut turpis leo, pellentesque et faucibus sed, consectetur at nibh. Curabitur est dui, feugiat quis turpis in, laoreet pulvinar leo. Proin posuere, dui egestas lobortis ultrices, nibh lectus eleifend velit, a euismod mauris lorem ut quam. Nulla elit dui, dictum a feugiat non, commodo a mi.
          </p>
        </Col>
        <Col lg='6'>
          <Doughnut  data={DonatData} className={sytle.doughnat} />
        </Col>
      </Row>
    </Container>
  )
}

export default Chart