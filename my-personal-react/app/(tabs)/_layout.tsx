import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { theme } from '../theme';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: theme.header,
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: theme.tabBar,
            }}>
            <Tabs.Screen name="index" options={{
                title: '關於我',
                tabBarIcon: ({ color, focused }) => (
                    <FontAwesome name={focused ? 'id-card' : 'id-card-o'} color={color} size={24} />
                ),
            }} />
            <Tabs.Screen name="works" options={{
                title: '作品集',
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'game-controller' : 'game-controller-outline'} color={color} size={24} />
                ),
            }} />
        </Tabs>
    );
}
