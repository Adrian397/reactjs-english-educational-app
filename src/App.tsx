import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactElement } from "react";
import GlobalStyles from "./globalStyles";
import { Router } from "./routes/Router";

const queryClient = new QueryClient();

const App = (): ReactElement => {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
};

export default App;
