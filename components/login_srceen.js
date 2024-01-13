  import { Text, SafeAreaView, StyleSheet, View, Image,TouchableOpacity,TextInput, Button} from 'react-native';
import React from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Inputtext from './customcomponents/text_input'
import Gambar from '../assets/logo_ts.png'
import Buttonn from './customcomponents/button'
export default function App({ navigation }) {

  return (
     <View style= {styles.container}>
      <TouchableOpacity style= {styles.kotakts}>
        <Image style= {styles.gambarts}
           source={Gambar} 
         />
       </TouchableOpacity>
                  <Text style= {styles.texthello}>
      Hello
      </Text>
          <Text style= {styles.textmasuk}>
      Selamat masuk ya
      </Text>
      <Inputtext placeholder="Username"/>
      <Inputtext  placeholder="Password" />
      <Text style= {styles.lupapassword}>
      lupa password?
      </Text>
      <View>
      <Buttonn placeholder='Masuk' onPress={() => navigation.navigate('About')} />
      <Text style= {styles.atau}>
      Atau
      </Text> 
    <Buttonn placeholder='Google' color='blue'/>
    <View style={{marginTop: 60, flexDirection: 'row', gap: 2, justifyContent: 'center'}}>
    <Text style={styles.teksGabungan}>
    Belum punya akun? 
    </Text>
    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      <Text style={styles.warnaBiru}>Daftar sekarang</Text>
    </TouchableOpacity>
    </View>
    
  
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
  lupapassword: {
    fontSize: 15,
    textAlign: 'right',
    marginRight: 20
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
  atau : {
    textAlign: 'center',
  },
  buttongoogle: {
         height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  buttonTextgoogle: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
   teksGabungan: {
    fontSize: 15,

  },
  warnaBiru: {
    color: 'blue',
  },
});
