import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { MessageCircle, Phone, Heart } from 'lucide-react-native';
import { useNavigation } from 'expo-router';
import { DrawerNavigationProp } from '@react-navigation/drawer';

const COUNSELORS = [
  { id: '1', name: 'Dr. Ayşe Yılmaz', role: 'Fertilite Uzmanı', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80' },
  { id: '2', name: 'Dyt. Mehmet Can', role: 'Beslenme Danışmanı', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80' },
];

export default function ExpertsScreen() {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  const handleAction = (counselor: string, action: string) => {
    Alert.alert(
      action === 'chat' ? 'Mesaj Gönder' : 'Ara',
      `${counselor} ile ${action === 'chat' ? 'sohbet başlatılıyor...' : 'bağlantı kuruluyor...'}`
    );
  };

  return (
    <View className="flex-1 bg-white">
      <ScreenHeader title="Danışmanlık" onMenuPress={() => navigation.openDrawer()} />
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        <View className="bg-[#6A1B9A] p-6 rounded-[30px] mb-6 flex-row items-center justify-between overflow-hidden">
          <View className="flex-1 pr-4">
            <Text className="text-white text-xl font-bold mb-2">Uzman Desteği Alın</Text>
            <Text className="text-white/80 text-sm font-medium">Yolculuğunuzda size rehberlik edecek uzmanlarımız yanınızda.</Text>
          </View>
          <Heart size={48} color="white" opacity={0.2} />
        </View>

        <Text className="text-xl font-bold text-[#6A1B9A] mb-4 px-2">Uzmanlarımız</Text>
        {COUNSELORS.map((c) => (
          <View key={c.id} className="bg-[#F8F4FF] rounded-[30px] p-5 mb-4 border border-[#F3E5F5] flex-row items-center shadow-sm shadow-purple-50">
            <Image source={{ uri: c.image }} className="w-16 h-16 rounded-2xl" />
            <View className="flex-1 ml-4">
              <Text className="text-lg font-bold text-[#6A1B9A]">{c.name}</Text>
              <Text className="text-[#6A1B9A]/60 font-medium">{c.role}</Text>
            </View>
            <View className="flex-row gap-2">
              <TouchableOpacity 
                onPress={() => handleAction(c.name, 'chat')}
                activeOpacity={0.7}
                className="w-12 h-12 bg-white rounded-2xl items-center justify-center shadow-sm border border-[#F3E5F5]"
              >
                <MessageCircle size={22} color="#6A1B9A" />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => handleAction(c.name, 'call')}
                activeOpacity={0.7}
                className="w-12 h-12 bg-[#6A1B9A] rounded-2xl items-center justify-center shadow-lg shadow-purple-200"
              >
                <Phone size={22} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        
        <View className="mt-4 p-6 bg-[#F8F4FF] rounded-[30px] border border-[#F3E5F5] border-dashed items-center justify-center">
          <Text className="text-[#6A1B9A]/50 font-bold">Yakında Daha Fazla Uzman...</Text>
        </View>
      </ScrollView>
    </View>
  );
}
