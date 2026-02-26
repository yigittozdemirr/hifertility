import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { Activity, Heart, Wind, Scale, ChevronRight, Zap, CloudMoon, Dumbbell } from 'lucide-react-native';

export default function LifestyleScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <ScreenHeader title="Lifestyle Tracker" onMenuPress={() => setIsSidebarOpen(true)} />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-4">
          {/* Physical Activity Section */}
          <View className="bg-[#F8F4FF] rounded-[30px] p-6 border border-[#F3E5F5] mb-6">
            <Text className="text-2xl font-bold text-[#6A1B9A] mb-2">Fiziksel Aktivite</Text>
            <Text className="text-[#6A1B9A]/60 font-medium mb-8">
              Egzersiz ile doğurganlığınızı destekleyin.
            </Text>
            
            {/* 2D Flat Icon Simulation */}
            <View className="flex-row justify-around w-full mb-10">
              <View className="items-center">
                <View className="w-24 h-24 bg-white rounded-3xl items-center justify-center mb-3 shadow-sm shadow-purple-200">
                  <Dumbbell size={48} color="#6A1B9A" />
                </View>
                <Text className="text-[#6A1B9A] font-bold">Yoga</Text>
              </View>
              <View className="items-center">
                <View className="w-24 h-24 bg-white rounded-3xl items-center justify-center mb-3 shadow-sm shadow-purple-200">
                  <Activity size={48} color="#6A1B9A" />
                </View>
                <Text className="text-[#6A1B9A] font-bold">Yürüyüş</Text>
              </View>
            </View>
            
            {/* Flowchart Bubbles */}
            <View className="w-full mt-4">
              <View className="flex-row justify-between items-center">
                <View className="bg-[#6A1B9A] px-4 py-6 rounded-3xl w-[30%] items-center justify-center shadow-lg shadow-purple-300">
                  <Zap size={20} color="white" className="mb-2" />
                  <Text className="text-white text-[10px] font-bold text-center">Kan Dolaşımı Artar</Text>
                </View>
                
                <View className="h-0.5 bg-[#D1C4E9] flex-1 mx-1" />
                
                <View className="bg-[#6A1B9A] px-4 py-6 rounded-3xl w-[30%] items-center justify-center shadow-lg shadow-purple-300">
                  <Heart size={20} color="white" className="mb-2" />
                  <Text className="text-white text-[10px] font-bold text-center">Stres Azalır</Text>
                </View>
                
                <View className="h-0.5 bg-[#D1C4E9] flex-1 mx-1" />
                
                <View className="bg-[#6A1B9A] px-4 py-6 rounded-3xl w-[30%] items-center justify-center shadow-lg shadow-purple-300">
                  <Scale size={20} color="white" className="mb-2" />
                  <Text className="text-white text-[10px] font-bold text-center">İdeal Kilo</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Sleep & Fertility Section */}
          <TouchableOpacity className="bg-[#6A1B9A] rounded-[30px] p-8 overflow-hidden relative mb-10">
            <View className="flex-1 pr-24">
              <Text className="text-2xl font-bold text-white mb-2">Uyku ve Fertilite</Text>
              <Text className="text-white/80 text-sm font-medium leading-relaxed">
                Dinlenmek hormon regülasyonu için temeldir. Uyku döngünüzü optimize etmeyi öğrenin.
              </Text>
              <View className="mt-6 flex-row items-center">
                <Text className="text-white font-bold mr-2">Detayları Gör</Text>
                <ChevronRight size={18} color="white" />
              </View>
            </View>
            
            {/* 2D Illustration simulation */}
            <View className="absolute right-[-10] bottom-[-20] w-48 h-48 opacity-20">
              <CloudMoon size={180} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
