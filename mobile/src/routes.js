import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';

import Dashboard from './pages/Orders/Dashboard';
import Details from './pages/Orders/Details';
import NewProblem from './pages/Orders/NewProblem';
import Problems from './pages/Orders/Problems';
import ConfirmDeliver from './pages/Orders/ConfirmDeliver';

import Profile from './pages/Profile';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard: {
              screen: createStackNavigator(
                {
                  Dashboard: {
                    screen: Dashboard,
                    navigationOptions: {
                      headerShown: false,
                      cardStyle: {
                        backgroundColor: '#fff',
                      },
                    },
                  },
                  Details,
                  NewProblem,
                  Problems,
                  ConfirmDeliver,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 10,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Entregas',
                // eslint-disable-next-line react/prop-types
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="view-headline" size={26} color={tintColor} />
                ),
              },
            },
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#7D40E7',
              inactiveTintColor: '#999999',
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'SignIn',
      }
    )
  );
