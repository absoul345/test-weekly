import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { MainContainer } from '../../components/container';
import { Header } from '../../components/header';
import { RadioButtons } from './radio-buttons';
import { Main } from './main';

import { buttonsData } from './constants';

export interface IParams {
  riddleButtonId: number;
}

export const RiddleAnwerScreen = () => {
  const { params } = useRoute();
  const { riddleButtonId } = params as IParams;
  const [displaySubText, setDisplaySubText] = useState<string | null>(null);
  const [selectedButton, setSelectedButton] = useState<number | null>(riddleButtonId);

  useEffect(() => {
    buttonsData.forEach(button => {
      button.id === riddleButtonId && setDisplaySubText(button.SubText);
    });
  }, [params]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <MainContainer isScrollView>
          <Header />
          <RadioButtons
            setDisplaySubText={setDisplaySubText}
            setSelectedButton={setSelectedButton}
            selectedButton={selectedButton}
          />
          <Main displaySubText={displaySubText} />
        </MainContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
