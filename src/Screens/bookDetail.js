import React, { Component } from 'react';
import { Image, Alert, AsyncStorage } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, List, ListItem } from 'native-base';

import { connect } from 'react-redux'
import HeaderSearch from '../Components/Header';
import { getBookById } from '../Publics/Actions/book';
import { postPinjam, patchPinjam } from '../Publics/Actions/borrow';
import { withNavigation } from "react-navigation";


class bookDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            book: []
        }
    } 

    componentDidMount(){
        this.subs=[
            this.props.navigation.addListener('willFocus', () => {
                this.bookDetail()
            }) 
        ]     
    }

    componentWillUnmount(){  
        this.subs.forEach(sub => {
            sub.remove()
        })
    }

    bookDetail = async () => {
        const idBook = this.props.navigation.state.params.idBook        
       await this.props.dispatch(getBookById(idBook)) 
       
        this.setState({
            book: this.props.book.selectedBook
        })
    }

    postBorrow = async() => {
        const dataBorrow = {
          idBook : this.props.navigation.state.params.idBook,
          idCard : await AsyncStorage.getItem('idCard'),
          
        }
        this.props.dispatch(postPinjam(dataBorrow))
    }

    patchBorrow = async() => {
      await this.props.dispatch(patchPinjam(idBook ),{
        idBook : this.props.navigation.state.params.idBook,
        idCard : await AsyncStorage.getItem('idCard'),
      })
    }

  render() {
  
    const varState = this.props.book.selectedBook.length == 0 ? '' : this.props.book.selectedBook
    
    return (
        
      <Container>
        <HeaderSearch />
        <Content>
          <Card style={{flex: 0}}>

            <CardItem>
              <Body style={{marginLeft:60}}>
                <Thumbnail style={{width:100}} source={{uri: varState.image}} style={{height: 200, width: 200, flex: 1}}/>
                
                {varState.status === 1 ? 
                  <Button block onPress = {() => this.patchBorrow(Alert.alert('','Borrowed Succes',[{text: 'OK', onPress: () => this.props.navigation.navigate('Home')}])) }
                  style={{marginTop: 10, borderRadius: 10, marginBottom:10,width:200, height:45, backgroundColor: '#FF0000'}}>
                      <Text>Return</Text>
                  </Button> 
                  : 
                  <Button block onPress = {() => this.postBorrow(Alert.alert('','Borrow Succes',[{text: 'OK', onPress: () => this.props.navigation.navigate('Home')}])) }
                      style={{marginTop: 10, borderRadius: 10, marginBottom:10,width:200, height:45, }}>
                      <Text>Borrow</Text>
                  </Button>
                }
              </Body>
            </CardItem>

            <CardItem>
              <Body>
               
                <Text style={{ fontWeight:"bold",}}> Judul : </Text>
                <Text style={{marginLeft: 6,}}>
                 {varState.nameBook}
               </Text>
              
              </Body>
            </CardItem>

            <CardItem>
              <Body>
              <Text>
                  {this.props.book.selectedBook.length == 0 ? '' : this.props.book.selectedBook[0].description}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }

}

const mapStateToProps = (state) => {
    return{
        book: state.book,
    }
}

export default connect(mapStateToProps) (withNavigation(bookDetail))