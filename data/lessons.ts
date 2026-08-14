export type Lesson = {
  id: number;
  title: string;
  subtitle: string;
  phrase: string;
  translation: string;
  standard: string;
  everyday: string;
  explanation: string;
  dialogue: {
    tagalog: string;
    english: string;
    speaker: "left" | "right";
  }[];
  note: string;
  quiz: {
    question: string;
    options: string[];
    correctAnswer: string;
  };
};

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Where are you?",
    subtitle: "Your first real-life Tagalog conversation.",
    phrase: "Nasan ka?",
    translation: "Where are you?",
    standard: "Nasaan ka?",
    everyday: "Nasan ka?",
    explanation:
      "Nasaan means where when asking where a person or thing is. In everyday conversation, Filipinos often shorten it to Nasan.",
    dialogue: [
      {
        tagalog: "Nasan ka na?",
        english: "Where are you now?",
        speaker: "left",
      },
      {
        tagalog: "Nasa trabaho pa ako.",
        english: "I'm still at work.",
        speaker: "right",
      },
      {
        tagalog: "Okay, ingat!",
        english: "Okay, take care!",
        speaker: "left",
      },
    ],
    note: "Nasan ka na? is extremely common in chats and everyday conversation.",
    quiz: {
      question: 'How would you say "Where are you?"',
      options: ["Nasaan ikaw?", "Nasan ka?", "Saan ako?"],
      correctAnswer: "Nasan ka?",
    },
  },

  {
    id: 2,
    title: "Have you eaten?",
    subtitle: "One of the most common caring questions in Filipino conversations.",
    phrase: "Kumain ka na?",
    translation: "Have you eaten?",
    standard: "Kumain ka na?",
    everyday: "Kumain ka na?",
    explanation:
      "Kumain means ate or have eaten. Ka means you. Na can express already or now depending on context.",
    dialogue: [
      {
        tagalog: "Kumain ka na?",
        english: "Have you eaten?",
        speaker: "left",
      },
      {
        tagalog: "Hindi pa.",
        english: "Not yet.",
        speaker: "right",
      },
      {
        tagalog: "Kain ka na.",
        english: "Go eat now.",
        speaker: "left",
      },
    ],
    note: "Asking if someone has eaten can also be a warm, caring way to check on them.",
    quiz: {
      question: 'How would you say "Have you eaten?"',
      options: ["Kumain ka na?", "Nasan ka?", "Pagod ka ba?"],
      correctAnswer: "Kumain ka na?",
    },
  },
];
