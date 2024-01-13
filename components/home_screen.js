import { Text, SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import Inputtext from './customcomponents/text_input'
export default function App({ navigation }) {
    const [text, onChangeText] = React.useState('Zaki Farhan Rifai');
  return (
    <View style= {styles.container}>
     <View style={styles.boxWrapper}>
     <Text style= {styles.textawal}>
      Selamat Datang 😁
     </Text>
     </View>
     <Inputtext placeholder="Cari siswa"/>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      
       <AntDesign name="pluscircleo" size={30} color="#000" onPress={() => navigation.navigate('Input')} style={{textAlign: 'right'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#powderblue',
    padding: 8,
  },
  textawal: {
    fontSize : 18,
    fontWeight :'bold',
    textAlign: 'center'
  },
  boxWrapper: {
    borderWidth: 1,
    borderColor: '#0BEEEE',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#0BEEEE'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
