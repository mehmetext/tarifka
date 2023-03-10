import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Category({index, category, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          index % 2 === 0 ? styles.leftContainer : styles.rightContainer,
        ]}>
        <Image
          style={styles.image}
          source={{
            uri: category.strCategoryThumb,
          }}
        />
        <Text style={styles.title}>{category.strCategory}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,.2)',
    borderWidth: 1,
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
  image: {
    height: 60,
    width: 100,
    resizeMode: 'contain',
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
