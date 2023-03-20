import { BrowserRouter } from "react-router-dom";
import { UIProvider } from "./Context/UI/UIContext";
import UserProvider from "./Context/UserContext/UserProvider";

import Router from "./Router/Router";

function App() {
  return (
    <>
    <UserProvider>
      <UIProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </UIProvider>
      </UserProvider>
    </>
  );
}

export default App;
