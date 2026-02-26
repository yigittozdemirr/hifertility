import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { ClipboardCheck, Circle } from 'lucide-react-native';

const TASKS = [
  { id: '1', title: 'Daily meal log', completed: true },
  { id: '2', title: '15 mins meditation', completed: false },
  { id: '3', title: 'Hydration goal (2L)', completed: false },
  { id: '4', title: 'Sleep tracker update', completed: true },
];

export default function HomeworkScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <ScreenHeader title="Ev Ödevi" onMenuPress={() => setIsSidebarOpen(true)} />
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        <View className="bg-[#F8F4FF] rounded-[30px] p-6 border border-[#F3E5F5] mb-6">
          <Text className="text-2xl font-bold text-[#6A1B9A] mb-2">Günlük Görevlerim</Text>
          <Text className="text-[#6A1B9A]/60 font-medium mb-6">İlerlemeni takip et.</Text>
          
          {TASKS.map((task) => (
            <TouchableOpacity 
              key={task.id}
              className="flex-row items-center bg-white p-5 rounded-2xl mb-4 shadow-sm shadow-purple-50"
            >
              {task.completed ? (
                <ClipboardCheck size={24} color="#6A1B9A" />
              ) : (
                <Circle size={24} color="#6A1B9A/30" />
              )}
              <Text className={`ml-4 text-base font-bold text-[#6A1B9A] ${task.completed ? 'line-through opacity-50' : ''}`}>
                {task.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
