import '@/global.css';
// import 'react-native-gesture-handler';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { ErrorBoundary } from './error-boundary';
import { AppProvider } from '@/context/AppContext';
import { CustomDrawerContent } from '@/components/Sidebar';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <ErrorBoundary>
      <AppProvider>
        <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
          <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
          <Drawer 
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
              headerShown: false,
              drawerType: 'slide',
              overlayColor: 'rgba(106, 27, 154, 0.4)',
              drawerStyle: {
                width: '80%',
              },
            }}
          >
            <Drawer.Screen
              name="(tabs)"
              options={{
                drawerLabel: 'Home',
                title: 'Hifertility',
              }}
            />
            <Drawer.Screen
              name="notifications"
              options={{ drawerLabel: 'Notifications' }}
            />
            <Drawer.Screen
              name="homework"
              options={{ drawerLabel: 'Homework' }}
            />
            <Drawer.Screen
              name="experts"
              options={{ drawerLabel: 'Counseling' }}
            />
            <Drawer.Screen
              name="roadmap"
              options={{ drawerLabel: 'Roadmap' }}
            />
            <Drawer.Screen
              name="surveys"
              options={{ drawerLabel: 'Surveys' }}
            />
            <Drawer.Screen
              name="forum"
              options={{ drawerLabel: 'Forum' }}
            />
            <Drawer.Screen
              name="lifestyle"
              options={{ drawerLabel: 'Lifestyle' }}
            />
            <Drawer.Screen
              name="about"
              options={{ drawerLabel: 'About' }}
            />
            <Drawer.Screen
              name="health-data"
              options={{ drawerLabel: 'Health Data' }}
            />
            <Drawer.Screen
              name="security"
              options={{ drawerLabel: 'Security' }}
            />
            <Drawer.Screen
              name="settings"
              options={{ drawerLabel: 'Settings' }}
            />
          </Drawer>
        </ThemeProvider>
      </AppProvider>
    </ErrorBoundary>
    );
}

const APP_VERSION = '1.0.1';
