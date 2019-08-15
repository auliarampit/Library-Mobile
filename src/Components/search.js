import React, { Component } from 'react';
import {withNavigation} from 'react-navigation'
import { SearchBar } from 'react-native-elements';
import Contents from '../Components/content'

class Search extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
        <>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
      <Contents />
      </>
    );
  }
}

export default withNavigation(Search)