import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Bell, Moon, Globe, Trash2 } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true);

  return (
    <View className="flex-1 bg-white">
      <View style={{ paddingTop: insets.top + 10 }} className="px-4 pb-4 flex-row items-center border-b border-[#F3E5F5]">
        <TouchableOpacity 
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center rounded-full bg-[#F8F4FF]"
        >
          <ArrowLeft size={24} color="#6A1B9A" />
        </TouchableOpacity>
        <Text className="ml-4 text-xl font-bold text-[#6A1B9A]">Uygulama Ayarları</Text>
      </View>

      <ScrollView className="flex-1 p-6">
        <View className="space-y-4">
          <View className="flex-row items-center justify-between p-4 bg-white rounded-2xl border border-[#F3E5F5] mb-4">
            <View className="flex-row items-center">
              <Bell size={20} color="#6A1B9A" />
              <Text className="ml-3 text-[#6A1B9A] font-bold">Bildirimler</Text>
            </View>
            <Switch 
              value={isNotificationsEnabled} 
              onValueChange={setIsNotificationsEnabled}
              trackColor={{ false: "#D1C4E9", true: "#6A1B9A" }}
              thumbColor="white"
            />
          </View>

          <View className="flex-row items-center justify-between p-4 bg-white rounded-2xl border border-[#F3E5F5] mb-4">
            <View className="flex-row items-center">
              <Moon size={20} color="#6A1B9A" />
              <Text className="ml-3 text-[#6A1B9A] font-bold">Karanlık Mod</Text>
            </View>
            <Switch 
              value={isDarkMode} 
              onValueChange={setIsDarkMode}
              trackColor={{ false: "#D1C4E9", true: "#6A1B9A" }}
              thumbColor="white"
            />
          </View>

          <TouchableOpacity className="flex-row items-center justify-between p-5 bg-white rounded-2xl border border-[#F3E5F5] mb-4">
            <View className="flex-row items-center">
              <Globe size={20} color="#6A1B9A" />
              <Text className="ml-3 text-[#6A1B9A] font-bold">Dil</Text>
            </View>
            <Text className="text-[#6A1B9A]/60 font-bold">Türkçe</Text>
          </TouchableOpacity>

          <View className="h-10" />

          <TouchableOpacity 
            onPress={() => Alert.alert("Hesabı Sil", "Tüm verileriniz kalıcı olarak silinecek. Emin misiniz?", [
              { text: "İptal", style: "cancel" },
              { text: "Evet, Sil", style: "destructive" }
            ])}
            className="flex-row items-center justify-center p-5 bg-red-50 rounded-3xl border border-red-100"
          >
            <Trash2 size={20} color="#EF4444" className="mr-2" />
            <Text className="text-[#EF4444] font-bold">Hesabı Sil</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
