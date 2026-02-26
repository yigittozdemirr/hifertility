import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { 
  Bell, 
  Clipboard, 
  Users, 
  Map, 
  GraduationCap, 
  FileText, 
  ClipboardList, 
  MessageSquare, 
  Info,
  Activity,
  X,
  Sparkles
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

const MENU_ITEMS = [
  { id: 'notifications', label: 'Notifications', icon: Bell, route: '/notifications' },
  { id: 'homework', label: 'Homework (Ev Ödevi)', icon: Clipboard, route: '/homework' },
  { id: 'experts', label: 'Counseling', icon: Users, route: '/experts' },
  { id: 'roadmap', label: 'Roadmap', icon: Map, route: '/roadmap' },
  { id: 'courses', label: 'Courses', icon: GraduationCap, route: '/(tabs)/courses' },
  { id: 'blog', label: 'Blog', icon: FileText, route: '/(tabs)' },
  { id: 'surveys', label: 'Surveys', icon: ClipboardList, route: '/surveys' },
  { id: 'forum', label: 'Forum', icon: MessageSquare, route: '/forum' },
  { id: 'lifestyle', label: 'Lifestyle Tracker', icon: Activity, route: '/lifestyle' },
  { id: 'about', label: 'About Us', icon: Info, route: '/about' },
];

export function CustomDrawerContent(props: DrawerContentComponentProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { state, refreshAffirmation } = useApp();

  // Update affirmation on every open (mount of drawer content)
  useEffect(() => {
    refreshAffirmation();
  }, []);

  const handleNavigate = (route: string) => {
    props.navigation.closeDrawer();
    router.push(route as any);
  };

  return (
    <View className="flex-1 bg-white">
      <View 
        style={{ paddingTop: insets.top + 20 }} 
        className="px-6 pb-6 border-b border-[#F3E5F5] flex-row items-center justify-between bg-white"
      >
        <Text className="text-2xl font-bold text-[#6A1B9A]">Hifertility</Text>
        <TouchableOpacity 
          onPress={() => props.navigation.closeDrawer()}
          className="w-10 h-10 items-center justify-center rounded-full bg-[#F8F4FF]"
        >
          <X size={24} color="#6A1B9A" />
        </TouchableOpacity>
      </View>
      
      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 20 }}>
        <View className="px-4">
          <View className="mb-6 bg-[#F8F4FF] p-5 rounded-3xl border border-[#F3E5F5]">
            <View className="flex-row items-center mb-3">
              <Sparkles size={18} color="#6A1B9A" />
              <Text className="ml-2 text-[#6A1B9A] font-bold uppercase text-[10px] tracking-widest">Günün İlhamı</Text>
            </View>
            <Text className="text-[#6A1B9A] font-medium leading-relaxed italic">
              "{state.affirmation}"
            </Text>
          </View>

          {MENU_ITEMS.map((item) => (
            <TouchableOpacity 
              key={item.id}
              className="flex-row items-center p-4 mb-2 rounded-2xl bg-[#F8F4FF] active:bg-[#F3E5F5]"
              onPress={() => handleNavigate(item.route)}
              activeOpacity={0.7}
            >
              <View className="w-10 h-10 rounded-full bg-white items-center justify-center shadow-sm shadow-purple-100">
                <item.icon size={20} color="#6A1B9A" />
              </View>
              <Text className="ml-4 text-base text-[#6A1B9A] font-semibold">{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>
      
      <View style={{ paddingBottom: insets.bottom + 20 }} className="p-6 border-t border-[#F3E5F5]">
        <Text className="text-[#6A1B9A]/50 text-xs font-bold uppercase tracking-widest text-center">Versiyon 1.0.0</Text>
      </View>
    </View>
  );
}
