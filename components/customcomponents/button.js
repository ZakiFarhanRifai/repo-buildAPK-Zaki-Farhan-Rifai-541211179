import {  StyleSheet, View,  Button } from 'react-native';


export default function App(props) {
  return (
    <View style={styles.container}>
      <View style={{ height: 40, marginTop: 10, width: 120, alignSelf: 'center' }}>
        <Button title={props.placeholder} color={props.color} onPress={props.onPress}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
