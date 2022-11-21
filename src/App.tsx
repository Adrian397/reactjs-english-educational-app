import { ReactElement } from "react";
import GlobalStyles from "./globalStyles";
import { Router } from "./routes/Router";

const App = (): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
