import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Category from '../components/Category';

export default function Home() {
  const data = [
    {id: 1, image: 'asd', title: 'Beef'},
    {id: 2, image: 'asd', title: 'Chicken'},
  ];

  function renderItem({index, item}) {
    return <Category index={index} category={item} />;
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
