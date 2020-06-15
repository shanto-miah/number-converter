import React from 'react';

import { Row, Col } from 'reactstrap';


import Card from '../partials/Card';


const Binary = ({match}) => {
    let value = match.params.num ? match.params.num : '';


    return (
      <Row>
          <Card className="sticky-top" from="8" to="16" input={value} />

          <Col sm md lg>
              <h3 className="text-truncate">Instuction</h3>
          </Col>
      </Row>
    );
}

export default Binary;