import React, { Component } from 'react';
import {  Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {withNavigation} from 'react-navigation'

class Headers extends Component {
  render() {
    return (
        <Header>
          <Left>
            <Button transparent 
            onPress={()=> this.props.navigation.openDrawer()}>
              <Icon name='ios-menu' />
            </Button>
          </Left>
          <Body>
            <Title>Library</Title>
          </Body>
          <Right>
            <Button transparent
               onPress={() => this.props.navigation.navigate('Search')}
               >
              <Icon name='ios-search' />
            </Button>
          </Right>
        </Header>
    );
  }
}

export default withNavigation(Headers)