import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Navigator from '../views/Navigator'
import EditProfile from '../views/EditProfile'

const RootStack = createStackNavigator(
    {
      Navigator: Navigator,
      EditProfile: EditProfile,
    },
    {
      initialRouteName: 'Navigator',
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  
  export default class Router extends React.Component {
    render() {
      return <AppContainer />;
    }
  }