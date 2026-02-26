import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, ShieldCheck, Lock, Fingerprint, Eye } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SecurityScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [isBiometricEnabled, setIsBiometricEnabled] = React.useState(true);
  const [isPrivateAccount, setIsPrivateAccount] = React.useState(false);

  return (
    <View className="flex-1 bg-white">
      <View style={{ paddingTop: insets.top + 10 }} className="px-4 pb-4 flex-row items-center border-b border-[#F3E5F5]">
        <TouchableOpacity 
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center rounded-full bg-[#F8F4FF]"
        >
          <ArrowLeft size={24} color="#6A1B9A" />
        </TouchableOpacity>
        <Text className="ml-4 text-xl font-bold text-[#6A1B9A]">Güvenlik</Text>
      </View>

      <ScrollView className="flex-1 p-6">
        <View className="bg-[#F8F4FF] p-6 rounded-[30px] border border-[#F3E5F5] mb-8">
          <View className="flex-row items-center mb-4">
            <ShieldCheck size={24} color="#6A1B9A" />
            <Text className="ml-3 text-lg font-bold text-[#6A1B9A]">Hesap Güvenliği</Text>
          </View>
          <Text className="text-[#6A1B9A]/60 font-medium">
            Verileriniz uçtan uca şifrelenmiştir ve sadece sizin tarafınızdan erişilebilir.
          </Text>
        </View>

        <View className="space-y-4">
          <View className="flex-row items-center justify-between p-4 bg-white rounded-2xl border border-[#F3E5F5] mb-4">
            <View className="flex-row items-center">
              <Fingerprint size={20} color="#6A1B9A" />
              <Text className="ml-3 text-[#6A1B9A] font-bold">Biyometrik Giriş</Text>
            </View>
            <Switch 
              value={isBiometricEnabled} 
              onValueChange={setIsBiometricEnabled}
              trackColor={{ false: "#D1C4E9", true: "#6A1B9A" }}
              thumbColor="white"
            />
          </View>

          <View className="flex-row items-center justify-between p-4 bg-white rounded-2xl border border-[#F3E5F5] mb-4">
            <View className="flex-row items-center">
              <Eye size={20} color="#6A1B9A" />
              <Text className="ml-3 text-[#6A1B9A] font-bold">Gizli Hesap</Text>
            </View>
            <Switch 
              value={isPrivateAccount} 
              onValueChange={setIsPrivateAccount}
              trackColor={{ false: "#D1C4E9", true: "#6A1B9A" }}
              thumbColor="white"
            />
          </View>

          <TouchableOpacity 
            onPress={() => Alert.alert("Şifre Değiştir", "Şifre sıfırlama e-postası gönderildi.")}
            className="flex-row items-center justify-between p-5 bg-white rounded-2xl border border-[#F3E5F5] mb-4"
          >
            <View className="flex-row items-center">
              <Lock size={20} color="#6A1B9A" />
              <Text className="ml-3 text-[#6A1B9A] font-bold">Şifreyi Değiştir</Text>
            </View>
            <ArrowLeft size={18} color="#6A1B9A" style={{ transform: [{ rotate: '180deg' }] }} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
