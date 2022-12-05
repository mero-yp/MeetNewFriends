import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {pxToDp} from '../utils/stylesKits';

type GradualButtonProp = {
  style?: {};
  textStyle?: {};
  children: string;
  onPress: () => void;
};

const GradualButton = (props: GradualButtonProp) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        width: '100%',
        height: '100%',
        ...props.style,
        overflow: 'hidden',
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#2590a2', '#0d4566']}
        style={styles.linearGradient}>
        <Text style={{...styles.buttonText, ...props.textStyle}}>
          {props.children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: pxToDp(15),
    paddingRight: pxToDp(15),
    borderRadius: pxToDp(5),
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: pxToDp(18),
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default GradualButton;
