import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';
const { scoreNumber, scoreNumberText } = styles;

const ScoreNumber = ({ value, description }) => (
  <View style={scoreNumber}>
    <Text style={[scoreNumberText, {fontSize: 64}]}>{value}</Text>
    <Text style={[scoreNumberText, {fontSize: 15}]}>cigarettes</Text>
    <Text style={[scoreNumberText, {fontSize: 21}]}>{description}</Text>
  </View>
);

export default ScoreNumber;
