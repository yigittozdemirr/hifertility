import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { User, Settings, Heart, Activity, ShieldCheck, ChevronRight, LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <ScreenHeader title="Profil" onMenuPress={() => setIsSidebarOpen(true)} />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View className="p-8 items-center">
          <View className="w-32 h-32 rounded-[40px] bg-[#F8F4FF] items-center justify-center mb-4 shadow-sm shadow-purple-100 border border-[#F3E5F5]">
            <User size={64} color="#6A1B9A" />
          </View>
          <Text className="text-2xl font-bold text-[#6A1B9A]">Sarah Johnson</Text>
          <Text className="text-[#6A1B9A]/60 font-bold uppercase tracking-widest text-xs mt-1">Premium Üye</Text>
        </View>

        {/* Stats Row */}
        <View className="flex-row justify-around px-6 mb-8">
          <View className="bg-[#F8F4FF] p-5 rounded-[25px] items-center flex-1 mx-2 border border-[#F3E5F5]">
            <Text className="text-xl font-bold text-[#6A1B9A]">12</Text>
            <Text className="text-[10px] font-bold text-[#6A1B9A]/50 uppercase">Ders</Text>
          </View>
          <View className="bg-[#F8F4FF] p-5 rounded-[25px] items-center flex-1 mx-2 border border-[#F3E5F5]">
            <Text className="text-xl font-bold text-[#6A1B9A]">45</Text>
            <Text className="text-[10px] font-bold text-[#6A1B9A]/50 uppercase">Gün</Text>
          </View>
          <View className="bg-[#F8F4FF] p-5 rounded-[25px] items-center flex-1 mx-2 border border-[#F3E5F5]">
            <Text className="text-xl font-bold text-[#6A1B9A]">8</Text>
            <Text className="text-[10px] font-bold text-[#6A1B9A]/50 uppercase">Rozet</Text>
          </View>
        </View>

        {/* Menu Sections */}
        <View className="px-6">
          <Text className="text-lg font-bold text-[#6A1B9A] mb-4">Ayarlar</Text>
          
          {[
            { icon: Heart, label: 'Sağlık Verilerim' },
            { icon: ShieldCheck, label: 'Gizlilik ve Güvenlik' },
            { icon: Settings, label: 'Uygulama Ayarları' },
            { icon: LogOut, label: 'Çıkış Yap', color: '#E91E63' }
          ].map((item, index) => (
            <TouchableOpacity 
              key={index}
              className="bg-white p-5 rounded-[25px] mb-4 flex-row items-center justify-between border border-[#F3E5F5] shadow-sm shadow-purple-50"
            >
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-[#F8F4FF] rounded-2xl items-center justify-center mr-4">
                  <item.icon size={20} color={item.color || "#6A1B9A"} />
                </View>
                <Text className={`text-base font-bold ${item.color ? 'text-[#E91E63]' : 'text-[#6A1B9A]'}`}>{item.label}</Text>
              </View>
              <ChevronRight size={18} color={item.color || "#6A1B9A"} opacity={0.5} />
            </TouchableOpacity>
          ))}
        </View>
        
        <View className="h-10" />
      </ScrollView>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
