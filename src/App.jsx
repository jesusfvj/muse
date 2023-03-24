import Router from "./Router/Router";
import { BrowserRouter, useLocation } from "react-router-dom";
import { UIProvider } from "./Context/UI/UIContext";
import { UserProvider } from "./Context/UserContext/UserProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MusicPlayer } from "./Components";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <UIProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </UIProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
