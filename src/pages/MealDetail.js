import {
  ActivityIndicator,
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import useFetch from '../hooks/useFetch';

export default function MealDetail({navigation, route}) {
  const {loading, error, data} = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`,
  );

  if (loading) {
    return <ActivityIndicator style={styles.loading} size={'large'} />;
  }

  if (error) {
    return <Text>{`${error}`}</Text>;
  }

  async function handleOpenYt() {
    const supported = await Linking.canOpenURL(data.meals[0].strYoutube);

    if (supported) {
      await Linking.openURL(data.meals[0].strYoutube);
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          style={styles.image}
          source={{
            uri: data.meals[0].strMealThumb,
          }}
        />
        <Text style={styles.title}>{data.meals[0].strMeal}</Text>
        <Text style={styles.subtitle}>{data.meals[0].strArea}</Text>
        <View style={styles.divider} />
        <Text style={styles.desc}>{data.meals[0].strInstructions}</Text>
        <TouchableOpacity style={styles.ytBtn} onPress={handleOpenYt}>
          <Text style={styles.ytText}>Watch on YouTube</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    resizeMode: 'contain',
    width: '100%',
  },
  title: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 28,
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginVertical: 10,
  },
  desc: {
    padding: 10,
  },
  ytBtn: {
    margin: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  ytText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  loading: {marginTop: 10},
});
