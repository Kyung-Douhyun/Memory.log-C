import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, StyleSheet, Dimensions} from 'react-native';
import ConfigHomeContainer from '../containers/ConfigHomeContainer';

interface ConfigStackProps {}

const ConfigStackNav = createStackNavigator<ConfigStackParamList>();

const ConfigStack: React.FC<ConfigStackProps> = ({configProps}) => {
  const {loginStatus, changeLogin} = configProps;
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
      <ConfigStackNav.Navigator
        initialRouteName="ConfigHome"
        screenOptions={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Lobster-Regular',
            fontSize: 24,
          },
        }}>
        <ConfigStackNav.Screen
          name="Memory.log"
          configProps={configProps}
          component={ConfigHomeContainer}
        />
        {/* <ConfigStackNav.Screen name="SignOut" component={SignoutContainer} /> */}
      </ConfigStackNav.Navigator>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  configScrollView: {
    flex: 1,
    width: Dimensions.get('screen').width,
    backgroundColor: 'grey',
  },
});
export default ConfigStack;
