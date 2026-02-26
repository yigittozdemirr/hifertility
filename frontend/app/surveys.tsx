import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, Alert } from 'react-native';
import { ScreenHeader } from '@/components/ScreenHeader';
import { Sidebar } from '@/components/Sidebar';
import { ClipboardList, ArrowRight, X, ChevronRight, CheckCircle2 } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SURVEYS = [
  { id: '1', title: 'Wellness Satisfaction', duration: '5 min' },
  { id: '2', title: 'Nutrition Feedback', duration: '3 min' },
  { id: '3', title: 'App Experience', duration: '2 min' },
];

const QUESTIONS = [
  {
    id: 1,
    text: "Uygulamayı ne sıklıkla kullanıyorsunuz?",
    options: ["Her gün", "Haftada birkaç kez", "Nadiren"],
  },
  {
    id: 2,
    text: "İçeriklerin faydalı olduğunu düşünüyor musunuz?",
    options: ["Kesinlikle", "Kısmen", "Hayır"],
  },
  {
    id: 3,
    text: "En çok hangi bölümü kullanıyorsunuz?",
    options: ["Dersler", "Blog", "Forum"],
  },
];

export default function SurveysScreen() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSurvey, setActiveSurvey] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const insets = useSafeAreaInsets();

  const handleStartSurvey = (survey: any) => {
    setActiveSurvey(survey);
    setCurrentStep(0);
    setAnswers({});
  };

  const handleAnswer = (option: string) => {
    setAnswers({ ...answers, [QUESTIONS[currentStep].id]: option });
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      Alert.alert("Başarılı!", "Anketi tamamladığınız için teşekkürler.", [
        { text: "Tamam", onPress: () => setActiveSurvey(null) }
      ]);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <ScreenHeader title="Anketler" onMenuPress={() => setIsSidebarOpen(true)} />
      
      <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
        <Text className="text-xl font-bold text-[#6A1B9A] mb-4">Açık Anketler</Text>
        {SURVEYS.map((s) => (
          <TouchableOpacity 
            key={s.id} 
            onPress={() => handleStartSurvey(s)}
            className="bg-[#F8F4FF] rounded-[25px] p-6 mb-4 border border-[#F3E5F5] flex-row items-center justify-between shadow-sm shadow-purple-50"
          >
            <View className="flex-row items-center">
              <View className="w-12 h-12 bg-white rounded-2xl items-center justify-center mr-4">
                <ClipboardList size={24} color="#6A1B9A" />
              </View>
              <View>
                <Text className="text-lg font-bold text-[#6A1B9A]">{s.title}</Text>
                <Text className="text-[#6A1B9A]/60 font-medium">{s.duration}</Text>
              </View>
            </View>
            <ArrowRight size={20} color="#6A1B9A" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Survey Modal */}
      <Modal visible={!!activeSurvey} animationType="slide">
        <View style={{ paddingTop: insets.top }} className="flex-1 bg-white">
          <View className="p-6 flex-row items-center justify-between border-b border-[#F3E5F5]">
            <View>
              <Text className="text-xs font-bold text-[#6A1B9A]/50 uppercase tracking-widest mb-1">
                Soru {currentStep + 1} / {QUESTIONS.length}
              </Text>
              <Text className="text-xl font-bold text-[#6A1B9A]">{activeSurvey?.title}</Text>
            </View>
            <TouchableOpacity 
              onPress={() => setActiveSurvey(null)}
              className="w-10 h-10 items-center justify-center rounded-full bg-[#F8F4FF]"
            >
              <X size={24} color="#6A1B9A" />
            </TouchableOpacity>
          </View>

          <View className="flex-1 p-6">
            <View className="h-2 bg-[#F3E5F5] rounded-full mb-10 overflow-hidden">
              <View 
                style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                className="h-full bg-[#6A1B9A]"
              />
            </View>

            <Text className="text-2xl font-bold text-[#6A1B9A] mb-8">{QUESTIONS[currentStep].text}</Text>

            {QUESTIONS[currentStep].options.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => handleAnswer(option)}
                className={`p-5 rounded-3xl mb-4 border-2 flex-row items-center justify-between ${
                  answers[QUESTIONS[currentStep].id] === option 
                    ? "bg-[#6A1B9A] border-[#6A1B9A]" 
                    : "bg-[#F8F4FF] border-[#F3E5F5]"
                }`}
              >
                <Text className={`text-lg font-semibold ${
                  answers[QUESTIONS[currentStep].id] === option ? "text-white" : "text-[#6A1B9A]"
                }`}>
                  {option}
                </Text>
                {answers[QUESTIONS[currentStep].id] === option && (
                  <CheckCircle2 size={24} color="white" />
                )}
              </TouchableOpacity>
            ))}
          </View>

          <View className="p-6 border-t border-[#F3E5F5]">
            <TouchableOpacity
              onPress={handleNext}
              disabled={!answers[QUESTIONS[currentStep].id]}
              className={`p-5 rounded-3xl items-center justify-center flex-row shadow-lg ${
                answers[QUESTIONS[currentStep].id] ? "bg-[#6A1B9A] shadow-purple-200" : "bg-[#6A1B9A]/30"
              }`}
            >
              <Text className="text-white font-bold text-lg mr-2">
                {currentStep === QUESTIONS.length - 1 ? "Gönder" : "Sonraki"}
              </Text>
              <ChevronRight size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
