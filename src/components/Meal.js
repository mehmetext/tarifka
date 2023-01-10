import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function Meal({index, meal, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        style={[
          styles.container,
          index % 2 === 0 ? styles.leftContainer : styles.rightContainer,
        ]}
        imageStyle={[
          styles.image,
          index % 2 === 0 ? styles.leftImage : styles.rightImage,
        ]}
        source={{
          uri: 'https://www.themealdb.com/images/media/meals/qtuuys1511387068.jpg',
        }}>
        <Text
          style={[
            styles.title,
            index % 2 === 0 ? styles.leftTitle : styles.rightTitle,
          ]}>
          {meal.title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,.2)',
    borderWidth: 1,
    height: 160,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  leftContainer: {
    marginRight: 20,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderLeftWidth: 0,
  },
  rightContainer: {
    marginLeft: 20,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    borderRightWidth: 0,
  },
  leftImage: {
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  rightImage: {
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  title: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 6,
  },
  leftTitle: {
    paddingRight: 50,
    textAlign: 'left',
  },
  rightTitle: {
    paddingLeft: 50,
    textAlign: 'right',
  },
});
