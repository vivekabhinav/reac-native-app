import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Abhinav'},
          {key: 'Abhi'},
          {key: 'Ana'},
          {key: 'Vaibhav'},
          {key: 'Vivek'},
          {key: 'Vimal'},
          {key: 'Vicky'},
          {key: 'Vishal'},
          {key: 'Vineet'},
          {key: 'Vineeta'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default FlatListBasics;