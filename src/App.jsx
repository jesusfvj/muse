import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Components";
import { UIProvider } from "./Context/UI/UIContext";

import Router from "./Router/Router";

function App() {
  return (
    <>
      <UIProvider>
        <BrowserRouter>
          <Router />
          <Footer />
        </BrowserRouter>
      </UIProvider>
    </>
  );
}

export default App;
