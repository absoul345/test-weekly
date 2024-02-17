import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from '../../../services/helpers/scaling-utils';
import { GREEN, PRIMER_TEXT_COLOR, SECOND_TEXT_COLOR } from '../../../themes/colors';
import { AnswerTextInput } from './answer-text-input';

export const Main: React.FC<any> = ({ displaySubText }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.SubTitle}>{displaySubText}</Text>
      <Text style={styles.Text}>
        I can add to several hundred. But can’t{'\n'} subtract multiply or divide. Whatever I{'\n'} add to, it’s always
        in front of you but{'\n'} never behind. And the number I add to{'\n'} You can’t really hide!
      </Text>
      <Text style={styles.QuestionText}>Who am I?</Text>
      <AnswerTextInput />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.AttemptsText}>5 attempts remaining</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: { marginTop: scale(30) },
  SubTitle: {
    marginBottom: scale(17),
    fontFamily: 'Poppins-ExtraBold',
    fontSize: moderateScale(24),
    lineHeight: moderateScale(30),
    color: PRIMER_TEXT_COLOR,
  },
  Text: {
    marginBottom: scale(17),
    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(28),
    color: SECOND_TEXT_COLOR,
  },
  QuestionText: {
    marginBottom: scale(24),
    fontFamily: 'Poppins-Bold',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(28),
    color: SECOND_TEXT_COLOR,
  },
  button: {
    height: verticalScale(55),
    marginBottom: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GREEN,
    borderRadius: 26,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
  },
  AttemptsText: {
    alignSelf: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(13),
    color: SECOND_TEXT_COLOR,
  },
});
