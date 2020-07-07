import React from 'react';

import { Header, Title, Left, Right, Body} from 'native-base';

import { connect } from 'react-redux'

import {route} from '../../actions/router'

class MainFooter extends React.Component {
  render() {
    return (
      <Header style={{height: 60}} >
        <Left/>
        <Body >
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
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