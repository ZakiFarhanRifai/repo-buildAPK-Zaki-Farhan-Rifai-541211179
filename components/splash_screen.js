import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulasi bekerja dengan delay selama 2 detik
    const splashTimeout = setTimeout(() => {
      // Ganti halaman ke halaman utama setelah 2 detik
      navigation.replace('Login');
    }, 2000);

    // Membersihkan timeout jika komponen dilepas sebelum timeout selesai
    return () => clearTimeout(splashTimeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Selamat Datang</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;