import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { MapPin, CheckCircle2 } from 'lucide-react-native';

const STEPS = [
  { id: '1', title: 'Initial Assessment', completed: true },
  { id: '2', title: 'Nutrition Phase', completed: true },
  { id: '3', title: 'Wellness Integration', completed: false },
  { id: '4', title: 'Ongoing Support', completed: false },
];

export default function RoadmapScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <ScreenHeader title="Yol Haritası" onMenuPress={() => setIsSidebarOpen(true)} />
      <ScrollView className="flex-1 p-6" showsVerticalScrollIndicator={false}>
        <View className="pl-4 border-l-2 border-[#D1C4E9]">
          {STEPS.map((step, index) => (
            <View key={step.id} className="mb-12 relative">
              <View 
                className={`absolute left-[-26] top-0 w-5 h-5 rounded-full border-4 border-white ${step.completed ? 'bg-[#6A1B9A]' : 'bg-[#D1C4E9]'}`} 
              />
              <View className="bg-[#F8F4FF] p-6 rounded-[25px] border border-[#F3E5F5]">
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-lg font-bold text-[#6A1B9A]">{step.title}</Text>
                  {step.completed && <CheckCircle2 size={20} color="#6A1B9A" />}
                </View>
                <Text className="text-[#6A1B9A]/60 font-medium">
                  {step.completed ? 'Tamamlandı' : 'Sıradaki Adım'}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
