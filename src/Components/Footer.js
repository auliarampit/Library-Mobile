import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text,} from 'native-base';
import { withNavigation } from 'react-navigation';

    
class Footers extends Component {

  render() {
    return (
      
        <Footer>
          <FooterTab>
            <Button vertical active
            onPress = {() => this.props.navigation.navigate('Home')}>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical active>
              <Icon name="add" />
              <Text>Add</Text>
            </Button>
            <Button vertical active>
              <Icon active name="bookmarks" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical active 
              onPress = {() => this.props.navigation.navigate('Profile')}>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}

export default withNavigation(Footers)