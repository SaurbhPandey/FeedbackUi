import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPageLinkIcon from "./components/AboutPageLinkIcon";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";
import FeedbackProvider from "./context/FeedbackProvider";

const App = () => {
  const [data, setData] = useState(FeedbackData);
  // const[sum , setSum] = useState(26)
  


  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header
        // text="Hello World" bgColor="burlywood" color="gray"
        />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm  />
                  <FeedbackStats  />
                  <FeedbackList />
                  <AboutPageLinkIcon />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
};

export default App;
