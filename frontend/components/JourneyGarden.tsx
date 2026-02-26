import React from 'react';
import { View, Text } from 'react-native';
import { Sprout, Flower2, Flower } from 'lucide-react-native';
import { useApp } from '@/context/AppContext';

export function JourneyGarden() {
  const { state } = useApp();
  const { progress } = state;

  const renderPlant = () => {
    if (progress < 25) {
      return (
        <View className="items-center">
          <View className="w-20 h-20 bg-amber-100 rounded-full items-center justify-center mb-2">
            <View className="w-4 h-4 bg-amber-800 rounded-full" />
          </View>
          <Text className="text-[#6A1B9A] font-bold">Tohum</Text>
        </View>
      );
    } else if (progress < 75) {
      return (
        <View className="items-center">
          <View className="w-20 h-20 bg-green-50 rounded-full items-center justify-center mb-2">
            <Sprout size={48} color="#2E7D32" />
          </View>
          <Text className="text-[#6A1B9A] font-bold">Filiz</Text>
        </View>
      );
    } else if (progress < 100) {
      return (
        <View className="items-center">
          <View className="w-20 h-20 bg-green-50 rounded-full items-center justify-center mb-2">
            <Flower2 size={48} color="#C2185B" />
          </View>
          <Text className="text-[#6A1B9A] font-bold">Çiçek Açıyor</Text>
        </View>
      );
    } else {
      return (
        <View className="items-center">
          <View className="w-20 h-20 bg-purple-50 rounded-full items-center justify-center mb-2">
            <Flower size={48} color="#6A1B9A" />
          </View>
          <Text className="text-[#6A1B9A] font-bold">Tam Gelişim</Text>
        </View>
      );
    }
  };

  return (
    <View className="bg-white rounded-[25px] p-6 mb-6 border border-[#F3E5F5] shadow-sm shadow-purple-50">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold text-[#6A1B9A]">Yolculuğumun Bahçesi</Text>
        <Text className="text-[#6A1B9A]/50 font-bold">{Math.round(progress)}%</Text>
      </View>
      
      <View className="flex-row items-center justify-around">
        {renderPlant()}
        <View className="flex-1 ml-6">
          <Text className="text-[#6A1B9A]/70 text-sm font-medium mb-2">
            Eğitimleri ve aktiviteleri tamamladıkça bahçen büyüyecek.
          </Text>
          <View className="h-2 bg-[#F3E5F5] rounded-full overflow-hidden">
            <View 
              style={{ width: `${progress}%` }} 
              className="h-full bg-[#6A1B9A]" 
            />
          </View>
        </View>
      </View>
    </View>
  );
}
