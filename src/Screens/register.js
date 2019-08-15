import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text, } from 'native-base';
import { connect } from 'react-redux';
import { Alert, AsyncStorage } from 'react-native'

import { register } from '../Publics/Actions/register'

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idCard: '',
        fullName: '',
        email: '',
        password: '',
        login: [],
    }
  }

  register = () => {
    const data = {
      idCard: this.state.idCard,
      fullName: this.state.fullName,
      email: this.state.email,
      password: this.state.password,

    }
    this.props.dispatch(register(data))
    this.setState({
      idcard: '',
      fullName: '',
      email: '',
      password: '',
      login: this.props.login
    })

        Alert.alert('','Register Success',[{text: 'OK', onPress: () => this.props.navigation.navigate('Home')}])
    }

  

  render() {

    return (
      <Container>
        <Header />
        <Content>
          <Form style={{marginTop:50}}>
      
            <Item floatingLabel>
              <Label>Id Card</Label>
              <Input value={this.state.idCard}
              onChangeText = {(idCard) => this.setState({idCard})} />
            </Item>

          <Item floatingLabel >
              <Label>Fullname</Label>
              <Input value={this.state.fullName}
                onChangeText = {(fullName) => this.setState({fullName})} />
            </Item>

            <Item floatingLabel>
              <Label>Email</Label>
              <Input value={this.state.email}
                onChangeText = {(email) => this.setState({email})} />
            </Item>
            
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input value = {this.state.password} secureTextEntry={true}
                onChangeText = {(password) => this.setState({password})}/>
            </Item>

            <Button block onPress = {() => this.register ()}
            style={{marginTop:20, borderRadius: 7, width: '95%',marginLeft: '2%'}}>
                <Text>Register</Text>
            </Button>
            
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    login: state.login
  }
}

export default connect(mapStateToProps) (Register)