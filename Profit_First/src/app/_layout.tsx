import { Tabs, Slot, Stack } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



export default function RootLayout() {
    return (
        <Tabs>

<Tabs.Screen
             name="allocations" 
             options={{ title: 'Allocations', 
                headerShown: false,
             tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="account-tree" size={24} color="black" />
             ),
             }} />
            <Tabs.Screen
             name="accounts" 
             options={{ title: 'Accounts', 
             tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="account-balance-wallet" size={24} color="black" />
             ),
             }}
            />
            <Tabs.Screen
             name="index"
             options={{
             href: null,
             }}/>
            
        </Tabs>
    );
}