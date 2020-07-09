import React from 'react';
import {Text} from 'react-native';
import { Container, Content, Card, CardItem,  Left, Body, Right, Button, Icon} from 'native-base';
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
            let {ID,  likes} = data
              return (
                <Card key={ID}>
                  <ProductItem  {...product}  />
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon type="FontAwesome" name="thumbs-up" />
                        <Text style={{fontSize:12}}>{likes}</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon  type="FontAwesome" name="comments" />
                        <Text style={{fontSize:12}} >Comments</Text>
                      </Button>
                    </Body>
                    <Right style={{paddingRight:5}} >
                        <Button transparent onPress={() => this.props.addShopping(product, this.props.carData)} >
                            <Icon active style={{fontSize:35}} type="FontAwesome" name="shopping-cart" />
                        </Button>
                    </Right>
                  </CardItem>
                </Card>
              )
          })
        }
      </Content>
    </Container>);
  }
}
