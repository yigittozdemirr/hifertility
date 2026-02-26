import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { ClipboardList, ArrowRight } from 'lucide-react-native';

const SURVEYS = [
  { id: '1', title: 'Wellness Satisfaction', duration: '5 min' },
  { id: '2', title: 'Nutrition Feedback', duration: '3 min' },
  { id: '3', title: 'App Experience', duration: '2 min' },
];

export default function SurveysScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <ScreenHeader title="Anketler" onMenuPress={() => setIsSidebarOpen(true)} />
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        <Text className="text-xl font-bold text-[#6A1B9A] mb-4">Açık Anketler</Text>
        {SURVEYS.map((s) => (
          <TouchableOpacity 
            key={s.id} 
            className="bg-[#F8F4FF] rounded-[25px] p-6 mb-4 border border-[#F3E5F5] flex-row items-center justify-between shadow-sm shadow-purple-50"
          >
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-white rounded-2xl items-center justify-center mr-4">
                <ClipboardList size={24} color="#6A1B9A" />
              </View>
              <View>
                <Text className="text-lg font-bold text-[#6A1B9A]">{s.title}</Text>
                <Text className="text-[#6A1B9A]/60 font-medium">{s.duration}</Text>
              </View>
            </View>
            <ArrowRight size={20} color="#6A1B9A" />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
