import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { BlogCard } from '@/components/BlogCard';
import { JourneyGarden } from '@/components/JourneyGarden';
import { useApp } from '@/context/AppContext';
import { useNavigation } from 'expo-router';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Top 5 Snacks for Fertility',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    comments: 18,
  },
  {
    id: '2',
    title: 'Sleep and Fertility: A Deep Dive',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    comments: 45,
  },
  {
    id: '3',
    title: 'Physical Activity and Reproductive Health',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
    comments: 23,
  },
];

export default function HomeScreen() {
  const { state } = useApp();
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <View className="flex-1 bg-white">
      <ScreenHeader 
        title="Hifertility" 
        onMenuPress={() => navigation.openDrawer()} 
      />
      
      <ScrollView className="flex-1 px-4 pt-4" showsVerticalScrollIndicator={false}>
        <View className="mb-6 bg-[#F8F4FF] p-6 rounded-[25px] border border-[#F3E5F5]">
          <Text className="text-2xl font-bold text-[#6A1B9A] mb-1">Merhaba, {state.userData.name} 👋</Text>
          <Text className="text-[#6A1B9A]/60 font-medium">Wellness yolculuğuna hoş geldin.</Text>
        </View>

        <JourneyGarden />

        <Text className="text-xl font-bold text-[#6A1B9A] mb-4">Günün Öne Çıkanları</Text>
        
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
        
        <View className="h-10" />
      </ScrollView>
    </View>
  );
}
