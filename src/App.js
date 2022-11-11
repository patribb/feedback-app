import { Routes, Route } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import About from "./pages/About";

const App = () => {

  return (
    <>
      <Header />
      <AboutIconLink />
      <div className="container">
        <Routes>
          <Route path='/'
            element={
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList  />
            </>
          }/>
            <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
