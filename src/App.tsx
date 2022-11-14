import GlobalStyles from "./globalStyles";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
// import LandingPage from "./routes/LandingPage/LandingPage";

const App = () => {
  return (
    <>
      <GlobalStyles />
      {/* <LandingPage /> */}
      <RegistrationPage />
      <LoginPage />
    </>
  );
};

export default App;
