import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import Contents from '../Components/content'
import Header from '../Components/Header'
// import Footers from '../Components/Footer'


    
class Home extends Component {

  render() {
    return (
      <>
        <Header />
          <Contents />
        
      </>
    );
  }
}

export default withNavigation(Home)