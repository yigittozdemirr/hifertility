import React, { createContext, useContext, useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  likes: number;
  isLiked: boolean;
}

interface ForumPost {
  id: string;
  subject: string;
  message: string;
  comments: number;
  time: string;
}

interface Lesson {
  id: string;
  isCompleted: boolean;
}

interface UserData {
  name: string;
  height: string;
  weight: string;
  cycleLength: string;
}

interface AppState {
  likes: Record<string, BlogPost>;
  forumPosts: ForumPost[];
  lessons: Record<string, Lesson>;
  userData: UserData;
  progress: number; // 0 to 100
  affirmation: string;
}

interface AppContextType {
  state: AppState;
  toggleLike: (id: string) => void;
  addForumPost: (subject: string, message: string) => void;
  completeLesson: (id: string) => void;
  updateUserData: (data: Partial<UserData>) => void;
  refreshAffirmation: () => void;
  submitSurvey: () => void;
}

const AFFIRMATIONS = [
  "Her gün daha sağlıklı ve dengeli bir bedene sahip oluyorum.",
  "Bedenim mucizeler yaratma gücüne sahip.",
  "Kendime ve sürece güveniyorum.",
  "Sağlıklı seçimlerim geleceğimi şekillendiriyor.",
  "Huzur içindeyim, bedenimle barışığım.",
  "Her nefeste şifa buluyorum.",
  "İçsel gücüm en büyük rehberim.",
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>({
    likes: {
      '1': { id: '1', likes: 124, isLiked: false },
      '2': { id: '2', likes: 215, isLiked: false },
      '3': { id: '3', likes: 156, isLiked: false },
    },
    forumPosts: [
      { id: 'p1', subject: 'Başarı Hikayeleri: Yolculuğumuz', message: 'Yolculuğun başında umutsuzduk ama şimdi çok mutluyuz.', comments: 24, time: '3 saat önce' },
      { id: 'p2', subject: 'Beslenme İpuçları', message: 'Avokado ve ceviz tüketimini artırmak çok yardımcı oldu.', comments: 56, time: '5 saat önce' },
    ],
    lessons: {},
    userData: {
      name: 'Sarah',
      height: '165',
      weight: '60',
      cycleLength: '28',
    },
    progress: 10,
    affirmation: AFFIRMATIONS[0],
  });

  const calculateProgress = (lessons: Record<string, Lesson>) => {
    const completedCount = Object.values(lessons).filter(l => l.isCompleted).length;
    // Assume 8 total milestones (4 lessons + some other activities)
    return Math.min(((completedCount + 1) / 8) * 100, 100);
  };

  const toggleLike = (id: string) => {
    setState(prev => {
      const current = prev.likes[id] || { id, likes: 0, isLiked: false };
      const isLiked = !current.isLiked;
      return {
        ...prev,
        likes: {
          ...prev.likes,
          [id]: {
            ...current,
            isLiked,
            likes: isLiked ? current.likes + 1 : current.likes - 1,
          }
        }
      };
    });
  };

  const addForumPost = (subject: string, message: string) => {
    const newPost: ForumPost = {
      id: Math.random().toString(),
      subject,
      message,
      comments: 0,
      time: 'Şimdi',
    };
    setState(prev => ({
      ...prev,
      forumPosts: [newPost, ...prev.forumPosts],
    }));
  };

  const completeLesson = (id: string) => {
    setState(prev => {
      if (prev.lessons[id]?.isCompleted) return prev;
      const newLessons = {
        ...prev.lessons,
        [id]: { id, isCompleted: true }
      };
      return {
        ...prev,
        lessons: newLessons,
        progress: calculateProgress(newLessons),
      };
    });
  };

  const updateUserData = (data: Partial<UserData>) => {
    setState(prev => ({
      ...prev,
      userData: { ...prev.userData, ...data }
    }));
  };

  const refreshAffirmation = () => {
    setState(prev => ({
      ...prev,
      affirmation: AFFIRMATIONS[Math.floor(Math.random() * AFFIRMATIONS.length)]
    }));
  };

  const submitSurvey = () => {
    setState(prev => ({
      ...prev,
      progress: Math.min(prev.progress + 15, 100)
    }));
  };

  return (
    <AppContext.Provider value={{ state, toggleLike, addForumPost, completeLesson, updateUserData, refreshAffirmation, submitSurvey }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
