import React from "react";
import Resume from "./components/Resume";
import GitHubLink from "./components/GitHubLink";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg mb-6">이력서를 다운로드하거나 GitHub 프로필을 방문하세요.</p>
      <div className="flex gap-4">
        <Resume />
        <GitHubLink />
      </div>
    </div>
  );
};

export default App;
