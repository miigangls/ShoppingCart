import React from 'react';

import { Header, Title, Left, Right, Body, Icon, Button} from 'native-base';

import { connect } from 'react-redux'

import {route} from '../../actions/router'

class MainFooter extends React.Component {
  render() {
    return (
      <Header style={{height: 60}} >
        <Left >
          <Button transparent onPress={() => this.props.onRouter('MAIN')}>
            <Icon type="FontAwesome" name="home"   />
          </Button>
        </Left>
        <Body >
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => this.props.onRouter('SHOPPING')}>
            <Icon type="FontAwesome" name="shopping-cart"  />
          </Button>
        </Right>
      </Header>
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRouter:(value) => dispatch(route(value)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainFooter)