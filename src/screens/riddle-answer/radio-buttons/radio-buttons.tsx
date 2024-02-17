import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { moderateScale, scale } from '../../../services/helpers/scaling-utils';
import { GHOST_WHITE, GREEN, PRIMER_TEXT_COLOR } from '../../../themes/colors';
import { buttonsData } from '../constants';

interface IProp {
  setDisplaySubText: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedButton: React.Dispatch<React.SetStateAction<number | null>>;
  selectedButton: number | null;
}

export const RadioButtons: React.FC<IProp> = ({ setDisplaySubText, setSelectedButton, selectedButton }) => {
  const handleButtonPress = (id: number, subText: string): void => {
    setSelectedButton(id);
    setDisplaySubText(subText);
  };

  return (
    <View style={styles.Wrapper}>
      {buttonsData.map(button => (
        <TouchableOpacity
          key={button.id}
          style={[styles.Button, selectedButton === button.id && styles.SelectedButton]}
          onPress={() => handleButtonPress(button.id, button.SubText)}>
          <Text style={[styles.ButtonText, selectedButton === button.id && styles.SelectedText]}>{button.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: { flexDirection: 'row', marginTop: scale(25), justifyContent: 'space-between', alignItems: 'center' },
  Button: {
    paddingHorizontal: scale(10),
    paddingVertical: scale(16),
    backgroundColor: GHOST_WHITE,
    borderRadius: 16,
  },
  SelectedButton: {
    borderWidth: 1,
    borderColor: GREEN,

    shadowColor: GREEN,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.57,
    shadowRadius: 10,

    elevation: 2,
  },
  ButtonText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(20),
    color: PRIMER_TEXT_COLOR,
  },
  SelectedText: { color: GREEN },
});
