import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  'Home Navigation': undefined;
  'Leader Board': undefined;
  Settings: undefined;
  'Riddle Answer': { riddleButtonId: number } | undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Riddle Answer'>;
