import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';
export default class FooterTabsIconExample extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button>
              <Icon type="FontAwesome" name="home"  />
            </Button>
            <Button>
              <Icon type="FontAwesome" name="shopping-cart"  />
            </Button>
            <Button active>
                <Icon type="FontAwesome" name="shopping-cart"  />
            </Button>
            <Button>
                <Icon type="FontAwesome" name="shopping-cart"  />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}