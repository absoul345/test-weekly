import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { ICON_MAP } from '../../assets/icons';
import { NAV_PATH_NAMES } from '../../constants';
import { PRIMER_TEXT_COLOR, SECOND_TEXT_COLOR } from '../../themes/colors';
import { scale } from '../../services/helpers/scaling-utils';

export const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.Container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const choseIcon = () => {
          switch (route.name) {
            case NAV_PATH_NAMES.HomeNavigation:
              return (
                <ICON_MAP.HOME width={20} height={20} stroke={isFocused ? PRIMER_TEXT_COLOR : SECOND_TEXT_COLOR} />
              );
            case NAV_PATH_NAMES.LeaderBoard:
              return (
                <ICON_MAP.CROWN width={20} height={20} stroke={isFocused ? PRIMER_TEXT_COLOR : SECOND_TEXT_COLOR} />
              );
            case NAV_PATH_NAMES.Settings:
              return (
                <ICON_MAP.SETTINGS width={20} height={20} stroke={isFocused ? PRIMER_TEXT_COLOR : SECOND_TEXT_COLOR} />
              );
          }
        };

        const icon = choseIcon();

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.ButtonContainer}>
            {icon}
            <Text style={{ ...styles.TextLabel, color: isFocused ? PRIMER_TEXT_COLOR : SECOND_TEXT_COLOR }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    bottom: scale(30),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ButtonContainer: { alignItems: 'center' },
  TextLabel: { marginTop: scale(10), fontFamily: 'Poppins-SemiBold', fontSize: 10 },
});
