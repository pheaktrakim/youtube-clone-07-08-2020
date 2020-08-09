import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import { Col, Row } from "antd";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function CardBlog ({cover, title}) {
    return (
        <Card>
          <CardImg top width="100%" src={cover} alt="Card image cap" />
          <CardBody className="pl-0">
            <CardTitle>
              <Row>
                <Col md="2">
                  <AccountCircleIcon fontSize="large"/> 
                </Col>
                <Col md="10">
                  <b>{title}</b>
                </Col>
              </Row> 
            </CardTitle>
            <CardSubtitle><h6>Jon Doe</h6></CardSubtitle>
            <CardText><p>1.7M view . 2years ago</p></CardText>
          </CardBody>
        </Card>
    )
}

export default CardBlog;


