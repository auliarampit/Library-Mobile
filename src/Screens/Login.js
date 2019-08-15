import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text } from 'native-base';
import { connect } from 'react-redux';
import { AsyncStorage, Alert } from "react-native";

import { withNavigation } from "react-navigation";
import { login } from '../Publics/Actions/login'
import Headers from '../Components/Header'


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    }
  }



  login = async() => {
    await AsyncStorage.clear()
    const data = {
      email: this.state.email,
      password: this.state.password,
    }
    await this.props.dispatch(login(data))

    this.setState({

      email: '',
      password: '',
    })
 
    if(this.props.login.login === "Email Tidak Terdaftar") {
      Alert.alert('Email Tidak Terdaftar')
    } else if(this.props.login.login === 'Password Salah') {
      Alert.alert('',"password salah")
    } else {
      
      let fullName = ''
      fullName = await AsyncStorage.getItem('fullName')
      Alert.alert('', "Login Success", [{text: 'Ok', onPress : () => this.props.navigation.navigate('Home')}])
    }
  }

  render() {

    return (
      <Container>
        <Headers />
        <Content>
          <Form style={{marginTop:50}}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input value={this.state.email}
                onChangeText = {(email) => this.setState({email})} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input value = {this.state.password} secureTextEntry={true}
                onChangeText = {(password) => this.setState({password})}/>
            </Item>
            <Button block onPress = {() => this.login()}
            style={{marginTop:20, borderRadius: 7, width: '95%',marginLeft: '2%'}}>
                <Text>Login</Text>
            </Button>
            
          </Form>
          <Button transparent block onPress = {() => this.props.navigation.navigate('Register')} >
              <Text>Register!!</Text>
          </Button>
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

export default connect(mapStateToProps) (withNavigation(Login))