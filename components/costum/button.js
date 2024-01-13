import {  View, Button} from 'react-native';
import React from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';


export default function App(props) {

  return (
     <View>
      <View style={{ height: 30, marginTop: 20, width: 120, alignSelf: 'center' }}>
        <Button title={props.placeholder} color="#AF69EF" onPress={() => alert("Wa saya: 085647979506")} />
      </View>
     </View>
     
  );
}

