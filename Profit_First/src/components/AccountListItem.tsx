import { Text, View, StyleSheet } from 'react-native';


export default function AccountListItem() {



    return (
        <View style={styles.container}>
        <Text style={styles.name}>Profit</Text>
        <Text style={styles.percentage}>10%</Text>
        <Text style={styles.percentage}>20%</Text>

        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        
    },
    name: { 
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    percentage: {   
        fontSize: 16,
        fontWeight: 'bold',
    },
});
    