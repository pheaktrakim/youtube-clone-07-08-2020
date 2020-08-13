import React, { useState } from "react";
import {Container, Row, Col} from "reactstrap";
import { LOGO } from "../../../constant/defaultValues";
import { ImageLogo, WrapIcon, WrapIconLogo } from "./styled";
import { Input } from 'antd';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import SwitchVideoIcon from '@material-ui/icons/SwitchVideo';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//draw
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { Drawer } from 'antd';
const { Search } = Input;

function Header () {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const slideheader = (
    <Row>
    <Col md="6">
      <WrapIconLogo>
        <MenuIcon fontSize="large" onClick={onClose}/>
      </WrapIconLogo>
    </Col>
    <Col md="6">
      <ImageLogo src={LOGO} alt="logo" className="cs-p"/>
    </Col>
    </Row>
  );

  return (
    <Container fluid className="p-3" style={{borderBottom: '1px solid rgb(235 235 235)'}}>
      {/* Drawer */}
      <Drawer
        title={slideheader}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Row>
          <Col md="12" className="mt-3">
            <WrapIcon >
              <HomeIcon fontSize="large"/>
              <b className="ml-3 fs-22">Home</b>
            </WrapIcon>
          </Col>
          <Col md="12" className="mt-3">
            <WrapIcon>
              <WhatshotIcon fontSize="large"/>
              <b className="ml-3 fs-22">Trending</b>
            </WrapIcon>
          </Col>
          <Col md="12" className="mt-3">
            <WrapIcon>
              <SubscriptionsIcon fontSize="large"/>
              <b className="ml-3 fs-22">Subscriptions</b>
            </WrapIcon>
          </Col>
          <Col md="12" className="mt-3">
            <WrapIcon>
              <VideoLibraryIcon fontSize="large"/>
              <b className="ml-3 fs-22">Library</b>
            </WrapIcon>
          </Col>
          </Row>
      </Drawer>


      <Row>
        {/* toggle */}
        <Col md="1">
          <center>
          <WrapIconLogo>
            <MenuIcon fontSize="large" onClick={showDrawer}/>
          </WrapIconLogo>
          </center>
        </Col>

        <Col md="11" className="">
          <Row>
            {/* logo */}
            <Col className="p-0" md="2">
              <ImageLogo src={LOGO} alt="logo" className="cs-p"/>
            </Col>
            {/* search box */}
            <Col className="p-0" md="7">
              <Search
                  onSearch={value => console.log(value)}
                  className="w-100 p-2"
              />
            </Col>
            {/* left setting */}
            <Col className="text-right" md="3">
              <WrapIcon>
                <SwitchVideoIcon fontSize="large"/>
              </WrapIcon>
              <WrapIcon>
                <ViewComfyIcon fontSize="large"/>
              </WrapIcon>
              <WrapIcon>
                <NotificationsIcon fontSize="large"/>
              </WrapIcon>
              <WrapIcon>
                <AccountCircleIcon fontSize="large" className="text-dark"/>
              </WrapIcon>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;

