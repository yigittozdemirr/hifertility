import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Save, Heart, Scale, Ruler, Calendar } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useApp } from '@/context/AppContext';

export default function HealthDataScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { state, updateUserData } = useApp();
  
  const [formData, setFormData] = useState({
    name: state.userData.name,
    height: state.userData.height,
    weight: state.userData.weight,
    cycleLength: state.userData.cycleLength,
  });

  const handleSave = () => {
    updateUserData(formData);
    Alert.alert("Başarılı", "Sağlık verileriniz güncellendi.");
    router.back();
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <View style={{ paddingTop: insets.top + 10 }} className="px-4 pb-4 flex-row items-center border-b border-[#F3E5F5]">
        <TouchableOpacity 
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center rounded-full bg-[#F8F4FF]"
        >
          <ArrowLeft size={24} color="#6A1B9A" />
        </TouchableOpacity>
        <Text className="ml-4 text-xl font-bold text-[#6A1B9A]">Sağlık Verilerim</Text>
      </View>

      <ScrollView className="flex-1 p-6">
        <View className="mb-8 items-center">
          <View className="w-20 h-20 rounded-3xl bg-[#F8F4FF] items-center justify-center mb-4">
            <Heart size={40} color="#6A1B9A" />
          </View>
          <Text className="text-center text-[#6A1B9A]/60 font-medium">
            Doğru tahminler için lütfen güncel verilerinizi girin.
          </Text>
        </View>

        <View className="space-y-6">
          <View>
            <Text className="text-xs font-bold text-[#6A1B9A]/50 mb-2 uppercase tracking-widest">İsim</Text>
            <View className="flex-row items-center bg-[#F8F4FF] rounded-2xl px-4 border border-[#F3E5F5]">
              <TextInput 
                value={formData.name}
                onChangeText={(text) => setFormData({...formData, name: text})}
                className="flex-1 py-4 text-[#6A1B9A] font-bold"
              />
            </View>
          </View>

          <View className="flex-row gap-4">
            <View className="flex-1">
              <Text className="text-xs font-bold text-[#6A1B9A]/50 mb-2 uppercase tracking-widest">Boy (cm)</Text>
              <View className="flex-row items-center bg-[#F8F4FF] rounded-2xl px-4 border border-[#F3E5F5]">
                <Ruler size={18} color="#6A1B9A" />
                <TextInput 
                  value={formData.height}
                  onChangeText={(text) => setFormData({...formData, height: text})}
                  keyboardType="numeric"
                  className="flex-1 py-4 ml-2 text-[#6A1B9A] font-bold"
                />
              </View>
            </View>
            <View className="flex-1">
              <Text className="text-xs font-bold text-[#6A1B9A]/50 mb-2 uppercase tracking-widest">Kilo (kg)</Text>
              <View className="flex-row items-center bg-[#F8F4FF] rounded-2xl px-4 border border-[#F3E5F5]">
                <Scale size={18} color="#6A1B9A" />
                <TextInput 
                  value={formData.weight}
                  onChangeText={(text) => setFormData({...formData, weight: text})}
                  keyboardType="numeric"
                  className="flex-1 py-4 ml-2 text-[#6A1B9A] font-bold"
                />
              </View>
            </View>
          </View>

          <View>
            <Text className="text-xs font-bold text-[#6A1B9A]/50 mb-2 uppercase tracking-widest">Döngü Süresi (Gün)</Text>
            <View className="flex-row items-center bg-[#F8F4FF] rounded-2xl px-4 border border-[#F3E5F5]">
              <Calendar size={18} color="#6A1B9A" />
              <TextInput 
                value={formData.cycleLength}
                onChangeText={(text) => setFormData({...formData, cycleLength: text})}
                keyboardType="numeric"
                className="flex-1 py-4 ml-2 text-[#6A1B9A] font-bold"
              />
            </View>
          </View>
        </View>

        <TouchableOpacity 
          onPress={handleSave}
          className="mt-12 bg-[#6A1B9A] p-5 rounded-[25px] flex-row items-center justify-center shadow-lg shadow-purple-200"
        >
          <Save size={20} color="white" className="mr-2" />
          <Text className="text-white font-bold text-lg">Kaydet</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
