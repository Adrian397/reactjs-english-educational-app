export type DifficultyType = keyof typeof questions;

export const questions = {
  beginner: [
    {
      questionText: "What is the capital city of France",
      answerOptions: [
        { id: 1, answerText: "New York", isCorrect: false },
        { id: 2, answerText: "London", isCorrect: false },
        { id: 3, answerText: "Paris", isCorrect: true },
        { id: 4, answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { id: 1, answerText: "Jeff Bezos", isCorrect: false },
        { id: 2, answerText: "Elon Musk", isCorrect: true },
        { id: 3, answerText: "Bill Gates", isCorrect: false },
        { id: 4, answerText: "Tony Stark", isCorrect: false },
      ],
    },
  ],
  intermediate: [
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { id: 1, answerText: "Apple", isCorrect: true },
        { id: 2, answerText: "Intel", isCorrect: false },
        { id: 3, answerText: "Amazon", isCorrect: false },
        { id: 4, answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { id: 1, answerText: "1", isCorrect: false },
        { id: 2, answerText: "4", isCorrect: false },
        { id: 3, answerText: "6", isCorrect: false },
        { id: 4, answerText: "7", isCorrect: true },
      ],
    },
  ],
  advanced: [
    {
      questionText: "Hard difficulty - first question",
      answerOptions: [
        { id: 1, answerText: "test1fq", isCorrect: false },
        { id: 2, answerText: "test2fq", isCorrect: false },
        { id: 3, answerText: "test3fq", isCorrect: true },
        { id: 4, answerText: "test4fq", isCorrect: false },
      ],
    },
    {
      questionText: "Hard difficulty - second question",
      answerOptions: [
        { id: 1, answerText: "test1sq", isCorrect: false },
        { id: 2, answerText: "test2sq", isCorrect: true },
        { id: 3, answerText: "test3sq", isCorrect: false },
        { id: 4, answerText: "test4sq", isCorrect: false },
      ],
    },
  ],
};
