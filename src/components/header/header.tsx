import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { ICON_MAP } from '../../assets/icons';
import { moderateScale, scale, verticalScale } from '../../services/helpers/scaling-utils';
import { GHOST_WHITE, WHITE } from '../../themes/colors';

export const Header = () => {
  return (
    <View style={styles.Container}>
      <ImageBackground
        style={styles.StarContainer}
        imageStyle={{ borderRadius: 14 }}
        source={require('../../assets/home/orange_radial.png')}>
        <ICON_MAP.STAR width={moderateScale(18, 0.1)} height={verticalScale(18)} />
        <Text style={{ marginLeft: scale(8), ...styles.Text }}>954</Text>
      </ImageBackground>
      <View style={styles.NotificationContainer}>
        <View style={{ marginRight: scale(20), ...styles.NotificationBG }}>
          <ICON_MAP.BELL width={moderateScale(18)} height={verticalScale(18)} />
          <ImageBackground
            style={styles.ContainerCounter}
            imageStyle={{ borderRadius: 50 }}
            source={require('../../assets/home/purple_radial_bg.png')}>
            <Text style={styles.Text}>2</Text>
          </ImageBackground>
        </View>
        <View style={styles.NotificationBG}>
          <ICON_MAP.LIGHT width={moderateScale(18)} height={verticalScale(18)} />
          <ImageBackground
            style={styles.ContainerCounter}
            imageStyle={{ borderRadius: 50 }}
            source={require('../../assets/home/green_radial_bg.png')}>
            <Text style={styles.Text}>5</Text>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  StarContainer: {
    padding: scale(12),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  Text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(12),
    color: WHITE,
  },
  NotificationContainer: { flexDirection: 'row' },
  NotificationBG: {
    width: moderateScale(40),
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: GHOST_WHITE,
  },
  ContainerCounter: {
    width: moderateScale(24),
    height: verticalScale(22),
    position: 'absolute',
    top: -8,
    right: -8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
