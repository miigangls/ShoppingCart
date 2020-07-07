import React, { Component } from 'react';
import {  Footer, FooterTab, Button, Icon, Text } from 'native-base';

import Header from '../components/header'
import Product from '../components/product'

export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>
      <Header title="Shopping Cart" />
      <Content style={{display: 'flex',backgroundColor:'#ff', paddingLeft: 20, paddingRight: 20}}>
        <Product {...this.props} />
      </Content>
    </Container>
    );
  }
}