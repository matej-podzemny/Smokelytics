import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { cig_filled, cig_outline } from "../../assets/img";


const Cigarette = ({id, cigLeft}) => (
      <Image
          source={id > cigLeft ? cig_outline : cig_filled}
          resizeMode={Image.resizeMode.contain}
          style={{flex: 1, margin: 1}}
      />
  );

const mapStateToProps = ({counter}) => {
  const {cigLeft} = counter;

  return {cigLeft};
};

export default connect(mapStateToProps)(Cigarette);
