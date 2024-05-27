import React from 'react';
import {ImageBackground, SafeAreaView, Text} from 'react-native';
import {styles} from '../../styles';
import Button from '../../ui/Button';
import {useNavigation} from '@react-navigation/native';

export default function Onboarding() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={[styles.backgroundImage, {justifyContent: 'flex-end'}]}
        source={require('../../assets/images/Walkthrough-2.png')}>
        <Text style={styles.onboardingTitle}>
          Совершенствуйте свои футбольные навыки вместе с нами
        </Text>

        <Button text={'Начать'} onPress={() => navigation.navigate('Main')} />
      </ImageBackground>
    </SafeAreaView>
  );
}
