import React from 'react';
import {Text} from 'react-native';

export default class Main extends React.Component  {
  state = {loading: true }
  constructor(props) {
    super()
    this.router = {}
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
            <Text>Hola Mundo native base </Text>
    );
  }
}