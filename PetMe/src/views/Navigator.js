// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  * @lint-ignore-every XPLATJSCOPYRIGHT1
//  */

import React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Profile from './Profile'


class FavoriteScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Favorite!</Text>
      </View>
    );
  }
}

class PetScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Pet!</Text>
      </View>
    );
  }
}

class InboxScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Inbox!</Text>
      </View>
    );
  }
}


const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Favorite: FavoriteScreen,
  Pet: PetScreen,
  Inbox: InboxScreen,
  Profile: Profile,
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: () => {
      const { routeName } = navigation.state;
      if (routeName === 'Favorite') {
        return <Image source={require('../images/icons8-love-24.png')} />
      } else if (routeName === 'Home') {
        return <Image source={require('../images/icons8-dog-house-24.png')} />
      } else if (routeName === 'Pet') {
        return <Image source={require('../images/icons8-cat-profile-48.png')} style={{ marginBottom: 10 }} />
      } else if (routeName === 'Inbox') {
        return <Image source={require('../images/icons8-envelope-24.png')} />
      } else if (routeName === 'Profile') {
        return <Image source={require('../images/icons8-account-24.png')} />
      }
    }
  }),
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    
  }
}
);

export default createAppContainer(TabNavigator);