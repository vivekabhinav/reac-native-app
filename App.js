import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [people, setPeople] = useState(
    [
      { name: 'Abhinav', key: '1' },
      { name: 'Vivek', key: '2' },
      { name: 'Vaibhav', key: '3' },
      { name: 'Tanmaya', key: '4' },
      { name: 'Muazzam', key: '5' },
      { name: 'Abhi', key: '6' },
      { name: 'Ani', key: '7' },
      { name: 'Abhinav', key: '8' },
      { name: 'Aniket', key: '9' },
      { name: 'Harshit', key: '10' },
      { name: 'Ankit', key: '11' },
      { name: 'vivek', key: '12' },
      { name: 'Abhinav', key: '13' },
      { name: 'Niket', key: '14' },
      { name: 'Aarshit', key: '15' },

    ]
  )

  return (
    <View style={styles.container}>
    <ScrollView>
      {
        people.map((item) => {
          return (
            <View key={item.key}>
              <Text style = {styles.item}>{item.name}</Text>
            </View>
          )
        }
        )}
        </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxStyle: {
    width: 50, height: 50, backgroundColor: 'powderblue'
  },
  input: {
    border: '1px solid',
    borderColor: 'blue',
    padding: 8,
  },
  item: {
    marginTop: 24, 
    padding: 30, 
    height: 30 ,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});