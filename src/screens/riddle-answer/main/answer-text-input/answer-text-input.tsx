import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { moderateScale, scale, verticalScale } from '../../../../services/helpers/scaling-utils';
import { SECOND_TEXT_COLOR, WHITE_BG } from '../../../../themes/colors';

export const AnswerTextInput = () => {
  const [answer, setAnswer] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={answer}
        onChangeText={setAnswer}
        placeholder="Your answer"
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: scale(24) },
  input: {
    height: verticalScale(65),
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: WHITE_BG,
    borderRadius: 26,
    paddingHorizontal: scale(26),
    paddingVertical: 15,

    fontFamily: 'Poppins-Regular',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(15),
    color: SECOND_TEXT_COLOR,
  },
});
