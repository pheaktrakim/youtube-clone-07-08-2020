import React from "react";
import Header from "./header";
import Naverbar from "./nav";
import { Container, Row, Col } from "reactstrap";

function Layout ({children}) {
    return (
      <Container fluid>
        <Row>
          <Header/>
        </Row>
        
        <Row>
          <Col md="1">
            <center>
              <Naverbar />
            </center>
          </Col>
          <Col md="11" className="p-0">
            {children}
          </Col>
        </Row>
      </Container>   
        
    );
}

export default Layout;