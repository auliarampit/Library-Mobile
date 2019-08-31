import React, { Component } from "react"
import { View, Text, ImageBackground, AsyncStorage} from 'react-native'
import { Thumbnail, Button, Icon } from "native-base";

import {withNavigation, NavigationEvents} from 'react-navigation';



class infoProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
        image : '',
        fullName : '',
        email : '',
        token : ''
    }
    }

    componentDidUpdate = () => {
        this.profil()
    }

profil = async() => {
    this.setState({
        image : await AsyncStorage.getItem('image'),
        fullName : await AsyncStorage.getItem('fullName'),
        email : await AsyncStorage.getItem('email'),
        token : await AsyncStorage.getItem('token'),

    })
}

    render() {
        const navigator = this.props.navigation.navigate
        return(
            <>
<NavigationEvents
   onWillFocus = {this.profil}
/>
           <ImageBackground style={{flex: 1,}} source={{uri: 'http://waspadamedan.com/wp-content/uploads/2018/03/045422000_1421214556-imrs.png'}}>
               <View style={{flex:1, marginTop: 75, marginLeft: 30}}>
                <Thumbnail source={{uri: this.state.image}} />
                </View>
                <View style={{ marginLeft: 17, marginBottom: 15, }}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
                        {this.state.fullName}
                    </Text>
                    <Text style={{fontSize: 14, color: 'white'}}>
                        {this.state.email}
                    </Text>
                </View>
           </ImageBackground>
           <View style={{flex:2}}>
                <Button transparent 
                onPress = {() => navigator('Home')}>
                    <Icon name='ios-home' style={{marginLeft: 20}}>
                        <Text style={{fontSize: 15, color: 'black'}}>      Home</Text>
                    </Icon>
                </Button>

                <Button transparent 
                onPress = {() => this.props.navigation.navigate('Profile',{prop:this.state})}>
                    <Icon name='ios-person' style={{marginLeft: 20}}>
                        <Text style={{fontSize: 15, color: 'black'}}>       Profile</Text>
                    </Icon>
                </Button>

                <Button transparent onPress = {()=> navigator('Login')}>
                    <Icon name='ios-bookmarks' style={{marginLeft: 20}}>
                        <Text style={{fontSize: 15, color: 'black'}}>       Borrowed</Text>
                    </Icon>
                </Button>

                <Button transparent 
                onPress = {() => this.props.navigation.navigate('DonateBook')}>
                    <Icon name='ios-cart' style={{marginLeft: 20}}>
                        <Text style={{fontSize: 15, color: 'black'}}>       Donate</Text>
                    </Icon>
                </Button>

                {this.state.email ? 

                <Button transparent 
                onPress = {() => {AsyncStorage.clear(); this.props.navigation.navigate('Home')}}>
                    <Icon name='ios-log-out' style={{marginLeft: 20}}>
                        <Text style={{fontSize: 15, color: 'black', }}>       Logout</Text>
                    </Icon>
                </Button>
                :
                <Button transparent onPress = {()=> navigator('Login')}>
                <Icon name='ios-log-in' style={{marginLeft: 20}}>
                    <Text style={{fontSize: 15, color: 'black'}}>       Login</Text>
                </Icon>
                </Button>
                }
           </View>
              
           </>
        )
    }
}

export default withNavigation(infoProfile)