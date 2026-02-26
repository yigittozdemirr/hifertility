import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle } from 'lucide-react-native';
import { useApp } from '@/context/AppContext';

interface BlogCardProps {
  id: string;
  title: string;
  image: string;
  comments: number;
}

export function BlogCard({ id, title, image, comments }: BlogCardProps) {
  const { state, toggleLike } = useApp();
  const postState = state.likes[id] || { id, likes: 0, isLiked: false };

  return (
    <View className="bg-[#F8F4FF] rounded-[20px] mb-4 overflow-hidden border border-[#F3E5F5]">
      <View className="p-2">
        <Image 
          source={{ uri: image }} 
          className="w-full h-48 rounded-[15px]" 
          resizeMode="cover"
        />
      </View>
      <View className="p-4 pt-2">
        <Text className="text-lg font-bold text-[#6A1B9A] mb-3 leading-tight">{title}</Text>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity 
            onPress={() => toggleLike(id)}
            className="flex-row items-center active:opacity-100"
            activeOpacity={1}
          >
            <Heart 
              size={20} 
              color={postState.isLiked ? "#E91E63" : "#6A1B9A"} 
              fill={postState.isLiked ? "#E91E63" : "transparent"}
            />
            <Text className={`ml-1.5 font-bold ${postState.isLiked ? "text-[#E91E63]" : "text-[#6A1B9A]"}`}>
              {postState.likes}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center" activeOpacity={0.7}>
            <MessageCircle size={20} color="#6A1B9A" />
            <Text className="ml-1.5 text-[#6A1B9A] font-bold">{comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
