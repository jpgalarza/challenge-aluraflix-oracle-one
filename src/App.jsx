import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/layout/footer/Footer";
import { Header } from "./components/layout/header/Header";
import { Home } from "./pages/home/Home";
import { NewVideo } from "./pages/new-video/NewVideo";
import { NotFound } from "./pages/not-found/NotFound";
import { Modal } from "./components/modal/Modal";
import CategoryContextProvider from "./context/CategoryContext";
import VideoContextProvider from "./context/VideoContext";

const App = () => {
  return (
    <CategoryContextProvider>
      <VideoContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nuevo-video" element={<NewVideo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <Modal/>
        </Router>
      </VideoContextProvider>
    </CategoryContextProvider>
  );
};

export default App;
