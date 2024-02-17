import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LeaderBoardScreen } from '../screens/leader-board';
import { SettingsScreen } from '../screens/settings';
import { TabBar } from '../components/tab-bar';

import { NAV_PATH_NAMES } from '../constants/constants';
import { HOME_OPTIONS_TAB } from './constants';
import { HomeNavigation } from './home-navigation';

const Tab = createBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={NAV_PATH_NAMES.HomeNavigation} tabBar={TabBar} screenOptions={HOME_OPTIONS_TAB}>
      <Tab.Screen
        name={NAV_PATH_NAMES.HomeNavigation}
        component={HomeNavigation}
        options={{
          headerShown: false,
          title: 'Home',
        }}
      />
      <Tab.Screen
        name={NAV_PATH_NAMES.LeaderBoard}
        component={LeaderBoardScreen}
        options={{
          headerShown: false,
          title: 'Leaderboard',
        }}
      />
      <Tab.Screen
        name={NAV_PATH_NAMES.Settings}
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
