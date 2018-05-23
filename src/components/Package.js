import React from 'react';
import { View } from 'react-native';

import styles from '../styles';
const { pack, row } = styles;

import Cigarette from './Cigarette';


const Package = () => (
      <View style={pack}>
        <View style={row}>
          <Cigarette id="13"/>
          <Cigarette id="4"/>
          <Cigarette id="18"/>
          <Cigarette id="9"/>
          <Cigarette id="15"/>
          <Cigarette id="1"/>
          <Cigarette id="12"/>
          <Cigarette id="8"/>
          <Cigarette id="3"/>
          <Cigarette id="19"/>
        </View>
        <View style={[row, { bottom: 0 }]}>
          <Cigarette id="7"/>
          <Cigarette id="20"/>
          <Cigarette id="14"/>
          <Cigarette id="2"/>
          <Cigarette id="10"/>
          <Cigarette id="17"/>
          <Cigarette id="6"/>
          <Cigarette id="16"/>
          <Cigarette id="5"/>
          <Cigarette id="11"/>
        </View>
      </View>
    );

export default Package;
