import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../styles';
import {useNavigation} from '@react-navigation/native';

export default function Main() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={[styles.backgroundImage]}
        source={require('../../assets/images/background.png')}>
        <Text style={styles.title}>Тренировочные дни</Text>

        <ScrollView>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Day', {day: 0})}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/images/illustrations/cherry-243.png')}
            />
            <Text style={styles.cardText}>Понедельник</Text>

            <Image
              style={styles.cardIcon}
              source={require('../../assets/images/icons/chevron-right.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Day', {day: 1})}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/images/illustrations/icons8-football-64.png')}
            />
            <Text style={styles.cardText}>Вторник</Text>

            <Image
              style={styles.cardIcon}
              source={require('../../assets/images/icons/chevron-right.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Day', {day: 2})}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/images/illustrations/pictorial-oil-painting-of-a-dynamic-scene-with-soccer-player.png')}
            />
            <Text style={styles.cardText}>Среда</Text>

            <Image
              style={styles.cardIcon}
              source={require('../../assets/images/icons/chevron-right.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Day', {day: 3})}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/images/illustrations/urban-line-football-players-greet-each-other-with-a-handshake-on-the-field.png')}
            />
            <Text style={styles.cardText}>Четверг</Text>

            <Image
              style={styles.cardIcon}
              source={require('../../assets/images/icons/chevron-right.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Day', {day: 4})}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/images/illustrations/urban-line-male-football-player-with-ball-under-his-arm-extends-his-hand-to-greet.png')}
            />
            <Text style={styles.cardText}>Пятница</Text>
            <Image
              style={styles.cardIcon}
              source={require('../../assets/images/icons/chevron-right.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Puzzle')}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/images/illustrations/fogg-861.png')}
            />
            <Text style={styles.cardText}>Пазл</Text>
            <Image
              style={styles.cardIcon}
              source={require('../../assets/images/icons/chevron-right.png')}
            />
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
