import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { MapPin, CheckCircle2, ChevronRight } from 'lucide-react-native';

export default function RoadmapScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [steps, setSteps] = useState([
    { id: '1', title: 'Initial Assessment', completed: true, desc: 'Profilinizi ve sağlık geçmişinizi oluşturun.' },
    { id: '2', title: 'Nutrition Phase', completed: true, desc: 'Fertilite dostu beslenme düzenine geçiş.' },
    { id: '3', title: 'Wellness Integration', completed: false, desc: 'Meditasyon ve yoga ile stres yönetimi.' },
    { id: '4', title: 'Ongoing Support', completed: false, desc: 'Uzman takibi ve topluluk desteği.' },
  ]);

  const handleStepPress = (step: any) => {
    Alert.alert(step.title, step.desc);
  };

  return (
    <View className="flex-1 bg-white">
      <ScreenHeader title="Yol Haritası" onMenuPress={() => setIsSidebarOpen(true)} />
      <ScrollView className="flex-1 p-6" showsVerticalScrollIndicator={false}>
        <View className="pl-4 border-l-2 border-[#D1C4E9]">
          {steps.map((step, index) => (
            <View key={step.id} className="mb-12 relative">
              <View 
                className={`absolute left-[-26] top-0 w-5 h-5 rounded-full border-4 border-white ${step.completed ? 'bg-[#6A1B9A]' : 'bg-[#D1C4E9]'}`} 
              />
              <TouchableOpacity 
                onPress={() => handleStepPress(step)}
                activeOpacity={0.7}
                className="bg-[#F8F4FF] p-6 rounded-[30px] border border-[#F3E5F5] shadow-sm shadow-purple-50"
              >
                <View className="flex-row items-center justify-between mb-2">
                  <Text className={`text-lg font-bold ${step.completed ? 'text-[#6A1B9A]' : 'text-[#6A1B9A]/60'}`}>
                    {step.title}
                  </Text>
                  {step.completed ? (
                    <CheckCircle2 size={20} color="#6A1B9A" />
                  ) : (
                    <ChevronRight size={18} color="#D1C4E9" />
                  )}
                </View>
                <Text className="text-[#6A1B9A]/60 font-medium text-sm">
                  {step.completed ? 'Tamamlandı' : 'Sıradaki Adım'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
