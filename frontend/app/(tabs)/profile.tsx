import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { User, Settings, Heart, Activity, ShieldCheck, ChevronRight } from 'lucide-react-native';

export default function ProfileScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-background">
      <ScreenHeader title="Profile" onMenuPress={() => setIsSidebarOpen(true)} />
      
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View className="bg-white p-6 items-center border-b border-secondary">
          <View className="w-24 h-24 rounded-full bg-secondary items-center justify-center mb-4 border-2 border-primary/20">
            <User size={48} color="#6A1B9A" />
          </View>
          <Text className="text-2xl font-bold text-primary">Sarah Johnson</Text>
          <Text className="text-muted-foreground">Premium Member</Text>
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-around p-6 bg-white border-b border-secondary">
          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 rounded-full bg-secondary items-center justify-center mb-2">
              <Activity size={24} color="#6A1B9A" />
            </View>
            <Text className="text-xs font-medium text-primary">Stats</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="items-center"
            onPress={() => {/* Navigate to Lifestyle Tracker */}}
          >
            <View className="w-12 h-12 rounded-full bg-secondary items-center justify-center mb-2">
              <Heart size={24} color="#6A1B9A" />
            </View>
            <Text className="text-xs font-medium text-primary">Wellness</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <View className="w-12 h-12 rounded-full bg-secondary items-center justify-center mb-2">
              <Settings size={24} color="#6A1B9A" />
            </View>
            <Text className="text-xs font-medium text-primary">Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Sections */}
        <View className="p-4">
          <Text className="text-lg font-bold text-primary mb-4 ml-2">My Journey</Text>
          
          <TouchableOpacity 
            className="bg-white p-4 rounded-2xl mb-3 flex-row items-center justify-between shadow-sm border border-secondary"
            onPress={() => {/* Navigate to forum */}}
          >
            <View className="flex-row items-center">
              <View className="p-2 bg-secondary rounded-lg mr-3">
                <ShieldCheck size={20} color="#6A1B9A" />
              </View>
              <Text className="text-lg font-medium text-primary/80">Health Data</Text>
            </View>
            <ChevronRight size={20} color="#6A1B9A" />
          </TouchableOpacity>

          {/* Quick Stats/Infographic Preview */}
          <View className="bg-primary/5 p-6 rounded-[30px] border border-primary/10 mt-4">
            <Text className="text-primary font-bold text-lg mb-4">Physical Activity Guide</Text>
            <View className="flex-row justify-around mb-6">
              <View className="items-center">
                <View className="w-12 h-12 rounded-full bg-white items-center justify-center mb-2">
                  <Activity size={24} color="#6A1B9A" />
                </View>
                <Text className="text-[10px] text-center text-primary/70">Yoga</Text>
              </View>
              <View className="items-center">
                <View className="w-12 h-12 rounded-full bg-white items-center justify-center mb-2">
                  <Activity size={24} color="#6A1B9A" />
                </View>
                <Text className="text-[10px] text-center text-primary/70">Walking</Text>
              </View>
              <View className="items-center">
                <View className="w-12 h-12 rounded-full bg-white items-center justify-center mb-2">
                  <Activity size={24} color="#6A1B9A" />
                </View>
                <Text className="text-[10px] text-center text-primary/70">Pilates</Text>
              </View>
            </View>
            
            <View className="flex-row flex-wrap justify-center gap-2">
              <View className="bg-white px-3 py-1 rounded-full border border-primary/20">
                <Text className="text-[10px] text-primary">Blood Circulation</Text>
              </View>
              <View className="bg-white px-3 py-1 rounded-full border border-primary/20">
                <Text className="text-[10px] text-primary">Stress Reduction</Text>
              </View>
              <View className="bg-white px-3 py-1 rounded-full border border-primary/20">
                <Text className="text-[10px] text-primary">Ideal Weight</Text>
              </View>
            </View>
          </View>
        </View>
        
        <View className="h-10" />
      </ScrollView>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
