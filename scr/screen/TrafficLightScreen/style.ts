import {RNStyleType} from '../../shared/lib/Theme/RNStyleType';
import {StyleSheet} from 'react-native';

interface IStyles {
  container: RNStyleType;
  textRowStyle: RNStyleType;
  text: RNStyleType;
  light: RNStyleType;
  buttons: RNStyleType;
  redLight: RNStyleType;
  yellowLight: RNStyleType;
  greenLight: RNStyleType;
}

/**
 * @return {IStyles}
 * @param {string} currentColor
 */
function getStyle(currentColor: string): IStyles {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 50,
    },
    textRowStyle: {
      flexDirection: 'row',
    },
    text: {
      fontSize: 20,
      marginBottom: 20,
      marginHorizontal: 2,
    },
    light: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 20,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
    },
    redLight: {
      backgroundColor: 'red',
      opacity: currentColor === 'red' ? 1 : 0.3,
    },
    yellowLight: {
      backgroundColor: 'yellow',
      opacity: currentColor === 'yellow' ? 1 : 0.3,
    },
    greenLight: {
      backgroundColor: 'green',
      opacity: currentColor === 'green' ? 1 : 0.3,
    },
  });
}

export default getStyle;
