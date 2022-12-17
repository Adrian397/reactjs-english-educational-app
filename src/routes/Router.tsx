import { paths } from "@utils/paths";
import { lazy, ReactElement, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Protected = lazy(() => import("./Protected/Protected"));
const ChooseActivityPage = lazy(
  () => import("./ChooseActivityPage/ChooseActivityPage")
);
const QuizPage = lazy(() => import("./QuizPage/QuizPage"));
const QuizDifficulties = lazy(
  () => import("./QuizPage/QuizDifficulties/QuizDifficulties")
);
const QuizQuestions = lazy(
  () => import("./QuizPage/QuizQuestions/QuizQuestions")
);
const VocabularyPage = lazy(() => import("./VocabularyPage/VocabularyPage"));
const LandingPage = lazy(() => import("./LandingPage/LandingPage"));
const LoginPage = lazy(() => import("./LoginPage/LoginPage"));
const RegistrationPage = lazy(
  () => import("./RegistrationPage/RegistrationPage")
);

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Suspense fallback={null}>
              <LandingPage />
            </Suspense>
          }
          path={paths.root}
        />

        <Route
          element={
            <Suspense fallback={null}>
              <Protected />
            </Suspense>
          }
          path={paths.app}
        >
          <Route
            element={
              <Suspense fallback={null}>
                <ChooseActivityPage />
              </Suspense>
            }
            index
          />
          <Route
            element={
              <Suspense fallback={null}>
                <QuizPage />
              </Suspense>
            }
            path={paths.quiz}
          >
            <Route
              element={
                <Suspense fallback={null}>
                  <QuizDifficulties />
                </Suspense>
              }
              index
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

        <Route
          element={
            <Suspense fallback={null}>
              <LoginPage />
            </Suspense>
          }
          path={paths.login}
        />

        <Route
          element={
            <Suspense fallback={null}>
              <RegistrationPage />
            </Suspense>
          }
          path={paths.register}
        />
      </Routes>
    </BrowserRouter>
  );
};
