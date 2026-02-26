import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native';
import { 
  Bell, 
  BookCheck, 
  Users, 
  Map, 
  GraduationCap, 
  FileText, 
  ClipboardList, 
  MessageSquare, 
  Info,
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
  { id: 'homework', label: 'Homework (Ev Ödevi)', icon: BookCheck, route: '/homework' },
  { id: 'counseling', label: 'Counseling', icon: Users, route: '/counseling' },
  { id: 'roadmap', label: 'Roadmap', icon: Map, route: '/roadmap' },
  { id: 'courses', label: 'Courses', icon: GraduationCap, route: '/courses' },
  { id: 'blog', label: 'Blog', icon: FileText, route: '/' },
  { id: 'surveys', label: 'Surveys', icon: ClipboardList, route: '/surveys' },
  { id: 'forum', label: 'Forum', icon: MessageSquare, route: '/forum' },
  { id: 'lifestyle', label: 'Lifestyle Tracker', icon: Activity, route: '/lifestyle' },
  { id: 'about', label: 'About Us', icon: Info, route: '/about' },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handleNavigate = (route: string) => {
    onClose();
    router.push(route as any);
  };

  return (
    <Modal
      visible={isOpen}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View className="flex-1 flex-row">
        <Pressable className="flex-1 bg-black/50" onPress={onClose} />
        
        <View 
          style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
          className="w-4/5 bg-white shadow-xl"
        >
          <View className="p-6 flex-row items-center justify-between border-b border-secondary">
            <Text className="text-2xl font-bold text-primary">Hifertility</Text>
            <TouchableOpacity onPress={onClose}>
              <X size={24} color="#6A1B9A" />
            </TouchableOpacity>
          </View>
          
          <ScrollView className="flex-1 p-4">
            {MENU_ITEMS.map((item) => (
              <TouchableOpacity 
                key={item.id}
                className="flex-row items-center p-4 mb-2 rounded-xl bg-secondary/50"
                onPress={() => handleNavigate(item.route)}
              >
                <item.icon size={20} color="#6A1B9A" />
                <Text className="ml-4 text-lg text-primary/80 font-medium">{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          
          <View className="p-6 border-t border-secondary">
            <Text className="text-muted-foreground text-sm">Version 1.0.0</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}
