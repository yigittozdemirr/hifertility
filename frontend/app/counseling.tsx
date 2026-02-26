import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { MessageCircle, Phone } from 'lucide-react-native';

const COUNSELORS = [
  { id: '1', name: 'Dr. Ayşe Yılmaz', role: 'Fertilite Uzmanı', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80' },
  { id: '2', name: 'Dyt. Mehmet Can', role: 'Beslenme Danışmanı', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80' },
];

export default function CounselingScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <ScreenHeader title="Danışmanlık" onMenuPress={() => setIsSidebarOpen(true)} />
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        <Text className="text-xl font-bold text-[#6A1B9A] mb-4">Uzmanlarımız</Text>
        {COUNSELORS.map((c) => (
          <View key={c.id} className="bg-[#F8F4FF] rounded-[25px] p-5 mb-4 border border-[#F3E5F5] flex-row items-center">
            <Image source={{ uri: c.image }} className="w-16 h-16 rounded-2xl" />
            <View className="flex-1 ml-4">
              <Text className="text-lg font-bold text-[#6A1B9A]">{c.name}</Text>
              <Text className="text-[#6A1B9A]/60 font-medium">{c.role}</Text>
            </View>
            <View className="flex-row gap-2">
              <TouchableOpacity className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-sm">
                <MessageCircle size={20} color="#6A1B9A" />
              </TouchableOpacity>
              <TouchableOpacity className="w-10 h-10 bg-[#6A1B9A] rounded-full items-center justify-center shadow-md">
                <Phone size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
