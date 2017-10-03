import React from 'react';
import { Container, Row, Col } from 'reactstrap';

/**  
 * Header Component 
 * to be used in several views
 */
const Header = (props) => (
  <header className="masthead" style={{backgroundImage: `url(${props.bgImage}`}}>
    <Container>
      <Row>
        <Col lg="8" md="10" className="mx-auto">
          <div className="site-heading">
            <h1>{props.title}</h1>
            <p className="subheading">{props.subtitle}</p>
          </div>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;