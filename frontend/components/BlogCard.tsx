import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Heart, MessageCircle } from 'lucide-react-native';

interface BlogCardProps {
  title: string;
  image: string;
  likes: number;
  comments: number;
}

export function BlogCard({ title, image, likes: initialLikes, comments }: BlogCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  const toggleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

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
            onPress={toggleLike}
            className="flex-row items-center"
          >
            <Heart 
              size={20} 
              color={isLiked ? "#E91E63" : "#6A1B9A"} 
              fill={isLiked ? "#E91E63" : "transparent"}
            />
            <Text className="ml-1.5 text-[#6A1B9A] font-medium">{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center">
            <MessageCircle size={20} color="#6A1B9A" />
            <Text className="ml-1.5 text-[#6A1B9A] font-medium">{comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
