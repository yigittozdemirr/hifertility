import React, { useState } from 'react';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { BlogCard } from '@/components/BlogCard';

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Top 5 Snacks for Fertility',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80',
    likes: 124,
    comments: 18,
  },
  {
    id: '2',
    title: 'Understanding Your Ovulation Cycle',
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=800&q=80',
    likes: 89,
    comments: 12,
  },
  {
    id: '3',
    title: 'Sleep and Fertility: A Deep Dive',
    image: 'https://images.unsplash.com/photo-1511295742364-917e70331821?auto=format&fit=crop&w=800&q=80',
    likes: 215,
    comments: 45,
  },
];

export default function HomeScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-background">
      <ScreenHeader title="Hifertility" onMenuPress={() => setIsSidebarOpen(true)} />
      
      <ScrollView className="flex-1 px-4 pt-4" showsVerticalScrollIndicator={false}>
        <View className="mb-6">
          <Text className="text-2xl font-bold text-primary mb-1">Hello, Sarah</Text>
          <Text className="text-muted-foreground">Welcome back to your wellness journey.</Text>
        </View>

        <Text className="text-xl font-bold text-primary mb-4">Latest Articles</Text>
        
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
        
        <View className="h-10" />
      </ScrollView>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
