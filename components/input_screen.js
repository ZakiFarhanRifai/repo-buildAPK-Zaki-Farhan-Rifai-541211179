import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DaftarHadir = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [nama, setNama] = useState('');
  const [umur, setUmur] = useState('');
  const [nis, setNis] = useState('');
  
  
  const [kelas, setKelas] = useState('');
  const [noAbsen, setNoAbsen] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    const newItem = { nama,nis, umur,  kelas, noAbsen };

    if (editingIndex !== null) {
      // Update data
      const newData = [...data];
      newData[editingIndex] = newItem;
      setData(newData);
      setEditingIndex(null);
    } else {
      // Add new data
      setData([...data, newItem]);
    }

    // Reset form fields
    setNama('');
    setUmur('');
    setNis('');
    
    
    setKelas('');
    setNoAbsen('');
  };

  const handleEdit = (index) => {
    // Set form fields to the selected item for editing
    const selectedItem = data[index];
    setNama(selectedItem.nama);
    setUmur(selectedItem.umur);
    setNis(selectedItem.nis);
    
    
    setKelas(selectedItem.kelas);
    setNoAbsen(selectedItem.noAbsen);

    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    // Delete data
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const renderHeaderButton = () => (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <Text style={styles.backButtonText}>&lt; Kembali</Text>
    </TouchableOpacity>
  );

  const renderGenderRadio = (value, label) => (
    <View style={styles.radioContainer}>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => setGender(value)}
      >
        {gender === value && <View style={styles.radioInner} />}
      </TouchableOpacity>
      <Text>{label}</Text>
    </View>
  );

  const renderItem = ({ item, index }) => (
    <View style={styles.row}>
      <View style={styles.cell}>
      <Text>NAMA: {item.nama}</Text>
      <Text>Umur: {item.umur}</Text>
        <Text>NIS: {item.nis}</Text>
        
        
        <Text>KELAS: {item.kelas}</Text>
        <Text>NO ABSEN: {item.noAbsen}</Text>
      </View>

      <View style={styles.buttonCell}>
        <Button title="Edit" onPress={() => handleEdit(index)} color="dodgerblue" />
      </View>

      <View style={styles.buttonCell}>
        <Button title="Delete" onPress={() => handleDelete(index)} color="dodgerblue" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      
 <TextInput
        style={styles.input}
        placeholder="NAMA"
        value={nama}
        onChangeText={(text) => setNama(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Umur"
        value={umur}
        onChangeText={(text) => setUmur(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="NIS"
        value={nis}
        onChangeText={(text) => setNis(text)}
      />
     

     
      <TextInput
        style={styles.input}
        placeholder="KELAS"
        value={kelas}
        onChangeText={(text) => setKelas(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="NO ABSEN"
        value={noAbsen}
        onChangeText={(text) => setNoAbsen(text)}
      />

      <Button title={editingIndex !== null ? 'Update' : 'Add'} onPress={handleAdd} color="dodgerblue" />
      {renderHeaderButton()}

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 40, // Add some padding at the top
  },
  
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingLeft: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingBottom: 8,
    marginBottom: 8,
  },
  cell: {
    flex: 1,
  },
  buttonCell: {
    marginLeft: 8,
  },
  backButton: {
    padding: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'dodgerblue',
    marginTop:10,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'dodgerblue',
  },
});

export default DaftarHadir;