import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles';

export default function Button(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.style]}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}
