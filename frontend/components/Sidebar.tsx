import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Pressable, Animated, Dimensions } from 'react-native';
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
  X
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  { id: 'notifications', label: 'Notifications', icon: Bell, route: '/notifications' },
  { id: 'homework', label: 'Homework (Ev Ödevi)', icon: Clipboard, route: '/homework' },
  { id: 'counseling', label: 'Counseling', icon: Users, route: '/counseling' },
  { id: 'roadmap', label: 'Roadmap', icon: Map, route: '/roadmap' },
  { id: 'courses', label: 'Courses', icon: GraduationCap, route: '/courses' },
  { id: 'blog', label: 'Blog', icon: FileText, route: '/' },
  { id: 'surveys', label: 'Surveys', icon: ClipboardList, route: '/surveys' },
  { id: 'forum', label: 'Forum', icon: MessageSquare, route: '/forum' },
  { id: 'lifestyle', label: 'Lifestyle Tracker', icon: Activity, route: '/lifestyle' },
  { id: 'about', label: 'About Us', icon: Info, route: '/about' },
];

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.8;

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;

  useEffect(() => {
    if (isOpen) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -SIDEBAR_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpen]);

  const handleNavigate = (route: string) => {
    onClose();
    router.push(route as any);
  };

  return (
    <Modal
      visible={isOpen}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View className="flex-1">
        <Pressable 
          className="absolute inset-0 bg-black/40" 
          onPress={onClose} 
        />
        
        <Animated.View 
          style={{ 
            transform: [{ translateX: slideAnim }],
            width: SIDEBAR_WIDTH,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            height: '100%',
          }}
          className="bg-white shadow-2xl"
        >
          <View className="p-6 flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-[#6A1B9A]">Hifertility</Text>
            <TouchableOpacity onPress={onClose}>
              <X size={24} color="#6A1B9A" />
            </TouchableOpacity>
          </View>
          
          <ScrollView className="flex-1 px-4">
            {MENU_ITEMS.map((item) => (
              <TouchableOpacity 
                key={item.id}
                className="flex-row items-center p-4 mb-2 rounded-2xl bg-[#F8F4FF]"
                onPress={() => handleNavigate(item.route)}
                activeOpacity={0.7}
              >
                <View className="w-10 h-10 rounded-full bg-[#F3E5F5] items-center justify-center">
                  <item.icon size={20} color="#6A1B9A" />
                </View>
                <Text className="ml-4 text-base text-[#6A1B9A] font-semibold">{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          
          <View className="p-6 border-t border-[#F3E5F5]">
            <Text className="text-muted-foreground text-sm font-medium">Version 1.0.0</Text>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
}
