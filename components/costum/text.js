import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Image,Button } from 'react-native';



export default function App() {
  return (
   <View style= {styles.container}>
      <Text style= {styles.nama}>
        ZAKI Farhan Rifai 
      </Text>
      <Text style= {styles.deskripsi}>
        Saya ZAKI Farhan Rifai dari XII RPL 5 Absen 31. saya seorang web development dan web desain
      </Text>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
    deskripsi: {
      fontSize: 20,
  },
  namaproject: {
    fontSize: 15,
    padding : 10
  },
  
    gambar: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  nama: {
      padding: 20,
      fontSize : 20
  },
  myproject: {
    fontSize : 18,
    fontWeight :'bold',
    padding: 10,
  },
  sinanta : {
    width: 250,
    height: 111,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
