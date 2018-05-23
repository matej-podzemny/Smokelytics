import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import ScoreNumber from './ScoreNumber';
import styles from '../styles';
const { score } = styles;


const Score = ({ cigLeft, cigSmoked }) => (
  <View style={score}>
    <ScoreNumber
      value={cigLeft}
      description="left"
    />
    <ScoreNumber
      value={cigSmoked}
      description="smoked"
    />
  </View>
);

const mapStateToProps = ({ counter }) => {
  const { cigSmoked, cigLeft } = counter;

  return { cigSmoked, cigLeft };
};

export default connect(mapStateToProps)(Score);
