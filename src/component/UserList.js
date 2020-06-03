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
// import {data} from './dummyData'

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
    };
  }
  componentWillMount() {
    this.getUserDetailsAPI();
  }
  getUserDetailsAPI() {
    var headers = {
      'Content-Type': 'application/json',
    };
    var url = 'https://reqres.in/api/users?page=2';
    return fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson' + JSON.stringify(responseJson));
        if (responseJson.data) {
          if (responseJson.data.length > 0) {
            this.setState({records: responseJson.data});
          }
        }
        // else {
        //     this.setState({records: data});
        // }
      })
      .catch(error => {
        // this.setState({records: data});
      });
  }
  userDetails(item) {
    this.props.navigation.navigate('UserDetails', {item: item});
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
  UserListData(item) {
    return (
      <TouchableOpacity onPress={() => this.userDetails(item)}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderBottomWidth:0.5
          }}>
          <View
            style={{ ...styles.positionCenter,padding:2}}>
            <Image
              source={{uri: item.avatar}}
              style={{width: 80, height: 80}}
            />
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            {/* <Text
              style={{paddingLeft: 5}}
              numberOfLines={1}
              ellipsizeMode={'tail'}>
              {item.email}
            </Text> */}
             {this.renderEachRow('User ID : ',item.id)}
              {this.renderEachRow('Name : ',item.first_name + ' '+ item.last_name)}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  renderUserDetails() {
    var {records} = this.state;
    console.log('this.state ' + JSON.stringify(this.state));
    if (records.length > 0) {
      if (records[0].empty) {
        return <View />;
      } else {
        return (
          <FlatList
            data={records}
            renderItem={({item}) => <View>{this.UserListData(item)}</View>}
            keyExtractor={(items, index) => items.id}
          />
        );
      }
    } else {
      return (
        <FlatList
          data={[{empty: 'key1'}]}
          renderItem={({item}) => (
            <View style={[styles.positionCenter, {marginTop: 10}]}>
              <Text style={[{fontSize: 18}]}>No data available</Text>
            </View>
          )}
          keyExtractor={item => item.empty}
        />
      );
    }
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
export default UserList;
const styles = StyleSheet.create({
  positionCenter: {justifyContent: 'center', alignItems: 'center'},
  bodyView: {
    flex: 1,
    padding: 5,
  },
});
