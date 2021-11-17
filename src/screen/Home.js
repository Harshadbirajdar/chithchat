import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <View>
      <Text>This is Home Page</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default Home;
