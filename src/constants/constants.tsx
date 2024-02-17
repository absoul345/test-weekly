import { Dimensions } from 'react-native';

type TNavPathNames = {
  Home: string;
  HomeNavigation: string;
  LeaderBoard: string;
  Settings: string;
  RiddleAnswer: string;
};

export const NAV_PATH_NAMES: TNavPathNames = {
  Home: 'Home',
  HomeNavigation: 'Home Navigation',
  LeaderBoard: 'Leader Board',
  Settings: 'Settings',
  RiddleAnswer: 'Riddle Answer',
};

export const DimensionHeight = Dimensions.get('window').height;
export const DimensionWidth = Dimensions.get('window').width;
