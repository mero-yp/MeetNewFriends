import {Dimensions} from 'react-native';

// 屏幕的宽度
export const screenWidth = Dimensions.get('window').width;

// 屏幕的高度
export const screenHeight = Dimensions.get('window').height;

// px转为dp
export const pxToDp = elePx => (screenWidth * elePx) / 375;
