import React, { Component } from 'react';
import { Container, Content, Input, Item, Form, Picker, Icon, Button, Text} from 'native-base';

import Header from '../Components/Header';
import { connect } from 'react-redux';
import { donateBook } from '../Publics/Actions/donate';


class DonateBook extends Component {

    constructor(props){
        super(props);
        this.state = {
            selected2: undefined,
            image: '',
            nameBook: '',
            writerBook: '',
            idCategory: 1,
            description: ''
        };
    }

    donate = () => {
      const data= {
        image : this.state.image,
        nameBook : this.state.nameBook,
        writerBook : this.state.writerBook,
        idCategory: this.state.idCategory,
        description : this.state.description,
      }

      this.props.dispatch(donateBook(data))
      this.setState({
        image:'',
        nameBook:'',
        writerBook:'',
        idCategory:'',
        description:''
      })
    }

    
  render() {
    return (
      <Container>
        <Header />
        <Content style={{ marginLeft:13, marginTop: 40}}>
          <Item regular style={{width: 330,borderRadius: 20, }}>
            <Input placeholder='Image' 
             value={this.state.image}
             onChangeText={(text) => this.setState({image:text})} />
          </Item>

          <Item regular style={{width: 330,borderRadius: 20, marginTop: 20}}>
            <Input placeholder='Title' 
             value={this.state.nameBook}
             onChangeText={(nameBook) => this.setState({nameBook})}/>
          </Item>

          <Item regular style={{width: 330,borderRadius: 20, marginTop: 20}}>
            <Input placeholder='Writer'
            value={this.state.writerBook}
            onChangeText={(writerBook) => this.setState({writerBook})} />
          </Item>

          <Form style={{width: 300,borderRadius: 15, elevation: 1, marginTop: 20}}>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}

                selectedValue={this.state.idCategory}
                onValueChange={(value) => this.setState({idCategory:value})}
               
              >
                <Picker.Item label="Category" value="" />
                <Picker.Item label="Anak-anak" value="1" />
                <Picker.Item label="Dewasa" value="2" />
                
              </Picker>
            </Item>
          </Form>

          <Item regular style={{width: 330,borderRadius: 20,marginTop: 20}}>
            <Input placeholder='Description' 
             value={this.state.description}
             onChangeText={(text) => this.setState({description:text})} />
          </Item>

          <Button onPress = {() => this.donate()}
           block style={{width: 330,borderRadius: 15, marginTop: 20}}>
            <Text>Donate</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    donate: state.donate
  }
}

export default connect(mapStateToProps) (DonateBook)