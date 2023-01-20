export const resultText = (difficulty: string, score: number): string => {
  if (difficulty === "beginner") {
    if (score > 6) {
      return "Well done! At this point you can keep progressing at the beginner difficulty or move up to the intermediate one.";
    }
    return "Good try! Keep progressing on this level of difficulty to improve your skills.";
  }

  if (difficulty === "intermediate") {
    if (score > 6) {
      return "Well done! At this point you can keep progressing at the intermediate difficulty or move up to the advanced one.";
    }
    return "Good try! Keep progressing on this level of difficulty to improve your skills.";
  }

  if (difficulty === "advanced") {
    if (score > 6) {
      return "Woah, that was a good one! It is apparent that you have no problems with the English, well done!";
    }
    return "Good try! Keep progressing on this level of difficulty to improve your skills.";
  }

  if (difficulty === "adjust") {
    if (score <= 4) {
      return "Based on your result, we encourage you to continue working on your progress at the beginner difficulty.";
    }

    if (score <= 8) {
      return "Based on your result, we encourage you to continue working on your progress at the intermediate difficulty.";
    }

    if (score <= 12) {
      return "Based on your result, we encourage you to continue working on your progress at the advanced difficulty.";
    }
    return "";
  }

  return "";
};
