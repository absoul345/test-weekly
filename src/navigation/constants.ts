import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { DimensionHeight } from '../constants';
import { PRIMER_TEXT_COLOR, SECOND_TEXT_COLOR } from '../themes/colors';

export const HOME_OPTIONS_TAB: BottomTabNavigationOptions = {
  tabBarStyle: {
    position: 'absolute',
    bottom: DimensionHeight * 0.05,
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
    borderTopWidth: 0,
  },
  tabBarActiveTintColor: PRIMER_TEXT_COLOR,
  tabBarInactiveTintColor: SECOND_TEXT_COLOR,
};
