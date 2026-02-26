import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { ImagePlus, Send } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function ForumScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <View className="flex-1 bg-background">
      <ScreenHeader title="Community" onMenuPress={() => setIsSidebarOpen(true)} />
      
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        <View className="bg-white rounded-[20px] p-6 shadow-sm border border-secondary mb-6">
          <Text className="text-2xl font-bold text-primary mb-6">Create New Topic</Text>
          
          <View className="mb-4">
            <Text className="text-sm font-medium text-primary/60 mb-2">Recipient</Text>
            <View className="bg-secondary px-4 py-2 rounded-full self-start">
              <Text className="text-primary font-bold">Forum Yönetimi</Text>
            </View>
          </View>
          
          <View className="mb-4">
            <Text className="text-sm font-medium text-primary/60 mb-2">Subject</Text>
            <TextInput 
              placeholder="What's on your mind?"
              className="bg-secondary/30 p-4 rounded-xl text-primary"
              placeholderTextColor="#6A1B9A50"
            />
          </View>
          
          <View className="mb-6">
            <Text className="text-sm font-medium text-primary/60 mb-2">Message</Text>
            <TextInput 
              placeholder="Tell us more..."
              multiline
              numberOfLines={6}
              className="bg-secondary/30 p-4 rounded-xl text-primary h-32"
              textAlignVertical="top"
              placeholderTextColor="#6A1B9A50"
            />
          </View>
          
          <View className="flex-row items-center justify-between">
            <TouchableOpacity className="flex-row items-center bg-secondary px-4 py-2 rounded-xl">
              <ImagePlus size={20} color="#6A1B9A" />
              <Text className="ml-2 text-primary font-medium">Add Image</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="bg-primary p-4 rounded-full items-center justify-center">
              <Send size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-10">
          <Text className="text-xl font-bold text-primary mb-4">Trending Topics</Text>
          <View className="bg-white p-4 rounded-2xl border border-secondary mb-3">
            <Text className="font-bold text-primary mb-1">Success Stories: Our Journey</Text>
            <Text className="text-muted-foreground text-sm">24 comments • 3 hours ago</Text>
          </View>
          <View className="bg-white p-4 rounded-2xl border border-secondary">
            <Text className="font-bold text-primary mb-1">Nutrition Tips for TTC</Text>
            <Text className="text-muted-foreground text-sm">56 comments • 5 hours ago</Text>
          </View>
        </View>
      </ScrollView>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
