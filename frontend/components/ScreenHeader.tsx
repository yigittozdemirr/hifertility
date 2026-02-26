import { View, Text, TouchableOpacity } from 'react-native';
import { Menu, Bell } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

interface ScreenHeaderProps {
  title: string;
  onMenuPress?: () => void;
}

export function ScreenHeader({ title, onMenuPress }: ScreenHeaderProps) {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View 
      style={{ paddingTop: insets.top + 10 }} 
      className="bg-white px-4 pb-4 flex-row items-center justify-between"
    >
      <TouchableOpacity 
        onPress={onMenuPress}
        className="w-10 h-10 items-center justify-center rounded-full bg-[#F8F4FF]"
      >
        <Menu size={24} color="#6A1B9A" />
      </TouchableOpacity>
      
      <Text className="text-xl font-bold text-[#6A1B9A]">{title}</Text>
      
      <TouchableOpacity 
        onPress={() => router.push('/notifications')}
        className="w-10 h-10 items-center justify-center rounded-full bg-[#F8F4FF]"
      >
        <Bell size={24} color="#6A1B9A" />
      </TouchableOpacity>
    </View>
  );
}
