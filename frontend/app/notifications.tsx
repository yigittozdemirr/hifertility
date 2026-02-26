import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { BellRing, CheckCircle2 } from 'lucide-react-native';

const NOTIFICATIONS = [
  {
    id: '1',
    message: 'Keep a sleep diary',
    time: '2 hours ago',
    read: false,
    icon: BellRing,
  },
  {
    id: '2',
    message: 'Positive affirmations: "My body is capable and strong"',
    time: '5 hours ago',
    read: true,
    icon: CheckCircle2,
  },
  {
    id: '3',
    message: 'Time for your prenatal vitamins',
    time: 'Yesterday',
    read: true,
    icon: BellRing,
  },
  {
    id: '4',
    message: 'New course available: Healthy Habits',
    time: 'Yesterday',
    read: true,
    icon: BellRing,
  },
];

export default function NotificationsScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-background">
      <ScreenHeader title="Bildirim" onMenuPress={() => setIsSidebarOpen(true)} />
      
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-xl font-bold text-primary">Recent Notifications</Text>
          <TouchableOpacity>
            <Text className="text-primary font-medium">Mark all as read</Text>
          </TouchableOpacity>
        </View>
        
        {NOTIFICATIONS.map((notif) => (
          <View 
            key={notif.id}
            className={`flex-row items-center p-4 rounded-2xl mb-4 border ${notif.read ? 'bg-white border-secondary' : 'bg-primary/5 border-primary/20'}`}
          >
            <View className={`p-3 rounded-xl mr-4 ${notif.read ? 'bg-secondary' : 'bg-primary/10'}`}>
              <notif.icon size={24} color="#6A1B9A" />
            </View>
            <View className="flex-1">
              <Text className={`text-base font-medium text-primary ${notif.read ? 'opacity-70' : ''}`}>
                {notif.message}
              </Text>
              <Text className="text-xs text-muted-foreground mt-1">{notif.time}</Text>
            </View>
            {!notif.read && <View className="w-3 h-3 bg-primary rounded-full" />}
          </View>
        ))}
      </ScrollView>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
