import React, { Component } from 'react';
import {Text} from 'react-native';
import {  Container, Content, Card, CardItem,  Left, Body, Right, Button, Icon} from 'native-base';
import Header from '../components/header'
import ProductItem from '../components/product'
export default class FooterTabsIconTextExample extends Component {
  render() {   
    
    return (
      <Container>
        <Header title="Shopping Cart" />
        <Content style={{display: 'flex',backgroundColor:'#ff', paddingLeft: 20, paddingRight: 20}}>
        {
          this.props.data.map(product => {
            let {ID,  count} = product
              return (
                <Card key={ID}>
                  <ProductItem  {...product}  />
                  <CardItem>
                    <Left>
                        <Text style={{fontSize:12}}>Count: {count}</Text>
                    </Left>
                    <Right>
                      <Button transparent  onPress={() => this.props.deleteShopping(product, this.props.data)} >
                        <Icon active style={{fontSize:35}} type="FontAwesome" name="trash" />
                      </Button>
                    </Right>
                  </CardItem>
                </Card>
              )
          })
        }
        </Content>
    </Container>
    );
  }
}
/*

*/