import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Circle, CheckCircle2 } from 'lucide-react-native';
import { useNavigation } from 'expo-router';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export default function HomeworkScreen() {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Daily meal log', completed: true },
    { id: '2', title: '15 mins meditation', completed: false },
    { id: '3', title: 'Hydration goal (2L)', completed: false },
    { id: '4', title: 'Sleep tracker update', completed: true },
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        if (!t.completed) {
          Alert.alert("Başarılı!", `"${t.title}" görevini tamamladınız.`);
        }
        return { ...t, completed: !t.completed };
      }
      return t;
    }));
  };

  return (
    <View className="flex-1 bg-white">
      <ScreenHeader title="Ev Ödevi" onMenuPress={() => navigation.openDrawer()} />
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        <View className="bg-[#F8F4FF] rounded-[30px] p-6 border border-[#F3E5F5] mb-6">
          <Text className="text-2xl font-bold text-[#6A1B9A] mb-2">Günlük Görevlerim</Text>
          <Text className="text-[#6A1B9A]/60 font-medium mb-6">İlerlemeni takip et.</Text>
          
          {tasks.map((task) => (
            <TouchableOpacity 
              key={task.id}
              onPress={() => toggleTask(task.id)}
              className={`flex-row items-center bg-white p-5 rounded-2xl mb-4 shadow-sm border ${task.completed ? 'border-green-100' : 'border-[#F3E5F5]'}`}
              activeOpacity={0.7}
            >
              {task.completed ? (
                <CheckCircle2 size={24} color="#22C55E" />
              ) : (
                <Circle size={24} color="#D1C4E9" />
              )}
              <Text className={`ml-4 text-base font-bold ${task.completed ? 'text-green-600 line-through' : 'text-[#6A1B9A]'}`}>
                {task.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
