import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, Image,Button, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import  {useState} from 'react';

import Buttonn from './costum/button'
import Textt from './costum/text'

export default function App() {
  const [like, jumlahlike] = useState(0);
  const [dislike, jumlahdislike] = useState(0);
  return (
    <ScrollView   showsVerticalScrollIndicator={false}>
    
   <View style= {styles.container}>
   
      <Image style= {styles.gambar}
      source={require('../assets/fotoku.jpeg')} 
      />
       <Textt />
       <Buttonn placeholder='Contact Me' />
       <Text style = { styles.myproject}>
       myproject
       </Text>
      <Image style= {styles.sinanta}
      source={require('../assets/sinanta.jpg')} 
      />
      <Text style={styles.namaproject}>
      SINANTA PROJECT
      </Text>
      <View style={styles.likeDislikeContainer}>
        <TouchableOpacity onPress={() => jumlahlike(like + 1)}>
          <AntDesign name="like1" size={24} color="blue" />
        </TouchableOpacity>
        <Text style={styles.likeCount}>Likes: {like}</Text>

        <TouchableOpacity onPress={() => jumlahdislike(dislike + 1)}>
          <AntDesign name="dislike1" size={24} color="red" />
        </TouchableOpacity>
        <Text style={styles.dislikeCount}>Dislikes: {dislike}</Text>
        <Text style={styles.jumlah}>total: {like + dislike}</Text>
      </View>
      <Image style= {styles.sinanta}
      source={require('../assets/project.jpg')} 
      />
      <Text style={styles.namaproject}>
      ZAKI STORE PROJECT
      </Text>
    
       

   </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
    backgroundColor: 'powderblue',
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
  likeDislikeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    fontSize: 16,
    marginLeft: 5,
  },
  dislikeCount: {
    fontSize: 16,
    marginLeft: 10,
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
