import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle } from 'lucide-react-native';

interface BlogCardProps {
  title: string;
  image: string;
  likes: number;
  comments: number;
}

export function BlogCard({ title, image, likes, comments }: BlogCardProps) {
  return (
    <View className="bg-white rounded-[20px] mb-4 overflow-hidden shadow-sm border border-secondary">
      <Image source={{ uri: image }} className="w-full h-48" />
      <View className="p-4">
        <Text className="text-lg font-bold text-primary mb-3 leading-tight">{title}</Text>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity className="flex-row items-center">
            <Heart size={20} color="#6A1B9A" />
            <Text className="ml-1 text-primary/70">{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center">
            <MessageCircle size={20} color="#6A1B9A" />
            <Text className="ml-1 text-primary/70">{comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
