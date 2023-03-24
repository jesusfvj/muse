import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";
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
            <div className="fixed w-screen bottom-0 min-h-[10vh] z-40 p-[1vh] bg-black">
              <MusicPlayer />
            </div>
          </UIProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
