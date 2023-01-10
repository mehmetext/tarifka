import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Meal from '../components/Meal';

export default function MealsOfCategory({navigation}) {
  const data = [
    {id: 1, image: 'asd', title: 'Beef and Mustard Pie'},
    {id: 2, image: 'asd', title: 'Beef and Oyster pie'},
  ];

  function renderItem({index, item}) {
    return <Meal onPress={() => {}} index={index} meal={item} />;
  }

  return (
    <FlatList
      contentContainerStyle={styles.listContent}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={<View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {paddingVertical: 10},
  separator: {height: 10},
});
