import { Check } from '@material-ui/icons';
import React, { Fragment } from 'react'
import { Jumbotron } from 'react-bootstrap';
import './styles.scss';

const HomePage = () => {

  const techList = ['React', 'TypeScript', 'SCSS', 'Bootstrap', 'Material UI Icons', 'Axios']

  return (
    <Fragment>
      <Jumbotron>
        <h3>Salve, Gustavo. Tudo bem?</h3>
        <p>
          Essa Aplicação foi construída com: <br />
        </p>
        <ul className='tech-list'>
          {
            techList.map((item, id) => (
              <Fragment key={id}>
                <li><Check/> {item} </li>
              </Fragment>
            ))
          }
        </ul>
      </Jumbotron>
    </Fragment>
  )
};

export default HomePage;