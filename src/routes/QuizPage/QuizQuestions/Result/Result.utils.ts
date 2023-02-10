export const resultTextEN = (difficulty: string, score: number): string => {
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

export const resultTextPL = (difficulty: string, score: number): string => {
  if (difficulty === "beginner") {
    if (score > 6) {
      return "Dobra robota! W tym momencie możesz kontynuować naukę na  początkującym poziomie trudności lub przejść na średniozaawansowany.";
    }
    return "Dobra próba! Kontynuuj pracę na tym poziomie trudności, aby poprawić swoje umiejętności.";
  }

  if (difficulty === "intermediate") {
    if (score > 6) {
      return "Dobra robota! W tym momencie możesz kontynuować naukę na średnio zaawansowanym poziomie trudności lub przejść na zaawansowany.";
    }
    return "Dobra próba! Kontynuuj pracę na tym poziomie trudności, aby poprawić swoje umiejętności.";
  }

  if (difficulty === "advanced") {
    if (score > 6) {
      return "Woah, to było dobre! Widać, że nie masz problemów z angielskim, gratulacje!";
    }
    return "Dobra próba! Kontynuuj pracę na tym poziomie trudności, aby poprawić swoje umiejętności.";
  }

  if (difficulty === "adjust") {
    if (score <= 4) {
      return "Na podstawie Twojego wyniku zachęcamy do dalszej pracy nad początkującym poziomem trudności.";
    }

    if (score <= 8) {
      return "Na podstawie Twojego wyniku zachęcamy do dalszej pracy nad średnio zaawansowanym poziomem trudności.";
    }

    if (score <= 12) {
      return "Na podstawie Twojego wyniku zachęcamy do dalszej pracy nad zaawansowanym poziomem trudności.";
    }
    return "";
  }

  return "";
};
