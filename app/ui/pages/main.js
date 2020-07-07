import React from 'react';
import {Text} from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../components/header'
import Footer from '../components/footer'
import data from '../../../data.json'
import ProductItem from '../components/product'

//pages
import COMMENTS from '../containers/comments'
import SHOPPING from '../containers/shopping'
import PRODUCT from '../containers/product'

export default class Main extends React.Component  {
  state = {loading: true }
  constructor(props) {
    super()
    this.router = {
      'PRODUCT': PRODUCT,
      'COMMENTS': COMMENTS, 
      'SHOPPING':  SHOPPING
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
      <Header title="Shopping Cart" />
      <Content style={{display: 'flex',backgroundColor:'#ff', paddingLeft: 20, paddingRight: 20}}>
        {
          data.map(product => {
              return (
                <ProductItem  {...product}  />
              )
          })
        }
      </Content>
    </Container>);
  }
}