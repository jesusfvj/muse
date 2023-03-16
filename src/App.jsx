import { BrowserRouter } from "react-router-dom"
import { Footer, Navbar } from "./Components"
import Router from "./Router/Router"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
