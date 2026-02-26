import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Play, CheckCircle2 } from 'lucide-react-native';
import { useApp } from '@/context/AppContext';

interface LessonCardProps {
  id: string;
  title: string;
  duration: string;
  image: string;
  onPress?: () => void;
}

export function LessonCard({ id, title, duration, image, onPress }: LessonCardProps) {
  const { state } = useApp();
  const lessonState = state.lessons[id] || { id, isCompleted: false };
  const progress = lessonState.isCompleted ? 100 : 0;

  return (
    <TouchableOpacity 
      onPress={onPress}
      className="bg-[#F8F4FF] rounded-[20px] mb-4 overflow-hidden border border-[#F3E5F5] p-3 flex-row items-center"
      activeOpacity={0.7}
    >
      <View className="relative">
        <Image source={{ uri: image }} className="w-24 h-24 rounded-2xl" />
        <View className="absolute inset-0 items-center justify-center bg-black/10 rounded-2xl">
          {lessonState.isCompleted ? (
            <View className="w-10 h-10 rounded-full bg-green-500 items-center justify-center">
              <CheckCircle2 size={24} color="white" />
            </View>
          ) : (
            <View className="w-10 h-10 rounded-full bg-white/30 items-center justify-center">
              <Play size={24} color="white" fill="white" />
            </View>
          )}
        </View>
      </View>
      
      <View className="flex-1 ml-4">
        <Text className="text-xl font-bold text-[#6A1B9A] mb-1">{title}</Text>
        <Text className="text-sm text-[#6A1B9A]/60 mb-3 font-medium">{duration}</Text>
        
        <View className="h-2 bg-[#F3E5F5] rounded-full overflow-hidden">
          <View 
            className={`h-full ${lessonState.isCompleted ? 'bg-green-500' : 'bg-[#6A1B9A]'}`}
            style={{ width: `${progress}%` }} 
          />
        </View>
        <Text className={`text-right text-[10px] mt-1 font-bold ${lessonState.isCompleted ? 'text-green-600' : 'text-[#6A1B9A]'}`}>
          {lessonState.isCompleted ? 'TAMAMLANDI' : `${progress}%`}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
