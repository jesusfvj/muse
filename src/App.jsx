import { BrowserRouter } from "react-router-dom";
import { UIProvider } from "./Context/UI/UIContext";

import Router from "./Router/Router";

function App() {
  return (
    <UIProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UIProvider>
  );
}

export default App;
