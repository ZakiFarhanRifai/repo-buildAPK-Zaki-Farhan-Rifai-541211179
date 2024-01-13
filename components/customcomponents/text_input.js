import {  StyleSheet, View, TextInput, } from 'react-native';
import React from 'react';





export default function App({placeholder, secure}) {
    const [input1, text1] = React.useState('');
  return (
     <View style= {styles.container}>

      <TextInput
        style={styles.input}
        onChangeText={text1}
        value={input1}
        placeholder={placeholder}
        secureTextEntry={true}

      />
     </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
