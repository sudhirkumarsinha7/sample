/* eslint-disable no-alert */
/* eslint-disable no-sparse-arrays */
import React, {Component} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Container, Header, Content} from 'native-base';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.route.params.item,
    };
  }
renderEachRow(leftText,rightText){
  return (
      <View style = {{flex:1,flexDirection:'row'}}>
          <View style = {{flex:0.4,padding:10}}>
          <Text>{leftText}</Text>
      </View>
      <View style = {{flex:0.6, padding:10}}>
          <Text>{rightText}</Text>
      </View>
      </View>
  )
}
renderUserDetails() {
    var {item} = this.state;
    return (
      <View style = {styles.bodyView}>
          <View style = {{ ...styles.positionCenter,flex :1}}>
          <Image source={{uri: item.avatar}} style={{width: 100, height: 100}} />
          </View>
          <View style = {{flex :8}}>
              {this.renderEachRow('User ID : ',item.id)}
              {this.renderEachRow('Name : ',item.first_name + ' '+ item.last_name)}
              {/* {this.renderEachRow('User ID',item.last_name)} */}
              {this.renderEachRow('Email : ',item.email)}
              {this.renderEachRow('Address : ','Hyderabad')}
              {this.renderEachRow('Mob : ','+914123455867')}

          </View>
      </View>
    );;
  }
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content padder>{this.renderUserDetails()}</Content>
      </Container>
    );
  }
}
export default UserDetails;
const styles = StyleSheet.create({
  positionCenter: {justifyContent: 'center', alignItems: 'center'},
  bodyView: {
    flex: 9,
    padding: 5,
  },
});
