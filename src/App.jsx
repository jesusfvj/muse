import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";
import { UIProvider } from "./Context/UI/UIContext";
import { UserProvider } from "./Context/UserContext/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./Components";
import TracksProvider from "./Context/TracksContext/TracksContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <TracksProvider>
            <UIProvider>
              <BrowserRouter>
                <Layout>
                  <Router />
                </Layout>
              </BrowserRouter>
            </UIProvider>
          </TracksProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
