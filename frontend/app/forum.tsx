import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { ImagePlus, Send, CheckCircle2, MessageSquare } from 'lucide-react-native';
import { useApp } from '@/context/AppContext';
import { useNavigation } from 'expo-router';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

export default function ForumScreen() {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { state, addForumPost } = useApp();

  const handleSubmit = () => {
    if (!subject || !message) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      addForumPost(subject, message);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setSubject('');
        setMessage('');
      }, 3000);
    }, 1500);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <ScreenHeader title="Community" onMenuPress={() => navigation.openDrawer()} />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="p-4">
          <View className="bg-[#F8F4FF] rounded-[30px] p-6 border border-[#F3E5F5] mb-6">
            <Text className="text-2xl font-bold text-[#6A1B9A] mb-6">Yeni Konu Aç</Text>
            
            <View className="mb-6">
              <Text className="text-xs font-bold text-[#6A1B9A]/50 mb-2 uppercase tracking-widest">Alıcı</Text>
              <View className="bg-[#6A1B9A] px-4 py-2 rounded-full self-start">
                <Text className="text-white font-bold text-xs">Forum Yönetimi</Text>
              </View>
            </View>
            
            <View className="mb-5">
              <Text className="text-xs font-bold text-[#6A1B9A]/50 mb-2 uppercase tracking-widest">Konu Başlığı</Text>
              <TextInput 
                value={subject}
                onChangeText={setSubject}
                placeholder="Başlık giriniz..."
                className="bg-white p-4 rounded-2xl text-[#6A1B9A] font-semibold shadow-sm shadow-purple-100"
                placeholderTextColor="#6A1B9A50"
              />
            </View>
            
            <View className="mb-8">
              <Text className="text-xs font-bold text-[#6A1B9A]/50 mb-2 uppercase tracking-widest">Mesajınız</Text>
              <TextInput 
                value={message}
                onChangeText={setMessage}
                placeholder="Mesajınızı detaylandırın..."
                multiline
                numberOfLines={6}
                className="bg-white p-4 rounded-2xl text-[#6A1B9A] h-40 font-medium shadow-sm shadow-purple-100"
                textAlignVertical="top"
                placeholderTextColor="#6A1B9A50"
              />
            </View>
            
            <View className="flex-row items-center justify-between">
              <TouchableOpacity className="flex-row items-center bg-white px-5 py-3 rounded-2xl shadow-sm shadow-purple-100" activeOpacity={0.7}>
                <ImagePlus size={20} color="#6A1B9A" />
                <Text className="ml-2 text-[#6A1B9A] font-bold">Görsel Ekle</Text>
              </TouchableOpacity>
              
                <TouchableOpacity 
                  onPress={handleSubmit}
                  disabled={isSubmitting || isSuccess}
                  className={`${isSuccess ? 'bg-green-500' : 'bg-[#6A1B9A]'} w-14 h-14 rounded-2xl items-center justify-center shadow-lg shadow-purple-300`}
                  activeOpacity={0.7}
                >
                  {isSubmitting ? (
                    <ActivityIndicator size="small" color="white" />
                  ) : isSuccess ? (
                    <CheckCircle2 size={28} color="white" />
                  ) : (
                    <Send size={24} color="white" />
                  )}
                </TouchableOpacity>
              </View>
  
              {isSuccess && (
                <Animated.View style={{ opacity: fadeAnim }}>
                  <View className="mt-4 items-center">
                    <Text className="text-green-600 font-bold">Konunuz başarıyla gönderildi!</Text>
                  </View>
                </Animated.View>
              )}
          </View>

          <View className="mb-10 px-2">
            <Text className="text-xl font-bold text-[#6A1B9A] mb-4">Tartışmalar</Text>
            {state.forumPosts.map((post) => (
              <View key={post.id} className="bg-white p-5 rounded-3xl border border-[#F3E5F5] mb-4 shadow-sm shadow-purple-50 flex-row items-center">
                <View className="w-12 h-12 rounded-2xl bg-[#F8F4FF] items-center justify-center mr-4">
                  <MessageSquare size={20} color="#6A1B9A" />
                </View>
                <View className="flex-1">
                  <Text className="font-bold text-[#6A1B9A] text-base mb-1">{post.subject}</Text>
                  <Text className="text-[#6A1B9A]/50 font-medium text-xs">{post.comments} yorum • {post.time}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
