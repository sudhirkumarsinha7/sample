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

renderUserDetails() {
    var {item} = this.state;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          borderWidth: 1,
          borderTopWidth: 0,
        }}>
        <View
          style={{
            flex: 0.2,
            height: 80,
            width: 80,
            borderRadius: 40,
            borderColor: 'green',
            borderWidth: 3,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <Text style={{ paddingLeft: 5 }}>{item.id}</Text> */}
          <Image source={{uri: item.avatar}} style={{width: 80, height: 80}} />
        </View>
        <View style={{flex: 0.8, justifyContent: 'center'}}>
          <Text
            style={{paddingLeft: 5}}
            numberOfLines={1}
            ellipsizeMode={'tail'}>
            {item.email}
          </Text>
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
    flex: 1,
    padding: 5,
  },
});
