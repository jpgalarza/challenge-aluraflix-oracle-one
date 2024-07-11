import { Footer } from "./components/layout/footer/Footer"
import { Header } from "./components/layout/header/Header"
import { Home } from "./pages/home/Home"
import CategoryContextProvider from "./context/CategoryContext"
import VideoContextProvider from "./context/VideoContext"

const App = () => {

  return (
    <CategoryContextProvider>
      <VideoContextProvider>
        <Header/>
        <Home/>
        <Footer/>
      </VideoContextProvider>
    </CategoryContextProvider>
  )
}

export default App
