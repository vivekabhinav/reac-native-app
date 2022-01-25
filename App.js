import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name,setName] = useState('Abhinav')
  const [person, setPerson] = useState({name: 'Vivek', age: 21})

  const [age,setAge] = useState('22')


  const clickHandler = () => {
    setName('Tripathi')
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is  {age}</Text>
      <TextInput 
      style={styles.input}
      placeholder = 'enter name'
      onChangeText = {(val) => setName(val)}
      />

      <TextInput 
      keyboardType = 'numeric'
      style={styles.input}
      placeholder = 'enter age eg 88'
      onChangeText = {(val) => setAge(val)}
      />
      <Button title = 'update state'  onPress = {clickHandler}/>
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

  boxStyle : {
    width: 50, height: 50, backgroundColor: 'powderblue'
  },
  input: {
    border: '1px solid',
    borderColor: 'blue',
    padding: 8,
  }
});