import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { BellRing, CheckCircle2, MessageSquare, Heart } from 'lucide-react-native';

const NOTIFICATIONS = [
  {
    id: '1',
    message: 'Uyku günlüğü tutmayı unutmayın',
    time: '2 saat önce',
    read: false,
    icon: BellRing,
    color: '#6A1B9A',
  },
  {
    id: '2',
    message: 'Olumlamalar: "Vücudum yetenekli ve güçlü"',
    time: '5 saat önce',
    read: true,
    icon: Heart,
    color: '#E91E63',
  },
  {
    id: '3',
    message: 'Prenatal vitaminlerinizi aldınız mı?',
    time: 'Dün',
    read: true,
    icon: CheckCircle2,
    color: '#4CAF50',
  },
  {
    id: '4',
    message: 'Yeni kurs yayında: Sağlıklı Alışkanlıklar',
    time: 'Dün',
    read: true,
    icon: MessageSquare,
    color: '#2196F3',
  },
  {
    id: '5',
    message: 'Su içme hatırlatıcısı',
    time: '2 gün önce',
    read: true,
    icon: BellRing,
    color: '#6A1B9A',
  },
];

export default function NotificationsScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <ScreenHeader title="Bildirimler" onMenuPress={() => setIsSidebarOpen(true)} />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-4">
          <View className="flex-row items-center justify-between mb-6 px-2">
            <Text className="text-xl font-bold text-[#6A1B9A]">Son Bildirimler</Text>
            <TouchableOpacity>
              <Text className="text-[#6A1B9A]/60 font-bold text-xs uppercase tracking-wider">Hepsini Oku</Text>
            </TouchableOpacity>
          </View>
          
          {NOTIFICATIONS.map((notif) => (
            <TouchableOpacity 
              key={notif.id}
              className={`flex-row items-center p-5 rounded-[25px] mb-4 border ${notif.read ? 'bg-white border-[#F3E5F5]' : 'bg-[#F8F4FF] border-[#6A1B9A]/10 shadow-sm shadow-purple-100'}`}
              activeOpacity={0.7}
            >
              <View 
                style={{ backgroundColor: `${notif.color}15` }}
                className="w-14 h-14 rounded-2xl items-center justify-center mr-4"
              >
                <notif.icon size={26} color={notif.color} />
              </View>
              <View className="flex-1">
                <Text className={`text-base font-bold text-[#6A1B9A] ${notif.read ? 'opacity-60' : ''}`}>
                  {notif.message}
                </Text>
                <Text className="text-xs text-[#6A1B9A]/40 font-bold mt-1.5 uppercase">{notif.time}</Text>
              </View>
              {!notif.read && <View className="w-3 h-3 bg-[#6A1B9A] rounded-full ml-2" />}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
