import React, { Component } from "react"
import { View, AsyncStorage, Text , TouchableOpacity, Alert, Image,} from 'react-native'
import { Thumbnail,} from "native-base";

import HeaderSearch from './Header'
import { TextInput } from "react-native-gesture-handler";
import ImagePicker from 'react-native-image-picker';

const options = {
    title : 'my pic app',
    takePhotoButtonTitle: 'Take photo with camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library'
}

export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            avatarSource: null,
            image: this.props.navigation.state.params.prop.image,
            fullName: this.props.navigation.state.params.prop.fullName,
            email: this.props.navigation.state.params.prop.email,
            idCard: this.props.navigation.state.params.prop.idCard
        }
    }
    
    componentDidMount(){
        this.subs=[
            this.props.navigation.addListener('willFocus', () => {
                this.profil()
            })
        ]
        
    } 
    
    componentWillUnmount(){ 
        this.subs.forEach(sub => {
            sub.remove()
        })
    }
    profil = async() => {
        this.setState({
            fullName : await AsyncStorage.getItem('fullName'),
            image : await AsyncStorage.getItem('image'),
            email : await AsyncStorage.getItem('email'),
            idCard : await AsyncStorage.getItem('idCard'),
        })
    }

    myfun = () => {
        // Alert.alert('Berhasil Sementara')
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
              });
            }
        });
    }
    
    render() {
        
        return(
            <>
            <HeaderSearch />
          
              <View style={{flex: 1, backgroundColor: 'blue', flexDirection: 'column'}}>
                  <Thumbnail source= {{uri: this.state.image}}
                  style={{width: 100, height: 120, marginLeft: 130, marginTop:20}} />

                <TouchableOpacity style={{backgroundColor:'green', margin: 10, padding: 10
                ,height:40, width: 110, marginTop: -135, borderRadius: 5}}
                onPress= {this.myfun} >
                    <Text style={{color: '#fff'}}>Image</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                      <Text>Upload</Text>
                  </TouchableOpacity>

                <Image source={this.state.avatarSource}
                style={{width:100, height:100, marginLeft: '40%',}}
                />

              </View>
              <View style={{ flex: 2, flexDirection: 'row',}}>
                  <View style={{flex: 1, }}>
                      <Text style={{marginLeft: '30%', marginTop: '12%'}}>Id Card : </Text>
                      <Text style={{marginLeft: '30%', marginTop: '25%'}}>Fullname : </Text>
                      <Text style={{marginLeft: '30%', marginTop: '26%'}}>Email : </Text>
                  </View>
                  <View style={{ flex: 2, }}>
                      <TextInput>{this.state.idCard}</TextInput>
                      <TextInput>{this.state.fullName}</TextInput>
                      <TextInput>{this.state.email}</TextInput>
                  </View>
              </View>
          </>
        )
    }
}