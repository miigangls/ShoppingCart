import React from 'react';
import { CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Card } from 'native-base';
import { Image } from 'react-native';

class ProductItem extends React.Component {
  render() {
    let {ID, Name, URL, Description, likes} = this.props      
    return (
        <Card key={ID}>
        <CardItem>
        <Left>
          <Thumbnail source={{uri: URL}} />
          <Body>
            <Text>{Name}</Text>
            <Text note>{Description}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{uri: URL}} style={{height: 200, width: null, flex: 1}}/>
      </CardItem>
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
        <Right style={{paddingRight:5}}>
            <Button transparent >
                <Icon active style={{fontSize:35}} type="FontAwesome" name="shopping-cart" />
            </Button>
        </Right>
      </CardItem>
      </Card>
    );
  }
}


export default ProductItem