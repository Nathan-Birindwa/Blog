import React from "react";
import SideBar from "./components/SideBar";
import ContentSection from "./components/ContentSection";
const App = () => {
  return (
    <div className="flex w-screen">
      <SideBar />
      <ContentSection />
    </div>
  );
};

export default App;
