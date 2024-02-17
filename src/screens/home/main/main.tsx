import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { GHOST_WHITE, PRIMER_TEXT_COLOR, SECOND_TEXT_COLOR, WHITE_BG } from '../../../themes/colors';
import { moderateScale, scale, verticalScale } from '../../../services/helpers/scaling-utils';
import { ICON_MAP } from '../../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../typings/typings';

export const Main = () => {
  const { navigate } = useNavigation<RootStackNavigationProp>();

  const onPressRiddle = (riddleButtonId: number) => {
    navigate('Riddle Answer', { riddleButtonId });
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity style={styles.WeeklyWhiteContainer} onPress={() => onPressRiddle(1)}>
        <Text style={styles.SubText}>Weekly{'\n'} Riddle</Text>
        <Text style={styles.Text}>Riddles you need to{'\n'} solve weekly</Text>
        <View style={styles.WeeklyWhiteDarkContainer} />
        <Image style={styles.WeeklyImage} source={require('../../../assets/home/weekly_bg.png')} />
      </TouchableOpacity>
      <View style={styles.DayWrapper}>
        <TouchableOpacity
          onPress={() => onPressRiddle(2)}
          style={{
            ...styles.WeeklyWhiteContainer,
            marginTop: 0,
            width: scale(130),
            height: verticalScale(125),
            paddingTop: moderateScale(50),
          }}>
          <Text
            style={{
              ...styles.SubText,
              marginBottom: moderateScale(9),
              fontSize: moderateScale(14, 0.2),
              lineHeight: moderateScale(20),
            }}>
            3 Days{'\n'} Exp. Riddles
          </Text>
          <Text style={styles.Text}>3 days{'\n'} for solving</Text>
          <View
            style={{
              ...styles.WeeklyWhiteDarkContainer,
              width: scale(127),
              height: verticalScale(124),
              top: 0,
              borderRadius: 32,
            }}
          />
          <Image
            style={{
              ...styles.WeeklyImage,
              top: moderateScale(-23),
              right: moderateScale(-21),
            }}
            source={require('../../../assets/home/three_orange_bg.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressRiddle(3)}
          style={{
            ...styles.WeeklyWhiteContainer,
            marginTop: 0,
            width: scale(130),
            height: verticalScale(125),
            paddingLeft: moderateScale(15),
            paddingTop: moderateScale(50),
          }}>
          <Text
            style={{
              ...styles.SubText,
              marginBottom: moderateScale(9),
              fontSize: moderateScale(14),
              lineHeight: moderateScale(20),
            }}>
            1 Day{'\n'} Exp. Riddles
          </Text>
          <Text style={styles.Text}>1 day for{'\n'} solving</Text>
          <View
            style={{
              ...styles.WeeklyWhiteDarkContainer,
              width: scale(128),
              height: verticalScale(124),
              top: 0,
              borderRadius: 32,
            }}
          />
          <Image
            style={{
              ...styles.WeeklyImage,
              top: moderateScale(-23),
              right: moderateScale(-21),
            }}
            source={require('../../../assets/home/pink_one_bg.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => onPressRiddle(4)}
        style={{ ...styles.WeeklyWhiteContainer, marginTop: scale(20), paddingTop: scale(23) }}>
        <Text style={{ ...styles.SubText, fontSize: moderateScale(16), lineHeight: moderateScale(22) }}>
          Special Brand{'\n'} Riddles
        </Text>
        <Text style={{ ...styles.Text, fontSize: moderateScale(12), lineHeight: moderateScale(18) }}>
          Riddles related with{'\n'} popular brands{'\n'} such as
        </Text>
        <View style={styles.BrandWrapper}>
          <ICON_MAP.NIKE width={scale(24)} height={verticalScale(24)} style={{ marginRight: 8 }} />
          <ICON_MAP.MCDONALDS width={scale(24)} height={verticalScale(24)} style={{ marginRight: 8 }} />
          <ICON_MAP.LEGO width={scale(24)} height={verticalScale(24)} />
        </View>
        <View style={styles.WeeklyWhiteDarkContainer} />
        <Image
          style={{ ...styles.WeeklyImage, top: moderateScale(-55), right: moderateScale(-65) }}
          source={require('../../../assets/home/brand_bg.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: { flex: 1 },
  WeeklyWhiteContainer: {
    marginTop: scale(38),
    paddingTop: scale(30),
    paddingLeft: moderateScale(20),
    width: '100%',
    height: verticalScale(150),
    backgroundColor: GHOST_WHITE,
    borderRadius: 32,
  },
  WeeklyWhiteDarkContainer: {
    width: scale(275),
    height: verticalScale(148),
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    backgroundColor: WHITE_BG,
    borderRadius: 28,
  },
  DayWrapper: {
    marginTop: scale(25),
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  WeeklyImage: {
    position: 'absolute',
    top: moderateScale(-21),
    right: moderateScale(-23),
    resizeMode: 'cover',
  },
  SubText: {
    marginBottom: scale(10),
    fontFamily: 'Poppins-ExtraBold',
    fontSize: moderateScale(24, 0.1),
    lineHeight: moderateScale(30, 0.1),
    color: PRIMER_TEXT_COLOR,
  },
  Text: { fontFamily: 'Poppins-Medium', fontSize: moderateScale(12, 0.2), lineHeight: 18, color: SECOND_TEXT_COLOR },
  BrandWrapper: { flexDirection: 'row', marginTop: scale(5) },
});
