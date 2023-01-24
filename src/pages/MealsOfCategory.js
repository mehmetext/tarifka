import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Meal from '../components/Meal';
import useFetch from '../hooks/useFetch';

export default function MealsOfCategory({navigation, route}) {
  const {loading, error, data} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.category}`,
  );

  function renderItem({index, item}) {
    return (
      <Meal
        onPress={() => {
          navigation.navigate('MealDetail', {
            name: item.strMeal,
            id: item.idMeal,
          });
        }}
        index={index}
        meal={item}
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
        keyExtractor={item => item.idMeal}
        contentContainerStyle={styles.listContent}
        data={data.meals}
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
