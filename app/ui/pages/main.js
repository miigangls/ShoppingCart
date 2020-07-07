import React from 'react';
import {Text} from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../components/header'

export default class Main extends React.Component  {
  state = {loading: true }
  constructor(props) {
    super()
    this.router = {

    }
  }
  
  render() {
   return this.getRoute()
  }
  getRoute() {
    if (this.router[this.props.router]) {
      const TagName = this.router[this.props.router];
      return <TagName />
    }
    return this.getHome()
  }
  getHome() {
    return ( 
    <Container>
      <Header title="Lista de productos" />
      <Content style={{display: 'flex',backgroundColor:'#ff', paddingLeft: 20, paddingRight: 20}}>
        
      </Content>
    </Container>);
  }
}