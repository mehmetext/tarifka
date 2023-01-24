import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Category from '../components/Category';
import useFetch from '../hooks/useFetch';

export default function Home({navigation}) {
  const {loading, error, data} = useFetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );

  function renderItem({index, item}) {
    return (
      <Category
        onPress={() => {
          navigation.navigate('MealsOfCategory', {
            name: `Meals of ${item.strCategory}`,
            category: item.strCategory,
          });
        }}
        index={index}
        category={item}
      />
    );
  }

  if (loading) {
    return <ActivityIndicator style={styles.loading} size={'large'} />;
  }

  if (error) {
    return <Text>{`${error}`}</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={item => item.idCategory}
        contentContainerStyle={styles.listContent}
        data={data.categories}
        renderItem={renderItem}
        ItemSeparatorComponent={<View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContent: {paddingVertical: 10},
  separator: {height: 10},
  loading: {marginTop: 10},
});
