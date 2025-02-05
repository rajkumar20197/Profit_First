import { View, Text, StyleSheet } from 'react-native';
import AccountListItem from '../components/AccountListItem';
import AccountsList from '../components/AccountsList';

export default function AccountsScreen() {
  return (
    <View style={{ gap: 5, padding: 10 }}>

      <View style={styles.header}>
        <Text>Name</Text>
        <Text>Cap</Text>
        <Text>Tap</Text>        
      </View>

      <AccountsList />
      

      
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
 
});
