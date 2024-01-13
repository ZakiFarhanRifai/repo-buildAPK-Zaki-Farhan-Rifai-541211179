import { Text, SafeAreaView, StyleSheet, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import HalamanLogin from './components/login_srceen';
import HalamanRegister from './components/register_screen';
import HalamanPorto from './components/portofolio_screen';
import HalamanSplash from './components/splash_screen';
import HalamanHome from './components/home_screen';
import HalamanInput from './components/input_screen';



const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Splash_Screen" component={HalamanSplash} />
      <Stack.Screen name="Login" component={HalamanLogin} />
      <Stack.Screen name="Register" component={HalamanRegister} />
      <Stack.Screen name="Home" component={HalamanHome} />
      <Stack.Screen name="Input" component={HalamanInput} /> 
      <Stack.Screen name="About" component={HalamanPorto} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
