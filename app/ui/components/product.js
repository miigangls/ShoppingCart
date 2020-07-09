import React from 'react';

import { CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Card } from 'native-base';
import { Image, View } from 'react-native';

import { connect } from 'react-redux'

import { addShopping } from '../../actions/shopping'

class Product extends React.Component {
  render() {
    let {ID, Name, URL, Description, likes} = this.props
    return (
      <View key={ID + Name}>
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
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  let {data} = state.shopping
  return {
    carData: data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addShopping:(value) => dispatch(addShopping(value)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)