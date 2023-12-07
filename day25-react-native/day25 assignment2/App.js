import React, { useEffect, useState } from 'react';
import { ScrollView, Image, Text, StyleSheet, View } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=1');
        setData(response.data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView>
      {data?.data.map((val) => (
        <View key={val.id} style={styles.container}>
          <Text>{val.first_name}</Text>
          <Image style={styles.image} source={{ uri: val.avatar }} />
          <Text>{val.email}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
