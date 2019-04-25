import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Linking,
  FlatList
} from 'react-native';

import {UserList} from './index';

export default class Profile extends Component {

  render() {
    const { user, navigation } = this.props;
    const { name, image, email, color, friends } = user;

    return (
        <View style={styles(color).container}>
            <View style={styles(color).header} />
            <Image style={styles(color).avatar} source={{ uri: image }} />
            <View style={styles(color).body}>
                <View style={styles(color).bodyContent}>
                    <Text style={styles(color).name}>{name}</Text>
					<Text style={styles(color).info} onPress={() => Linking.openURL(`mailto:${email}`)}>{email}</Text>
                </View>
            </View>
			<Text style={styles(color).info}>Friends</Text>
			<View style={styles(color).list}>
              <FlatList
                data={friends}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('UserScene', { id: item.id })
                    }
                  >
                    <UserList user={item} />
                  </TouchableOpacity>
                )}
              />
            </View>
        </View>
    );
  }
}

const styles = (primaryColor = "#00BFFF") => StyleSheet.create({
  header:{
    backgroundColor: primaryColor,
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: primaryColor,
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  email: {
    fontSize:16,
    color: primaryColor,
    marginTop: 10
  },
  list: {
	marginTop: 20
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: primaryColor,
  },
});