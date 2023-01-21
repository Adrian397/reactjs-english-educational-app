import { paths } from "@utils/paths";
import { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseActivityPage from "./ChooseActivityPage/ChooseActivityPage";
import LandingPage from "./LandingPage/LandingPage";
import LoginPage from "./LoginPage/LoginPage";
import Protected from "./Protected/Protected";
import QuizDifficulties from "./QuizPage/QuizDifficulties/QuizDifficulties";
import QuizPage from "./QuizPage/QuizPage";
import RegistrationPage from "./RegistrationPage/RegistrationPage";
import ResetPasswordPage from "./ResetPasswordPage/ResetPasswordPage";

const QuizQuestions = lazy(
  () => import("./QuizPage/QuizQuestions/QuizQuestions")
);

const QuizLeaderboard = lazy(
  () => import("./QuizPage/QuizLeaderboard/QuizLeaderboard")
);
const VocabularyPage = lazy(() => import("./VocabularyPage/VocabularyPage"));

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path={paths.root} />
        <Route element={<Protected />} path={paths.app}>
          <Route element={<ChooseActivityPage />} index />
          <Route element={<QuizPage />} path={paths.quiz}>
            <Route element={<QuizDifficulties />} index />
            <Route
              element={
                <Suspense fallback={null}>
                  <QuizLeaderboard />
                </Suspense>
              }
              path={paths.quizLeaderboard}
            />
            <Route
              element={
                <Suspense fallback={null}>
                  <QuizQuestions />
                </Suspense>
              }
              path={paths.quizQuestions}
            />
          </Route>
          <Route
            element={
              <Suspense fallback={null}>
                <VocabularyPage />
              </Suspense>
            }
            path={paths.vocabulary}
          />
        </Route>
        <Route element={<LoginPage />} path={paths.login} />
        <Route element={<RegistrationPage />} path={paths.register} />
        <Route element={<ResetPasswordPage />} path={paths.resetPassword} />
      </Routes>
    </BrowserRouter>
  );
};
