import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { Info, Heart, ShieldCheck, Mail } from 'lucide-react-native';

export default function AboutScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <ScreenHeader title="Hakkımızda" onMenuPress={() => setIsSidebarOpen(true)} />
      <ScrollView className="flex-1 p-6" showsVerticalScrollIndicator={false}>
        <View className="items-center mb-8">
          <View className="w-24 h-24 bg-[#F8F4FF] rounded-[30px] items-center justify-center mb-4">
            <Heart size={48} color="#6A1B9A" fill="#6A1B9A" />
          </View>
          <Text className="text-3xl font-bold text-[#6A1B9A]">Hifertility</Text>
          <Text className="text-[#6A1B9A]/60 font-bold uppercase tracking-widest text-xs mt-2">Versiyon 1.0.0</Text>
        </View>

        <View className="bg-[#F8F4FF] p-6 rounded-[30px] border border-[#F3E5F5] mb-6">
          <Text className="text-lg font-bold text-[#6A1B9A] mb-3">Misyonumuz</Text>
          <Text className="text-[#6A1B9A]/70 font-medium leading-relaxed">
            Hifertility, doğurganlık ve wellness yolculuğunuzda size rehberlik etmek için tasarlanmış kapsamlı bir platformdur. 
            Bilimsel yaklaşımları, uzman görüşlerini ve topluluk desteğini tek bir yerde sunuyoruz.
          </Text>
        </View>

        <View className="flex-row gap-4 mb-10">
          <View className="bg-[#F8F4FF] p-6 rounded-[30px] border border-[#F3E5F5] flex-1 items-center">
            <ShieldCheck size={32} color="#6A1B9A" className="mb-3" />
            <Text className="text-[#6A1B9A] font-bold">Güvenli Veri</Text>
          </View>
          <View className="bg-[#F8F4FF] p-6 rounded-[30px] border border-[#F3E5F5] flex-1 items-center">
            <Mail size={32} color="#6A1B9A" className="mb-3" />
            <Text className="text-[#6A1B9A] font-bold">İletişim</Text>
          </View>
        </View>
      </ScrollView>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
