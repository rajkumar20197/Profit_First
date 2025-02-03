import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
    return (
        <Tabs>

<Tabs.Screen
             name="tree" 
             options={{ title: 'Tree', 
             tabBarIcon: ({ color, size }) => (
             <MaterialIcons
              name="account-tree" 
              size={size} color={color} />
             ),
             }} />
            <Tabs.Screen
             name="allocation" 
             options={{ title: 'Allocation', 
             tabBarIcon: ({ color, size }) => (
             <MaterialIcons
              name="account-balance-wallet" 
              size={size} color={color} />
             ),
             }}
            />
            
        </Tabs>
    );
}