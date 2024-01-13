import { Text, SafeAreaView, StyleSheet, View, Image,TouchableOpacity,TextInput, } from 'react-native';
import React from 'react';


// You can import supported modules from npm
import { Card } from 'react-native-paper';

import Buttonn from './customcomponents/button'
import Inputtext from './customcomponents/text_input'

export default function App({ navigation }) {

  const [number, onChangeNumber] = React.useState('');
  return (
     <View style= {styles.container}>
      <TouchableOpacity style= {styles.kotakts}>
        <Image style= {styles.gambarts}
           source={require('../assets/logo_ts.png')} 
         />
       </TouchableOpacity>
                  <Text style= {styles.texthello}>
      Selamat Datang
      </Text>
          <Text style= {styles.textmasuk}>
      Daftar untuk melanjutkan 
      </Text>
       <Inputtext placeholder="Nama Lengkap"/>
       <Inputtext placeholder="Username/Email"/>
       <Inputtext placeholder="Password" secure="true"/>
       <Inputtext placeholder="Ulang Password" secure="true"/>
      <Buttonn placeholder='Daftar' color='red' onPress={() => navigation.navigate('Login')} />
      <View style={{marginTop: 60, flexDirection: 'row', gap: 2, justifyContent: 'center'}}>
    <Text style={styles.teksGabungan}>
    Sudah punya akun? 
    </Text>
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.warnaBiru}>Masuk</Text>
    </TouchableOpacity>
    </View>
     </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
    
  },
  kotakts: {
        borderRadius: 10,
        backgroundColor: 'red',
        width : 100,
        height : 100

  },
  gambarts: {
    width: 100,
    height: 100,
   
  },
  texthello: {
    fontSize: 20,
        fontWeight: 'bold',
  },
  textmasuk: {
    fontSize : 18,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },

  buttonmasuk: {
     height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'blue',
  },
  buttonTextmasuk: {
    textAlign: 'center',
    color: 'white',
  },

   teksGabungan: {
    fontSize: 15,
    textAlign: 'center',
  },
  warnaBiru: {
    color: 'blue',
  },
});
