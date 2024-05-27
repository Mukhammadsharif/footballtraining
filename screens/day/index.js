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
import {data} from '../../data';

export default function Day({route}) {
  const navigation = useNavigation();
  const {day} = route.params;
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

        <Text style={styles.title}>{data[day]?.day}</Text>

        <ScrollView>
          {data[day].exercises.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dayCard}
              onPress={() => navigation.navigate('Detail', {item: item})}>
              <Image style={styles.dayCardImage} source={item?.image} />
              <Text style={styles.dayCardText}>{item?.title}</Text>

              <Image
                style={styles.dayCardIcon}
                source={require('../../assets/images/icons/icons8-chevron-right-64.png')}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
