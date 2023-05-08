import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";
import { UIProvider } from "./Context/UI/UIContext";
import { UserProvider } from "./Context/UserContext/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./Components";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <UIProvider>
            <BrowserRouter>
              <Layout>
                <Router />
              </Layout>
            </BrowserRouter>
          </UIProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
