import { useState } from "react";
import "./App.css";
import Tabs from "./components/Tabs.jsx";
import TabContent from "./components/TabContent.jsx";

const tabs = [
  {
    id: "html-css",
    title: "HTML & CSS",
    content:
      "HTML defines the structure of web pages, while CSS controls their appearance and layout",
  },
  {
    id: "javascript",
    title: "JavaScript",
    content:
      "JavaScript is a programming language used to make web pages interactive and dynamic",
  },
  {
    id: "reactjs",
    title: "React.js",
    content:
      "React is a JavaScript library for building user interfaces using reusable components",
  },
  {
    id: "nextjs",
    title: "Next.js",
    content:
      "Next.js is a React framework for building fast and scalable web applications",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("html-css");

  return (
    <>
      <h1>Tabs Component with React</h1>

      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <TabContent tabs={tabs} activeTab={activeTab} />
    </>
  );
}

export default App;
