import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HomeParamProps} from './HomeParamList';

const HomeThree = ({navigation}: HomeParamProps<'HomeThree'>) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50, fontWeight: 'bold'}}>HomeThree</Text>
      <Button title="homeOne" onPress={() => navigation.navigate('HomeOne')} />
      <Button title="homeTwo" onPress={() => navigation.navigate('HomeTwo')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeThree;