import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HomeScreen = () => {
  return (
    <View style={{
		flexDirection:'column'
	}}>
      <Icon name="star-o" size={30} color="black" />
      <Text style={{ fontSize:25}}> App Template React Native Typescript</Text>
    </View>
  );
};
