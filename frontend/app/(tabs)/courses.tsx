import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { LessonCard } from '@/components/LessonCard';

const LESSONS = [
  {
    id: '1',
    title: 'Ders-1: Beslenme',
    duration: '15:30',
    progress: 100,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '2',
    title: 'Ders-2: Egzersiz',
    duration: '12:45',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '3',
    title: 'Ders-3: Uyku Düzeni',
    duration: '18:20',
    progress: 20,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: '4',
    title: 'Ders-4: Stress Yönetimi',
    duration: '22:10',
    progress: 0,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80',
  },
];

export default function CoursesScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-background">
      <ScreenHeader title="Dersler" onMenuPress={() => setIsSidebarOpen(true)} />
      
      <ScrollView className="flex-1 px-4 pt-4" showsVerticalScrollIndicator={false}>
        <Text className="text-xl font-bold text-primary mb-4">My Learning Path</Text>
        
        {LESSONS.map((lesson) => (
          <LessonCard key={lesson.id} {...lesson} />
        ))}
        
        <View className="h-10" />
      </ScrollView>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
