import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import AccountsList from '../components/AccountsList';
import Entypo from '@expo/vector-icons/Entypo';
import React, { useState } from 'react';


export default function AccountsScreen() {
  const [name, setName] = useState('');
  const [cap, setCap] = useState('');
  const [tap, setTap] = useState('');
  
const createAccount = () => {
  console.warn('Create Account', name,);
};
 
  return (
    <View style={{ gap: 5, padding: 10 }}>

      <View style={styles.header}>
        <Text>Name</Text>
        <Text>Cap</Text>
        <Text>Tap</Text>        
      </View>

      <AccountsList />

      <View style={styles.inputRow}>
        <TextInput value={name} onChangeText={setName} placeholder="Name" style={styles.input} />
        <TextInput value={cap} onChangeText={setCap} placeholder="Cap %" style={styles.input} />
        <TextInput value={tap} onChangeText={setTap} placeholder="Tap %" style={styles.input} />
        <Entypo name="check" size={24} color="green" />
        

        
        
      </View>

      <Button title="Add Account" onPress={createAccount}/>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    // padding: 5,
    // margin: 5,
    // backgroundColor: 'lightgrey',
    // borderRadius: 5,
  },
});
