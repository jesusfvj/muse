import { BrowserRouter } from "react-router-dom"
import { Footer } from "./Components/Footer"
import { Navbar } from "./Components/Navbar"
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
