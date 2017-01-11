import Dimensions from 'Dimensions';
const window = Dimensions.get('window');

exports.title = 'GlobalConfig';

export default {
  appName: 'DGB',
  windowHeight: window.height,
  windowWidth: window.width,

  windowWidthHalf: window.width * 0.5,
  windowWidthYhird: window.width * 0.333,
  windowWidthYwoThirds: window.width * 0.666,
  windowWidthQuarter: window.width * 0.25,
  windowWidthThreeQuarters: window.width * 0.75,

  navbarHeight: 64,
  statusBarHeight: 22,

  baseFont: 'Times',
  baseFontSize: 14,

  primaryColor: '#323232',
  secondaryColor: '#FFE229',
  textColor: '#555',
  borderColor: '#E7E7E7',

  blue: '#03A9F4',
  gray: '#8e8e8e',
  lightGray: '#323232',
  white: '#FFFFFF',
};
