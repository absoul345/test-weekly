import React, { ReactNode } from 'react';
import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { moderateScale, scale } from '../../services/helpers/scaling-utils';

interface IProp {
  children: ReactNode;
  isScrollView?: boolean;
}

export const MainContainer: React.FC<IProp> = ({ children, isScrollView = false }) => {
  return isScrollView ? (
    <ImageBackground style={styles.Container} source={require('../../assets/home/bg.png')}>
      <ScrollView style={styles.ScrollViewContainer}>{children}</ScrollView>
    </ImageBackground>
  ) : (
    <ImageBackground
      style={{ ...styles.Container, paddingTop: moderateScale(60), paddingHorizontal: scale(40) }}
      source={require('../../assets/home/bg.png')}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Container: { flex: 1 },
  ScrollViewContainer: { flexGrow: 1, paddingTop: moderateScale(60), paddingHorizontal: scale(40) },
});
