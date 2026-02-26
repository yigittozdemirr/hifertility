import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Play } from 'lucide-react-native';

interface LessonCardProps {
  title: string;
  duration: string;
  progress: number;
  image: string;
}

export function LessonCard({ title, duration, progress, image }: LessonCardProps) {
  return (
    <View className="bg-white rounded-[20px] mb-4 overflow-hidden border border-secondary p-3 flex-row items-center">
      <View className="relative">
        <Image source={{ uri: image }} className="w-20 h-20 rounded-xl" />
        <View className="absolute inset-0 items-center justify-center bg-black/20 rounded-xl">
          <Play size={20} color="white" fill="white" />
        </View>
      </View>
      
      <View className="flex-1 ml-4">
        <Text className="text-lg font-bold text-primary">{title}</Text>
        <Text className="text-sm text-muted-foreground mb-2">{duration}</Text>
        
        <View className="h-1.5 bg-secondary rounded-full overflow-hidden">
          <View 
            className="h-full bg-primary" 
            style={{ width: `${progress}%` }} 
          />
        </View>
      </View>
    </View>
  );
}
