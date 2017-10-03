import React from 'react';
import { Container, Row, Col } from 'reactstrap';

/**  
 * Footer Component 
 * basic, stateless Footer
 * w/ social nav and copyright info
 */
const Footer = () => (
  <footer>
    <Container>
      <Row>
        <Col md="10" lg="8" className="mx-auto">
          <p className="copyright text-muted">Copyright &copy; Kelsey Vaughn Motley 2017</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;