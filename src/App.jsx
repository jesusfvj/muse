import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../../my-app/src/Context/UserContext/UserContext";
import { Footer } from "./Components";
import { UIProvider } from "./Context/UI/UIContext";

import Router from "./Router/Router";

function App() {
  return (
    <>
      <UIProvider>
        <UserProvider>
        <BrowserRouter>
          <Router />
          <Footer />
        </BrowserRouter>
        </UserProvider>
      </UIProvider>
    </>
  );
}

export default App;
