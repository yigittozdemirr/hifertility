import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Play } from 'lucide-react-native';

interface LessonCardProps {
  title: string;
  duration: string;
  progress: number;
  image: string;
  onPress?: () => void;
}

export function LessonCard({ title, duration, progress, image, onPress }: LessonCardProps) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      className="bg-[#F8F4FF] rounded-[20px] mb-4 overflow-hidden border border-[#F3E5F5] p-3 flex-row items-center"
      activeOpacity={0.7}
    >
      <View className="relative">
        <Image source={{ uri: image }} className="w-24 h-24 rounded-2xl" />
        <View className="absolute inset-0 items-center justify-center bg-black/20 rounded-2xl">
          <View className="w-10 h-10 rounded-full bg-white/30 items-center justify-center">
            <Play size={24} color="white" fill="white" />
          </View>
        </View>
      </View>
      
      <View className="flex-1 ml-4">
        <Text className="text-xl font-bold text-[#6A1B9A] mb-1">{title}</Text>
        <Text className="text-sm text-[#6A1B9A]/60 mb-3 font-medium">{duration}</Text>
        
        <View className="h-2 bg-[#F3E5F5] rounded-full overflow-hidden">
          <View 
            className="h-full bg-[#6A1B9A]" 
            style={{ width: `${progress}%` }} 
          />
        </View>
        <Text className="text-right text-[10px] text-[#6A1B9A] mt-1 font-bold">{progress}%</Text>
      </View>
    </TouchableOpacity>
  );
}
