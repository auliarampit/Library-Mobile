import React, { Component } from 'react';
import { Image,TouchableOpacity, AsyncStorage, ActivityIndicator, FlatList } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Left, Body, Right } from 'native-base';
import { getBook } from '../Publics/Actions/book'

import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation'


class Contents extends Component {
  constructor(props) {
    super(props)
     this.state = {
      book: []
  }
  }

componentDidMount = async() => {
  await this.props.dispatch(getBook())

  .then(()=>{
    console.log(`this.props.book`, this.props.book);
    this.setState({
      book : this.props.book
    })
  })

  let fullName = ''
  fullName = await AsyncStorage.getItem('fullName')
}


  render() {
    return (
      !this.state.book.isFulFilled ? <ActivityIndicator size= 'large' color = 'blue' style={{
        marginTop: 40
      }} /> :

      <Container>
        <Content>
          <FlatList 
            data = {this.state.book.bookList }
            renderItem = {
              (item,index)=> {
                return (
                  <Card key={index}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: item.image}} style={{width: 40, height: 40}} />
                      <Body>
                        <Text>{item.nameBook}</Text>
                        {/* <Text note>{item.writerBook}</Text> */}
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <TouchableOpacity activeOpacity={1}  onPress = {() => this.props.navigation.navigate('BookDetail',{
                      idBook: item.idBook
                    })}>
                        <Image source={{uri: item.image ? item.image : 'http://rsudblambangan.banyuwangikab.go.id/asset/foto_berita/no-image.jpg'}} style={{height: 200, width: 355,}}/>
                    </TouchableOpacity>
                  </CardItem>
                  <CardItem>
                    <Right>
                      <Text>11h ago</Text>
                    </Right>
                  </CardItem>
                  </Card>

            )
           } 
          }
      /> 
          
        </Content>
      </Container>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    book: state.book
  }
}

export default connect(mapStateToProps) (withNavigation(Contents))