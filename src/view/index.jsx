import React from "react";
import Layout from "./layout";
import { Container,Row, Col } from "reactstrap";
import { WrapText } from "./styled";
import { COVER } from "../constant/defaultValues";
import { dataBlog } from "./layout/data";
import CardBlog from "../components/card-blog";
function App (){
    return (
      <Layout>
        <Container fluid className="bg">
          <Row>
            <Col className="m-2">
              <WrapText className="fs-30 mt-4 ff-bold">Recommended</WrapText>
            </Col>
          </Row>
          <Row>
            {dataBlog.map((data,index)=>{
              const { title } = data;
              return (
                <Col md="3" sm="4" xs="6" className="" key={index}>
                  <CardBlog title={title} cover={COVER} />
                </Col>
              )
            })}
          </Row>
        </Container>

      </Layout>
    )
}

export default App;