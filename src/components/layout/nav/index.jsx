import React from "react";
import { Row, Col} from "reactstrap";
import { WrapIcon } from "./styled";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Naverbar () {
  return (
    <Row>
      <Col className="mt-3">
        <WrapIcon >
          <HomeIcon fontSize="large"/><br/>
          <small>Home</small>
        </WrapIcon>
      </Col>
      <Col className="mt-3">
        <WrapIcon>
          <WhatshotIcon fontSize="large"/><br/>
          <small>Trending</small>
        </WrapIcon>
      </Col>
      <Col className="mt-3">
        <WrapIcon>
          <SubscriptionsIcon fontSize="large"/><br/>
          <small>Subscriptions</small>
        </WrapIcon>
      </Col>
      <Col className="mt-3">
        <WrapIcon>
          <VideoLibraryIcon fontSize="large"/><br/>
          <small>Library</small>
        </WrapIcon>
      </Col>
    </Row>
  );
}

export default Naverbar;