import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { Activity, Heart, Wind, Scale } from 'lucide-react-native';

export default function LifestyleScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-background">
      <ScreenHeader title="Lifestyle Tracker" onMenuPress={() => setIsSidebarOpen(true)} />
      
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        <View className="bg-white rounded-[30px] p-8 shadow-sm border border-secondary mb-8 items-center">
          <Text className="text-2xl font-bold text-primary mb-2 text-center">Physical Activity Guide</Text>
          <Text className="text-muted-foreground text-center mb-8 px-4">
            A visual guide to help you maintain optimal fertility through exercise.
          </Text>
          
          {/* Main 2D Flat Icons for Exercise */}
          <View className="flex-row justify-around w-full mb-12">
            <View className="items-center">
              <View className="w-20 h-20 bg-secondary rounded-full items-center justify-center mb-4">
                <Activity size={40} color="#6A1B9A" />
              </View>
              <Text className="text-primary font-bold">Yoga</Text>
            </View>
            <View className="items-center">
              <View className="w-20 h-20 bg-secondary rounded-full items-center justify-center mb-4">
                <Wind size={40} color="#6A1B9A" />
              </View>
              <Text className="text-primary font-bold">Walking</Text>
            </View>
            <View className="items-center">
              <View className="w-20 h-20 bg-secondary rounded-full items-center justify-center mb-4">
                <Scale size={40} color="#6A1B9A" />
              </View>
              <Text className="text-primary font-bold">Pilates</Text>
            </View>
          </View>
          
          {/* Flowchart Bubbles at the Bottom */}
          <View className="w-full">
            <Text className="text-center text-primary/60 font-medium mb-6 uppercase tracking-widest text-xs">Benefits</Text>
            
            <View className="flex-row justify-between items-center px-2">
              <View className="bg-primary p-4 rounded-2xl w-[30%] aspect-square items-center justify-center shadow-lg">
                <Text className="text-white text-[10px] font-bold text-center">Blood Circulation</Text>
              </View>
              
              <View className="h-[2px] bg-secondary flex-1 mx-1" />
              
              <View className="bg-primary p-4 rounded-2xl w-[30%] aspect-square items-center justify-center shadow-lg">
                <Text className="text-white text-[10px] font-bold text-center">Stress Reduction</Text>
              </View>
              
              <View className="h-[2px] bg-secondary flex-1 mx-1" />
              
              <View className="bg-primary p-4 rounded-2xl w-[30%] aspect-square items-center justify-center shadow-lg">
                <Text className="text-white text-[10px] font-bold text-center">Ideal Weight</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Sensitive Topic Illustration Card */}
        <View className="bg-secondary/40 rounded-[30px] p-8 border border-primary/10 mb-10 overflow-hidden relative">
          <View className="flex-1 pr-20">
            <Text className="text-xl font-bold text-primary mb-2">Sleep & Fertility</Text>
            <Text className="text-primary/70 text-sm leading-relaxed">
              Rest is essential for hormone regulation. Learn how to optimize your sleep cycles for better fertility health.
            </Text>
          </View>
          
          {/* Conceptual 2D illustration placement */}
          <View className="absolute right-[-20] bottom-[-20] w-40 h-40 opacity-20">
            <Heart size={160} color="#6A1B9A" />
          </View>
        </View>
      </ScrollView>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
