import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/home';
import { RiddleAnwerScreen } from '../screens/riddle-answer';

import { NAV_PATH_NAMES } from '../constants';

const HomeStack = createNativeStackNavigator();

export const HomeNavigation = () => {
  return (
    <HomeStack.Navigator initialRouteName={NAV_PATH_NAMES.Home}>
      <HomeStack.Screen
        name={NAV_PATH_NAMES.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name={NAV_PATH_NAMES.RiddleAnswer}
        component={RiddleAnwerScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};
