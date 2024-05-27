import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import Timer from 'react-native-progress-timer';

export default function Detail({route}) {
  const navigation = useNavigation();
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={[styles.backgroundImage]}
        source={require('../../assets/images/background.png')}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{width: 40, height: 40, marginTop: 20, marginLeft: 20}}
            source={require('../../assets/images/icons/icons8-back-64.png')}
          />
        </TouchableOpacity>

        <Text style={styles.detailTitle}>{item?.title}</Text>

        <ScrollView>
          <Image source={item?.image} style={styles.detailImage} />

          <Text style={styles.detailSubtitle}>{item?.subtitle}</Text>

          <View
            style={{
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center',
            }}>
            <Timer
              remainingTime={item?.duration}
              size={300}
              showsText={true}
              animated={true}
              direction={'counter-clockwise'}
              borderColor={'#d9dcdd'}
              borderWidth={3}
              thickness={5}
              color={'#faac02'}
              style={options.style}
              textStyle={options.textStyle}
              options={options}
              textStartCircle={'Начать'}
              textCancelCircle={'Сброс'}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const options = {
  style: {
    alignSelf: 'center',
  },
  textStyle: {
    color: '#faac02',
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  highlight: {
    backgroundColor: '#ffffff',
  },
  play: {
    underlayColor: '#ffffff',
    borderColor: '#d9dcdd',
    textStyle: {
      color: '#000000',
    },
    style: {
      backgroundColor: '#ffffff',
    },
  },
  cancel: {
    underlayColor: '#ffffff',
    borderColor: '#d9dcdd',
    textStyle: {
      color: '#000000',
    },
    style: {
      backgroundColor: '#ffffff',
    },
  },
};
