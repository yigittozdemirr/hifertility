import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Play, ChevronRight, CheckCircle2 } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function LessonDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View 
        style={{ paddingTop: insets.top + 10 }} 
        className="px-4 pb-4 flex-row items-center border-b border-[#F3E5F5]"
      >
        <TouchableOpacity 
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center rounded-full bg-[#F8F4FF]"
        >
          <ArrowLeft size={24} color="#6A1B9A" />
        </TouchableOpacity>
        <Text className="ml-4 text-xl font-bold text-[#6A1B9A]">Lesson Detail</Text>
      </View>

      <ScrollView className="flex-1">
        {/* Video Placeholder */}
        <View className="w-full aspect-video bg-black relative">
          <View className="absolute inset-0 items-center justify-center">
            <View className="w-16 h-16 rounded-full bg-white/30 items-center justify-center">
              <Play size={32} color="white" fill="white" />
            </View>
          </View>
          <View className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full">
            <View className="h-full bg-[#6A1B9A] w-1/3 rounded-full" />
          </View>
        </View>

        <View className="p-6">
          <Text className="text-2xl font-bold text-[#6A1B9A] mb-2">Ders-{id}: Beslenme ve Doğurganlık</Text>
          <Text className="text-[#6A1B9A]/60 text-base mb-6 leading-relaxed">
            Bu derste, sağlıklı beslenmenin üreme sağlığı üzerindeki etkilerini ve fertiliteyi artıran süper gıdaları öğreneceğiz.
          </Text>

          <View className="bg-[#F8F4FF] p-4 rounded-2xl mb-6">
            <Text className="text-[#6A1B9A] font-bold mb-4">Lesson Contents</Text>
            {[
              'Introduction to Fertility Nutrition',
              'Macro and Micro Nutrients',
              'Meal Planning for Success',
              'Q&A Session'
            ].map((item, index) => (
              <View key={index} className="flex-row items-center mb-3">
                <CheckCircle2 size={18} color={index === 0 ? "#6A1B9A" : "#D1C4E9"} />
                <Text className={`ml-3 text-base ${index === 0 ? "text-[#6A1B9A] font-semibold" : "text-[#6A1B9A]/50"}`}>
                  {item}
                </Text>
              </View>
            ))}
          </View>

          <TouchableOpacity 
            className="bg-[#6A1B9A] p-4 rounded-2xl items-center justify-center shadow-lg shadow-purple-200"
            onPress={() => router.back()}
          >
            <Text className="text-white font-bold text-lg">Mark as Completed</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
