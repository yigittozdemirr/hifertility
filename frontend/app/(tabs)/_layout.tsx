import { Tabs } from 'expo-router';
import { Home, GraduationCap, User } from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6A1B9A',
        tabBarInactiveTintColor: '#6A1B9A50',
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 10,
          textTransform: 'uppercase',
          letterSpacing: 0.5,
        },
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#F3E5F5',
          height: 85,
          paddingBottom: 25,
          paddingTop: 10,
          backgroundColor: 'white',
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Ana Sayfa',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: 'Dersler',
          tabBarIcon: ({ color }) => <GraduationCap size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
