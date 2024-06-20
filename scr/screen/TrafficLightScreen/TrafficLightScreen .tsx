import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeColor} from '../../entities/trafficLight/slice';
import getStyle from './style';
interface RootState {
  trafficLight: string;
}

const TrafficLightScreen = () => {
  const currentColor = useSelector((state: RootState) => state.trafficLight);

  const dispatch = useDispatch();
  const styles = getStyle(currentColor);
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={StyleSheet.flatten([styles.light, styles.redLight])} />
        <View style={StyleSheet.flatten([styles.light, styles.yellowLight])} />
        <View style={StyleSheet.flatten([styles.light, styles.greenLight])} />
      </View>
      <View style={styles.textRowStyle}>
        <Text style={styles.text}>{'Текущий цвет:'}</Text>
        <Text style={styles.text}>{currentColor}</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          title={'Изменить цвет'}
          onPress={() => dispatch(changeColor())}
        />
      </View>
    </View>
  );
};

export default TrafficLightScreen;
